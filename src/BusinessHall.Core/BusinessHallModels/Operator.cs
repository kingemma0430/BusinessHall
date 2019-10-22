using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BusinessHall.BusinessHallModels
{
    /// <summary>
    /// 运营商
    /// </summary>
    [Table("Operators")]
    public class Operator : Entity, IMayHaveTenant
    {
        public int? TenantId { get; set; }

        [StringLength(BusinessHallConsts.MaxLength45)]
        public string Name { get; set; }

        [StringLength(BusinessHallConsts.MaxLength500)]
        public string Description { get; set; }
    }
}
