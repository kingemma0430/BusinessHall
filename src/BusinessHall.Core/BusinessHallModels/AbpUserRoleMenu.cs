using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace BusinessHall.BusinessHallModels
{
    [Table("AbpUserRoleMenus")]
    public class AbpUserRoleMenu:Entity, IMayHaveTenant
    {
        public int? TenantId { get; set; }

        public int RoleId { get; set; }

        public int MenuId { get; set; }

        public virtual AbpMenu AbpMenu { get; set; }

        public virtual Authorization.Roles.Role Role { get; set; }

    }
}
