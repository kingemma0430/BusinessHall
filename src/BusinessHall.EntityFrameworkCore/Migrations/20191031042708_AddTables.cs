using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BusinessHall.Migrations
{
    public partial class AddTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Agents",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    TenantId = table.Column<int>(nullable: true),
                    Name = table.Column<string>(maxLength: 45, nullable: true),
                    Description = table.Column<string>(maxLength: 500, nullable: true),
                    CreatorUserId = table.Column<long>(nullable: false),
                    CretionTime = table.Column<DateTime>(nullable: false),
                    UserId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Agents", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Agents_AbpUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "FaceValues",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    TenantId = table.Column<int>(nullable: true),
                    Name = table.Column<string>(maxLength: 45, nullable: true),
                    ActualValue = table.Column<decimal>(nullable: false),
                    Description = table.Column<string>(maxLength: 500, nullable: true),
                    CreatorUserId = table.Column<long>(nullable: false),
                    CretionTime = table.Column<DateTime>(nullable: false),
                    UserId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FaceValues", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FaceValues_AbpUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "SupplierAcounts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    TenantId = table.Column<int>(nullable: true),
                    SupplierId = table.Column<int>(nullable: false),
                    TotalAmount = table.Column<decimal>(nullable: false),
                    AvaliableAmount = table.Column<decimal>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: false),
                    CretionTime = table.Column<DateTime>(nullable: false),
                    UserId = table.Column<long>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SupplierAcounts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SupplierAcounts_Suppliers_SupplierId",
                        column: x => x.SupplierId,
                        principalTable: "Suppliers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_SupplierAcounts_AbpUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "AgentAcounts",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    TenantId = table.Column<int>(nullable: true),
                    AgentId = table.Column<int>(nullable: false),
                    CreatorUserId = table.Column<long>(nullable: false),
                    CretionTime = table.Column<DateTime>(nullable: false),
                    TotalAmount = table.Column<decimal>(nullable: false),
                    AvaliableAmount = table.Column<decimal>(nullable: false),
                    UserId = table.Column<long>(nullable: true)
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
                        name: "FK_AgentAcounts_AbpUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AbpUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AgentAcounts_AgentId",
                table: "AgentAcounts",
                column: "AgentId");

            migrationBuilder.CreateIndex(
                name: "IX_AgentAcounts_UserId",
                table: "AgentAcounts",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Agents_UserId",
                table: "Agents",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_FaceValues_UserId",
                table: "FaceValues",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_SupplierAcounts_SupplierId",
                table: "SupplierAcounts",
                column: "SupplierId");

            migrationBuilder.CreateIndex(
                name: "IX_SupplierAcounts_UserId",
                table: "SupplierAcounts",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AgentAcounts");

            migrationBuilder.DropTable(
                name: "FaceValues");

            migrationBuilder.DropTable(
                name: "SupplierAcounts");

            migrationBuilder.DropTable(
                name: "Agents");
        }
    }
}
