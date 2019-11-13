using Abp.Application.Services.Dto;
using BusinessHall.BusinessHallModels;
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

        /// <summary>
        /// 可用金额
        /// </summary>
        public decimal? AvaliableAmount { get; set; }

        /// <summary>
        /// 已用金额
        /// </summary>
        public decimal? UsedAmount { get; set; }

        /// <summary>
        /// 充值金额
        /// </summary>
        public decimal? ChargedAmount { get; set; }

        /// <summary>
        /// 提现金额
        /// </summary>
        public decimal? WithDrawAmount { get; set; }

        /// <summary>
        /// 信贷(已用/总量)
        /// </summary>
        public decimal? CreditPercentAmount { get; set; }

        public string CreateUserName { get; set; }

        public string AgentName { get; set; }

        public string AgentCode { get; set; }

        public string AgentNickName { get; set; }

        public AgentStatusEnum AgentStatus { get; set; }

    }
}
