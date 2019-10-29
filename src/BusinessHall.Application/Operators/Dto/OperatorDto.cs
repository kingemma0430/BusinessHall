using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace BusinessHall.Operators.Dto
{
    public class OperatorDto : EntityDto
    {
        public int? TenantId { get; set; }

        [StringLength(BusinessHallConsts.MaxLength45)]
        public string Name { get; set; }

        [StringLength(BusinessHallConsts.MaxLength500)]
        public string Description { get; set; }

        public long CreatorUserId { get; set; }

        public DateTime CretionTime { get; set; }

        public string CreateUserName { get; set; }

    }
}
