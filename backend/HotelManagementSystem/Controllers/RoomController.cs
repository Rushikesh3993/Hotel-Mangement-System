using HotelManagementSystem.Data;
using HotelManagementSystem.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagementSystem.Controllers
{
    //"https://localhost:7103/api/Room/6 "

    [Route("api/[controller]")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly AppDbContext _context;
        
        public RoomController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Room
        [HttpGet]
        public IActionResult GetRooms()
        {
            var rooms = _context.Rooms.ToList();
            return Ok(rooms);
        }

        // GET: api/Room/5
        [HttpGet("{id}")]

        public IActionResult GetRoom(int id)
        {
            var room = _context.Rooms.Find(id);
            if(room == null)
            {
                return NotFound();
            }
            return Ok(room);
        }

        // POST: api/Room
        [HttpPost]
        public IActionResult CreateRoom(Room room)
        {
            _context.Rooms.Add(room);
            _context.SaveChanges();
            return Ok(room);
        }

        // PUT: api/Room/5
        [HttpPut("{id}")]
        public IActionResult UpdateRoom(int id, Room room)
        {
            var exs = _context.Rooms.Find(id);
            if(exs == null)
            {
                return NotFound();
            }
            exs.RoomNumber = room.RoomNumber;
            exs.Type = room.Type;
            exs.price = room.price;
            exs.Status = room.Status;
            _context.SaveChanges();
            return Ok(exs);
        }

        // DELETE: api/Room/5
        [HttpDelete("{id}")]
        public IActionResult DeleteRoom(int id)
        {
            var room = _context.Rooms.Find(id);
            if(room == null)
            {
                return NotFound();
            }
            _context.Rooms.Remove(room);
            _context.SaveChanges();
            return Ok("Room Deleted Succesfully");
        }
    }
}
