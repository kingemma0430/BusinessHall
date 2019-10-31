using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using BusinessHall.Authorization;
using BusinessHall.SupplierAccounts.Dto;
using BusinessHall.BusinessHallModels;
using Abp.Domain.Repositories;
using Abp.AutoMapper;
using System.Linq;


namespace BusinessHall.SupplierAccountManagers
{
    [AbpAuthorize(PermissionNames.Pages_SupplierManager)]
    public class SupplierAccountManagerAppService : BusinessHallAppServiceBase, ISupplierAccountManagerAppService
    {
        private readonly IRepository<SupplierAccount> _supplierAccountRepository;

        public SupplierAccountManagerAppService(IRepository<SupplierAccount> supplierAccountRepository)
        {
            _supplierAccountRepository = supplierAccountRepository;
        }

        public async Task<ListResultDto<SupplierAccountDto>> GetAll()
        {
            var result = await _supplierAccountRepository.GetAllListAsync();
            return new ListResultDto<SupplierAccountDto>(ObjectMapper.Map<List<SupplierAccountDto>>(result));
        }

        public async Task<SupplierAccountDto> GetById(int id)
        {
            SupplierAccount result = await _supplierAccountRepository.GetAsync(id);
            SupplierAccountDto dto = ObjectMapper.Map<SupplierAccountDto>(result);
            return dto;
        }

        public Task<SupplierAccountDto> Create(SupplierAccountDto supplierAccountDto)
        {
            supplierAccountDto.CreatorUserId = AbpSession.UserId.Value;
            supplierAccountDto.CreationTime = DateTime.Now;
            SupplierAccount supplierAccount = ObjectMapper.Map<SupplierAccount>(supplierAccountDto);
            supplierAccountDto.Id = _supplierAccountRepository.InsertAndGetId(supplierAccount);
            return Task.FromResult<SupplierAccountDto>(supplierAccountDto);
        }

        public Task<SupplierAccountDto> Update(SupplierAccountDto supplierAccountDto)
        {
            SupplierAccount supplierAccount = ObjectMapper.Map<SupplierAccount>(supplierAccountDto);
            supplierAccount = _supplierAccountRepository.Update(supplierAccount);
            return Task.FromResult<SupplierAccountDto>(supplierAccountDto);
        }

        public async Task Delete(int id)
        {
            await _supplierAccountRepository.DeleteAsync(id);
        }

        public async Task DeleteForMultiple(List<int> idList)
        {
            await _supplierAccountRepository.DeleteAsync(x => idList.Contains(x.Id));
        }
    }
}
