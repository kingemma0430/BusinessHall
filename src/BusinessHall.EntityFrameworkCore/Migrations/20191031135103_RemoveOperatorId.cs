using Microsoft.EntityFrameworkCore.Migrations;

namespace BusinessHall.Migrations
{
    public partial class RemoveOperatorId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Operators_OperatorId",
                table: "Products");

            migrationBuilder.DropForeignKey(
                name: "FK_Products_Suppliers_SupplierId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_Products_SupplierId",
                table: "Products");

            migrationBuilder.AlterColumn<int>(
                name: "OperatorId",
                table: "Products",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Operators_OperatorId",
                table: "Products",
                column: "OperatorId",
                principalTable: "Operators",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Products_Operators_OperatorId",
                table: "Products");

            migrationBuilder.AlterColumn<int>(
                name: "OperatorId",
                table: "Products",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Products_SupplierId",
                table: "Products",
                column: "SupplierId");

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Operators_OperatorId",
                table: "Products",
                column: "OperatorId",
                principalTable: "Operators",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Suppliers_SupplierId",
                table: "Products",
                column: "SupplierId",
                principalTable: "Suppliers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
