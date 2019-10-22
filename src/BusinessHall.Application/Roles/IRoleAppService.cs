using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using BusinessHall.Roles.Dto;

namespace BusinessHall.Roles
{
    public interface IRoleAppService : IAsyncCrudAppService<RoleDto, int, PagedRoleResultRequestDto, CreateRoleDto, RoleDto>
    {
        Task<ListResultDto<PermissionDto>> GetAllPermissions();

        Task<GetRoleForEditOutput> GetRoleForEdit(EntityDto input);

        Task<ListResultDto<RoleListDto>> GetRolesAsync(GetRolesInput input);

        Task<ListResultDto<AbpUserRoleDto>> GetUserRoleByUserId(long userId);

        Task<ListResultDto<AbpUserRoleDto>> GetUserRoleByRoleId(int roleId);

    }
}
