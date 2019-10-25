using Abp.Domain.Repositories;
using Abp.Runtime.Caching;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using BusinessHall.BasicDatas.Dto;
using BusinessHall.MultiTenancy.Dto;
using BusinessHall.MultiTenancy;
using BusinessHall.Entities;

namespace BusinessHall.BasicDatas
{
    public class BasicDataAppService : BusinessHallAppServiceBase, IBasicDataAppService
    {
        private readonly IRepository<Province> _provinceRepository;
        private readonly IRepository<City> _cityRepository;
        private readonly IRepository<Area> _areaRepository;
        private readonly IRepository<EthnicGroup> _ethnicGroupRepository;
        private readonly Abp.Runtime.Caching.ICacheManager _cacheManager;
        private readonly IRepository<Tenant, int> _tenantrepository;

        public BasicDataAppService(IRepository<Province> provinceRepository,
         IRepository<City> cityRepository, IRepository<Area> areaRepository,
         IRepository<EthnicGroup> ethnicGroupRepository,
         IRepository<Tenant, int> tenantrepository,
         Abp.Runtime.Caching.ICacheManager cacheManager)
        {
            _provinceRepository = provinceRepository;
            _cityRepository = cityRepository;
            _areaRepository = areaRepository;
            _ethnicGroupRepository = ethnicGroupRepository;
            _tenantrepository = tenantrepository;
            _cacheManager = cacheManager;
        }

        public List<ProvinceDto> GetProvinceList()
        {
            var result = _provinceRepository.GetAllList();
            return ObjectMapper.Map<List<ProvinceDto>>(result);
        }

        public List<ProvinceDto> GetProvinceListCache()
        {
            //Try to get from cache
            return _cacheManager
                    .GetCache("ProvinceCache")
                    .Get("ProvinceCache", () => GetProvinceList()) as List<ProvinceDto>;
        }

        public List<CityDto> GetCityList()
        {
            var result = _cityRepository.GetAllList();
            return ObjectMapper.Map<List<CityDto>>(result);
        }

        public List<CityDto> GetCityListCache()
        {
            //Try to get from cache
            return _cacheManager
                    .GetCache("CityCache")
                    .Get("CityCache", () => GetCityList()) as List<CityDto>;
        }

        public List<AreaDto> GetAreaList(string cityId)
        {
            return ObjectMapper.Map<List<AreaDto>>(_areaRepository.GetAllList(x => x.CityId == cityId));
        }

        public List<AreaDto> GetAreaListCache(string cityId)
        {
            return _cacheManager.GetCache("AreaCache")
                .Get(cityId, () => GetAreaList(cityId)) as List<AreaDto>;
        }

        public List<EthnicGroupDto> GetEthnicGroupList()
        {
            return ObjectMapper.Map<List<EthnicGroupDto>>(_ethnicGroupRepository.GetAllList());
        }

        public List<EthnicGroupDto> GetEthnicGroupListCache()
        {
            return _cacheManager
                     .GetCache("EthnicGroupCache")
                     .Get("EthnicGroupCache", () => GetEthnicGroupList()) as List<EthnicGroupDto>;
        }

        public List<TenantDto> GetAllTenantList()
        {
            var values = _tenantrepository.GetAllList().OrderBy(x => x.Id);
            List<TenantDto> list = ObjectMapper.Map<List<TenantDto>>(values);
            return list;
        }
    }
}
