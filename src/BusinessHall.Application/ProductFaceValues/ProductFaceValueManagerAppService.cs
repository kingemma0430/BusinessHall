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
using BusinessHall.ProductFaceValues.Dto;

namespace BusinessHall.ProductFaceValueManagers
{
    [AbpAuthorize(PermissionNames.Pages_ProductManager)]
    public class ProductFaceValueManagerAppService : BusinessHallAppServiceBase, IProductFaceValueManagerAppService
    {
        private readonly IRepository<ProductFaceValue> _productFaceValueRepository;

        public ProductFaceValueManagerAppService(IRepository<ProductFaceValue> productFaceValueRepository)
        {
            _productFaceValueRepository = productFaceValueRepository;
        }

        public async Task<ListResultDto<ProductFaceValueDto>> GetAll()
        {
            var result = await _productFaceValueRepository.GetAllListAsync();
            return new ListResultDto<ProductFaceValueDto>(ObjectMapper.Map<List<ProductFaceValueDto>>(result));
        }

        public async Task<ProductFaceValueDto> GetById(int id)
        {
            ProductFaceValue result = await _productFaceValueRepository.GetAsync(id);
            ProductFaceValueDto dto = ObjectMapper.Map<ProductFaceValueDto>(result);
            return dto;
        }

        public Task<ProductFaceValueDto> Create(ProductFaceValueDto productFaceValueDto)
        {
            productFaceValueDto.CreatorUserId = AbpSession.UserId.Value;
            productFaceValueDto.CreationTime = DateTime.Now;
            ProductFaceValue productFaceValue = ObjectMapper.Map<ProductFaceValue>(productFaceValueDto);
            productFaceValueDto.Id = _productFaceValueRepository.InsertAndGetId(productFaceValue);
            return Task.FromResult<ProductFaceValueDto>(productFaceValueDto);
        }

        public Task<ProductFaceValueDto> Update(ProductFaceValueDto productFaceValueDto)
        {
            ProductFaceValue productFaceValue = ObjectMapper.Map<ProductFaceValue>(productFaceValueDto);
            productFaceValue = _productFaceValueRepository.Update(productFaceValue);
            return Task.FromResult<ProductFaceValueDto>(productFaceValueDto);
        }

        public async Task Delete(int id)
        {
            await _productFaceValueRepository.DeleteAsync(id);
        }

        public async Task DeleteForMultiple(string ids)
        {
            List<int> idList = ExtendsionHelper.GetIds(ids);
            await _productFaceValueRepository.DeleteAsync(x => idList.Contains(x.Id));
        }
    }
}