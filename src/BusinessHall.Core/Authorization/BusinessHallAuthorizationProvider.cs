using Abp.Authorization;
using Abp.Localization;
using Abp.MultiTenancy;

namespace BusinessHall.Authorization
{
    public class BusinessHallAuthorizationProvider : AuthorizationProvider
    {
        public override void SetPermissions(IPermissionDefinitionContext context)
        {
            context.CreatePermission(PermissionNames.Pages_Users, L("Users"));
            context.CreatePermission(PermissionNames.Pages_Roles, L("Roles"));
            context.CreatePermission(PermissionNames.Pages_AgentManager, L("AgentManager"));
            context.CreatePermission(PermissionNames.Pages_AlertSetting, L("AlertSetting"));
            context.CreatePermission(PermissionNames.Pages_CreditManager, L("CreditManager"));
            context.CreatePermission(PermissionNames.Pages_DailyBalance, L("DailyBalance"));
            context.CreatePermission(PermissionNames.Pages_CallOrder, L("CallOrder"));
            context.CreatePermission(PermissionNames.Pages_ProductManager, L("ProductManager"));
            context.CreatePermission(PermissionNames.Pages_RealtimeData, L("RealtimeData"));
            context.CreatePermission(PermissionNames.Pages_SupplierManager, L("SupplierManager"));
            context.CreatePermission(PermissionNames.Pages_SupplierPay, L("SupplierPay"));
            context.CreatePermission(PermissionNames.Pages_Tenants, L("Tenants"), multiTenancySides: MultiTenancySides.Host);
            context.CreatePermission(PermissionNames.Pages_Menus, L("Menus"));

        }

        private static ILocalizableString L(string name)
        {
            return new LocalizableString(name, BusinessHallConsts.LocalizationSourceName);
        }
    }
}
