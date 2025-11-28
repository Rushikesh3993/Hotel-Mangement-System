using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace HotelManagementSystem.Models
{
    public class Booking
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int BookingId { get; set; }

        public int CustomerId { get; set; }
        public int RoomId { get; set; }

        public DateTime CheckInDate { get; set; }

        public DateTime CheckOutDate { get; set; }

        public string Status { get; set; } = "Confirmed";

        //[JsonIgnore]
        public Customer Customer { get; set; }

        //[JsonIgnore]
        public Room Room { get; set; }
    }
}
