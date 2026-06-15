import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F4E8]">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">

        <h1 className="text-4xl font-bold text-center mb-8 text-[#0F5C5C]">
          SkillOber
        </h1>

        <input
          type="text"
          placeholder="Enter Name"
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full border p-3 rounded mb-4"
        />

        <select
          className="w-full border p-3 rounded mb-4"
        >
          <option>Student</option>
          <option>Instructor</option>
        </select>

        <button
          onClick={handleRegister}
          disabled={loading}
          className="
            w-full
            bg-[#0F5C5C]
            text-white
            py-3
            rounded
            hover:bg-[#0c4a4a]
            transition
          "
        >
          {loading ? "Creating Account..." : "Register"}
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#0F5C5C] font-semibold"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;