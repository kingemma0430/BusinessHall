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
        private readonly IRepository<Operator> _operatorRepository;

        public ProductManagerAppService(IRepository<Product> productRepository,
            IRepository<Operator> operatorRepository)
        {
            _productRepository = productRepository;
            _operatorRepository = operatorRepository;
        }

        public Task<ListResultDto<ProductDto>> GetAll()
        {
            var result = _productRepository.GetAllIncluding(x => x.ProductFaceValues, x => x.ProductOperators, x => x.Supplier).ToList();
            List<ProductDto> productDtos = ObjectMapper.Map<List<ProductDto>>(result);
            BuildProducOperatorName(productDtos);
            var returnResult = new ListResultDto<ProductDto>(productDtos);
            return Task.FromResult<ListResultDto<ProductDto>>(returnResult);
        }

        public async Task<ProductDto> GetById(int id)
        {
            Product result = await _productRepository.GetAsync(id);
            ProductDto productDto = ObjectMapper.Map<ProductDto>(result);
            List<ProductDto> productDtos = new List<ProductDto>();
            productDtos.Add(productDto);
            BuildProducOperatorName(productDtos);
            return productDtos[0];
        }

        public Task<ProductDto> Create(ProductDto productDto)
        {
            BuildProductDtoChildren(productDto);
            Product product = ObjectMapper.Map<Product>(productDto);
            productDto.Id = _productRepository.InsertAndGetId(product);
            List<ProductDto> productDtos = new List<ProductDto>();
            productDtos.Add(productDto);
            BuildProducOperatorName(productDtos);
            return Task.FromResult<ProductDto>(productDtos[0]);
        }

        public Task<ProductDto> Update(ProductDto productDto)
        {
            BuildProductDtoChildren(productDto);
            Product product = ObjectMapper.Map<Product>(productDto);
            product = _productRepository.Update(product);
            productDto = ObjectMapper.Map<ProductDto>(product);
            List<ProductDto> productDtos = new List<ProductDto>();
            productDtos.Add(productDto);
            BuildProducOperatorName(productDtos);

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

        private void BuildProductDtoChildren(ProductDto productDto)
        {
            productDto.CreationTime = DateTime.Now;
            productDto.CreatorUserId = AbpSession.UserId.Value;
            if (productDto.ProductFaceValues != null)
            {
                foreach (var item in productDto.ProductFaceValues)
                {
                    item.CreationTime = DateTime.Now;
                    item.CreatorUserId = productDto.CreatorUserId;
                    item.ProductId = productDto.Id;
                }
            }
            if (productDto.ProductOperators != null)
            {
                foreach (var item in productDto.ProductOperators)
                {
                    item.CreationTime = DateTime.Now;
                    item.CreatorUserId = productDto.CreatorUserId;
                    item.ProductId = productDto.Id;
                }
            }
        }

        private void BuildProducOperatorName(List<ProductDto> productDtos)
        {
            List<Operator> oprators = null;
            if (productDtos != null && productDtos.Count > 0)
            {
                List<int> operatorIds = productDtos.Where(x => x.ProductOperators != null).SelectMany(x => x.ProductOperators).Select(x => x.OperatorId).Distinct().ToList();
                if (operatorIds != null && operatorIds.Count > 0)
                {
                    oprators = _operatorRepository.GetAll().Where(x => operatorIds.Contains(x.Id)).ToList();
                }
            }

            if (oprators != null && oprators.Count > 0)
            {
                foreach (var itemProduct in productDtos)
                {
                    if (itemProduct.ProductOperators != null)
                    {
                        foreach (var itemOperator in itemProduct.ProductOperators)
                        {
                            var currentOperator = oprators.FirstOrDefault(x => x.Id == itemOperator.OperatorId);
                            itemOperator.OperatorName = currentOperator != null ? currentOperator.Name : "";
                        }
                    }
                }
            }
        }
    }
}
