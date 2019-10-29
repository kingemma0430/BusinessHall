using Abp.Application.Services.Dto;
using BusinessHall.Authorization.Users;
using BusinessHall.BusinessHallModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace BusinessHall.ProductFaceValues.Dto
{
    public class ProductFaceValueDto : EntityDto
    {
        public int? TenantId { get; set; }

        public int ProductId { get; set; }

        [StringLength(BusinessHallConsts.MaxLength25)]
        public string Name { get; set; }

        public decimal FaceValue { get; set; }

        public long CreatorUserId { get; set; }

        public DateTime CretionTime { get; set; }

        public string CreateUserName { get; set; }

        public string ProductName { get; set; }
    }
}
