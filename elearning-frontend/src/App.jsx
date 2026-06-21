import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Courses from "./pages/Courses";
import StudentDashboard from "./pages/StudentDashboard";
import InstructorDashboard from "./pages/InstructorDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import CourseDetails from "./pages/CourseDetails";
import StudentAnalytics from "./pages/StudentAnalytics";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/student" element={<StudentDashboard />} />

        <Route path="/analytics" element={<StudentAnalytics />} />

        <Route path="/instructor" element={<InstructorDashboard />} />

        <Route path="/admin" element={<AdminDashboard />} />
        
        <Route path="/about" element={<About />} />
        
        <Route path="/contact" element={<Contact />} />

        <Route path="/course/:id"  element={<CourseDetails />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;