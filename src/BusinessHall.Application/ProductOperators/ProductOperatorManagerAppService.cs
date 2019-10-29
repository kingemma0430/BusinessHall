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
using BusinessHall.ProductOperators.Dto;

namespace BusinessHall.ProductOperatorManagers
{
    [AbpAuthorize(PermissionNames.Pages_ProductManager)]
    public class ProductOperatorManagerAppService : BusinessHallAppServiceBase, IProductOperatorManagerAppService
    {
        private readonly IRepository<ProductOperator> _productOperatorRepository;

        public ProductOperatorManagerAppService(IRepository<ProductOperator> productOperatorRepository)
        {
            _productOperatorRepository = productOperatorRepository;
        }

        public async Task<ListResultDto<ProductOperatorDto>> GetAll()
        {
            var result = await _productOperatorRepository.GetAllListAsync();
            return new ListResultDto<ProductOperatorDto>(ObjectMapper.Map<List<ProductOperatorDto>>(result));
        }

        public async Task<ProductOperatorDto> GetById(int id)
        {
            ProductOperator result = await _productOperatorRepository.GetAsync(id);
            ProductOperatorDto dto = ObjectMapper.Map<ProductOperatorDto>(result);
            return dto;
        }

        public Task<ProductOperatorDto> Create(ProductOperatorDto productOperatorDto)
        {
            productOperatorDto.CreatorUserId = AbpSession.UserId.Value;
            productOperatorDto.CretionTime = DateTime.Now;
            ProductOperator productOperator = ObjectMapper.Map<ProductOperator>(productOperatorDto);
            productOperatorDto.Id = _productOperatorRepository.InsertAndGetId(productOperator);
            return Task.FromResult<ProductOperatorDto>(productOperatorDto);
        }

        public Task<ProductOperatorDto> Update(ProductOperatorDto productOperatorDto)
        {
            ProductOperator productOperator = ObjectMapper.Map<ProductOperator>(productOperatorDto);
            productOperator = _productOperatorRepository.Update(productOperator);
            return Task.FromResult<ProductOperatorDto>(productOperatorDto);
        }

        public async Task Delete(int id)
        {
            await _productOperatorRepository.DeleteAsync(id);
        }

        public async Task DeleteForMultiple(List<int> idList)
        {
            await _productOperatorRepository.DeleteAsync(x => idList.Contains(x.Id));
        }
    }
}
