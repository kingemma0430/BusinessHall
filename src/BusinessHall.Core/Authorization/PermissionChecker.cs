using Abp.Authorization;
using BusinessHall.Authorization.Roles;
using BusinessHall.Authorization.Users;

namespace BusinessHall.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
