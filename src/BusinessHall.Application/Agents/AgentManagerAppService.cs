using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using BusinessHall.Authorization;
using BusinessHall.BusinessHallModels;
using Abp.Domain.Repositories;
using Abp.AutoMapper;
using System.Linq;
using BusinessHall.Agents.Dto;

namespace BusinessHall.AgentManagers
{
    [AbpAuthorize(PermissionNames.Pages_AgentManager)]
    public class AgentManagerAppService : BusinessHallAppServiceBase, IAgentManagerAppService
    {
        private readonly IRepository<Agent> _agentRepository;

        public AgentManagerAppService(IRepository<Agent> agentRepository)
        {
            _agentRepository = agentRepository;
        }

        public async Task<ListResultDto<AgentDto>> GetAll()
        {
            var result = await _agentRepository.GetAllListAsync();
            return new ListResultDto<AgentDto>(ObjectMapper.Map<List<AgentDto>>(result));
        }

        public async Task<AgentDto> GetById(int id)
        {
            Agent result = await _agentRepository.GetAsync(id);
            AgentDto dto = ObjectMapper.Map<AgentDto>(result);
            return dto;
        }

        public Task<AgentDto> Create(AgentDto agentDto)
        {
            agentDto.CreatorUserId = AbpSession.UserId.Value;
            agentDto.CreationTime = DateTime.Now;
            Agent agent = ObjectMapper.Map<Agent>(agentDto);
            agentDto.Id = _agentRepository.InsertAndGetId(agent);
            return Task.FromResult<AgentDto>(agentDto);
        }

        public Task<AgentDto> Update(AgentDto agentDto)
        {
            Agent agent = ObjectMapper.Map<Agent>(agentDto);
            agent = _agentRepository.Update(agent);
            return Task.FromResult<AgentDto>(agentDto);
        }

        public async Task Delete(int id)
        {
            await _agentRepository.DeleteAsync(id);
        }

        public async Task DeleteForMultiple(List<int> idList)
        {
            await _agentRepository.DeleteAsync(x => idList.Contains(x.Id));
        }
    }
}
