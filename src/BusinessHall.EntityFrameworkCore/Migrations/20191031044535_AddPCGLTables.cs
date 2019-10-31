using Microsoft.EntityFrameworkCore.Migrations;

namespace BusinessHall.Migrations
{
    public partial class AddPCGLTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AgentAcounts_AbpUsers_UserId",
                table: "AgentAcounts");

            migrationBuilder.DropForeignKey(
                name: "FK_Agents_AbpUsers_UserId",
                table: "Agents");

            migrationBuilder.DropForeignKey(
                name: "FK_FaceValues_AbpUsers_UserId",
                table: "FaceValues");

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
                name: "FK_SupplierAcounts_AbpUsers_UserId",
                table: "SupplierAcounts");

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
                name: "IX_SupplierAcounts_UserId",
                table: "SupplierAcounts");

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

            migrationBuilder.DropIndex(
                name: "IX_FaceValues_UserId",
                table: "FaceValues");

            migrationBuilder.DropIndex(
                name: "IX_Agents_UserId",
                table: "Agents");

            migrationBuilder.DropIndex(
                name: "IX_AgentAcounts_UserId",
                table: "AgentAcounts");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Suppliers");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "SupplierPays");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "SupplierAcounts");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Products");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "ProductOperators");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "ProductFaceValues");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Operators");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "FaceValues");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Agents");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "AgentAcounts");

            migrationBuilder.CreateIndex(
                name: "IX_Suppliers_CreatorUserId",
                table: "Suppliers",
                column: "CreatorUserId");

            migrationBuilder.CreateIndex(
                name: "IX_SupplierPays_CreatorUserId",
                table: "SupplierPays",
                column: "CreatorUserId");

            migrationBuilder.CreateIndex(
                name: "IX_SupplierAcounts_CreatorUserId",
                table: "SupplierAcounts",
                column: "CreatorUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Products_CreatorUserId",
                table: "Products",
                column: "CreatorUserId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductOperators_CreatorUserId",
                table: "ProductOperators",
                column: "CreatorUserId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductFaceValues_CreatorUserId",
                table: "ProductFaceValues",
                column: "CreatorUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Operators_CreatorUserId",
                table: "Operators",
                column: "CreatorUserId");

            migrationBuilder.CreateIndex(
                name: "IX_FaceValues_CreatorUserId",
                table: "FaceValues",
                column: "CreatorUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Agents_CreatorUserId",
                table: "Agents",
                column: "CreatorUserId");

            migrationBuilder.CreateIndex(
                name: "IX_AgentAcounts_CreatorUserId",
                table: "AgentAcounts",
                column: "CreatorUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_AgentAcounts_AbpUsers_CreatorUserId",
                table: "AgentAcounts",
                column: "CreatorUserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Agents_AbpUsers_CreatorUserId",
                table: "Agents",
                column: "CreatorUserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_FaceValues_AbpUsers_CreatorUserId",
                table: "FaceValues",
                column: "CreatorUserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Operators_AbpUsers_CreatorUserId",
                table: "Operators",
                column: "CreatorUserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductFaceValues_AbpUsers_CreatorUserId",
                table: "ProductFaceValues",
                column: "CreatorUserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_ProductOperators_AbpUsers_CreatorUserId",
                table: "ProductOperators",
                column: "CreatorUserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Products_AbpUsers_CreatorUserId",
                table: "Products",
                column: "CreatorUserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SupplierAcounts_AbpUsers_CreatorUserId",
                table: "SupplierAcounts",
                column: "CreatorUserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SupplierPays_AbpUsers_CreatorUserId",
                table: "SupplierPays",
                column: "CreatorUserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Suppliers_AbpUsers_CreatorUserId",
                table: "Suppliers",
                column: "CreatorUserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AgentAcounts_AbpUsers_CreatorUserId",
                table: "AgentAcounts");

            migrationBuilder.DropForeignKey(
                name: "FK_Agents_AbpUsers_CreatorUserId",
                table: "Agents");

            migrationBuilder.DropForeignKey(
                name: "FK_FaceValues_AbpUsers_CreatorUserId",
                table: "FaceValues");

            migrationBuilder.DropForeignKey(
                name: "FK_Operators_AbpUsers_CreatorUserId",
                table: "Operators");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductFaceValues_AbpUsers_CreatorUserId",
                table: "ProductFaceValues");

            migrationBuilder.DropForeignKey(
                name: "FK_ProductOperators_AbpUsers_CreatorUserId",
                table: "ProductOperators");

            migrationBuilder.DropForeignKey(
                name: "FK_Products_AbpUsers_CreatorUserId",
                table: "Products");

            migrationBuilder.DropForeignKey(
                name: "FK_SupplierAcounts_AbpUsers_CreatorUserId",
                table: "SupplierAcounts");

            migrationBuilder.DropForeignKey(
                name: "FK_SupplierPays_AbpUsers_CreatorUserId",
                table: "SupplierPays");

            migrationBuilder.DropForeignKey(
                name: "FK_Suppliers_AbpUsers_CreatorUserId",
                table: "Suppliers");

            migrationBuilder.DropIndex(
                name: "IX_Suppliers_CreatorUserId",
                table: "Suppliers");

            migrationBuilder.DropIndex(
                name: "IX_SupplierPays_CreatorUserId",
                table: "SupplierPays");

            migrationBuilder.DropIndex(
                name: "IX_SupplierAcounts_CreatorUserId",
                table: "SupplierAcounts");

            migrationBuilder.DropIndex(
                name: "IX_Products_CreatorUserId",
                table: "Products");

            migrationBuilder.DropIndex(
                name: "IX_ProductOperators_CreatorUserId",
                table: "ProductOperators");

            migrationBuilder.DropIndex(
                name: "IX_ProductFaceValues_CreatorUserId",
                table: "ProductFaceValues");

            migrationBuilder.DropIndex(
                name: "IX_Operators_CreatorUserId",
                table: "Operators");

            migrationBuilder.DropIndex(
                name: "IX_FaceValues_CreatorUserId",
                table: "FaceValues");

            migrationBuilder.DropIndex(
                name: "IX_Agents_CreatorUserId",
                table: "Agents");

            migrationBuilder.DropIndex(
                name: "IX_AgentAcounts_CreatorUserId",
                table: "AgentAcounts");

            migrationBuilder.AddColumn<long>(
                name: "UserId",
                table: "Suppliers",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "UserId",
                table: "SupplierPays",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "UserId",
                table: "SupplierAcounts",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "UserId",
                table: "Products",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "UserId",
                table: "ProductOperators",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "UserId",
                table: "ProductFaceValues",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "UserId",
                table: "Operators",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "UserId",
                table: "FaceValues",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "UserId",
                table: "Agents",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "UserId",
                table: "AgentAcounts",
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
                name: "IX_SupplierAcounts_UserId",
                table: "SupplierAcounts",
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

            migrationBuilder.CreateIndex(
                name: "IX_FaceValues_UserId",
                table: "FaceValues",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Agents_UserId",
                table: "Agents",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AgentAcounts_UserId",
                table: "AgentAcounts",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_AgentAcounts_AbpUsers_UserId",
                table: "AgentAcounts",
                column: "UserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Agents_AbpUsers_UserId",
                table: "Agents",
                column: "UserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_FaceValues_AbpUsers_UserId",
                table: "FaceValues",
                column: "UserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

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
                name: "FK_SupplierAcounts_AbpUsers_UserId",
                table: "SupplierAcounts",
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
    }
}
