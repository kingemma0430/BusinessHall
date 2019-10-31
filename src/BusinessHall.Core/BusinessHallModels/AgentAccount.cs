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

        public decimal TotalAmount { get; set; }

        public decimal AvaliableAmount { get; set; }

        [ForeignKey("CreatorUserId")]
        public virtual User User { get; set; }

        public virtual Agent Agent { get; set; }
    }
}
