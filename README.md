# SkillOber – AI-Powered E-Learning Platform

## Overview

SkillOber is a full-stack AI-powered E-Learning Platform built to provide an interactive and personalized learning experience for students while offering efficient course management tools for instructors and administrators.

The platform enables users to browse courses, enroll in learning programs, track progress, monitor learning analytics, earn milestones, and visualize learning performance through a modern and responsive interface.

---

## Features

### Student Features

* User Registration and Login
* JWT Authentication
* Browse Courses
* View Course Details
* Course Enrollment
* Learning Progress Tracking
* Learning Analytics Dashboard
* Performance Visualization
* Milestone Tracking
* Certificate Tracking
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
* Axios
* Recharts

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
* Completed Lessons
* Total Lessons
* Completion Percentage
* Milestones
* Certificate Status

### Activity

* Student Reference
* Activity Type
* Timestamp

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
* Learning Analytics
* Milestone Tracking
* Certificate Tracking

### Dashboard APIs

* Admin Dashboard Analytics
* Student Dashboard Statistics

---

## Week 4 – Student Progress Tracking System

### Features Implemented

* Learning Analytics Dashboard
* Progress Tracking System
* Activity Tracking
* Course Completion Tracking
* Performance Visualization using Recharts
* Milestone Tracking
* Certificate Tracking
* Student Dashboard Integration

### Analytics Metrics

* Total Courses
* Completed Courses
* Average Progress
* Certificates Earned

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
* Personalized Learning Paths
* Skill Gap Analysis
* Payment Gateway Integration
* Live Classes Module
* Discussion Forums
* AI Learning Assistant
* Real-Time Notifications

---

## Author

Lovely Chourasia

Aarivya Labs Internship Program

GitHub Repository:
https://github.com/chourasialovely9-a09y/SkillOber
