import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import api from "../services/Api";

function Dashboard() {
  const [rooms, setRooms] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    api.get("/room").then((res) => setRooms(res.data));
    api.get("/customers").then((res) => setCustomers(res.data));
    api.get("/bookings").then((res) => setBookings(res.data));
  }, []);

  const totalRooms = rooms.length;
  const bookedRooms = rooms.filter((r) => r.status === "Booked").length;
  const availableRooms = rooms.filter((r) => r.status === "Available").length;
  const totalCustomers = customers.length;

  return (
    <div className="dashboard-container">

      <h2 className="dashboard-title">Dashboard Overview</h2>
      <div className="hero-banner">
        <h1>Welcome,  👋</h1>
        <p>Here’s your hotel overview and current system status.</p>
      </div>

      

      <div className="dashboard-row">
        <div className="dash-card card-1">
          <h4>Total Rooms</h4>
          <p>{totalRooms}</p>
        </div>

        <div className="dash-card card-2">
          <h4>Booked Rooms</h4>
          <p>{bookedRooms}</p>
        </div>

        <div className="dash-card card-3">
          <h4>Available Rooms</h4>
          <p>{availableRooms}</p>
        </div>

        <div className="dash-card card-4">
          <h4>Total Customers</h4>
          <p>{totalCustomers}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
