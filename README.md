# SkillOber – AI-Powered E-Learning Platform

## Overview

SkillOber is a full-stack AI-powered E-Learning Platform built to provide an interactive and personalized learning experience for students while offering efficient course management tools for instructors and administrators.

The platform enables users to browse courses, receive AI-powered course recommendations, enroll in learning programs, track learning progress, participate in quizzes, submit assignments, join virtual classrooms, engage in discussion forums, receive notifications, and collaborate through real-time chat using a modern and responsive interface.

---

## Features

### Student Features

* User Registration and Login
* JWT Authentication
* Browse Courses
* View Course Details
* AI-Based Course Recommendations
* Course Enrollment
* Learning Progress Tracking
* Learning Analytics Dashboard
* Performance Visualization
* Quiz Participation
* Assignment Submission
* Discussion Forum
* Real-Time Chat
* Virtual Classroom Access
* Notifications
* Student Dashboard

### Instructor Features

* Create and Manage Courses
* Update Course Information
* Create Quizzes
* Create Assignments
* Manage Virtual Classrooms
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
* Socket.IO
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
* Interests

### Course

* Title
* Description
* Instructor
* Category
* Thumbnail
* Price
* Level
* Tags
* Rating
* Enrolled Students

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

### Quiz

* Course Reference
* Quiz Title
* Questions
* Options
* Correct Answers

### Assignment

* Course Reference
* Assignment Title
* Description
* Due Date
* Student Submissions

### Notification

* User Reference
* Title
* Message
* Type
* Read Status

### Discussion

* Course Reference
* Student Reference
* Discussion Message

### Chat

* Course Reference
* Sender
* Sender Name
* Message

### Virtual Classroom

* Course Reference
* Instructor
* Meeting Link
* Class Schedule
* Learning Resources

---

## Security Features

* JWT Authentication
* Password Hashing using Bcrypt
* Protected Routes
* Role-Based Authorization
* MongoDB Atlas Integration

---

## Implemented Modules

### Authentication

* User Registration
* User Login
* JWT Authentication
* User Profile
* Role-Based Authorization

### Course Management

* Create Course
* Update Course
* Delete Course
* Browse Courses
* Course Enrollment

### Learning Progress

* Progress Tracking
* Learning Analytics Dashboard
* Performance Visualization
* Activity Tracking
* Certificate Tracking

### AI Recommendation Engine

* Personalized Course Recommendations
* User Interest-Based Recommendation Logic
* Course Filtering
* Course Ranking

### Quiz Management

* Create Quiz
* Retrieve Quiz
* Submit Quiz
* Automatic Score Calculation

### Assignment Management

* Create Assignment
* Retrieve Assignments
* Submit Assignments
* Delete Assignments

### Discussion Forum

* Create Discussion
* Retrieve Discussions
* Delete Discussions

### Notification System

* Create Notifications
* Retrieve Notifications
* Mark Notifications as Read

### Real-Time Chat

* Send Messages
* Retrieve Chat History
* Socket.IO Integration

### Virtual Classroom

* Create Virtual Classroom
* Retrieve Virtual Classroom
* Update Virtual Classroom
* Delete Virtual Classroom
* Learning Resource Management

---

## API Modules

### Authentication APIs

* Register User
* Login User
* User Profile

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

### Recommendation APIs

* Personalized Course Recommendation
* Course Filtering
* Course Ranking

### Quiz APIs

* Create Quiz
* Retrieve Quiz
* Submit Quiz

### Assignment APIs

* Create Assignment
* Retrieve Assignments
* Submit Assignment
* Delete Assignment

### Discussion APIs

* Create Discussion
* Retrieve Discussions
* Delete Discussion

### Notification APIs

* Create Notification
* Retrieve Notifications
* Mark Notification as Read

### Chat APIs

* Send Chat Messages
* Retrieve Chat History

### Virtual Classroom APIs

* Create Virtual Classroom
* Retrieve Virtual Classroom
* Update Virtual Classroom
* Delete Virtual Classroom

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
cd frontend
npm install
npm run dev
```

---

## Future Enhancements

* AI Learning Assistant
* AI Chatbot for Student Support
* Live Video Conferencing (WebRTC)
* Certificate Generation
* Email Notifications
* Payment Gateway Integration
* Learning Streaks and Gamification
* Mobile Application Support

---

## Author

**Lovely Chourasia**

B.Tech CSE (AI & ML)

KIIT University

GitHub Repository:
https://github.com/chourasialovely9-a09y/SkillOber