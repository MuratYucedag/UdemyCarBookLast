using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace UdemyCarBook.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class mig_add_update_authorid_column : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Blogs_Authors_AuthorID1",
                table: "Blogs");

            migrationBuilder.DropIndex(
                name: "IX_Blogs_AuthorID1",
                table: "Blogs");

            migrationBuilder.DropColumn(
                name: "AuthorID1",
                table: "Blogs");

            migrationBuilder.AlterColumn<int>(
                name: "AuthorID",
                table: "Blogs",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_Blogs_AuthorID",
                table: "Blogs",
                column: "AuthorID");

            migrationBuilder.AddForeignKey(
                name: "FK_Blogs_Authors_AuthorID",
                table: "Blogs",
                column: "AuthorID",
                principalTable: "Authors",
                principalColumn: "AuthorID",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Blogs_Authors_AuthorID",
                table: "Blogs");

            migrationBuilder.DropIndex(
                name: "IX_Blogs_AuthorID",
                table: "Blogs");

            migrationBuilder.AlterColumn<string>(
                name: "AuthorID",
                table: "Blogs",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "AuthorID1",
                table: "Blogs",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Blogs_AuthorID1",
                table: "Blogs",
                column: "AuthorID1");

            migrationBuilder.AddForeignKey(
                name: "FK_Blogs_Authors_AuthorID1",
                table: "Blogs",
                column: "AuthorID1",
                principalTable: "Authors",
                principalColumn: "AuthorID",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
