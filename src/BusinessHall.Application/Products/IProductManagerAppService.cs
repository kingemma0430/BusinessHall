using Abp.Application.Services;
using Abp.Application.Services.Dto;
using BusinessHall.Products.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using BusinessHall.Entities.GlobalParameters;

namespace BusinessHall.ProductManagers
{
    public interface IProductManagerAppService : IApplicationService
    {
        Task<ListResultDto<ProductDto>> GetAll();

        Task<ProductDto> Create(ProductDto productDto);

        Task<ProductDto> GetById(int id);

        Task<ProductDto> Update(ProductDto productDto);

        Task Delete(int id);

        Task DeleteForMultiple(string ids);

        Task<List<ProductDto>> OnOrOutShelf(UpdateProductStatusDto updateProductStatusDto);
    }
}

