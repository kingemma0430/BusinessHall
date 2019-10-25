using Abp.Application.Services;
using Abp.Application.Services.Dto;
using BusinessHall.BasicDatas.Dto;
using BusinessHall.MultiTenancy.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BusinessHall.BasicDatas
{
    public interface IBasicDataAppService: IApplicationService
    {
        List<ProvinceDto> GetProvinceList();

        List<ProvinceDto> GetProvinceListCache();

        List<CityDto> GetCityList(string provinceId);

        List<CityDto> GetCityListCache(string provinceId);

        List<AreaDto> GetAreaList(string cityId);

        List<AreaDto> GetAreaListCache(string cityId);

        List<EthnicGroupDto> GetEthnicGroupList();

        List<EthnicGroupDto> GetEthnicGroupListCache();

        List<TenantDto> GetAllTenantDto();
    }
}
