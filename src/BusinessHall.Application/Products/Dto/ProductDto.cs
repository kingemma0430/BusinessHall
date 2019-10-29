using Abp.Application.Services.Dto;
using BusinessHall.Authorization.Users;
using BusinessHall.BusinessHallModels;
using BusinessHall.ProductFaceValues.Dto;
using BusinessHall.ProductOperators.Dto;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace BusinessHall.Products.Dto
{
    public class ProductDto : EntityDto
    {
        public int? TenantId { get; set; }

        [StringLength(BusinessHallConsts.MaxLength255)]
        public string Name { get; set; }

        public int SupplierId { get; set; }

        /// <summary>
        /// split by ,
        /// </summary>
        public string Province { get; set; }

        /// <summary>
        /// 折扣
        /// </summary>
        public decimal Discount { get; set; }

        public long CreatorUserId { get; set; }

        public DateTime CretionTime { get; set; }

        public string CreateUserName { get; set; }

        public ProductStatusEnum Status { get; set; }

        public string SupplierName { get; set; }

        public IEnumerable<ProductFaceValueDto> ProductFaceValues { get; set; }

        public IEnumerable<ProductOperatorDto> ProductOperators { get; set; }
    }
}
