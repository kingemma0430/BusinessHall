using System.Threading.Tasks;
using Abp.Application.Services;
using BusinessHall.Sessions.Dto;

namespace BusinessHall.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
