using System.Threading.Tasks;
using Abp.Application.Services;
using BusinessHall.Authorization.Accounts.Dto;

namespace BusinessHall.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
