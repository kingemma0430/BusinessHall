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
    /// 供应商
    /// </summary>
    [Table("Suppliers")]
    public class Supplier : Entity, IMayHaveTenant
    {
        public int? TenantId { get; set; }

        [StringLength(BusinessHallConsts.MaxLength500)]
        public string Name { get; set; }

        /// <summary>
        /// 自动退款 (当手动回调且订单状态从[成功]修改为[失败]时)
        /// </summary>
        public bool IsAutoReturnMoney { get; set; }

        public SupplierStatusEnum Status { get; set; }

        public long CreatorUserId { get; set; }

        public DateTime CreationTime { get; set; }

        [ForeignKey("CreatorUserId")]
        public virtual User User { get; set; }
    }

    public enum SupplierStatusEnum
    {
        Open = 1,
        Close = 2
    }
}
