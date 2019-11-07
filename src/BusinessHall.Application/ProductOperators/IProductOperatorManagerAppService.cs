using Abp.Application.Services;
using Abp.Application.Services.Dto;
using BusinessHall.Entities.GlobalParameters;
using BusinessHall.ProductOperators.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessHall.ProductOperatorManagers
{
    public interface IProductOperatorManagerAppService : IApplicationService
    {
        Task<ListResultDto<ProductOperatorDto>> GetAll();

        Task<ProductOperatorDto> Create(ProductOperatorDto productOperatorDto);

        Task<ProductOperatorDto> GetById(int id);

        Task<ProductOperatorDto> Update(ProductOperatorDto productOperatorDto);

        Task Delete(int id);

        Task DeleteForMultiple(string ids);

    }
}

