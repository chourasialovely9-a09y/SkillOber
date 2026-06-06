import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import hero from "../assets/hero.png";
import { Link } from "react-router-dom";
import webImage from "../assets/web.png";
import pythonImage from "../assets/python.png";
import mlImage from "../assets/ml.png";
import {
  FaRobot,
  FaChartLine,
  FaVideo,
  FaCertificate
} from "react-icons/fa";

function Home() {
  return (
    <>
      <Navbar />

      <div className="bg-[#F6F4E8] min-h-screen">

        {/* Hero Section */}

        <div className="max-w-7xl mx-auto px-8 py-12">

          <div className="bg-[#DDF3EE] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between">

            <div>

              <h1 className="text-6xl font-bold text-[#1A2B3C]">
                Learn Smarter.
              </h1>

              <h1 className="text-6xl font-bold text-[#0F5C5C]">
                Grow Faster.
              </h1>

              <p className="mt-4 text-xl text-gray-700 max-w-xl">
                AI-Powered E-Learning Platform for Personalized Learning,
                Smart Recommendations and Real Career Growth.
              </p>

              <div className="mt-6 flex gap-4">

                <Link to="/courses">
                    <button className="bg-[#0F5C5C] text-white px-6 py-3 rounded-xl hover:bg-[#0c4a4a] transition">
                    Browse Courses
                    </button>
                </Link>

                <Link to="/register">
                    <button className="border border-[#0F5C5C] px-6 py-3 rounded-xl hover:bg-[#0F5C5C] hover:text-white transition">
                    Get Started
                    </button>
                </Link>

              </div>

            </div>

            <img
              src={hero}
              alt="SkillOber Hero"
              className="w-96 mt-10 md:mt-0"
            />

          </div>

          {/* Why Choose SkillOber */}

          <div className="mt-20">

            <h2 className="text-5xl font-bold mb-10">
              Why Choose SkillOber?
            </h2>

            <div className="grid md:grid-cols-4 gap-6">

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition duration-300">

                <div className="text-[#0F5C5C] text-3xl mb-4">
                  <FaRobot />
                </div>

                <h3 className="font-bold text-xl mb-2">
                  AI Recommendations
                </h3>

                <p>
                  Personalized course suggestions based on your interests and learning behavior.
                </p>

              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition duration-300">

                <div className="text-[#0F5C5C] text-3xl mb-4">
                  <FaChartLine />
                </div>

                <h3 className="font-bold text-xl mb-2">
                  Track Progress
                </h3>

                <p>
                  Monitor your learning journey with detailed analytics and reports.
                </p>

              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition duration-300">

                <div className="text-[#0F5C5C] text-3xl mb-4">
                  <FaVideo />
                </div>

                <h3 className="font-bold text-xl mb-2">
                  Live Classes
                </h3>

                <p>
                  Attend interactive live sessions and learn directly from experts.
                </p>

              </div>

              <div className="bg-white p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-2 transition duration-300">

                <div className="text-[#0F5C5C] text-3xl mb-4">
                  <FaCertificate />
                </div>

                <h3 className="font-bold text-xl mb-2">
                  Certification
                </h3>

                <p>
                  Earn industry-recognized certificates after course completion.
                </p>

              </div>

            </div>

          </div>

          {/* Featured Courses */}

        <div className="mt-24">

            <div className="flex justify-between items-center mb-10">

                <h2 className="text-5xl font-bold text-[#1A2B3C]">
                Featured Courses
                </h2>

                <button className="text-[#0F5C5C] font-semibold hover:underline">
                View All →
                </button>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

                <CourseCard
                image={webImage}
                title="Web Development"
                level="Beginner"
                instructor="SkillOber Academy"
                price="999"
                />

                <CourseCard
                image={pythonImage}
                title="Python for Data Science"
                level="Intermediate"
                instructor="SkillOber Academy"
                price="1299"
                />

                <CourseCard
                image={mlImage}
                title="Machine Learning A-Z"
                level="Advanced"
                instructor="SkillOber Academy"
                price="1499"
                />

            </div>

        </div>
          {/* Statistics */}

          <div className="mt-20 bg-[#0F5C5C] text-white p-10 rounded-3xl">

            <div className="grid md:grid-cols-4 gap-6 text-center">

              <div>
                <h2 className="text-5xl font-bold">
                  10K+
                </h2>
                <p className="text-xl mt-2">
                  Students
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold">
                  500+
                </h2>
                <p className="text-xl mt-2">
                  Courses
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold">
                  200+
                </h2>
                <p className="text-xl mt-2">
                  Instructors
                </p>
              </div>

              <div>
                <h2 className="text-5xl font-bold">
                  95%
                </h2>
                <p className="text-xl mt-2">
                  Satisfaction
                </p>
              </div>

            </div>

          </div>

          {/* Trusted By */}

        <div className="mt-20 bg-white p-10 rounded-3xl shadow-lg text-center">

        <h2 className="text-4xl font-bold text-[#1A2B3C]">
            Trusted by 10,000+ Learners Worldwide
        </h2>

        <p className="mt-4 text-xl text-gray-600">
            Students from colleges, universities and working
            professionals trust SkillOber for career growth.
        </p>

        </div>

          {/* Popular Categories */}

        <div className="mt-20">

            <h2 className="text-5xl font-bold mb-10 text-center">
                Popular Categories
            </h2>

            <div className="grid md:grid-cols-4 gap-6">

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                🌐
                <h3 className="mt-4 font-bold">
                    Web Development
                </h3>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                🐍
                <h3 className="mt-4 font-bold">
                    Python
                </h3>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                🤖
                <h3 className="mt-4 font-bold">
                    Machine Learning
                </h3>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                📊
                <h3 className="mt-4 font-bold">
                    Data Science
                </h3>
                </div>

            </div>

        </div>

          {/* Testimonials */}

        <div className="mt-20">

            <h2 className="text-5xl font-bold mb-10 text-center">
                What Our Students Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

                <div className="bg-white p-8 rounded-3xl shadow-lg">

                <h3 className="font-bold text-xl">
                    Rahul Sharma
                </h3>

                <p className="text-yellow-500 mt-2">
                    ★★★★★
                </p>

                <p className="mt-4 text-gray-600">
                    SkillOber helped me learn React from scratch.
                    The personalized recommendations were amazing.
                </p>

                </div>

                <div className="bg-white p-8 rounded-3xl shadow-lg">

                <h3 className="font-bold text-xl">
                    Priya Singh
                </h3>

                <p className="text-yellow-500 mt-2">
                    ★★★★★
                </p>

                <p className="mt-4 text-gray-600">
                    The instructor support and progress tracking
                    helped me stay consistent every day.
                </p>

                </div>

                <div className="bg-white p-8 rounded-3xl shadow-lg">

                <h3 className="font-bold text-xl">
                    Aman Verma
                </h3>

                <p className="text-yellow-500 mt-2">
                    ★★★★★
                </p>

                <p className="mt-4 text-gray-600">
                    I completed Machine Learning courses and
                    landed my first internship through the skills
                    I learned here.
                </p>

                </div>

            </div>

        </div>
        
        {/* Featured Instructors */}

        <div className="mt-20">

            <h2 className="text-5xl font-bold mb-10 text-center">
                Meet Our Top Instructors
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

                <div className="bg-white p-8 rounded-3xl shadow-lg text-center">

                <div className="w-24 h-24 rounded-full bg-[#DDF3EE] mx-auto flex items-center justify-center text-4xl">
                    👨‍🏫
                </div>

                <h3 className="mt-4 text-2xl font-bold">
                    Rahul Mehta
                </h3>

                <p className="text-gray-500">
                    Web Development Expert
                </p>

                <p className="mt-3">
                    8+ years of industry experience.
                </p>

                </div>

                <div className="bg-white p-8 rounded-3xl shadow-lg text-center">

                <div className="w-24 h-24 rounded-full bg-[#DDF3EE] mx-auto flex items-center justify-center text-4xl">
                    👩‍🏫
                </div>

                <h3 className="mt-4 text-2xl font-bold">
                    Priya Sharma
                </h3>

                <p className="text-gray-500">
                    Python Instructor
                </p>

                <p className="mt-3">
                    Data Science and AI specialist.
                </p>

                </div>

                <div className="bg-white p-8 rounded-3xl shadow-lg text-center">

                <div className="w-24 h-24 rounded-full bg-[#DDF3EE] mx-auto flex items-center justify-center text-4xl">
                    🤖
                </div>

                <h3 className="mt-4 text-2xl font-bold">
                    Aman Verma
                </h3>

                <p className="text-gray-500">
                    Machine Learning Mentor
                </p>

                <p className="mt-3">
                    Worked on AI solutions for startups.
                </p>

                </div>

            </div>

        </div>
          {/* Newsletter */}

          <div className="mt-20">

            <div className="bg-[#DDF3EE] p-10 rounded-3xl">

              <h2 className="text-4xl font-bold text-[#1A2B3C]">
                Subscribe to our Newsletter
              </h2>

              <p className="mt-3 text-lg text-gray-700">
                Get updates about new courses, offers and AI-powered learning insights.
              </p>

              <div className="mt-6 flex flex-col md:flex-row gap-4">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 p-4 rounded-xl border bg-white"
                />

                <button className="bg-[#0F5C5C] text-white px-8 py-4 rounded-xl hover:bg-[#0c4c4c] transition">
                  Subscribe
                </button>

              </div>

            </div>

          </div>

        </div>

        <Footer />

      </div>
    </>
  );
}

export default Home;