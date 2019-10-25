using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using BusinessHall.Authorization;
using BusinessHall.SupplierManagers.Dto;
using BusinessHall.BusinessHallModels;
using Abp.Domain.Repositories;
using Abp.AutoMapper;
using System.Linq;

namespace BusinessHall.SupplierManagers
{
    [AbpAuthorize(PermissionNames.Pages_SupplierManager)]
    public class SuppliermanagerAppService : BusinessHallAppServiceBase, ISupplierManagerAppService
    {
        private readonly IRepository<Supplier> _supplierRepository;

        public SuppliermanagerAppService(IRepository<Supplier> supplierRepository)
        {
            _supplierRepository = supplierRepository;
        }

        public async Task<ListResultDto<SupplierDto>> GetAll()
        {
            var result = await _supplierRepository.GetAllListAsync();
            return new ListResultDto<SupplierDto>(ObjectMapper.Map<List<SupplierDto>>(result));
        }

        public async Task<SupplierDto> GetById(int id)
        {
            Supplier result = await _supplierRepository.GetAsync(id);
            SupplierDto dto = ObjectMapper.Map<SupplierDto>(result);
            return dto;
        }

        public Task<SupplierDto> Create(SupplierDto supplierDto)
        {
            supplierDto.CreatorUserId = AbpSession.UserId.Value;
            supplierDto.CretionTime = DateTime.Now;
            Supplier supplier = ObjectMapper.Map<Supplier>(supplierDto);
            supplierDto.Id = _supplierRepository.InsertAndGetId(supplier);
            return Task.FromResult<SupplierDto>(supplierDto);
        }

        public Task<SupplierDto> Update(SupplierDto supplierDto)
        {
            Supplier supplier = ObjectMapper.Map<Supplier>(supplierDto);
            supplier = _supplierRepository.Update(supplier);
            return Task.FromResult<SupplierDto>(supplierDto);
        }

        public async Task Delete(int id)
        {
            await _supplierRepository.DeleteAsync(id);
        }

        public async Task DeleteForMultiple(List<int> idList)
        {
            await _supplierRepository.DeleteAsync(x => idList.Contains(x.Id));
        }
    }
}
