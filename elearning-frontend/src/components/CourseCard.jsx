import { Link } from "react-router-dom";

function CourseCard({
  id,
  title,
  level,
  price,
  image,
  instructor,
  rating,
  enrolledStudents,
}) {
  return (
    <Link to={`/course/${id}`}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover"
        />

        <div className="p-5">

          <span className="bg-[#DDF3EE] text-[#0F6666] px-3 py-1 rounded-full text-sm font-semibold">
            {level}
          </span>

          <h2 className="text-2xl font-bold mt-4">
            {title}
          </h2>

          <p className="text-gray-500 mt-2">
            By {instructor}
          </p>

          <div className="flex items-center gap-2 mt-3">

            <span className="font-bold text-yellow-500">
              ★ {rating}
            </span>

            <span className="text-gray-500">
              {enrolledStudents} Students
            </span>

          </div>

          <div className="flex justify-between items-center mt-6">

            <h3 className="text-3xl font-bold text-[#0F6666]">
              ₹{price}
            </h3>

            <button
              className="bg-[#0F6666] text-white px-5 py-3 rounded-xl hover:bg-[#0c5555] transition"
            >
              View Course
            </button>

          </div>

        </div>

      </div>
    </Link>
  );
}

export default CourseCard;