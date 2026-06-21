import Navbar from "../components/Navbar";
import web from "../assets/web.png";
import python from "../assets/python.png";
import ml from "../assets/ml.png";
import CourseCard from "../components/CourseCard";
import { Link } from "react-router-dom";

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

        <div className="mt-6 flex gap-4">
          <Link
            to="/analytics"
            className="bg-[#0F5C5C] text-white px-6 py-3 rounded-xl hover:bg-[#0c4a4a]"
          >
            View Analytics
          </Link>

          <Link
            to="/courses"
            className="border border-[#0F5C5C] text-[#0F5C5C] px-6 py-3 rounded-xl hover:bg-[#0F5C5C] hover:text-white"
          >
            Browse Courses
          </Link>
        </div>

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

        {/* Continue Learning */}

          <div className="mt-16">

            <h2 className="text-3xl font-bold mb-6">
              Continue Learning
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <div className="flex justify-between items-center">

                <div>

                  <h3 className="text-2xl font-bold">
                    React Development
                  </h3>

                  <p className="text-gray-500">
                    75% Completed
                  </p>

                </div>

                <button className="bg-[#0F5C5C] text-white px-6 py-3 rounded-xl hover:bg-[#0c4a4a]">
                  Continue
                </button>

              </div>

            </div>

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
        {/* Upcoming Classes */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-6">
            Upcoming Classes
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <div className="border-b py-3">
              📅 React Advanced Concepts - Tomorrow 6:00 PM
            </div>

            <div className="border-b py-3">
              📅 Python Data Analysis - Friday 7:00 PM
            </div>

            <div className="py-3">
              📅 Machine Learning Basics - Sunday 5:00 PM
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
        {/* Achievements */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-6">
            Achievements
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">

              <h3 className="text-5xl">
                🏆
              </h3>

              <p className="mt-4 font-bold">
                First Course Completed
              </p>

            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">

              <h3 className="text-5xl">
                ⭐
              </h3>

              <p className="mt-4 font-bold">
                Top Learner
              </p>

            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">

              <h3 className="text-5xl">
                🎯
              </h3>

              <p className="mt-4 font-bold">
                7-Day Learning Streak
              </p>

            </div>

          </div>

        </div>

        {/* Recommended Courses */}

        <div className="mt-16">

          <h2 className="text-4xl font-bold mb-8">
            Recommended Courses
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <CourseCard
              id ="1"
              title="Advanced React"
               image={web}
              level="Intermediate"
              price="1499"
            />

            <CourseCard
            id="2"
              title="Machine Learning"
               image={ml}
              level="Advanced"
              price="1999"
            />

            <CourseCard
            id="3"
              title="Python Analytics"
               image={python}
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