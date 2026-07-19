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

  <div className="bg-gradient-to-r from-[#0F5C5C] via-[#167070] to-[#1C7C7D] rounded-3xl p-10 text-white shadow-2xl">

    <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

      <div>

        <h1 className="text-5xl lg:text-6xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-5 text-lg opacity-90 max-w-2xl leading-8">
          Inspire students, create engaging learning experiences,
          monitor course performance, and help learners achieve
          their goals—all from one dashboard.
        </p>

        <div className="flex flex-wrap gap-4 mt-8">

          <button className="bg-white text-[#0F5C5C] font-semibold px-7 py-3 rounded-xl hover:scale-105 transition duration-300">
            ➕ Create Course
          </button>

          <button className="border border-white px-7 py-3 rounded-xl hover:bg-white hover:text-[#0F5C5C] transition duration-300">
            📅 Schedule Class
          </button>

          <button className="border border-white px-7 py-3 rounded-xl hover:bg-white hover:text-[#0F5C5C] transition duration-300">
            📊 Analytics
          </button>

        </div>

      </div>

      <div className="grid grid-cols-2 gap-5">

        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">

          <h3 className="text-4xl font-bold">
            250+
          </h3>

          <p className="mt-2">
            Active Students
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">

          <h3 className="text-4xl font-bold">
            4
          </h3>

          <p className="mt-2">
            Live Courses
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">

          <h3 className="text-4xl font-bold">
            4.8⭐
          </h3>

          <p className="mt-2">
            Instructor Rating
          </p>

        </div>

        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center">

          <h3 className="text-4xl font-bold">
            91%
          </h3>

          <p className="mt-2">
            Completion Rate
          </p>

        </div>

      </div>

    </div>

  </div>

  {/* Statistics */}

  <div className="grid md:grid-cols-4 gap-6 mt-12">

    <div className="bg-white rounded-3xl shadow-lg p-7 hover:-translate-y-1 transition">

      <div className="text-4xl">
        📚
      </div>

      <h3 className="mt-4 text-gray-500">
        Courses
      </h3>

      <h2 className="text-5xl font-bold text-[#0F5C5C] mt-2">
        4
      </h2>

      <p className="mt-3 text-green-600">
        +1 New this month
      </p>

    </div>

    <div className="bg-white rounded-3xl shadow-lg p-7 hover:-translate-y-1 transition">

      <div className="text-4xl">
        👨‍🎓
      </div>

      <h3 className="mt-4 text-gray-500">
        Students
      </h3>

      <h2 className="text-5xl font-bold text-[#0F5C5C] mt-2">
        250
      </h2>

      <p className="mt-3 text-green-600">
        +24 Enrollments
      </p>

    </div>

    <div className="bg-white rounded-3xl shadow-lg p-7 hover:-translate-y-1 transition">

      <div className="text-4xl">
        ⭐
      </div>

      <h3 className="mt-4 text-gray-500">
        Average Rating
      </h3>

      <h2 className="text-5xl font-bold text-yellow-500 mt-2">
        4.8
      </h2>

      <p className="mt-3 text-gray-500">
        Excellent Feedback
      </p>

    </div>

    <div className="bg-white rounded-3xl shadow-lg p-7 hover:-translate-y-1 transition">

      <div className="text-4xl">
        🎯
      </div>

      <h3 className="mt-4 text-gray-500">
        Completion Rate
      </h3>

      <h2 className="text-5xl font-bold text-[#0F5C5C] mt-2">
        91%
      </h2>

      <p className="mt-3 text-green-600">
        Above Average
      </p>

    </div>

  </div>

  {/* Quick Actions */}

  <div className="mt-10 grid md:grid-cols-3 gap-6">

    <div className="bg-[#DDF3EE] rounded-2xl p-6 shadow">

      <h3 className="text-xl font-bold">
        📖 Manage Courses
      </h3>

      <p className="mt-3 text-gray-600">
        Edit lessons, upload content and update pricing.
      </p>

    </div>

    <div className="bg-[#DDF3EE] rounded-2xl p-6 shadow">

      <h3 className="text-xl font-bold">
        📝 Create Quiz
      </h3>

      <p className="mt-3 text-gray-600">
        Build quizzes to evaluate student understanding.
      </p>

    </div>

    <div className="bg-[#DDF3EE] rounded-2xl p-6 shadow">

      <h3 className="text-xl font-bold">
        🎥 Virtual Classroom
      </h3>

      <p className="mt-3 text-gray-600">
        Schedule and manage upcoming live sessions.
      </p>

    </div>

  </div>

  {/* ================= YOUR COURSES ================= */}

