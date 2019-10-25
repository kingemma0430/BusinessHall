using System;
using System.Collections.Generic;
using System.Text;
using Abp.Authorization;
using Abp.Domain.Repositories;
using Abp.Runtime.Session;
using BusinessHall.Authorization;
using BusinessHall.BusinessHallModels;
using BusinessHall.Menus.Dto;
using Abp.AutoMapper;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using BusinessHall.Roles;
using System.Linq;

namespace BusinessHall.Menus
{

    [AbpAuthorize(PermissionNames.Pages_Menus)]
    public class MenuAppService : BusinessHallAppServiceBase, IMenuAppService
    {
        private readonly IRepository<AbpMenu> _menuRepository;
        private readonly IRepository<AbpUserRoleMenu> _userRoleMenuRepository;
        private readonly IAbpSession _abpSession;
        private readonly IRoleAppService _roleAppService;

        public MenuAppService(IRepository<AbpMenu> menuRepository, IRepository<AbpUserRoleMenu> userRoleMenuRepository,
            IAbpSession abpSession, IRoleAppService roleAppService)
        {
            _menuRepository = menuRepository;
            _userRoleMenuRepository = userRoleMenuRepository;
            _abpSession = abpSession;
            _roleAppService = roleAppService;
        }

        public async Task<ListResultDto<Dto.AbpMenuDto>> GetAllMenus()
        {
            var menus = await _menuRepository.GetAllListAsync();
            return new ListResultDto<AbpMenuDto>(ObjectMapper.Map<List<AbpMenuDto>>(menus));
        }

        public async Task<ListResultDto<Dto.AbpMenuDto>> GetMenusForCurreuntUser()
        {
            if (_abpSession != null && _abpSession.UserId.HasValue)
            {
                long userId = _abpSession.UserId.Value;
                var userRules = _roleAppService.GetUserRoleByUserId(userId).Result;
                if (userRules != null && userRules.Items != null)
                {
                    List<int> roleIds = userRules.Items.Select(x => x.RoleId).Distinct().ToList();
                    List<int> menuIds = _userRoleMenuRepository.GetAllList().Where(x => roleIds.Contains(x.RoleId)).Select(x => x.MenuId).Distinct().ToList();
                    var menus = await _menuRepository.GetAllListAsync(x => menuIds.Contains(x.Id));
                    return new ListResultDto<AbpMenuDto>(ObjectMapper.Map<List<AbpMenuDto>>(menus));
                }
                else
                {
                    return new ListResultDto<AbpMenuDto>();
                }
            }
            else
            {
                return new ListResultDto<AbpMenuDto>();
            }
        }
    }
}
