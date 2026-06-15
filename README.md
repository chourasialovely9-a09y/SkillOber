# SkillOber – AI-Powered E-Learning Platform

## Overview

SkillOber is a full-stack AI-powered E-Learning Platform built to provide an interactive and personalized learning experience for students while offering efficient course management tools for instructors and administrators.

The platform enables users to browse courses, enroll in learning programs, track progress, and monitor learning analytics through a modern and responsive interface.

---

## Features

### Student Features

* User Registration and Login
* JWT Authentication
* Browse Courses
* View Course Details
* Course Enrollment
* Learning Progress Tracking
* Student Dashboard
* Personalized Learning Experience

### Instructor Features

* Create and Manage Courses
* Update Course Information
* Monitor Student Enrollments
* Instructor Dashboard

### Admin Features

* Platform Analytics Dashboard
* User Management
* Course Management
* Enrollment Statistics
* Role-Based Access Control

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Context API

### Backend

* Node.js
* Express.js
* JWT Authentication
* REST APIs

### Database

* MongoDB Atlas
* Mongoose

### Tools

* Git
* GitHub
* Postman
* VS Code

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
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Database Models

### User

* Name
* Email
* Password
* Role (Student / Instructor / Admin)

### Course

* Title
* Description
* Instructor
* Category
* Thumbnail
* Price

### Enrollment

* Student Reference
* Course Reference
* Enrollment Date

### Progress

* Student Reference
* Course Reference
* Completion Percentage

---

## Security Features

* JWT Authentication
* Password Hashing using Bcrypt
* Protected Routes
* Role-Based Authorization
* MongoDB Atlas Integration

---

## API Modules

### Authentication APIs

* Register User
* Login User
* JWT Token Generation

### Course APIs

* Create Course
* Get Courses
* Get Course by ID
* Update Course
* Delete Course

### Enrollment APIs

* Enroll in Course
* View Enrollments

### Progress APIs

* Track Progress
* Update Progress

### Dashboard APIs

* Admin Dashboard Analytics
* Student Dashboard Statistics

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

## Future Enhancements

* AI Course Recommendation System
* Payment Gateway Integration
* Certificate Generation
* Live Classes Module
* Discussion Forums
* AI Learning Assistant
* Real-Time Notifications

---

## Author

**Lovely Chourasia**

Aarivya Labs Internship Program

GitHub Repository:
https://github.com/chourasialovely9-a09y/SkillOber
