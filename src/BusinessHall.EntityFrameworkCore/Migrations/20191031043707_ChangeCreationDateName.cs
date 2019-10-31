using Microsoft.EntityFrameworkCore.Migrations;

namespace BusinessHall.Migrations
{
    public partial class ChangeCreationDateName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CretionTime",
                table: "Suppliers",
                newName: "CreationTime");

            migrationBuilder.RenameColumn(
                name: "CretionTime",
                table: "SupplierPays",
                newName: "CreationTime");

            migrationBuilder.RenameColumn(
                name: "CretionTime",
                table: "SupplierAcounts",
                newName: "CreationTime");

            migrationBuilder.RenameColumn(
                name: "CretionTime",
                table: "Products",
                newName: "CreationTime");

            migrationBuilder.RenameColumn(
                name: "CretionTime",
                table: "ProductOperators",
                newName: "CreationTime");

            migrationBuilder.RenameColumn(
                name: "CretionTime",
                table: "ProductFaceValues",
                newName: "CreationTime");

            migrationBuilder.RenameColumn(
                name: "CretionTime",
                table: "Operators",
                newName: "CreationTime");

            migrationBuilder.RenameColumn(
                name: "CretionTime",
                table: "FaceValues",
                newName: "CreationTime");

            migrationBuilder.RenameColumn(
                name: "CretionTime",
                table: "Agents",
                newName: "CreationTime");

            migrationBuilder.RenameColumn(
                name: "CretionTime",
                table: "AgentAcounts",
                newName: "CreationTime");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CreationTime",
                table: "Suppliers",
                newName: "CretionTime");

            migrationBuilder.RenameColumn(
                name: "CreationTime",
                table: "SupplierPays",
                newName: "CretionTime");

            migrationBuilder.RenameColumn(
                name: "CreationTime",
                table: "SupplierAcounts",
                newName: "CretionTime");

            migrationBuilder.RenameColumn(
                name: "CreationTime",
                table: "Products",
                newName: "CretionTime");

            migrationBuilder.RenameColumn(
                name: "CreationTime",
                table: "ProductOperators",
                newName: "CretionTime");

            migrationBuilder.RenameColumn(
                name: "CreationTime",
                table: "ProductFaceValues",
                newName: "CretionTime");

            migrationBuilder.RenameColumn(
                name: "CreationTime",
                table: "Operators",
                newName: "CretionTime");

            migrationBuilder.RenameColumn(
                name: "CreationTime",
                table: "FaceValues",
                newName: "CretionTime");

            migrationBuilder.RenameColumn(
                name: "CreationTime",
                table: "Agents",
                newName: "CretionTime");

            migrationBuilder.RenameColumn(
                name: "CreationTime",
                table: "AgentAcounts",
                newName: "CretionTime");
        }
    }
}
