using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using BusinessHall.Authorization;

namespace BusinessHall
{
    [DependsOn(
        typeof(BusinessHallCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class BusinessHallApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
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
