using Microsoft.EntityFrameworkCore.Migrations;

namespace BusinessHall.Migrations
{
    public partial class AddFieldsInUserTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "QQ",
                table: "AbpUsers",
                maxLength: 45,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Telephone",
                table: "AbpUsers",
                maxLength: 25,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "WeChat",
                table: "AbpUsers",
                maxLength: 45,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "QQ",
                table: "AbpUsers");

            migrationBuilder.DropColumn(
                name: "Telephone",
                table: "AbpUsers");

            migrationBuilder.DropColumn(
                name: "WeChat",
                table: "AbpUsers");
        }
    }
}