<div className="mt-20">

  <div className="flex justify-between items-center mb-8">

    <div>

      <h2 className="text-4xl font-bold text-[#1A2B3C]">
        Your Courses
      </h2>

      <p className="text-gray-500 mt-2">
        Manage and monitor all your published courses.
      </p>

    </div>

    <button className="bg-[#0F5C5C] text-white px-6 py-3 rounded-xl hover:bg-[#0c4a4a] transition">
      View All
    </button>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    <CourseCard
      id="1"
      title="Web Development Bootcamp"
      level="Beginner"
      price="999"
      image={web}
    />

    <CourseCard
      id="2"
      title="Python Masterclass"
      level="Intermediate"
      price="1299"
      image={python}
    />

    <CourseCard
      id="3"
      title="Machine Learning Pro"
      level="Advanced"
      price="1499"
      image={ml}
    />

  </div>

</div>


{/* ================= COURSE PERFORMANCE ================= */}

<div className="mt-20">

<h2 className="text-4xl font-bold text-[#1A2B3C] mb-8">
Course Performance
</h2>

<div className="bg-white rounded-3xl shadow-xl p-8">

{[
{
course:"React Development",
students:120,
completion:"93%",
rating:"4.9"
},
{
course:"Node.js Bootcamp",
students:75,
completion:"89%",
rating:"4.8"
},
{
course:"MongoDB Essentials",
students:40,
completion:"82%",
rating:"4.7"
},
{
course:"Machine Learning",
students:15,
completion:"76%",
rating:"4.6"
},
].map((item)=>(
<div key={item.course} className="mb-8">

<div className="flex justify-between items-center">

<div>

<h3 className="font-bold text-xl">
{item.course}
</h3>

<p className="text-gray-500">
{item.students} Students Enrolled
</p>

</div>

<div className="text-right">

<p className="font-semibold text-green-600">
Completion {item.completion}
</p>

<p className="text-yellow-500">
⭐ {item.rating}
</p>

</div>

</div>

<div className="w-full bg-gray-200 rounded-full h-3 mt-4">

<div
className="bg-gradient-to-r from-[#0F5C5C] to-[#1C7C7D] h-3 rounded-full"
style={{
width:`${item.students/120*100}%`
}}
></div>

</div>

</div>

))}

</div>

</div>


{/* ================= TOP PERFORMING COURSE ================= */}

<div className="mt-20">

<h2 className="text-4xl font-bold text-[#1A2B3C] mb-8">
🏆 Top Performing Course
</h2>

<div className="bg-gradient-to-r from-[#DDF3EE] to-white rounded-3xl shadow-xl p-10">

<div className="flex flex-col lg:flex-row justify-between items-center gap-10">

<div>

<h3 className="text-4xl font-bold">
React Development Bootcamp
</h3>

<p className="text-gray-600 mt-4 leading-7">
Your best-performing course with excellent student engagement,
high completion rate, and outstanding reviews.
</p>

<div className="flex gap-4 mt-8 flex-wrap">

<span className="bg-[#0F5C5C] text-white px-4 py-2 rounded-full">
120 Students
</span>

<span className="bg-yellow-400 px-4 py-2 rounded-full">
⭐ 4.9 Rating
</span>

<span className="bg-green-500 text-white px-4 py-2 rounded-full">
93% Completion
</span>

</div>

</div>

<div className="grid grid-cols-2 gap-5">

<div className="bg-white rounded-2xl shadow p-6 text-center">

<h3 className="text-gray-500">
Revenue
</h3>

<p className="text-3xl font-bold text-[#0F5C5C] mt-3">
₹48K
</p>

</div>

<div className="bg-white rounded-2xl shadow p-6 text-center">

<h3 className="text-gray-500">
Certificates
</h3>

<p className="text-3xl font-bold text-[#0F5C5C] mt-3">
98
</p>

</div>

<div className="bg-white rounded-2xl shadow p-6 text-center">

<h3 className="text-gray-500">
Assignments
</h3>

<p className="text-3xl font-bold text-[#0F5C5C] mt-3">
84
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

</div>

</div>

</div>

</div>      
{/* ================= RECENT ENROLLMENTS ================= */}

