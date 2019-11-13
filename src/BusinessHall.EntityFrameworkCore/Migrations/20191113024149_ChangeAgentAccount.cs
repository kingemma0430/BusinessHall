using Microsoft.EntityFrameworkCore.Migrations;

namespace BusinessHall.Migrations
{
    public partial class ChangeAgentAccount : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotalAmount",
                table: "AgentAccounts");

            migrationBuilder.AddColumn<string>(
                name: "Code",
                table: "Agents",
                maxLength: 45,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NickName",
                table: "Agents",
                maxLength: 500,
                nullable: true);

            migrationBuilder.AlterColumn<decimal>(
                name: "AvaliableAmount",
                table: "AgentAccounts",
                nullable: true,
                oldClrType: typeof(decimal));

            migrationBuilder.AddColumn<decimal>(
                name: "ChargedAmount",
                table: "AgentAccounts",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "CreditPercentAmount",
                table: "AgentAccounts",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "UsedAmount",
                table: "AgentAccounts",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "WithDrawAmount",
                table: "AgentAccounts",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Code",
                table: "Agents");

            migrationBuilder.DropColumn(
                name: "NickName",
                table: "Agents");

            migrationBuilder.DropColumn(
                name: "ChargedAmount",
                table: "AgentAccounts");

            migrationBuilder.DropColumn(
                name: "CreditPercentAmount",
                table: "AgentAccounts");

            migrationBuilder.DropColumn(
                name: "UsedAmount",
                table: "AgentAccounts");

            migrationBuilder.DropColumn(
                name: "WithDrawAmount",
                table: "AgentAccounts");

            migrationBuilder.AlterColumn<decimal>(
                name: "AvaliableAmount",
                table: "AgentAccounts",
                nullable: false,
                oldClrType: typeof(decimal),
                oldNullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "TotalAmount",
                table: "AgentAccounts",
                nullable: false,
                defaultValue: 0m);
        }
    }
}
