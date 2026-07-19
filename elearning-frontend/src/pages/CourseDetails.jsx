import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import API from "../api/api";

function CourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        // Fetch Course
        const res = await API.get(`/courses/${id}`);
        setCourse(res.data);

        // Check if enrolled
        const enrollments = await API.get("/enrollments");

        const enrolled = enrollments.data.some(
          (enrollment) => enrollment.course._id === id
        );

        setIsEnrolled(enrolled);
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleEnroll = async () => {
    try {
      setEnrolling(true);

      await API.post("/enrollments", {
        course: course._id,
      });

      alert("🎉 Successfully enrolled in the course!");
      setIsEnrolled(true);
    } catch (error) {
      if (
        error.response &&
        error.response.data.message ===
          "Student is already enrolled in this course"
      ) {
        alert("✅ You are already enrolled in this course.");
        setIsEnrolled(true);
      } else if (error.response && error.response.status === 401) {
        alert("⚠️ Please login first.");
      } else {
        console.error(error);
        alert("❌ Enrollment failed.");
      }
    } finally {
      setEnrolling(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-[#F6F4E8]">
          <h1 className="text-3xl font-bold">Loading Course...</h1>
        </div>
      </>
    );
  }

  if (!course) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-[#F6F4E8]">
          <h1 className="text-4xl font-bold text-red-600">
            Course Not Found
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="bg-[#F6F4E8] min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6">

          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <img
              src={`/images/${course.thumbnail}`}
              alt={course.title}
              className="rounded-3xl shadow-xl w-full h-[420px] object-cover"
            />

            <div>

              <span className="bg-[#DDF3EE] text-[#0F5C5C] px-4 py-2 rounded-full font-semibold">
                {course.level}
              </span>

              <h1 className="text-5xl font-bold mt-6">
                {course.title}
              </h1>

              <p className="text-gray-600 mt-5 text-lg leading-8">
                {course.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">

                <div className="bg-white p-4 rounded-xl shadow">
                  ⭐ <strong>{course.rating}</strong>
                  <p className="text-gray-500 text-sm mt-1">Course Rating</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                  👥 <strong>{course.enrolledStudents}</strong>
                  <p className="text-gray-500 text-sm mt-1">Students</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                  👨‍🏫 <strong>{course.instructor}</strong>
                  <p className="text-gray-500 text-sm mt-1">Instructor</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                  📂 <strong>{course.category}</strong>
                  <p className="text-gray-500 text-sm mt-1">Category</p>
                </div>

              </div>

              <h2 className="text-5xl font-bold text-[#0F5C5C] mt-8">
                ₹{course.price}
              </h2>

              <div className="mt-8 flex gap-4">

                {!isEnrolled ? (
                  <button
                    onClick={handleEnroll}
                    disabled={enrolling}
                    className="bg-[#0F5C5C] hover:bg-[#0c4a4a] disabled:bg-gray-400 text-white px-8 py-4 rounded-xl text-lg font-semibold transition"
                  >
                    {enrolling ? "Enrolling..." : "Enroll Now"}
                  </button>
                ) : (
                  <Link
                    to={`/quiz/${course._id}`}
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition"
                  >
                    📝 Take Quiz
                  </Link>
                )}

              </div>

            </div>

          </div>

          {/* Skills Section */}
          <div className="mt-20 bg-white rounded-3xl shadow-lg p-10">

            <h2 className="text-4xl font-bold mb-8">
              Skills You'll Gain
            </h2>

            <div className="flex flex-wrap gap-4">

              {course.tags && course.tags.length > 0 ? (
                course.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#DDF3EE] text-[#0F5C5C] px-5 py-3 rounded-full font-semibold"
                  >
                    {tag}
                  </span>
                ))
              ) : (
                <p className="text-gray-500">
                  No tags available.
                </p>
              )}

            </div>

          </div>

          {/* About Course */}
          <div className="mt-12 bg-white rounded-3xl shadow-lg p-10">

            <h2 className="text-4xl font-bold mb-6">
              About This Course
            </h2>

            <p className="text-gray-700 text-lg leading-9">
              {course.description}
            </p>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default CourseDetails;