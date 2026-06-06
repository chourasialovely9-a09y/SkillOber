import Navbar from "../components/Navbar";
import web from "../assets/web.png";
import python from "../assets/python.png";
import ml from "../assets/ml.png";

import CourseCard from "../components/CourseCard";
function InstructorDashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#F6F4E8] p-8">

        {/* Hero Section */}

        <div className="bg-[#DDF3EE] rounded-3xl p-10 mb-10">

          <h1 className="text-5xl font-bold text-[#1A2B3C]">
            Instructor Dashboard
          </h1>

          <p className="mt-4 text-xl text-gray-700">
            Manage your courses, monitor student engagement,
            and grow your teaching impact.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2>Total Courses</h2>

            <p className="text-4xl font-bold text-[#0F5C5C]">
              4
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2>Total Students</h2>

            <p className="text-4xl font-bold text-[#0F5C5C]">
              250
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2>Revenue</h2>

            <p className="text-4xl font-bold text-[#0F5C5C]">
              ₹12,000
            </p>
          </div>
        <div className="mt-16">

        <h2 className="text-5xl font-bold mb-8 text-[#1A2B3C]">
            Your Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

            <CourseCard
            title="Web Development Bootcamp"
            level="Beginner"
            price="999"
            image={web}
            />

            <CourseCard
            title="Python Masterclass"
            level="Intermediate"
            price="1299"
            image={python}
            />

            <CourseCard
            title="Machine Learning Pro"
            level="Advanced"
            price="1499"
            image={ml}
            />

        </div>

        </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2>Average Rating</h2>

            <p className="text-4xl font-bold text-[#0F5C5C]">
              4.8⭐
            </p>
          </div>

        </div>

        {/* Course Performance */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-6">
            Course Performance
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <div className="border-b py-4">
              React Development — 120 Students
            </div>

            <div className="border-b py-4">
              Node.js Bootcamp — 75 Students
            </div>

            <div className="border-b py-4">
              MongoDB Essentials — 40 Students
            </div>

            <div className="py-4">
              Machine Learning A-Z — 15 Students
            </div>

          </div>

        </div>

        {/* Recent Enrollments */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-6">
            Recent Enrollments
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <div className="border-b py-3">
              🎓 Rahul enrolled in React Development
            </div>

            <div className="border-b py-3">
              🎓 Priya enrolled in Node.js Bootcamp
            </div>

            <div className="border-b py-3">
              🎓 Aman enrolled in MongoDB Essentials
            </div>

            <div className="py-3">
              🎓 Ananya enrolled in Machine Learning A-Z
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default InstructorDashboard;