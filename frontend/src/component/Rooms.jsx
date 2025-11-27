
import { useEffect, useState } from "react";
import api from "../services/Api";


function Rooms() {

    const [rooms, setRooms] = useState([]);
    const [room, setRoom] = useState({
        roomNumber: "",
        type: "",
        price: "",
        status: "Available"
    });

    //get all rooms
    const loadRooms = () => {
        api.get("/room").then((res) => {
            setRooms(res.data);
        });
    };

    useEffect(() => {
        loadRooms();
    }, []);

    const handleChange = (e) => {
        setRoom({ ...room, [e.target.name]: e.target.value });
    };

    //Add room
    const addRoom = () => {
        api.post("/room", room).then((res) => {
            alert("Room added!");
            loadRooms();
            setRoom({ roomNumber: "", type: "", price: "", status: "Available" });
        });
    };

    //delete room
    const deleteRoom = (id) => {
        api.delete(`/room/${id}`).then(() => {
            alert("Room deleted!");
            loadRooms();
        });
    };

    return (
        <div className="container mt-4">

            <h2 className="mb-4">Rooms Management</h2>

            
            <div className="card p-3 mb-4 shadow-sm">
                <h5>Add Room</h5>

                <div className="row">
                    <div className="col-md-3">
                        <input
                            type="text"
                            name="roomNumber"
                            className="form-control"
                            placeholder="Room Number"
                            value={room.roomNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-3">
                        <input
                            type="text"
                            name="type"
                            className="form-control"
                            placeholder="Type"
                            value={room.type}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-3">
                        <input
                            type="number"
                            name="price"
                            className="form-control"
                            placeholder="Price"
                            value={room.price}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-md-3">
                        <button className="btn btn-primary w-100" onClick={addRoom}>
                            Add Room
                        </button>
                    </div>
                </div>
            </div>

            
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Room Number</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {rooms.map((r) => (
                        <tr key={r.roomId}>
                            <td>{r.roomId}</td>
                            <td>{r.roomNumber}</td>
                            <td>{r.type}</td>
                            <td>{r.price}</td>
                            <td>{r.status}</td>
                            <td>
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteRoom(r.roomId)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );


}

export default Rooms;