using Abp.Application.Services.Dto;
using BusinessHall.BusinessHallModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace BusinessHall.Agents.Dto
{
    public class AgentDto : EntityDto
    {
        public int? TenantId { get; set; }

        [StringLength(BusinessHallConsts.MaxLength45)]
        public string Name { get; set; }

        [StringLength(BusinessHallConsts.MaxLength45)]
        public string Code { get; set; }

        [StringLength(BusinessHallConsts.MaxLength500)]
        public string NickName { get; set; }

        [StringLength(BusinessHallConsts.MaxLength500)]
        public string Description { get; set; }

        public long CreatorUserId { get; set; }

        public AgentStatusEnum Status { get; set; }

        public DateTime CreationTime { get; set; }

        public string CreateUserName { get; set; }

    }
}
