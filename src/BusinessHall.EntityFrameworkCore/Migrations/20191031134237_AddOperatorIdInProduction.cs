using Microsoft.EntityFrameworkCore.Migrations;

namespace BusinessHall.Migrations
{
    public partial class AddOperatorIdInProduction : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OperatorId",
                table: "Products",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Products_OperatorId",
                table: "Products",
                column: "OperatorId");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Operators_OperatorId",
                table: "Products",
                column: "OperatorId",
                principalTable: "Operators",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Operators_OperatorId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_OperatorId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "OperatorId",
                table: "Products");
        }
    }
}
