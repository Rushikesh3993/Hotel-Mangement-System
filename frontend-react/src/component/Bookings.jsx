import React, { useEffect, useState } from "react";
import api from "../services/Api";


function Bookings() {
  const [customers, setCustomers] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);

  const [booking, setBooking] = useState({
    customerId: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
    status: "Confirmed"
  });

  // Load customers, rooms, bookings
  const loadData = () => {
    api.get("/customers").then((res) => setCustomers(res.data));

    api.get("/room").then((res) => setRooms(res.data));

    api.get("/bookings").then((res) => setBookings(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  // Simple change handler
  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  // Create booking
  const createBooking = () => {
    api.post("/bookings", booking).then((res) => {
      alert("Booking Successful!");
      loadData();
      setBooking({
        customerId: "",
        roomId: "",
        checkInDate: "",
        checkOutDate: "",
        status: "Confirmed"
      });
    }).catch(() => {
      alert("Room is already booked!");
    });
  };

  // Delete booking
  const deleteBooking = (id) => {
    api.delete(`/bookings/${id}`).then(() => {
      alert("Booking cancelled!");
      loadData();
    });
  };

  return (
    <div className="container mt-4">

      <h2 className="mb-4">Booking Management</h2>

      
      <div className="card p-3 mb-4 shadow-sm">
        <h5>Create Booking</h5>

        <div className="row">

         
          <div className="col-md-3 mb-2">
            <select
              name="customerId"
              className="form-select"
              value={booking.customerId}
              onChange={handleChange}
            >
              <option value="">Select Customer</option>
              {customers.map((c) => (
                <option key={c.customerId} value={c.customerId}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          
          <div className="col-md-3 mb-2">
            <select
              name="roomId"
              className="form-select"
              value={booking.roomId}
              onChange={handleChange}
            >
              <option value="">Select Room</option>

              {/* Show only available rooms */}
              {rooms.filter(r => r.status === "Available").map((r) => (
                <option key={r.roomId} value={r.roomId}>
                  {r.roomNumber} ({r.type})
                </option>
              ))}
            </select>
          </div>

          {/* Check-in */}
          <div className="col-md-3 mb-2">
            <input
              type="date"
              name="checkInDate"
              className="form-control"
              value={booking.checkInDate}
              onChange={handleChange}
            />
          </div>

          {/* Check-out */}
          <div className="col-md-3 mb-2">
            <input
              type="date"
              name="checkOutDate"
              className="form-control"
              value={booking.checkOutDate}
              onChange={handleChange}
            />
          </div>

        </div>

        
        <button className="btn btn-primary mt-2" onClick={createBooking}>
          Book Room
        </button>
      </div>


      
      <h4>All Bookings</h4>
      <table className="table table-bordered table-striped mt-3">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Room</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Status</th>
            <th>Cancel</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b) => (
            <tr key={b.bookingId}>
              <td>{b.bookingId}</td>
              <td>{b.customer?.name}</td>
              <td>{b.room?.roomNumber}</td>
              <td>{b.checkInDate?.split("T")[0]}</td>
              <td>{b.checkOutDate?.split("T")[0]}</td>
              <td>{b.status}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => deleteBooking(b.bookingId)}>
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Bookings;
