import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const {
    user,
    isAuthenticated,
    logout,
  } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const dashboardLink =
    user?.role === "admin"
      ? "/admin"
      : user?.role === "instructor"
      ? "/instructor"
      : "/student";

  return (
    <nav className="bg-[#0F5C5C] text-white px-8 py-5 flex justify-between items-center shadow-md">

      <Link
        to="/"
        className="text-4xl font-bold"
      >
        SkillOber
      </Link>

      <div className="hidden md:flex items-center gap-8 text-lg">

        <Link
          to="/"
          className="hover:text-green-200 transition"
        >
          Home
        </Link>

        <Link
          to="/courses"
          className="hover:text-green-200 transition"
        >
          Courses
        </Link>

        <Link
          to="/about"
          className="hover:text-green-200 transition"
        >
          About
        </Link>

        <Link
          to="/contact"
          className="hover:text-green-200 transition"
        >
          Contact
        </Link>

        {isAuthenticated ? (
          <>
            <Link
              to={dashboardLink}
              className="hover:text-green-200 transition"
            >
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              className="bg-white text-[#0F5C5C] px-5 py-2 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="hover:text-green-200 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-white text-[#0F5C5C] px-5 py-2 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Sign Up
            </Link>
          </>
        )}

      </div>
    </nav>
  );
}

export default Navbar;