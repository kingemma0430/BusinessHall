using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using BusinessHall.Configuration;
using BusinessHall.Web;

namespace BusinessHall.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class BusinessHallDbContextFactory : IDesignTimeDbContextFactory<BusinessHallDbContext>
    {
        public BusinessHallDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<BusinessHallDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            BusinessHallDbContextConfigurer.Configure(builder, configuration.GetConnectionString(BusinessHallConsts.ConnectionStringName));

            return new BusinessHallDbContext(builder.Options);
        }
    }
}
