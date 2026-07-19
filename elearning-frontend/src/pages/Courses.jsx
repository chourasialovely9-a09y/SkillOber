import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { useEffect, useState } from "react";
import API from "../api/api";

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");
  
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  const fetchCourses = async () => {
      try {
        const res = await API.get("/courses");
        setCourses(res.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesLevel =
      selectedLevel === "All" ||
      course.level === selectedLevel;

    return matchesSearch && matchesLevel;
  });
  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <h2 className="text-2xl font-semibold">
            Loading Courses...
          </h2>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Navbar />

      <div className="bg-[#F6F4E8] min-h-screen">
        <div className="max-w-7xl mx-auto px-8 py-12">

          <h1 className="text-6xl font-bold mb-10">
            Courses
          </h1>

          {/* Search + Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">

            <input
              type="text"
              placeholder="Search Courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 p-4 border rounded-xl"
            />

            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="p-4 border rounded-xl"
            >
              <option>All</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>

          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-3 gap-8">

            {filteredCourses.length === 0 ? (
              <p className="text-xl text-gray-500">
                No courses found.
              </p>
            ) : (
              filteredCourses.map((course) => (
              <CourseCard
                key={course._id}
                id={course._id}
                title={course.title}
                level={course.level}
                price={course.price}
                image={`/images/${course.thumbnail}`}
                instructor={course.instructor}
                rating={course.rating}
                enrolledStudents={course.enrolledStudents}
              />
              ))
            )}

          </div>

        </div>

        <Footer />
      </div>
    </>
  );
}

export default Courses;