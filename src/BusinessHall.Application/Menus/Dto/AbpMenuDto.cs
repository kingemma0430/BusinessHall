using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using BusinessHall.BusinessHallModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace BusinessHall.Menus.Dto
{
    [AutoMapFrom(typeof(AbpMenu))]
    public class AbpMenuDto : EntityDto
    {
        public int? TenantId { get; set; }

        public int? ParentMenuId { get; set; }

        [Required]
        [StringLength(BusinessHallConsts.MaxLength255)]
        public string Name { get; set; }

        [Required]
        [StringLength(BusinessHallConsts.MaxLength255)]
        public string DisplayName { get; set; }

        [StringLength(BusinessHallConsts.MaxLength255)]
        public string MenuUrlRoute { get; set; }

        [StringLength(BusinessHallConsts.MaxLength25)]
        public string Icon { get; set; }

        [StringLength(BusinessHallConsts.MaxLength500)]
        public string Description { get; set; }

        [Required]
        public bool IsActive { get; set; }

        [Required]
        public int MenuOrder { get; set; }
    }
}
