using Abp.Application.Services;
using Abp.Application.Services.Dto;
using BusinessHall.Products.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessHall.ProductManagers
{
    public interface IProductManagerAppService : IApplicationService
    {
        Task<ListResultDto<ProductDto>> GetAll();

        Task<ProductDto> Create(ProductDto productDto);

        Task<ProductDto> GetById(int id);

        Task<ProductDto> Update(ProductDto productDto);

        Task Delete(int id);

        Task DeleteForMultiple(List<int> idList);
    }
}

