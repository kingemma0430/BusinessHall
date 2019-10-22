using System;
using Abp.Application.Services.Dto;
using Abp.Authorization.Users;
using Abp.AutoMapper;
using Abp.Domain.Entities.Auditing;


namespace BusinessHall.Roles.Dto
{
    [AutoMapFrom(typeof(UserRole))]
    public class AbpUserRoleDto : EntityDto
    {
        public int? TenantId { get; set; }
        //
        // Summary:
        //     User id.
        public long UserId { get; set; }
        //
        // Summary:
        //     Role id.
        public int RoleId { get; set; }
    }
}
