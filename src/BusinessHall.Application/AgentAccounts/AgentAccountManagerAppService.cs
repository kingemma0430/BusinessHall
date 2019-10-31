using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using BusinessHall.Authorization;
using BusinessHall.AgentAccounts.Dto;
using BusinessHall.BusinessHallModels;
using Abp.Domain.Repositories;
using Abp.AutoMapper;
using System.Linq;


namespace BusinessHall.AgentAccountManagers
{
    [AbpAuthorize(PermissionNames.Pages_AgentManager)]
    public class AgentAccountManagerAppService : BusinessHallAppServiceBase, IAgentAccountManagerAppService
    {
        private readonly IRepository<AgentAccount> _agentAccountRepository;

        public AgentAccountManagerAppService(IRepository<AgentAccount> agentAccountRepository)
        {
            _agentAccountRepository = agentAccountRepository;
        }

        public async Task<ListResultDto<AgentAccountDto>> GetAll()
        {
            var result = await _agentAccountRepository.GetAllListAsync();
            return new ListResultDto<AgentAccountDto>(ObjectMapper.Map<List<AgentAccountDto>>(result));
        }

        public async Task<AgentAccountDto> GetById(int id)
        {
            AgentAccount result = await _agentAccountRepository.GetAsync(id);
            AgentAccountDto dto = ObjectMapper.Map<AgentAccountDto>(result);
            return dto;
        }

        public Task<AgentAccountDto> Create(AgentAccountDto agentAccountDto)
        {
            agentAccountDto.CreatorUserId = AbpSession.UserId.Value;
            agentAccountDto.CreationTime = DateTime.Now;
            AgentAccount agentAccount = ObjectMapper.Map<AgentAccount>(agentAccountDto);
            agentAccountDto.Id = _agentAccountRepository.InsertAndGetId(agentAccount);
            return Task.FromResult<AgentAccountDto>(agentAccountDto);
        }

        public Task<AgentAccountDto> Update(AgentAccountDto agentAccountDto)
        {
            AgentAccount agentAccount = ObjectMapper.Map<AgentAccount>(agentAccountDto);
            agentAccount = _agentAccountRepository.Update(agentAccount);
            return Task.FromResult<AgentAccountDto>(agentAccountDto);
        }

        public async Task Delete(int id)
        {
            await _agentAccountRepository.DeleteAsync(id);
        }

        public async Task DeleteForMultiple(List<int> idList)
        {
            await _agentAccountRepository.DeleteAsync(x => idList.Contains(x.Id));
        }
    }
}
