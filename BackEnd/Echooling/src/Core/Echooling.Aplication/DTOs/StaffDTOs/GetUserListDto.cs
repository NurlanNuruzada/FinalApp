﻿namespace Echooling.Aplication.DTOs.StaffDTOs;
public record GetUserListDto(Guid AppUserID,
                             Guid GuId,
                             string? profession,
                              string? instagram,
                              string? linkedin,
                              string? twitter,
                              string? Facebook,
                                string? faculty,
                              string? hobbies,
                             string? Role,
                             string? PhoneNumber,
                                string? UserName,
                             string? Fullname);
