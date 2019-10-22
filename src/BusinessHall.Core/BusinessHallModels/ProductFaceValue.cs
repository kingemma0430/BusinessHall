using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BusinessHall.BusinessHallModels
{
    /// <summary>
    /// 产品面值
    /// </summary>
    [Table("ProductFaceValues")]
    public class ProductFaceValue : Entity, IMayHaveTenant
    {
        public int? TenantId { get; set; }

        public int ProductId { get; set; }

        [StringLength(BusinessHallConsts.MaxLength25)]
        public string Name { get; set; }

        public decimal FaceValue { get; set; }

        public virtual Product Product { get; set; }
    }
}
