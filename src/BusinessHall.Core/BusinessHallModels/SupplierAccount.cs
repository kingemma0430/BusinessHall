using Abp.Domain.Entities;
using BusinessHall.Authorization.Users;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BusinessHall.BusinessHallModels
{
    [Table("SupplierAccounts")]
    public class SupplierAccount : Entity, IMayHaveTenant
    {
        public int? TenantId { get; set; }

        public int SupplierId { get; set; }

        public decimal TotalAmount { get; set; }

        public decimal AvaliableAmount { get; set; }

        public long CreatorUserId { get; set; }

        public DateTime CreationTime { get; set; }

        [ForeignKey("CreatorUserId")]
        public virtual User User { get; set; }

        public virtual Supplier Supplier { get; set; }
    }
}
