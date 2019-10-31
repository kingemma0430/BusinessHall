using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessHall.ProductOperators.Dto
{
    public class ProductOperatorDto : EntityDto
    {
        public int? TenantId { get; set; }

        public int ProductId { get; set; }

        public int OperatorId { get; set; }

        public long CreatorUserId { get; set; }

        public DateTime CreationTime { get; set; }

        public string CreateUserName { get; set; }

        public string ProductName { get; set; }

        public string Operatorname { get; set; }
    }
}
