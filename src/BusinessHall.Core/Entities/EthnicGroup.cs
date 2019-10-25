using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BusinessHall.Entities
{
    [Table("EthnicGroups")]
    public class EthnicGroup : Entity, IMayHaveTenant
    {
        public int? TenantId { get; set; }

        [Required]
        [StringLength(BusinessHallConsts.MaxLength255)]
        public string Name { get; set; }
    }
}
