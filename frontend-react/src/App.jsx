import { Routes, Route, Link } from "react-router-dom";
import Rooms from "./component/Rooms";
import Customers from "./component/Customers";
import Bookings from "./component/Bookings";
import Dashboard from "./component/Dashboard";
import Footer from "./component/Footer";

function App() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 w-100">
        <a className="navbar-brand fw-bold" href="#">Hotel Management</a>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">Dashboard</Link>
          <Link className="nav-link" to="/rooms">Rooms</Link>
          <Link className="nav-link" to="/customers">Customers</Link>
          <Link className="nav-link" to="/bookings">Bookings</Link>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div className="app-body">
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/bookings" element={<Bookings />} />
          </Routes>
        </div>

        <Footer />
      </div>


    </div>
  );
}

export default App;
