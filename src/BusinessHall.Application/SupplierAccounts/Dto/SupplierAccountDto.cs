using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessHall.SupplierAccounts.Dto
{
    public class SupplierAccountDto:EntityDto
    {
        public int? TenantId { get; set; }

        public int SupplierId { get; set; }

        public decimal TotalAmount { get; set; }

        public decimal AvaliableAmount { get; set; }

        public long CreatorUserId { get; set; }

        public DateTime CreationTime { get; set; }

        public string SupplierName { get; set; }
    }
}
