using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace BusinessHall.Controllers
{
    public abstract class BusinessHallControllerBase: AbpController
    {
        protected BusinessHallControllerBase()
        {
            LocalizationSourceName = BusinessHallConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