<div className="mt-20">

  <h2 className="text-4xl font-bold text-[#1A2B3C] mb-8">
    Recent Enrollments
  </h2>

  <div className="bg-white rounded-3xl shadow-xl p-8 space-y-5">

    {[
      {
        name: "Rahul Sharma",
        course: "React Development",
        time: "10 mins ago",
      },
      {
        name: "Priya Singh",
        course: "Python Masterclass",
        time: "30 mins ago",
      },
      {
        name: "Aman Gupta",
        course: "MongoDB Essentials",
        time: "1 hour ago",
      },
      {
        name: "Ananya Das",
        course: "Machine Learning Pro",
        time: "Today",
      },
    ].map((student) => (
      <div
        key={student.name}
        className="flex justify-between items-center border-b last:border-none pb-4"
      >
        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-[#0F5C5C] text-white flex items-center justify-center font-bold">
            {student.name[0]}
          </div>

          <div>

            <h3 className="font-semibold">
              {student.name}
            </h3>

            <p className="text-gray-500 text-sm">
              Enrolled in {student.course}
            </p>

          </div>

        </div>

        <span className="text-gray-400 text-sm">
          {student.time}
        </span>

      </div>
    ))}

      </div>

    </div>

    {/* ================= STUDENT FEEDBACK ================= */}

    <div className="mt-20">

    <h2 className="text-4xl font-bold text-[#1A2B3C] mb-8">
    Student Feedback
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

    {[
    {
    name:"Rahul Sharma",
    letter:"R",
    review:"Amazing course with practical examples. Highly recommended.",
    },
    {
    name:"Priya Singh",
    letter:"P",
    review:"The instructor explained every concept clearly and professionally.",
    },
    ].map((item)=>(

    <div
    key={item.name}
    className="bg-white rounded-3xl shadow-xl p-8"
    >

    <div className="flex items-center gap-5">

    <div className="w-16 h-16 rounded-full bg-[#0F5C5C] text-white flex items-center justify-center text-2xl font-bold">
    {item.letter}
    </div>

    <div>

    <h3 className="font-bold text-xl">
    {item.name}
    </h3>

    <p className="text-yellow-500 mt-1">
    ⭐⭐⭐⭐⭐
    </p>

    </div>

    </div>

    <p className="italic text-gray-600 mt-6 leading-8">
    "{item.review}"
    </p>

    </div>

    ))}

    </div>

    </div>

    {/* ================= REVENUE ================= */}

    <div className="mt-20">

    <h2 className="text-4xl font-bold text-[#1A2B3C] mb-8">
    Revenue Analytics
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

    <h3 className="text-gray-500">
    This Month
    </h3>

    <p className="text-4xl font-bold text-[#0F5C5C] mt-4">
    ₹12,000
    </p>

    </div>

    <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

    <h3 className="text-gray-500">
    Last Month
    </h3>

    <p className="text-4xl font-bold">
    ₹9,500
    </p>

    </div>

    <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

    <h3 className="text-gray-500">
    Growth
    </h3>

    <p className="text-4xl font-bold text-green-600">
    +26%
    </p>

    </div>

    </div>

    </div>

    {/* ================= QUICK INSIGHTS ================= */}

    <div className="mt-20">

    <h2 className="text-4xl font-bold text-[#1A2B3C] mb-8">
    Quick Insights
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

    <div className="bg-[#DDF3EE] rounded-3xl p-8">

    <h3 className="text-xl font-bold">
    🎯 Most Popular Course
    </h3>

    <p className="mt-5 text-lg">
    React Development Bootcamp
    </p>

    </div>

    <div className="bg-[#DDF3EE] rounded-3xl p-8">

    <h3 className="text-xl font-bold">
    📈 Highest Completion
    </h3>

    <p className="mt-5 text-lg">
    93%
    </p>

    </div>

    <div className="bg-[#DDF3EE] rounded-3xl p-8">

    <h3 className="text-xl font-bold">
    ⭐ Student Satisfaction
    </h3>

    <p className="mt-5 text-lg">
    96%
    </p>

    </div>

    </div>

    </div>

    {/* ================= ACTIVITY ================= */}

    <div className="mt-20">

    <h2 className="text-4xl font-bold text-[#1A2B3C] mb-8">
    Recent Activity
    </h2>

    <div className="bg-white rounded-3xl shadow-xl p-8">

    <div className="border-l-4 border-[#0F5C5C] pl-8 space-y-8">

    <div>

    <h3 className="font-bold">
    📚 Published a New Course
    </h3>

    <p className="text-gray-500">
    2 hours ago
    </p>

    </div>

    <div>

    <h3 className="font-bold">
    🎓 12 Students Enrolled
    </h3>

    <p className="text-gray-500">
    Today
    </p>

    </div>

    <div>

    <h3 className="font-bold">
    ⭐ Received a 5-Star Review
    </h3>

    <p className="text-gray-500">
    Yesterday
    </p>

    </div>

    <div>

    <h3 className="font-bold">
    📝 Quiz Added to Python Course
    </h3>

    <p className="text-gray-500">
    2 days ago
    </p>

    </div>

    </div>

    </div>

    </div>

    {/* ================= CTA ================= */}

    <div className="mt-24">

    <div className="bg-gradient-to-r from-[#0F5C5C] to-[#1C7C7D] rounded-3xl p-12 text-center text-white shadow-2xl">

    <h2 className="text-4xl font-bold">
    Keep Inspiring Learners 🚀
    </h2>

    <p className="mt-6 text-lg opacity-90 max-w-3xl mx-auto leading-8">
    Every lesson you teach empowers someone to build new skills,
    grow their career, and achieve their dreams. Continue creating
    impact through quality education.
    </p>

    <button className="mt-8 bg-white text-[#0F5C5C] font-semibold px-8 py-4 rounded-xl hover:scale-105 transition">
    + Create Another Course
    </button>

    </div>

    </div>

      </div>
    </>
  );
}

export default InstructorDashboard;