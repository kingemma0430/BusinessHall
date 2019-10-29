using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BusinessHall.Migrations
{
    public partial class AddCreationUserFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CreationTime",
                table: "SupplierPays",
                newName: "CretionTime");

            migrationBuilder.AddColumn<long>(
                name: "UserId",
                table: "Suppliers",
                nullable: true);

            migrationBuilder.AlterColumn<long>(
                name: "UserId",
                table: "SupplierPays",
                nullable: true,
                oldClrType: typeof(long));

            migrationBuilder.AddColumn<long>(
                name: "CreatorUserId",
                table: "SupplierPays",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<long>(
                name: "CreatorUserId",
                table: "Products",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<DateTime>(
                name: "CretionTime",
                table: "Products",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<long>(
                name: "UserId",
                table: "Products",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "CreatorUserId",
                table: "ProductOperators",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<DateTime>(
                name: "CretionTime",
                table: "ProductOperators",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<long>(
                name: "UserId",
                table: "ProductOperators",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "CreatorUserId",
                table: "ProductFaceValues",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<DateTime>(
                name: "CretionTime",
                table: "ProductFaceValues",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<long>(
                name: "UserId",
                table: "ProductFaceValues",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "CreatorUserId",
                table: "Operators",
                nullable: false,
                defaultValue: 0L);

            migrationBuilder.AddColumn<DateTime>(
                name: "CretionTime",
                table: "Operators",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<long>(
                name: "UserId",
                table: "Operators",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Suppliers_UserId",
                table: "Suppliers",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_SupplierPays_UserId",
                table: "SupplierPays",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Products_UserId",
                table: "Products",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductOperators_UserId",
                table: "ProductOperators",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductFaceValues_UserId",
                table: "ProductFaceValues",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Operators_UserId",
                table: "Operators",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Operators_AbpUsers_UserId",
                table: "Operators",
                column: "UserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductFaceValues_AbpUsers_UserId",
                table: "ProductFaceValues",
                column: "UserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductOperators_AbpUsers_UserId",
                table: "ProductOperators",
                column: "UserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Products_AbpUsers_UserId",
                table: "Products",
                column: "UserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_SupplierPays_AbpUsers_UserId",
                table: "SupplierPays",
                column: "UserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Suppliers_AbpUsers_UserId",
                table: "Suppliers",
                column: "UserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Operators_AbpUsers_UserId",
                table: "Operators");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductFaceValues_AbpUsers_UserId",
                table: "ProductFaceValues");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductOperators_AbpUsers_UserId",
                table: "ProductOperators");

            migrationBuilder.DropForeignKey(
                name: "FK_Products_AbpUsers_UserId",
                table: "Products");

            migrationBuilder.DropForeignKey(
                name: "FK_SupplierPays_AbpUsers_UserId",
                table: "SupplierPays");

            migrationBuilder.DropForeignKey(
                name: "FK_Suppliers_AbpUsers_UserId",
                table: "Suppliers");

            migrationBuilder.DropIndex(
                name: "IX_Suppliers_UserId",
                table: "Suppliers");

            migrationBuilder.DropIndex(
                name: "IX_SupplierPays_UserId",
                table: "SupplierPays");

            migrationBuilder.DropIndex(
                name: "IX_Products_UserId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_ProductOperators_UserId",
                table: "ProductOperators");

            migrationBuilder.DropIndex(
                name: "IX_ProductFaceValues_UserId",
                table: "ProductFaceValues");

            migrationBuilder.DropIndex(
                name: "IX_Operators_UserId",
                table: "Operators");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Suppliers");

            migrationBuilder.DropColumn(
                name: "CreatorUserId",
                table: "SupplierPays");

            migrationBuilder.DropColumn(
                name: "CreatorUserId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "CretionTime",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "CreatorUserId",
                table: "ProductOperators");

            migrationBuilder.DropColumn(
                name: "CretionTime",
                table: "ProductOperators");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "ProductOperators");

            migrationBuilder.DropColumn(
                name: "CreatorUserId",
                table: "ProductFaceValues");

            migrationBuilder.DropColumn(
                name: "CretionTime",
                table: "ProductFaceValues");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "ProductFaceValues");

            migrationBuilder.DropColumn(
                name: "CreatorUserId",
                table: "Operators");

            migrationBuilder.DropColumn(
                name: "CretionTime",
                table: "Operators");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Operators");

            migrationBuilder.RenameColumn(
                name: "CretionTime",
                table: "SupplierPays",
                newName: "CreationTime");

            migrationBuilder.AlterColumn<long>(
                name: "UserId",
                table: "SupplierPays",
                nullable: false,
                oldClrType: typeof(long),
                oldNullable: true);
        }
    }
}
