using Abp.Application.Services;
using Abp.Application.Services.Dto;
using BusinessHall.ProductFaceValues.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessHall.ProductFaceValueManagers
{
    public interface IProductFaceValueManagerAppService : IApplicationService
    {
        Task<ListResultDto<ProductFaceValueDto>> GetAll();

        Task<ProductFaceValueDto> Create(ProductFaceValueDto productFaceValueDto);

        Task<ProductFaceValueDto> GetById(int id);

        Task<ProductFaceValueDto> Update(ProductFaceValueDto productFaceValueDto);

        Task Delete(int id);

        Task DeleteForMultiple(List<int> idList);
    }
}

