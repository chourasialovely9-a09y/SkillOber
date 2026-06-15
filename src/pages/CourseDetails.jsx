import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

import web from "../assets/web.png";
import python from "../assets/python.png";
import ml from "../assets/ml.png";

function CourseDetails() {
    const { id } = useParams();

    const courses = {
    1: {
        title: "Web Development Bootcamp",
        image: web,
        instructor: "Rahul Mehta",
        level: "Beginner",
        price: "999",
        duration: "12 Hours",
        students: "1200+",
        learn: [
                "HTML5 Fundamentals",
                "CSS3 & Responsive Design",
                "JavaScript ES6+",
                "React Development",
                "API Integration",
                "Deployment & Hosting",
                ],

        curriculum: [
                "Module 1: HTML Basics",
                "Module 2: CSS & Flexbox",
                "Module 3: JavaScript Fundamentals",
                "Module 4: React Basics",
                "Module 5: Final Project",
                ],
    },

    2: {
        title: "Python for Data Science",
        image: python,
        instructor: "Priya Sharma",
        level: "Intermediate",
        price: "1299",
        duration: "15 Hours",
        students: "950+",
        learn: [
                "Python Basics",
                "NumPy",
                "Pandas",
                "Data Visualization",
                "Data Cleaning",
                "Mini Data Science Projects",
                ],

        curriculum: [
                    "Module 1: Python Fundamentals",
                    "Module 2: NumPy",
                    "Module 3: Pandas",
                    "Module 4: Matplotlib",
                    "Module 5: Data Science Project",
                    ],
    },

    3: {
        title: "Machine Learning A-Z",
        image: ml,
        instructor: "Aman Verma",
        level: "Advanced",
        price: "1499",
        duration: "20 Hours",
        students: "700+",
        learn: [
                "Machine Learning Basics",
                "Regression Models",
                "Classification Models",
                "Model Evaluation",
                "Feature Engineering",
                "AI Applications",
                ],

        curriculum: [
                    "Module 1: Introduction to ML",
                    "Module 2: Regression",
                    "Module 3: Classification",
                    "Module 4: Model Optimization",
                    "Module 5: Capstone Project",
                    ],
    },
    };

    const course = courses[id];
    if (!course) {
    return (
                <div className="p-10 text-center text-3xl">
                Course Not Found
                </div>
            );
            }
    return (
        <>
      <Navbar />

      <div className="bg-[#F6F4E8] min-h-screen">

        <div className="max-w-7xl mx-auto px-8 py-12">

          {/* Course Header */}

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <img
              src={course.image}
              alt="Course"
              className="rounded-3xl shadow-lg w-full"
            />

            <div>

              <span className="bg-[#DDF3EE] text-[#0F5C5C] px-4 py-2 rounded-full font-semibold">
                Beginner
              </span>

              <h1 className="text-5xl font-bold mt-6">
                {course.title}
              </h1>

              <p className="text-gray-600 mt-4 text-lg">
                {course.description}
              </p>

              <div className="mt-6 space-y-2">

                <p>⭐ 4.8 Rating</p>

                <p>👨‍🏫 Instructor: {course.instructor}</p>

                <p>🎓 {course.students} Students Enrolled</p>

                <p>⏱ Duration: {course.duration}</p>

              </div>

              <h2 className="text-4xl font-bold text-[#0F5C5C] mt-8">
                ₹{course.price}
              </h2>

              <button className="mt-6 bg-[#0F5C5C] text-white px-8 py-4 rounded-xl hover:bg-[#0c4a4a] transition">
                Enroll Now
              </button>

            </div>

          </div>

          {/* What You'll Learn */}

          <div className="mt-20 bg-white p-10 rounded-3xl shadow-lg">

            <h2 className="text-4xl font-bold mb-6">
              What You'll Learn
            </h2>
                <ul className="space-y-4 text-lg">

                {course.learn.map((item, index) => (
                    <li key={index}>
                    ✅ {item}
                    </li>
                ))}

                </ul>                

          </div>

          {/* Curriculum */}

          <div className="mt-16 bg-white p-10 rounded-3xl shadow-lg">

            <h2 className="text-4xl font-bold mb-6">
              Course Curriculum
            </h2>
                <div className="space-y-4">

                {course.curriculum.map((module, index) => (
                    <div
                    key={index}
                    className="border-b pb-4"
                    >
                    {module}
                    </div>
                ))}

                </div>
           
          </div>

        </div>

        <Footer />

      </div>
    </>
  );
}

export default CourseDetails;