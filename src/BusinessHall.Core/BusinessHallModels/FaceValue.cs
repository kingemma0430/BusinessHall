using Abp.Domain.Entities;
using BusinessHall.Authorization.Users;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BusinessHall.BusinessHallModels
{
    /// <summary>
    ///  10,20,50,100,200,500,1000
    /// </summary>
    [Table("FaceValues")]
    public class FaceValue : Abp.Domain.Entities.Entity, IMayHaveTenant
    {
        public int? TenantId { get; set; }

        [StringLength(BusinessHallConsts.MaxLength45)]
        public string Name { get; set; }

        public decimal ActualValue { get; set; }

        [StringLength(BusinessHallConsts.MaxLength500)]
        public string Description { get; set; }

        public long CreatorUserId { get; set; }

        public DateTime CreationTime { get; set; }

        [ForeignKey("CreatorUserId")]
        public virtual User User { get; set; }
    }
}
