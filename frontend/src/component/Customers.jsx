import React, { useEffect, useState } from "react";
import api from "../services/Api";


function Customers() {
  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // Load all customers
  const loadCustomers = () => {
    api.get("/customers").then((res) => {
      setCustomers(res.data);
    });
  };

  useEffect(() => {
    loadCustomers();
  }, []);

 
  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  // Add customer
  const addCustomer = () => {
    api.post("/customers", customer).then(() => {
      alert("Customer added!");
      loadCustomers();
      setCustomer({ name: "", email: "", phone: "" });
    });
  };

  // Delete customer
  const deleteCustomer = (id) => {
    api.delete(`/customers/${id}`).then(() => {
      alert("Customer deleted!");
      loadCustomers();
    });
  };

  return (
    <div className="container mt-4">

      <h2 className="mb-4">Customer Management</h2>

      
      <div className="card p-3 mb-4 shadow-sm">
        <h5>Add Customer</h5>

        <div className="row">
          <div className="col-md-3 mb-2">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={customer.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3 mb-2">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={customer.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3 mb-2">
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Phone"
              value={customer.phone}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3 mb-2">
            <button className="btn btn-primary w-100" onClick={addCustomer}>
              Add Customer
            </button>
          </div>
        </div>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((c) => (
            <tr key={c.customerId}>
              <td>{c.customerId}</td>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteCustomer(c.customerId)}
                >
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

export default Customers;
