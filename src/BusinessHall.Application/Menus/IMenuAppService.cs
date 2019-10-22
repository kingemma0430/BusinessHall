using Abp.Application.Services;
using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessHall.Menus
{
    public interface IMenuAppService : IApplicationService
    {
        Task<ListResultDto<Dto.AbpMenuDto>> GetAllMenus();

        Task<ListResultDto<Dto.AbpMenuDto>> GetMenusForCurreuntUser();
    }
}
