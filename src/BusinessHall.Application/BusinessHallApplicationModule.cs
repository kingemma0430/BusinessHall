using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using BusinessHall.Authorization;
using BusinessHall.BusinessHallModels;
using BusinessHall.Menus.Dto;
using BusinessHall.Operators.Dto;
using BusinessHall.ProductFaceValues.Dto;
using BusinessHall.ProductOperators.Dto;
using BusinessHall.Products.Dto;
using BusinessHall.SupplierManagers.Dto;
using BusinessHall.SupplierPays.Dto;
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
                config.CreateMap<AbpMenuDto, AbpMenu>();
                config.CreateMap<AbpMenu, AbpMenuDto>();
                config.CreateMap<SupplierDto, Supplier>();
                config.CreateMap<Supplier, SupplierDto>();
                config.CreateMap<OperatorDto, Operator>();
                config.CreateMap<Operator, OperatorDto>();
                config.CreateMap<ProductFaceValueDto, ProductFaceValue>();
                config.CreateMap<ProductFaceValue, ProductFaceValueDto>();
                config.CreateMap<ProductOperatorDto, ProductOperator>();
                config.CreateMap<ProductOperator, ProductOperatorDto>();
                config.CreateMap<ProductDto, Product>();
                config.CreateMap<Product, ProductDto>();
                config.CreateMap<SupplierPayDto, SupplierPay>();
                config.CreateMap<SupplierPay, SupplierPayDto>();
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
