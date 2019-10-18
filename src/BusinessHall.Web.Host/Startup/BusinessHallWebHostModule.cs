using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using BusinessHall.Configuration;

namespace BusinessHall.Web.Host.Startup
{
    [DependsOn(
       typeof(BusinessHallWebCoreModule))]
    public class BusinessHallWebHostModule: AbpModule
    {
        private readonly IHostingEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public BusinessHallWebHostModule(IHostingEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(BusinessHallWebHostModule).GetAssembly());
        }
    }
}
