using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BusinessHall.Migrations
{
    public partial class ModifyTypoAccount : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AgentAcounts");

            migrationBuilder.DropTable(
                name: "SupplierAcounts");

            migrationBuilder.CreateTable(
                name: "AgentAccounts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    TenantId = table.Column<int>(nullable: true),
                    AgentId = table.Column<int>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    TotalAmount = table.Column<decimal>(nullable: false),
                    AvaliableAmount = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AgentAccounts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AgentAccounts_Agents_AgentId",
                        column: x => x.AgentId,
                        principalTable: "Agents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AgentAccounts_AbpUsers_CreatorUserId",
                        column: x => x.CreatorUserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SupplierAccounts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    TenantId = table.Column<int>(nullable: true),
                    SupplierId = table.Column<int>(nullable: false),
                    TotalAmount = table.Column<decimal>(nullable: false),
                    AvaliableAmount = table.Column<decimal>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SupplierAccounts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SupplierAccounts_AbpUsers_CreatorUserId",
                        column: x => x.CreatorUserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SupplierAccounts_Suppliers_SupplierId",
                        column: x => x.SupplierId,
                        principalTable: "Suppliers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AgentAccounts_AgentId",
                table: "AgentAccounts",
                column: "AgentId");

            migrationBuilder.CreateIndex(
                name: "IX_AgentAccounts_CreatorUserId",
                table: "AgentAccounts",
                column: "CreatorUserId");

            migrationBuilder.CreateIndex(
                name: "IX_SupplierAccounts_CreatorUserId",
                table: "SupplierAccounts",
                column: "CreatorUserId");

            migrationBuilder.CreateIndex(
                name: "IX_SupplierAccounts_SupplierId",
                table: "SupplierAccounts",
                column: "SupplierId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AgentAccounts");

            migrationBuilder.DropTable(
                name: "SupplierAccounts");

            migrationBuilder.CreateTable(
                name: "AgentAcounts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    AgentId = table.Column<int>(nullable: false),
                    AvaliableAmount = table.Column<decimal>(nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: false),
                    TenantId = table.Column<int>(nullable: true),
                    TotalAmount = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AgentAcounts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AgentAcounts_Agents_AgentId",
                        column: x => x.AgentId,
                        principalTable: "Agents",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AgentAcounts_AbpUsers_CreatorUserId",
                        column: x => x.CreatorUserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SupplierAcounts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    AvaliableAmount = table.Column<decimal>(nullable: false),
                    CreationTime = table.Column<DateTime>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: false),
                    SupplierId = table.Column<int>(nullable: false),
                    TenantId = table.Column<int>(nullable: true),
                    TotalAmount = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SupplierAcounts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SupplierAcounts_AbpUsers_CreatorUserId",
                        column: x => x.CreatorUserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SupplierAcounts_Suppliers_SupplierId",
                        column: x => x.SupplierId,
                        principalTable: "Suppliers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AgentAcounts_AgentId",
                table: "AgentAcounts",
                column: "AgentId");

            migrationBuilder.CreateIndex(
                name: "IX_AgentAcounts_CreatorUserId",
                table: "AgentAcounts",
                column: "CreatorUserId");

            migrationBuilder.CreateIndex(
                name: "IX_SupplierAcounts_CreatorUserId",
                table: "SupplierAcounts",
                column: "CreatorUserId");

            migrationBuilder.CreateIndex(
                name: "IX_SupplierAcounts_SupplierId",
                table: "SupplierAcounts",
                column: "SupplierId");
        }
    }
}
