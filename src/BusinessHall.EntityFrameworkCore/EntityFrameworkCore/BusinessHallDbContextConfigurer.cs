using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace BusinessHall.EntityFrameworkCore
{
    public static class BusinessHallDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<BusinessHallDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<BusinessHallDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
