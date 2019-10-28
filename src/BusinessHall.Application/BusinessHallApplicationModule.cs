using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using BusinessHall.Authorization;
using BusinessHall.BusinessHallModels;
using BusinessHall.SupplierManagers.Dto;
using System;

namespace BusinessHall
{
    [DependsOn(
        typeof(BusinessHallCoreModule),
        typeof(AbpAutoMapperModule))]
    public class BusinessHallApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {

            Configuration.Modules.AbpAutoMapper().Configurators.Add(config =>
            {
                ////=========================Here need to add MapTo list=========================
                //config.CreateMap<UserDetails.Dto.UserDetailDto, UserDetail>()
                //      .ForMember(u => u.Department, options => options.Ignore());
                //config.CreateMap<UserDetail, UserDetailDto>();
                //config.CreateMap<Department, DepartmentDto>();
                //config.CreateMap<DepartmentDto, Department>();
                //config.CreateMap<RoleMenuDto, RoleMenu>();
                config.CreateMap<SupplierDto, Supplier>();
            });

            //Configuration for a specific cache
            Configuration.Caching.Configure("ProvinceCache", cache =>
            {
                cache.DefaultSlidingExpireTime = TimeSpan.FromHours(8);
            });
            Configuration.Caching.Configure("CityCache", cache =>
            {
                cache.DefaultSlidingExpireTime = TimeSpan.FromHours(8);
            });
            Configuration.Caching.Configure("AreaCache", cache =>
            {
                cache.DefaultSlidingExpireTime = TimeSpan.FromHours(8);
            });
            Configuration.Caching.Configure("EthnicGroupCache", cache =>
            {
                cache.DefaultSlidingExpireTime = TimeSpan.FromHours(8);
            });

            Configuration.Authorization.Providers.Add<BusinessHallAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(BusinessHallApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
