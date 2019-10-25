using Abp.Application.Services;
using Abp.Application.Services.Dto;
using BusinessHall.SupplierManagers.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessHall.SupplierManagers
{
    public interface ISupplierManagerAppService : IApplicationService
    {
        Task<ListResultDto<SupplierDto>> GetAll();

        Task<SupplierDto> Create(SupplierDto supplierDto);

        Task<SupplierDto> GetById(int id);

        Task<SupplierDto> Update(SupplierDto supplierDto);

        Task Delete(int id);

        Task DeleteForMultiple(List<int> idList);
    }
}
