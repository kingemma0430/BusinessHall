using Abp.Application.Services.Dto;
using BusinessHall.Authorization.Users;
using BusinessHall.BusinessHallModels;
using BusinessHall.ProductFaceValues.Dto;
using BusinessHall.ProductOperators.Dto;
using BusinessHall.SupplierManagers.Dto;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
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

        /// <summary>
        ///  现值
        /// </summary>
        public decimal PresentValue { get; set; }

        public long CreatorUserId { get; set; }

        public DateTime CretionTime { get; set; }

        public string CreateUserName { get; set; }

        public ProductStatusEnum Status { get; set; }

        public string SupplierName { get; set; }

        public IEnumerable<ProductFaceValueDto> ProductFaceValues { get; set; }

        public string FaceValue
        {
            get
            {
                string faceValue = "";
                if (ProductFaceValues != null && ProductFaceValues.Count() > 0)
                {
                    faceValue = string.Join(',', ProductFaceValues.Select(x => x.Name));
                }
                return faceValue;
            }
        }

        public IEnumerable<ProductOperatorDto> ProductOperators { get; set; }
    }
}
