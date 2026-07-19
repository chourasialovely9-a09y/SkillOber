# 🎓 SkillOber – Smart E-Learning Platform

## Overview

SkillOber is a full-stack MERN-based E-Learning Platform designed to provide an interactive and efficient learning experience for students while offering powerful course management tools for instructors and administrators.

The platform enables users to browse courses, enroll in learning programs, track their progress, attempt quizzes, generate certificates, and access role-based dashboards through a modern and responsive user interface.

---

# 🚀 Features

## 👨‍🎓 Student Features

- User Registration & Login
- JWT Authentication
- Browse Courses
- View Course Details
- Course Enrollment
- Student Dashboard
- Student Analytics Dashboard
- Learning Progress Tracking
- Quiz Participation
- Certificate Generation & Download

---

## 👨‍🏫 Instructor Features

- Instructor Dashboard
- Create Courses
- Update Courses
- Delete Courses
- View Course Statistics
- Monitor Student Enrollments

---

## 👨‍💼 Admin Features

- Admin Dashboard
- Platform Analytics
- User Management
- Course Management
- Role-Based Access Control

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Recharts
- Context API

## Backend

- Node.js
- Express.js
- REST APIs
- JWT Authentication
- bcrypt

## Database

- MongoDB Atlas
- Mongoose

## Development Tools

- Git
- GitHub
- Postman
- VS Code

---

# 📂 Project Structure

```
SkillOber
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── public
│   ├── src
│   ├── components
│   ├── pages
│   ├── context
│   ├── api
│   └── package.json
│
├── README.md
└── .gitignore
```

---

# 👥 User Roles

## Student

- Register/Login
- Browse Courses
- View Course Details
- Enroll in Courses
- Track Learning Progress
- View Student Dashboard
- Attempt Quiz
- Generate Certificate

## Instructor

- Create Courses
- Update Courses
- Delete Courses
- View Instructor Dashboard
- Monitor Student Enrollments

## Admin

- Manage Users
- Manage Courses
- View Platform Analytics
- Monitor Overall Statistics

---

# 📚 Database Models

## User

- Name
- Email
- Password
- Role
- Interests

## Course

- Title
- Description
- Instructor
- Category
- Thumbnail
- Price
- Level
- Tags
- Rating
- Enrolled Students

## Enrollment

- Student
- Course
- Enrollment Date

## Progress

- Student
- Course
- Completed Lessons
- Total Lessons
- Completion Percentage

## Quiz

- Course
- Questions
- Correct Answers

---

# 🔐 Security Features

- JWT Authentication
- Password Hashing using bcrypt
- Protected Routes
- Role-Based Authorization
- MongoDB Atlas Integration

---

# 📌 Implemented Modules

## Authentication

- User Registration
- User Login
- JWT Authentication
- Role-Based Authorization

## Course Management

- Create Course
- Update Course
- Delete Course
- Browse Courses
- View Course Details
- Course Enrollment

## Student Dashboard

- Learning Progress
- Analytics Dashboard
- Enrolled Courses
- Quiz Access
- Certificate Access

## Instructor Dashboard

- Manage Courses
- Course Statistics
- Student Overview

## Admin Dashboard

- User Management
- Course Management
- Platform Analytics
- Dashboard Statistics

## Quiz Module

- Attempt Quiz
- Automatic Score Calculation
- Pass/Fail Evaluation

## Certificate Module

- Generate Course Completion Certificate
- Download Certificate as PDF

---

# 🔗 API Modules

## Authentication APIs

- Register User
- Login User

## Course APIs

- Create Course
- Get All Courses
- Get Course by ID
- Update Course
- Delete Course

## Enrollment APIs

- Enroll in Course
- View Enrollments

## Progress APIs

- Create Progress
- Update Progress
- Student Analytics

## Quiz APIs

- Retrieve Quiz
- Submit Quiz

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/chourasialovely9-a09y/SkillOber.git
```

## Backend

```bash
cd backend
npm install
npm run dev
```

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 🔧 Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

# 📸 Application Modules

- Home Page
- Login & Registration
- Courses Page
- Course Details
- Student Dashboard
- Student Analytics
- Instructor Dashboard
- Admin Dashboard
- Quiz Module
- Certificate Generation

---

# 🚀 Future Enhancements

- AI-Powered Course Recommendations
- Course Search & Advanced Filtering
- Assignment Management
- Discussion Forum
- Real-Time Chat
- Live Notifications
- Virtual Classroom
- Docker & Kubernetes Deployment
- Cloud Media Storage
- Email Notifications

---

# 👩‍💻 Author

**Lovely Chourasia**

B.Tech CSE (AI & ML)

KIIT University

GitHub Profile:
https://github.com/chourasialovely9-a09y

Project Repository:
https://github.com/chourasialovely9-a09y/SkillOber

---

# 📄 License

This project is developed for educational and internship purposes.

---

⭐ If you found this project useful, consider giving it a star on GitHub!