using Abp.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BusinessHall.BusinessHallModels
{
    [Table("SupplierPays")]
    public class SupplierPay:Entity, IMayHaveTenant
    {
        public int? TenantId { get; set; }

        public int SupplierId { get; set; }

        public decimal TotalValue { get; set; }

        public long UserId { get; set; }

        public DateTime CreationTime { get; set; }

        public virtual Supplier Supplier { get; set; }
    }
}
