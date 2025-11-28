using HotelManagementSystem.Data;
using HotelManagementSystem.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HotelManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        // "https://localhost:7103/api/Customers/6 "

        private readonly AppDbContext _context;

        public CustomersController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Customers
        [HttpGet]
        public IActionResult GetCustomers()
        {
            var customers = _context.Customers.ToList();
            return Ok(customers);
        }

        // GET: api/Customers/5
        [HttpGet("{id}")]
        public IActionResult GetCustomer(int id)
        {
            var customer = _context.Customers.Find(id);
            if(customer == null)
            {
                return NotFound();
            }
            return Ok(customer);
        }

        // POST: api/Customers
        [HttpPost]
        public IActionResult CreateCustomer(Customer customer)
        {
            _context.Customers.Add(customer);
            _context.SaveChanges();
            return Ok(customer);
        }

        // PUT: api/Customers/5
        [HttpPut("{id}")]
        public IActionResult UpdateCustomer(int id, Customer customer)
        {
            var exs = _context.Customers.Find(id);
            if(exs == null)
            {
                return NotFound();
            }
            exs.Name = customer.Name;
            exs.Email = customer.Email;
            exs.Phone = customer.Phone;
            _context.SaveChanges();
            return Ok(exs);
        }

        // DELETE: api/Customers/5
        [HttpDelete("{id}")]
        public IActionResult DeleteCustomer(int id)
        {
            var customer = _context.Customers.Find(id);
            if(customer == null)
            {
                return NotFound();
            }
            _context.Customers.Remove(customer);
            _context.SaveChanges();
            return Ok("Customer Deleted Successfully");
        }
    }
}
