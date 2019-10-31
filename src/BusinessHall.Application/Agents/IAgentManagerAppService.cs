using Abp.Application.Services;
using Abp.Application.Services.Dto;
using BusinessHall.Agents.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessHall.AgentManagers
{
    public interface IAgentManagerAppService : IApplicationService
    {
        Task<ListResultDto<AgentDto>> GetAll();

        Task<AgentDto> Create(AgentDto agentDto);

        Task<AgentDto> GetById(int id);

        Task<AgentDto> Update(AgentDto agentDto);

        Task Delete(int id);

        Task DeleteForMultiple(List<int> idList);
    }
}

