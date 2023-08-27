﻿using Ecooling.Domain.Entites;
using Ecooling.Domain.Enums;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Echooling.Persistance.Contexts;

public class AppDbContextInitializer
{

    private readonly AppDbContext _context;
    private readonly UserManager<AppUser> _userManager;
    private readonly RoleManager<IdentityRole> _roleManager;
    private readonly IConfiguration _configuration;
    public AppDbContextInitializer(AppDbContext context,
                                   UserManager<AppUser> userManager,
                                   RoleManager<IdentityRole> roleManager,
                                   IConfiguration configuration)
    {
        _context = context;
        _userManager = userManager;
        _roleManager = roleManager;
        _configuration = configuration;
    }
    public async Task AppInitializer()
    {
        await _context.Database.MigrateAsync();
    }
    public async Task RoleSeedAsync()
    {
        foreach (var role in Enum.GetValues(typeof(Roles)))
        {
            if (!await _roleManager.RoleExistsAsync(Roles.SuperAdmin.ToString()))
            {
                await _roleManager.CreateAsync(new IdentityRole  { Name = Roles.SuperAdmin.ToString() });
            }
        }
    }
    public async Task CreateUserSeed()
    {
        AppUser user = new()
        {
            UserName = _configuration["SuperAdminSetting:superadmin"],
            Email = _configuration["SuperAdminSetting:email"],
        };
        await _userManager.CreateAsync(user, _configuration["SuperAdminSetting:password"]);
        await _userManager.AddToRoleAsync(user, Roles.SuperAdmin.ToString());
    }
}
