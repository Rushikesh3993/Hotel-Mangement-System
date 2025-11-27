using Microsoft.EntityFrameworkCore;

namespace HotelManagementSystem.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<HotelManagementSystem.Models.Room> Rooms { get; set; }
        public DbSet<HotelManagementSystem.Models.Customer> Customers { get; set; }

        public DbSet<HotelManagementSystem.Models.Booking> Bookings { get; set; }
    }
}
