using Abp.Domain.Entities;
using BusinessHall.Authorization.Users;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
namespace BusinessHall.BusinessHallModels
{
    [Table("Products")]
    public class Product : Entity, IMayHaveTenant
    {
        public int? TenantId { get; set; }

        [StringLength(BusinessHallConsts.MaxLength255)]
        public string Name { get; set; }

        public int SupplierId { get; set; }

        /// <summary>
        /// split by ,
        /// </summary>
        public string Province { get; set; }

        ///// <summary>
        ///// 运营商
        ///// </summary>
        //public int OperatorId { get; set; }

        /// <summary>
        /// 折扣
        /// </summary>
        public decimal Discount { get; set; }

        public long CreatorUserId { get; set; }

        public DateTime CreationTime { get; set; }

        public ProductStatusEnum Status { get; set; }

        [ForeignKey("CreatorUserId")]
        public virtual User User { get; set; }

        public virtual Supplier Supplier { get; set; }

        public virtual IEnumerable<ProductFaceValue> ProductFaceValues { get; set; }

        public virtual IEnumerable<ProductOperator> ProductOperators { get; set; }

    }

    public enum ProductStatusEnum
    {
        /// <summary>
        /// 上架
        /// </summary>
        Active = 1,

        /// <summary>
        /// 下架
        /// </summary>
        Inactive = 2
    }
}
