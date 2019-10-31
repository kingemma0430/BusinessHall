using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using BusinessHall.Authorization.Roles;
using BusinessHall.Authorization.Users;
using BusinessHall.MultiTenancy;
using BusinessHall.BusinessHallModels;

namespace BusinessHall.EntityFrameworkCore
{
    public class BusinessHallDbContext : AbpZeroDbContext<Tenant, Role, User, BusinessHallDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public DbSet<Entities.Province> Provinces { get; set; }
        public DbSet<Entities.City> Cities { get; set; }
        public DbSet<Entities.Area> Areas { get; set; }
        public DbSet<Entities.EthnicGroup> EthnicGroups { get; set; }

        public virtual DbSet<AbpMenu> AbpMenus { get; set; }
        public virtual DbSet<AbpUserRoleMenu> AbpUserRoleMenus { get; set; }

        public virtual DbSet<Operator> Operators { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<ProductFaceValue> ProductFaceValues { get; set; }
        public virtual DbSet<ProductOperator> ProductOperators { get; set; }
        public virtual DbSet<Supplier> Suppliers { get; set; }
        public virtual DbSet<SupplierPay> SupplierPays { get; set; }
        public DbSet<Agent> Agents { get; set; }
        public DbSet<FaceValue> FaceValues { get; set; }

        public DbSet<SupplierAccount> SupplierAcounts { get; set; }
        public DbSet<AgentAccount> AgentAcounts { get; set; }




        public BusinessHallDbContext(DbContextOptions<BusinessHallDbContext> options)
            : base(options)
        {
        }
    }
}
