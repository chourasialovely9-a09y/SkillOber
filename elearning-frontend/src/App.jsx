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
import QuizPage from "./pages/QuizPage";
import StudentAnalytics from "./pages/StudentAnalytics";
import Certificate from "./pages/Certificate";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/courses" element={<Courses />} />

        <Route
          path="/student"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/analytics"
          element={
            <ProtectedRoute allowedRoles={["student"]}>
              <StudentAnalytics />
            </ProtectedRoute>
          }
        />

        <Route
          path="/instructor"
          element={
            <ProtectedRoute allowedRoles={["instructor"]}>
              <InstructorDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        
        <Route path="/about" element={<About />} />
        
        <Route path="/contact" element={<Contact />} />

        <Route path="/course/:id"  element={<CourseDetails />} />
        <Route path="/quiz/:courseId" element={<QuizPage />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;