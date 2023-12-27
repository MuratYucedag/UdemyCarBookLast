using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UdemyCarBook.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class mig_add_reservation_car_relation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Reservations_CarID",
                table: "Reservations",
                column: "CarID");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_Cars_CarID",
                table: "Reservations",
                column: "CarID",
                principalTable: "Cars",
                principalColumn: "CarID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_Cars_CarID",
                table: "Reservations");

            migrationBuilder.DropIndex(
                name: "IX_Reservations_CarID",
                table: "Reservations");
        }
    }
}
