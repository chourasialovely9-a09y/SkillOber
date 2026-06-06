import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";

import web from "../assets/web.png";
import python from "../assets/python.png";
import ml from "../assets/ml.png";

function Courses() {
  return (
    <>
      <Navbar />

      <div className="bg-[#F6F4E8] min-h-screen">

        <div className="max-w-7xl mx-auto px-8 py-12">

          <h1 className="text-6xl font-bold mb-10">
            Courses
          </h1>

          <input
            type="text"
            placeholder="Search Courses..."
            className="w-full p-5 border rounded-2xl mb-12 text-xl"
          />

          <div className="grid md:grid-cols-3 gap-8">

            <CourseCard
              title="Web Development"
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

        <Footer />

      </div>
    </>
  );
}

export default Courses;