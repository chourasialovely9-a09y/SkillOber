import Navbar from "../components/Navbar";
import web from "../assets/web.png";
import python from "../assets/python.png";
import ml from "../assets/ml.png";
import CourseCard from "../components/CourseCard";

function StudentDashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#F6F4E8] p-8">

        {/* Hero Section */}

        <div className="bg-[#DDF3EE] rounded-3xl p-10 mb-10">

          <h1 className="text-6xl font-bold text-[#1A2B3C]">
            Learn Smarter.
          </h1>

          <h1 className="text-6xl font-bold text-[#1C7C7D]">
            Grow Faster.
          </h1>

          <p className="mt-4 text-xl text-gray-700">
            Track your progress, discover new courses,
            and accelerate your learning journey.
          </p>

        </div>
        <div className="mt-16">

            <h2 className="text-5xl font-bold mb-8 text-[#1A2B3C]">
                AI Recommended Courses
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

                <CourseCard
                title="React Development"
                level="Beginner"
                price="999"
                image={web}
                />

                <CourseCard
                title="Python for Data Science"
                level="Intermediate"
                price="1299"
                image={python}
                />

                <CourseCard
                title="Machine Learning A-Z"
                level="Advanced"
                price="1499"
                image={ml}
                />

            </div>

        </div>
        {/* Stats Cards */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-[#DDF3EE] rounded-xl shadow-lg p-6">
            <h2 className="text-gray-700">
              Enrolled Courses
            </h2>

            <p className="text-4xl font-bold text-[#0F5C5C]">
              5
            </p>
          </div>

          <div className="bg-[#DDF3EE] rounded-xl shadow-lg p-6">
            <h2 className="text-gray-700">
              Completed Courses
            </h2>

            <p className="text-4xl font-bold text-[#1C7C7D]">
              2
            </p>
          </div>

          <div className="bg-[#DDF3EE] rounded-xl shadow-lg p-6">
            <h2 className="text-gray-700">
              Progress
            </h2>

            <p className="text-4xl font-bold text-[#0F5C5C]">
              75%
            </p>
          </div>

          <div className="bg-[#DDF3EE] rounded-xl shadow-lg p-6">
            <h2 className="text-gray-700">
              AI Recommendation
            </h2>

            <p className="font-semibold">
              React Masterclass
            </p>
          </div>

        </div>

        {/* Learning Progress */}

        <div className="mt-16 bg-[#DDF3EE] p-8 rounded-3xl">

          <h2 className="text-3xl font-bold mb-4">
            Learning Progress
          </h2>

          <div className="w-full bg-gray-300 rounded-full h-5">

            <div
              className="bg-[#0F5C5C] h-5 rounded-full"
              style={{ width: "75%" }}
            ></div>

          </div>

          <p className="mt-3 text-lg">
            75% Course Completion
          </p>

        </div>

        {/* Recent Activity */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-6">
            Recent Activity
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <div className="border-b py-3">
              ✅ Completed React Basics
            </div>

            <div className="border-b py-3">
              🎥 Watched Node.js Introduction
            </div>

            <div className="border-b py-3">
              📚 Started MongoDB Essentials
            </div>

            <div className="py-3">
              🏆 Earned Beginner Certificate
            </div>

          </div>

        </div>

        {/* AI Recommendations */}

        <div className="mt-16 bg-[#0F5C5C] text-white p-8 rounded-3xl">

          <h2 className="text-3xl font-bold mb-4">
            AI Recommended For You
          </h2>

          <ul className="space-y-3 text-lg">

            <li>🚀 Advanced React Development</li>

            <li>🤖 Introduction to Machine Learning</li>

            <li>📊 Python for Data Analytics</li>

          </ul>

        </div>

        {/* Recommended Courses */}

        <div className="mt-16">

          <h2 className="text-4xl font-bold mb-8">
            Recommended Courses
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <CourseCard
              title="Advanced React"
              level="Intermediate"
              price="1499"
            />

            <CourseCard
              title="Machine Learning"
              level="Advanced"
              price="1999"
            />

            <CourseCard
              title="Python Analytics"
              level="Intermediate"
              price="1299"
            />

          </div>

        </div>

      </div>
    </>
  );
}

export default StudentDashboard;