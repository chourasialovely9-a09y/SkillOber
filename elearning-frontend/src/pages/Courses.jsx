import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { useState } from "react";

import web from "../assets/web.png";
import python from "../assets/python.png";
import ml from "../assets/ml.png";

function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const courses = [
    {
      id: "1",
      title: "Web Development",
      level: "Beginner",
      price: "999",
      image: web,
    },
    {
      id: "2",
      title: "Python for Data Science",
      level: "Intermediate",
      price: "1299",
      image: python,
    },
    {
      id: "3",
      title: "Machine Learning A-Z",
      level: "Advanced",
      price: "1499",
      image: ml,
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesLevel =
      selectedLevel === "All" ||
      course.level === selectedLevel;

    return matchesSearch && matchesLevel;
  });

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
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  level={course.level}
                  price={course.price}
                  image={course.image}
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