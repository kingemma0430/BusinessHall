using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using BusinessHall.Configuration.Dto;

namespace BusinessHall.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : BusinessHallAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
