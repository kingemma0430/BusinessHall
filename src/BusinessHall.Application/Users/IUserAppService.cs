using System.Collections.Generic;
using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using BusinessHall.Roles.Dto;
using BusinessHall.Users.Dto;

namespace BusinessHall.Users
{
    public interface IUserAppService : IAsyncCrudAppService<UserDto, long, PagedUserResultRequestDto, CreateUserDto, UserDto>
    {
        Task<ListResultDto<RoleDto>> GetRoles();

        Task ChangeLanguage(ChangeUserLanguageDto input);

        List<string> GetBusinessHallModelClasses();

        List<string> GetEntitiesClasses();

    }
}
