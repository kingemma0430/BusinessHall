using Abp.Application.Services;
using Abp.Application.Services.Dto;
using BusinessHall.MultiTenancy.Dto;

namespace BusinessHall.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

