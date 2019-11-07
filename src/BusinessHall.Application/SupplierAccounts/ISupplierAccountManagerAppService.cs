using Abp.Application.Services;
using Abp.Application.Services.Dto;
using BusinessHall.Entities.GlobalParameters;
using BusinessHall.SupplierAccounts.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessHall.SupplierAccountManagers
{
    public interface ISupplierAccountManagerAppService : IApplicationService
    {
        Task<ListResultDto<SupplierAccountDto>> GetAll();

        Task<SupplierAccountDto> Create(SupplierAccountDto supplierAccountDto);

        Task<SupplierAccountDto> GetById(int id);

        Task<SupplierAccountDto> Update(SupplierAccountDto supplierAccountDto);

        Task Delete(int id);

        Task DeleteForMultiple(string ids);

    }
}

