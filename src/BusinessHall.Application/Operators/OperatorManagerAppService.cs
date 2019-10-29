using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using BusinessHall.Authorization;
using BusinessHall.Operators.Dto;
using BusinessHall.BusinessHallModels;
using Abp.Domain.Repositories;
using Abp.AutoMapper;
using System.Linq;


namespace BusinessHall.OperatorManagers
{
    [AbpAuthorize(PermissionNames.Pages_ProductManager)]
    public class OperatorManagerAppService : BusinessHallAppServiceBase, IOperatorManagerAppService
    {
        private readonly IRepository<Operator> _operatorRepository;

        public OperatorManagerAppService(IRepository<Operator> operatorRepository)
        {
            _operatorRepository = operatorRepository;
        }

        public async Task<ListResultDto<OperatorDto>> GetAll()
        {
            var result = await _operatorRepository.GetAllListAsync();
            return new ListResultDto<OperatorDto>(ObjectMapper.Map<List<OperatorDto>>(result));
        }

        public async Task<OperatorDto> GetById(int id)
        {
            Operator result = await _operatorRepository.GetAsync(id);
            OperatorDto dto = ObjectMapper.Map<OperatorDto>(result);
            return dto;
        }

        public Task<OperatorDto> Create(OperatorDto operatorDto)
        {
            operatorDto.CreatorUserId = AbpSession.UserId.Value;
            operatorDto.CretionTime = DateTime.Now;
            Operator operatorModel = ObjectMapper.Map<Operator>(operatorDto);
            operatorDto.Id = _operatorRepository.InsertAndGetId(operatorModel);
            return Task.FromResult<OperatorDto>(operatorDto);
        }

        public Task<OperatorDto> Update(OperatorDto operatorDto)
        {
            Operator operatorModel = ObjectMapper.Map<Operator>(operatorDto);
            operatorModel = _operatorRepository.Update(operatorModel);
            return Task.FromResult<OperatorDto>(operatorDto);
        }

        public async Task Delete(int id)
        {
            await _operatorRepository.DeleteAsync(id);
        }

        public async Task DeleteForMultiple(List<int> idList)
        {
            await _operatorRepository.DeleteAsync(x => idList.Contains(x.Id));
        }
    }
}
