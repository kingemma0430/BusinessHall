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
using BusinessHall.Products.Dto;

namespace BusinessHall.ProductManagers
{
    [AbpAuthorize(PermissionNames.Pages_ProductManager)]
    public class ProductManagerAppService : BusinessHallAppServiceBase, IProductManagerAppService
    {
        private readonly IRepository<Product> _productRepository;

        public ProductManagerAppService(IRepository<Product> productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<ListResultDto<ProductDto>> GetAll()
        {
            var result = await _productRepository.GetAllListAsync();
            return new ListResultDto<ProductDto>(ObjectMapper.Map<List<ProductDto>>(result));
        }

        public async Task<ProductDto> GetById(int id)
        {
            Product result = await _productRepository.GetAsync(id);
            ProductDto dto = ObjectMapper.Map<ProductDto>(result);
            return dto;
        }

        public Task<ProductDto> Create(ProductDto productDto)
        {
            productDto.CreatorUserId = AbpSession.UserId.Value;
            productDto.CreationTime = DateTime.Now;
            Product product = ObjectMapper.Map<Product>(productDto);
            productDto.Id = _productRepository.InsertAndGetId(product);
            return Task.FromResult<ProductDto>(productDto);
        }

        public Task<ProductDto> Update(ProductDto productDto)
        {
            Product product = ObjectMapper.Map<Product>(productDto);
            product = _productRepository.Update(product);
            return Task.FromResult<ProductDto>(productDto);
        }

        public async Task Delete(int id)
        {
            await _productRepository.DeleteAsync(id);
        }

        public async Task DeleteForMultiple(List<int> idList)
        {
            await _productRepository.DeleteAsync(x => idList.Contains(x.Id));
        }
    }
}
