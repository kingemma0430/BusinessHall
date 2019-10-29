using Abp.Application.Services;
using Abp.Application.Services.Dto;
using BusinessHall.SupplierPays.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessHall.SupplierPayManagers
{
    public interface ISupplierPayManagerAppService : IApplicationService
    {
        Task<ListResultDto<SupplierPayDto>> GetAll();

        Task<SupplierPayDto> Create(SupplierPayDto supplierPayDto);

        Task<SupplierPayDto> GetById(int id);

        Task<SupplierPayDto> Update(SupplierPayDto supplierPayDto);

        Task Delete(int id);

        Task DeleteForMultiple(List<int> idList);
    }
}
