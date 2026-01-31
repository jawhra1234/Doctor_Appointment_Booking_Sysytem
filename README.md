
# 🏥 Doctor Appointment Booking System (Prescripto)

A full-stack **Doctor Appointment Booking System** that allows users to browse trusted doctors, book appointments seamlessly, and manage appointments online.
The system also includes a dedicated **Admin/Doctor dashboard** for managing doctors, patients, and appointments.

---

## 🌐 Live Deployment

### 👤 Patient Frontend

🔗 [https://doctor-appointment-booking-sysytem-1-x5oy.onrender.com]([https://doctor-appointment-booking-sysytem-1-x5oy.onrender.com](https://doctor-appointment-booking-sysytem-1.onrender.com/))

### 🛠️ Admin / Doctor Panel

🔗 [https://doctor-appointment-booking-sysytem-1-admin.onrender.com]([https://doctor-appointment-booking-sysytem-1-admin.onrender.com](https://doctor-appointment-booking-sysytem-1-x5oy.onrender.com/))

### ⚙️ Backend API

🔗 [https://doctor-appointment-booking-sysytem.onrender.com](https://doctor-appointment-booking-sysytem.onrender.com)

---

## 📂 Project Structure

```
Doctor_Appointment_Booking_System/
├── frontend/        # User-facing application
├── admin/           # Admin & Doctor dashboard
├── backend/         # REST API
```

---

## 🛠️ Tech Stack

### Frontend & Admin

* React (Vite)
* JavaScript
* HTML5, CSS3
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication

### Deployment

* Render (Static Sites + Web Service)

---

## ✨ Features

### 👤 Patient / User Features

#### 🧭 Navigation

* Home
* All Doctors
* About
* Contact
* My Appointments
* Login / Logout

#### 🏠 Home Page

* Hero section: **“Book Appointment With Trusted Doctors”**
* Browse trusted doctors easily
* CTA for booking appointments
* Highlights:

  * 100+ Trusted Doctors
  * Hassle-free appointment scheduling

#### 🔍 Find Doctors by Speciality

* General Physician
* Gynecologist
* Dermatologist
* Pediatricians
* Neurologist
* Gastroenterologist

#### 👨‍⚕️ Doctors Listing

* Doctor name & speciality
* Availability status
* View multiple doctors
* “More” option to explore additional doctors

#### 📅 Book Appointment

* Select doctor
* Choose date & time
* View consultation fee
* Book appointment instantly

#### 📄 My Appointments

* View all booked appointments
* Appointment details:

  * Doctor name & speciality
  * Address
  * Date & time
  * Consultation fee
  * Payment status (Pending / Completed)
* Actions:

  * Pay online
  * Cancel appointment

---

### 🧑‍⚕️ Doctor / Admin Features

#### 📊 Dashboard

* Overview of appointments
* Quick access to management sections

#### 📋 Appointments Management

* View all appointments
* Appointment details:

  * Patient name
  * Age
  * Payment mode (Cash / Online)
  * Date & time
  * Fees
  * Status (Completed / Cancelled)

#### 👤 Profile Management

* Doctor profile details
* Secure logout functionality

#### 🔐 Authentication

* Role-based access
* Secure admin & doctor login
* JWT-based session handling

---

## ⚙️ Environment Variables

### Frontend (`frontend/.env`)

```env
VITE_BACKEND_URL=https://doctor-appointment-booking-sysytem.onrender.com
```

### Admin (`admin/.env`)

```env
VITE_BACKEND_URL=https://doctor-appointment-booking-sysytem.onrender.com
```

### Backend (`backend/.env`)

```env
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 💻 Local Development Setup

### Clone Repository

```bash
git clone https://github.com/your-username/Doctor_Appointment_Booking_System.git
cd Doctor_Appointment_Booking_System
```

### Backend

```bash
cd backend
npm install
npm start
```

Runs on:

```
http://localhost:4000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

### Admin Panel

```bash
cd admin
npm install
npm run dev
```

Runs on:

```
http://localhost:5174
```

---

## 🚀 Deployment (Render – Vite Apps)

### Frontend / Admin Render Settings

| Setting           | Value                          |
| ----------------- | ------------------------------ |
| Root Directory    | `frontend` / `admin`           |
| Build Command     | `npm install && npm run build` |
| Publish Directory | `dist`                         |

### Redirect Rule (Important)

```
/*   /index.html   200
```

---

## 🔒 Security & Best Practices

* JWT authentication
* Protected routes
* Separate frontend & admin deployments
* Environment-based configuration

---

## 📌 Why Separate Frontend & Admin?

* Better security
* Cleaner role separation
* Independent scaling
* Industry-standard architecture

---

## 🚧 Future Enhancements

* Online payment gateway
* Email/SMS appointment reminders
* Doctor availability calendar
* Advanced analytics dashboard
* Role-based permissions

---

## 👨‍🎓 Author

**Shaik Jawhara**
3rd Year – Computer Science Engineering
IIITDM Kancheepuram

