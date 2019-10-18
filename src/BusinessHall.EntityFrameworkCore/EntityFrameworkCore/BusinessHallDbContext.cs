using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using BusinessHall.Authorization.Roles;
using BusinessHall.Authorization.Users;
using BusinessHall.MultiTenancy;

namespace BusinessHall.EntityFrameworkCore
{
    public class BusinessHallDbContext : AbpZeroDbContext<Tenant, Role, User, BusinessHallDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public BusinessHallDbContext(DbContextOptions<BusinessHallDbContext> options)
            : base(options)
        {
        }
    }
}
