﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Echooling.Aplication.DTOs.SliderDTOs;
using Echooling.Aplication.DTOs.StaffDTOs;

namespace Echooling.Aplication.Abstraction.Services
{
    public interface IStaffService
    {
        Task CreateAsync(CreateStaffDto CreateStaffDto,Guid id);
        Task<GetStaffDto> getById(Guid id);
        Task<List<GetStaffDto>> GetAllAsync();
        Task<List<GetUserListDto>> GetAllStaffUsers();
        Task UpdateAsync(CreateStaffDto StaffUpdateDto, Guid id);
        Task Remove(Guid id);
    }
}
