import Navbar from "../components/Navbar";

function AdminDashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#F6F4E8] p-8">

        {/* Hero Section */}

        <div className="bg-[#DDF3EE] rounded-3xl p-10 mb-10">

          <h1 className="text-5xl font-bold text-[#1A2B3C]">
            Admin Dashboard
          </h1>

          <p className="mt-4 text-xl text-gray-700">
            Manage users, courses, instructors, and monitor
            the overall performance of SkillOber.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2>Total Users</h2>

            <p className="text-4xl font-bold text-[#0F5C5C]">
              1200
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2>Total Courses</h2>

            <p className="text-4xl font-bold text-[#0F5C5C]">
              500
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2>Revenue</h2>

            <p className="text-4xl font-bold text-[#0F5C5C]">
              ₹2,50,000
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2>Pending Approvals</h2>

            <p className="text-4xl font-bold text-[#0F5C5C]">
              18
            </p>
          </div>

        </div>

        {/* Quick Actions */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-6">
            Quick Actions
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <button className="bg-[#0F5C5C] text-white p-6 rounded-2xl shadow-lg hover:bg-[#0c4a4a] transition">
              Add New Course
            </button>

            <button className="bg-[#0F5C5C] text-white p-6 rounded-2xl shadow-lg hover:bg-[#0c4a4a] transition">
              Approve Instructor
            </button>

            <button className="bg-[#0F5C5C] text-white p-6 rounded-2xl shadow-lg hover:bg-[#0c4a4a] transition">
              View Reports
            </button>

          </div>

        </div>

        {/* Recent Users */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-6">
            Recent Users
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <div className="border-b py-3">
              👤 Rahul joined as Student
            </div>

            <div className="border-b py-3">
              👤 Priya joined as Instructor
            </div>

            <div className="border-b py-3">
              👤 Aman joined as Student
            </div>

            <div className="py-3">
              👤 Ananya joined as Student
            </div>

          </div>

        </div>

        {/* Platform Analytics */}

        <div className="mt-16 bg-[#0F5C5C] text-white p-8 rounded-3xl">

          <h2 className="text-3xl font-bold mb-4">
            Platform Analytics
          </h2>

          <ul className="space-y-3 text-lg">

            <li>📈 Monthly Growth: +18%</li>

            <li>🎓 Active Students: 950</li>

            <li>📚 Active Courses: 340</li>

            <li>⭐ Average Rating: 4.7/5</li>

          </ul>

        </div>

      </div>
    </>
  );
}

export default AdminDashboard;