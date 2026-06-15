# SkillOber – AI-Powered E-Learning Platform

## Overview

SkillOber is a full-stack AI-powered E-Learning Platform built using the MERN Stack. The platform helps students discover courses, track learning progress, manage enrollments, and interact with instructors through a secure and user-friendly learning environment.

The project includes a React frontend, Node.js/Express backend, MongoDB Atlas database, JWT authentication, role-based authorization, course management, enrollment tracking, progress monitoring, and dashboard analytics.

---

## Features

### Student Features

* Browse available courses
* View course details
* Search courses
* Student Dashboard
* Track learning progress
* View enrolled courses
* Monitor completion statistics

### Instructor Features

* Instructor Dashboard
* Course Management
* Student Enrollment Tracking
* Course Performance Monitoring

### Admin Features

* Admin Dashboard
* Platform Analytics
* User Management
* Course Management

---

## Backend Features

### Authentication & Authorization

* User Registration
* User Login
* JWT Authentication
* Password Hashing using bcryptjs
* Protected Routes
* Role-Based Authorization (Admin, Instructor, Student)

### Course Management

* Create Course
* Get All Courses
* Get Course By ID
* Update Course
* Delete Course

### Enrollment Management

* Student Enrollment
* Enrollment Retrieval
* MongoDB Relationship Mapping

### Progress Tracking

* Learning Progress Monitoring
* Completion Percentage Tracking
* Progress Analytics

### Dashboard Analytics

* Admin Dashboard Statistics
* Student Dashboard Analytics
* Enrollment Statistics
* Course Statistics

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs
* dotenv
* CORS

### Development Tools

* Git
* GitHub
* VS Code
* Postman

---

## Project Structure

```text
SkillOber/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── server.js
│
├── elearning-frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── .gitignore
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/chourasialovely9-a09y/SkillOber.git
```

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd elearning-frontend
npm install
npm run dev
```

---

## Environment Variables

Create a `.env` file inside the backend folder:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

---

## API Modules

### Authentication

* POST /api/auth/register
* POST /api/auth/login

### Courses

* POST /api/courses
* GET /api/courses
* GET /api/courses/:id
* PUT /api/courses/:id
* DELETE /api/courses/:id

### Enrollments

* POST /api/enrollments
* GET /api/enrollments

### Progress

* POST /api/progress
* GET /api/progress

### Dashboard

* GET /api/dashboard
* GET /api/dashboard/student/:studentId

---

## Current Progress

### Completed

* Frontend Development
* Backend Development
* MongoDB Atlas Integration
* JWT Authentication
* Role-Based Authorization
* Course Management APIs
* Enrollment APIs
* Progress Tracking APIs
* Dashboard Analytics APIs
* Protected Routes

### Upcoming

* Frontend-Backend Integration
* AI Recommendation System
* Payment Gateway Integration
* Certificate Generation
* Live Classes Module

---

## Author

**Lovely Chourasia**

Aarivya Labs Internship Program

SkillOber Project

GitHub Repository:
https://github.com/chourasialovely9-a09y/SkillOber
