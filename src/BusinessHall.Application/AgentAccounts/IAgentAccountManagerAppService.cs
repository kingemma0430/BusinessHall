using Abp.Application.Services;
using Abp.Application.Services.Dto;
using BusinessHall.AgentAccounts.Dto;
using BusinessHall.Entities.GlobalParameters;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessHall.AgentAccountManagers
{
    public interface IAgentAccountManagerAppService : IApplicationService
    {
        Task<ListResultDto<AgentAccountDto>> GetAll();

        Task<AgentAccountDto> Create(AgentAccountDto agentAccountDto);

        Task<AgentAccountDto> GetById(int id);

        Task<AgentAccountDto> Update(AgentAccountDto agentAccountDto);

        Task Delete(int id);

        Task DeleteForMultiple(string ids);
    }
}

