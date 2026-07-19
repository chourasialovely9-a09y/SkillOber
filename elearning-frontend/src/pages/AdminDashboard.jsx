import Navbar from "../components/Navbar";

function AdminDashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#F6F4E8] p-8">

            {/* ================= HERO ================= */}

      <div className="bg-gradient-to-r from-[#0F5C5C] via-[#167070] to-[#1C7C7D] rounded-3xl p-10 text-white shadow-2xl">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

          <div>

            <h1 className="text-5xl lg:text-6xl font-bold">
              Admin Dashboard ⚙️
            </h1>

            <p className="mt-5 text-lg opacity-90 max-w-2xl leading-8">
              Monitor platform performance, manage users, instructors,
              and courses while keeping SkillOber running efficiently.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <button className="bg-white text-[#0F5C5C] px-7 py-3 rounded-xl font-semibold hover:scale-105 transition">
                ➕ Add Course
              </button>

              <button className="border border-white px-7 py-3 rounded-xl hover:bg-white hover:text-[#0F5C5C] transition">
                👨‍🏫 Approve Instructor
              </button>

              <button className="border border-white px-7 py-3 rounded-xl hover:bg-white hover:text-[#0F5C5C] transition">
                📊 View Reports
              </button>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-5">

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold">1200</h3>
              <p>Total Users</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold">500</h3>
              <p>Courses</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold">₹2.5L</h3>
              <p>Revenue</p>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">
              <h3 className="text-4xl font-bold">18</h3>
              <p>Pending</p>
            </div>

          </div>

        </div>

      </div>

      {/* ================= STATISTICS ================= */}

      <div className="grid md:grid-cols-4 gap-6 mt-12">

      <div className="bg-white rounded-3xl shadow-lg p-7">

      <div className="text-4xl">👥</div>

      <h3 className="mt-4 text-gray-500">
      Users
      </h3>

      <h2 className="text-5xl font-bold text-[#0F5C5C] mt-2">
      1200
      </h2>

      <p className="text-green-600 mt-3">
      +120 this month
      </p>

      </div>

      <div className="bg-white rounded-3xl shadow-lg p-7">

      <div className="text-4xl">
      📚
      </div>

      <h3 className="mt-4 text-gray-500">
      Courses
      </h3>

      <h2 className="text-5xl font-bold text-[#0F5C5C] mt-2">
      500
      </h2>

      <p className="text-green-600 mt-3">
      +18 New
      </p>

      </div>

      <div className="bg-white rounded-3xl shadow-lg p-7">

      <div className="text-4xl">
      💰
      </div>

      <h3 className="mt-4 text-gray-500">
      Revenue
      </h3>

      <h2 className="text-5xl font-bold text-[#0F5C5C] mt-2">
      ₹2.5L
      </h2>

      <p className="text-green-600 mt-3">
      +22%
      </p>

      </div>

      <div className="bg-white rounded-3xl shadow-lg p-7">

      <div className="text-4xl">
      ⏳
      </div>

      <h3 className="mt-4 text-gray-500">
      Pending
      </h3>

      <h2 className="text-5xl font-bold text-[#0F5C5C] mt-2">
      18
      </h2>

      <p className="text-orange-500 mt-3">
      Needs Review
      </p>

      </div>

      </div>

      {/* ================= QUICK ACTIONS ================= */}

      <div className="mt-16">

      <h2 className="text-4xl font-bold mb-8 text-[#1A2B3C]">
      Quick Actions
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-[#DDF3EE] rounded-2xl p-8 shadow">

      <h3 className="font-bold text-xl">
      📚 Manage Courses
      </h3>

      <p className="mt-3 text-gray-600">
      Create and edit platform courses.
      </p>

      </div>

      <div className="bg-[#DDF3EE] rounded-2xl p-8 shadow">

      <h3 className="font-bold text-xl">
      👨‍🏫 Instructor Approval
      </h3>

      <p className="mt-3 text-gray-600">
      Approve instructor applications.
      </p>

      </div>

      <div className="bg-[#DDF3EE] rounded-2xl p-8 shadow">

      <h3 className="font-bold text-xl">
      👥 Manage Users
      </h3>

      <p className="mt-3 text-gray-600">
      Monitor student and instructor accounts.
      </p>

      </div>

      <div className="bg-[#DDF3EE] rounded-2xl p-8 shadow">

      <h3 className="font-bold text-xl">
      📈 Reports
      </h3>

      <p className="mt-3 text-gray-600">
      Generate monthly reports.
      </p>

      </div>

      </div>

      </div>  

        {/* ================= RECENT USERS ================= */}

      <div className="mt-20">

        <h2 className="text-4xl font-bold text-[#1A2B3C] mb-8">
          Recent Users
        </h2>

        <div className="bg-white rounded-3xl shadow-xl p-8 space-y-5">

          {[
            {
              name: "Rahul Sharma",
              role: "Student",
              joined: "10 mins ago",
            },
            {
              name: "Priya Singh",
              role: "Instructor",
              joined: "30 mins ago",
            },
            {
              name: "Aman Gupta",
              role: "Student",
              joined: "Today",
            },
            {
              name: "Ananya Das",
              role: "Student",
              joined: "Yesterday",
            },
          ].map((user) => (

            <div
              key={user.name}
              className="flex justify-between items-center border-b last:border-none pb-4"
            >

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-[#0F5C5C] text-white flex items-center justify-center font-bold">
                  {user.name[0]}
                </div>

                <div>

                  <h3 className="font-semibold">
                    {user.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Joined as {user.role}
                  </p>

                </div>

              </div>

              <span className="text-gray-400 text-sm">
                {user.joined}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* ================= PLATFORM ANALYTICS ================= */}

      <div className="mt-20">

      <h2 className="text-4xl font-bold text-[#1A2B3C] mb-8">
      Platform Analytics
      </h2>

      <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

      <h3 className="text-gray-500">
      Active Students
      </h3>

      <p className="text-4xl font-bold text-[#0F5C5C] mt-3">
      950
      </p>

      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

      <h3 className="text-gray-500">
      Active Instructors
      </h3>

      <p className="text-4xl font-bold text-[#0F5C5C] mt-3">
      58
      </p>

      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

      <h3 className="text-gray-500">
      Published Courses
      </h3>

      <p className="text-4xl font-bold text-[#0F5C5C] mt-3">
      340
      </p>

      </div>

      <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

      <h3 className="text-gray-500">
      Platform Rating
      </h3>

      <p className="text-4xl font-bold text-yellow-500 mt-3">
      4.7⭐
      </p>

      </div>

      </div>

      </div>

      {/* ================= TOP INSTRUCTOR ================= */}

      <div className="mt-20">

      <h2 className="text-4xl font-bold text-[#1A2B3C] mb-8">
      🏆 Top Instructor
      </h2>

      <div className="bg-gradient-to-r from-[#DDF3EE] to-white rounded-3xl shadow-xl p-10">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

      <div>

      <h3 className="text-4xl font-bold">
      Priya Singh
      </h3>

      <p className="text-gray-600 mt-4 leading-7">
      Top instructor this month with outstanding student ratings,
      excellent course completion, and high engagement.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">

      <span className="bg-[#0F5C5C] text-white px-4 py-2 rounded-full">
      420 Students
      </span>

      <span className="bg-yellow-400 px-4 py-2 rounded-full">
      ⭐ 4.9 Rating
      </span>

      <span className="bg-green-500 text-white px-4 py-2 rounded-full">
      12 Courses
      </span>

      </div>

      </div>

      <div className="grid grid-cols-2 gap-5">

      <div className="bg-white rounded-2xl shadow p-6 text-center">

      <h3 className="text-gray-500">
      Revenue
      </h3>

      <p className="text-3xl font-bold text-[#0F5C5C] mt-3">
      ₹85K
      </p>

      </div>

      <div className="bg-white rounded-2xl shadow p-6 text-center">

      <h3 className="text-gray-500">
      Certificates
      </h3>

      <p className="text-3xl font-bold text-[#0F5C5C] mt-3">
      250
      </p>

      </div>

      <div className="bg-white rounded-2xl shadow p-6 text-center">

      <h3 className="text-gray-500">
      Reviews
      </h3>

      <p className="text-3xl font-bold text-yellow-500 mt-3">
      4.9⭐
      </p>

      </div>

      <div className="bg-white rounded-2xl shadow p-6 text-center">

      <h3 className="text-gray-500">
      Completion
      </h3>

      <p className="text-3xl font-bold text-green-600 mt-3">
      95%
      </p>

      </div>

      </div>

      </div>

      </div>

      </div>

      {/* ================= RECENT ACTIVITY ================= */}

      <div className="mt-20">

      <h2 className="text-4xl font-bold text-[#1A2B3C] mb-8">
      Recent Activity
      </h2>

      <div className="bg-white rounded-3xl shadow-xl p-8">

      <div className="border-l-4 border-[#0F5C5C] pl-8 space-y-8">

      <div>
      <h3 className="font-bold">
      📚 New Course Published
      </h3>
      <p className="text-gray-500">
      Today
      </p>
      </div>

      <div>
      <h3 className="font-bold">
      👨‍🏫 Instructor Approved
      </h3>
      <p className="text-gray-500">
      2 Hours Ago
      </p>
      </div>

      <div>
      <h3 className="font-bold">
      👤 20 New Students Registered
      </h3>
      <p className="text-gray-500">
      Yesterday
      </p>
      </div>

      <div>
      <h3 className="font-bold">
      💰 Monthly Revenue Updated
      </h3>
      <p className="text-gray-500">
      2 Days Ago
      </p>
      </div>

      </div>

      </div>

      </div>

      {/* ================= ADMIN CTA ================= */}

      <div className="mt-24">

      <div className="bg-gradient-to-r from-[#0F5C5C] to-[#1C7C7D] rounded-3xl p-12 text-center text-white shadow-2xl">

      <h2 className="text-4xl font-bold">
      Manage SkillOber Efficiently 🚀
      </h2>

      <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto leading-8">
      Keep the platform secure, organized, and engaging by managing
      users, instructors, and learning resources effectively.
      </p>

      <button className="mt-8 bg-white text-[#0F5C5C] font-semibold px-8 py-4 rounded-xl hover:scale-105 transition">
      Generate Report
      </button>

      </div>

      </div>
      </div>
    </>
  );
}

export default AdminDashboard;