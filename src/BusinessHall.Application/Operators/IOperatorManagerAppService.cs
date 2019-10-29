using Abp.Application.Services;
using Abp.Application.Services.Dto;
using BusinessHall.Operators.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessHall.OperatorManagers
{
    public interface IOperatorManagerAppService : IApplicationService
    {
        Task<ListResultDto<OperatorDto>> GetAll();

        Task<OperatorDto> Create(OperatorDto operatorDto);

        Task<OperatorDto> GetById(int id);

        Task<OperatorDto> Update(OperatorDto operatorDto);

        Task Delete(int id);

        Task DeleteForMultiple(List<int> idList);
    }
}

