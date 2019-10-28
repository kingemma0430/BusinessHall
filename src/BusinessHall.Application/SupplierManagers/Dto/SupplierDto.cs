using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using BusinessHall.BusinessHallModels;
using System.ComponentModel.DataAnnotations;
using Abp.AutoMapper;

namespace BusinessHall.SupplierManagers.Dto
{
    [AutoMapFrom(typeof(Supplier))]
    public class SupplierDto : EntityDto
    {
        public int? TenantId { get; set; }

        [Required]
        [StringLength(BusinessHallConsts.MaxLength500)]
        public string Name { get; set; }

        /// <summary>
        /// 自动退款 (当手动回调且订单状态从[成功]修改为[失败]时)
        /// </summary>
        public bool IsAutoReturnMoney { get; set; }

        public SupplierStatusEnum Status { get; set; }

        public long CreatorUserId { get; set; }

        public DateTime CretionTime { get; set; }
    }
}
