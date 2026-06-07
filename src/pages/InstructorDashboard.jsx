import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";

import web from "../assets/web.png";
import python from "../assets/python.png";
import ml from "../assets/ml.png";

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

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2>Average Rating</h2>

            <p className="text-4xl font-bold text-[#0F5C5C]">
              4.8⭐
            </p>
          </div>

        </div>

        {/* Your Courses */}
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

        {/* Top Course */}
        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-6">
            Top Performing Course
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <h3 className="text-2xl font-bold">
              React Development Bootcamp
            </h3>

            <p className="mt-2 text-gray-500">
              120 Students Enrolled
            </p>

            <p className="mt-2 text-gray-500">
              ⭐ 4.9 Average Rating
            </p>

            <p className="mt-2 text-gray-500">
              Revenue Generated: ₹48,000
            </p>

          </div>

        </div>

        {/* Student Feedback */}
        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-6">
            Student Feedback
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow-lg">

              <h3 className="font-bold">
                Rahul Sharma
              </h3>

              <p className="text-yellow-500 mt-2">
                ⭐⭐⭐⭐⭐
              </p>

              <p className="mt-3 text-gray-600">
                Amazing course with practical examples.
              </p>

            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">

              <h3 className="font-bold">
                Priya Singh
              </h3>

              <p className="text-yellow-500 mt-2">
                ⭐⭐⭐⭐⭐
              </p>

              <p className="mt-3 text-gray-600">
                The instructor explained concepts very clearly.
              </p>

            </div>

          </div>

        </div>

        {/* Revenue Analytics */}
        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-6">
            Revenue Analytics
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8">

            <div className="flex justify-between">

              <div>
                <h3 className="text-gray-500">
                  This Month
                </h3>

                <p className="text-3xl font-bold text-[#0F5C5C]">
                  ₹12,000
                </p>
              </div>

              <div>
                <h3 className="text-gray-500">
                  Last Month
                </h3>

                <p className="text-3xl font-bold">
                  ₹9,500
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default InstructorDashboard;