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
using BusinessHall.SupplierPays.Dto;

namespace BusinessHall.SupplierPayManagers
{
    [AbpAuthorize(PermissionNames.Pages_SupplierPay)]
    public class SupplierPayManagerAppService : BusinessHallAppServiceBase, ISupplierPayManagerAppService
    {
        private readonly IRepository<SupplierPay> _supplierPayRepository;

        public SupplierPayManagerAppService(IRepository<SupplierPay> supplierPayRepository)
        {
            _supplierPayRepository = supplierPayRepository;
        }

        public async Task<ListResultDto<SupplierPayDto>> GetAll()
        {
            var result = await _supplierPayRepository.GetAllListAsync();
            return new ListResultDto<SupplierPayDto>(ObjectMapper.Map<List<SupplierPayDto>>(result));
        }

        public async Task<SupplierPayDto> GetById(int id)
        {
            SupplierPay result = await _supplierPayRepository.GetAsync(id);
            SupplierPayDto dto = ObjectMapper.Map<SupplierPayDto>(result);
            return dto;
        }

        public Task<SupplierPayDto> Create(SupplierPayDto supplierPayDto)
        {
            supplierPayDto.CreatorUserId = AbpSession.UserId.Value;
            supplierPayDto.CreationTime = DateTime.Now;
            SupplierPay supplierPay = ObjectMapper.Map<SupplierPay>(supplierPayDto);
            supplierPayDto.Id = _supplierPayRepository.InsertAndGetId(supplierPay);
            return Task.FromResult<SupplierPayDto>(supplierPayDto);
        }

        public Task<SupplierPayDto> Update(SupplierPayDto supplierPayDto)
        {
            SupplierPay supplierPay = ObjectMapper.Map<SupplierPay>(supplierPayDto);
            supplierPay = _supplierPayRepository.Update(supplierPay);
            return Task.FromResult<SupplierPayDto>(supplierPayDto);
        }

        public async Task Delete(int id)
        {
            await _supplierPayRepository.DeleteAsync(id);
        }

        public async Task DeleteForMultiple(string ids)
        {
            List<int> idList = ExtendsionHelper.GetIds(ids);
            await _supplierPayRepository.DeleteAsync(x => idList.Contains(x.Id));
        }
    }
}
