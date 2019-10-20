using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BusinessHall.BusinessHallModels
{
    [Table("AbpMenus")]
    public class AbpMenu : Entity, IMustHaveTenant
    {
        public int TenantId { get; set; }

        public int? ParentMenuId { get; set; }

        [StringLength(BusinessHallConsts.MaxLength255)]
        public string Name { get; set; }

        [StringLength(BusinessHallConsts.MaxLength255)]
        public string DisplayName { get; set; }

        [StringLength(BusinessHallConsts.MaxLength255)]
        public string MenuUrlRoute { get; set; }

        [StringLength(BusinessHallConsts.MaxLength25)]
        public string Icon { get; set; }

        [StringLength(BusinessHallConsts.MaxLength500)]
        public string Description { get; set; }

        public bool IsActive { get; set; }

    }
}
