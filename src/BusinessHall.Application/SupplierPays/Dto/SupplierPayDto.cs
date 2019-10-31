using Abp.Application.Services.Dto;
using BusinessHall.BusinessHallModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessHall.SupplierPays.Dto
{
    public class SupplierPayDto : EntityDto
    {
        public int? TenantId { get; set; }

        public int SupplierId { get; set; }

        public decimal TotalValue { get; set; }

        public long CreatorUserId { get; set; }

        public DateTime CreationTime { get; set; }

        public string CreateUserName { get; set; }

        public string SupplierName { get; set; }
    }
}
