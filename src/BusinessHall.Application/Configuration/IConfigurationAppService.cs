using System.Threading.Tasks;
using BusinessHall.Configuration.Dto;

namespace BusinessHall.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
