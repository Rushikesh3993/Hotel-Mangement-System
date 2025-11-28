# 🏨 Hotel Management System  
A full-stack **Hotel Management Web Application** built with **ASP.NET Core Web API** + **React (Vite)** + **SQL Server**.


---

## 🚀 Tech Stack

### **Frontend**
- React (Vite)
- Axios
- Bootstrap 5
- CSS3

### **Backend**
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server

---

## 📦 Folder Structure

```
HotelManagementSystem/
│
├── backend/      → ASP.NET Core API
│   ├── Controllers/
│   ├── Models/
│   ├── Data/
│   ├── Program.cs
│   └── ...
│
└── frontend/     → React + Vite UI
    ├── src/
    ├── components/
    ├── services/api.js
    └── ...
```

---

# ✨ Features (Complete End-to-End)

### ✔ **Room Management** (FULL CRUD)
- Add Room  
- **Edit Room**  
- **Delete Room**  
- View Rooms  
- Auto update room status to **Booked** when booking is created  

### ✔ **Customer Management** (FULL CRUD)
- Add Customer  
- **Edit Customer**  
- **Delete Customer**  
- View Customers  

### ✔ **Booking Module**
- Select Customer  
- Select only **Available** rooms  
- Select Check-in / Check-out  
- Prevents double booking  
- Auto-updates room status  
- Displays customer + room data  
- Delete Booking (optional)

### ✔ **Dashboard**
- Total Rooms  
- Booked Rooms  
- Available Rooms  
- Total Customers  
- Stats Cards  
- Welcome banner  
- Footer  

---

# 🗂 Database Schema (SQL Server)

### **Rooms Table**
| Column       | Type     |
|--------------|----------|
| RoomId       | int (PK) |
| RoomNumber   | string   |
| Type         | string   |
| Price        | decimal  |
| Status       | string   |

### **Customers Table**
| Column     | Type     |
|------------|----------|
| CustomerId | int (PK) |
| Name       | string   |
| Email      | string   |
| Phone      | string   |

### **Bookings Table**
| Column       | Type     |
|--------------|----------|
| BookingId    | int (PK) |
| CustomerId   | FK       |
| RoomId       | FK       |
| CheckInDate  | datetime |
| CheckOutDate | datetime |
| Status       | string   |

---

# 🔌 API Endpoints

### **Rooms**
```
GET     /api/Room
GET     /api/Room/{id}
POST    /api/Room
PUT     /api/Room/{id}
DELETE  /api/Room/{id}
```

### **Customers**
```
GET     /api/Customers
GET     /api/Customers/{id}
POST    /api/Customers
PUT     /api/Customers/{id}
DELETE  /api/Customers/{id}
```

### **Bookings**
```
GET     /api/Bookings
GET     /api/Bookings/{id}
POST    /api/Bookings
DELETE  /api/Bookings/{id}
```

Includes:
- Prevent double booking  
- Auto-update room status  

---

# 🖥 Running the Backend (ASP.NET Core)

### **1️⃣ Open Project in Visual Studio**

### **2️⃣ Run Migrations Using Package Manager Console**

```
Add-Migration Initial
Update-Database
```

If new changes are made later:

```
Add-Migration AnyName
Update-Database
```

API runs at:

👉 **https://localhost:7103**

---

# 🌐 Running the Frontend (React + Vite)

### **1️⃣ Install Dependencies**
```
npm install
```

### **2️⃣ Start Dev Server**
```
npm run dev
```

Frontend runs at:

👉 **http://localhost:5173**

---

# 📸 Screenshots

### 🏠 Dashboard
![Dashboard](screenshots/Screenshot%202025-11-28%20012852.png)

---

# 👨‍💻 Developer  
**Rushikesh Mote**  
GitHub: `https://github.com/Rushikesh3993`

---

# 🎉 Thank You!  
Feel free to use, improve, or fork this project.
