using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using BusinessHall.BusinessHallModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace BusinessHall.Menus.Dto
{
    [AutoMapFrom(typeof(AbpUserRoleMenu))]
    public class AbpUserRoleMenuDto : EntityDto
    {
        public int? TenantId { get; set; }

        public int RoleId { get; set; }

        public int MenuId { get; set; }
    }
}
