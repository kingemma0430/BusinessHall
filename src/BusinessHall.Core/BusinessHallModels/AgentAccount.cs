using Abp.Domain.Entities;
using BusinessHall.Authorization.Users;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace BusinessHall.BusinessHallModels
{
    [Table("AgentAccounts")]
    public class AgentAccount : Entity, IMayHaveTenant
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


        [ForeignKey("CreatorUserId")]
        public virtual User User { get; set; }

        public virtual Agent Agent { get; set; }
    }
}
