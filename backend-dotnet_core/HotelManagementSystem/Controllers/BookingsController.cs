using HotelManagementSystem.Data;
using HotelManagementSystem.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HotelManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookingsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BookingsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Bookings
        [HttpGet]
        public IActionResult GetBookings()
        {
            var bookings = _context.Bookings
                .Include(b => b.Customer)
                .Include(b => b.Room)
                .ToList();
            return Ok(bookings);
        }

        // GET: api/Bookings/5
        [HttpGet("{id}")]
        public IActionResult GetBooking(int id)
        {
            var booking = _context.Bookings
                .Include(b => b.Customer)
                .Include(b => b.Room)
                .FirstOrDefault(b => b.BookingId == id);
            if (booking == null)
            {
                return NotFound();
            }
            return Ok(booking);
        }

        // POST: api/Bookings
        [HttpPost]
        public IActionResult CreateBooking(BookingDTO model)
        {
            
            var isBooked = _context.Bookings
                .Any(b => b.RoomId == model.RoomId && b.Status == "Confirmed");

            if (isBooked)
            {
                return BadRequest("Room is already booked.");
            }

            
            var booking = new Booking
            {
                CustomerId = model.CustomerId,
                RoomId = model.RoomId,
                CheckInDate = model.CheckInDate,
                CheckOutDate = model.CheckOutDate,
                Status = model.Status
            };

            
            _context.Bookings.Add(booking);

          
            var room = _context.Rooms.Find(model.RoomId);
            if (room != null)
            {
                room.Status = "Booked";
            }

            _context.SaveChanges();

            return Ok(booking);
        }


        //delete: api/Bookings/5
        [HttpDelete("{id}")]
        public IActionResult DeleteBooking(int id)
        {
            var booking = _context.Bookings.Find(id);
            if (booking == null)
            {
                return NotFound();
            }

            var room = _context.Rooms.Find(booking.RoomId);
            if (room != null)
            {
                room.Status = "Available";
            }

            _context.Bookings.Remove(booking);
            _context.SaveChanges();
            return Ok("Booking cancelled successfully");
        }

    }
}
