using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HotelManagementSystem.Models
{
    public class Room
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int RoomId { get; set; }

        public string RoomNumber { get; set; }

        public string Type { get; set; }

        [Precision(10, 2)]
        public decimal price { get; set; }

        public string Status { get; set; } = "Available";



    }
}
