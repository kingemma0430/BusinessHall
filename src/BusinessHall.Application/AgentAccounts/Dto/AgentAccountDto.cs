using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;

namespace BusinessHall.AgentAccounts.Dto
{
    public class AgentAccountDto : EntityDto
    {
        public int? TenantId { get; set; }

        public int AgentId { get; set; }

        public long CreatorUserId { get; set; }

        public DateTime CreationTime { get; set; }

        public decimal TotalAmount { get; set; }

        public decimal AvaliableAmount { get; set; }

        public string CreateUserName { get; set; }

        public string AgentName { get; set; }

    }
}
