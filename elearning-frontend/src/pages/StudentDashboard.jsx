import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import API from "../api/api";
import CourseCard from "../components/CourseCard";
import { Link } from "react-router-dom";

function StudentDashboard() {
  const [courses, setCourses] = useState([]);
  const [progress, setProgress] = useState([]);
  const [activities, setActivities] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [analytics, setAnalytics] = useState({
    totalCourses: 0,
    completedCourses: 0,
    averageProgress: 0,
    certificatesEarned: 0,
    });
  useEffect(() => {
    fetchCourses();
    fetchAnalytics();
    fetchProgress();
    fetchRecommendations();
    fetchActivities();
    fetchClassrooms();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await API.get("/courses");
      setCourses(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchAnalytics = async () => {
    try {
      const res = await API.get("/progress/analytics");
      setAnalytics(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchProgress = async () => {
  try {
    const res = await API.get("/progress");
    setProgress(res.data);
  } catch (error) {
    console.log(error);
  }
};

const fetchRecommendations = async () => {
  try {
    const res = await API.get("/recommendations");
    setRecommendations(res.data.recommendations);
  } catch (error) {
    console.log(error);
  }
};
  const fetchActivities = async () => {
  try {
    const res = await API.get("/activities");
    setActivities(res.data);
  } catch (error) {
    console.log(error);
  }
};
  const fetchClassrooms = async () => {
  try {
    const res = await API.get("/classrooms");
    setClassrooms(res.data);
  } catch (error) {
    console.log(error);
  }
};
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
              {recommendations.slice(0, 3).map((course) => (
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
              ))}
            </div>
            
        </div>
        {/* Stats Cards */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-[#DDF3EE] rounded-xl shadow-lg p-6">
            <h2 className="text-gray-700">
              Enrolled Courses
            </h2>

            <p className="text-4xl font-bold text-[#0F5C5C]">
              {analytics.totalCourses}
            </p>
          </div>

          <div className="bg-[#DDF3EE] rounded-xl shadow-lg p-6">
            <h2 className="text-gray-700">
              Completed Courses
            </h2>

            <p className="text-4xl font-bold text-[#1C7C7D]">
              {analytics.completedCourses}
            </p>
          </div>

          <div className="bg-[#DDF3EE] rounded-xl shadow-lg p-6">
            <h2 className="text-gray-700">
              Progress
            </h2>

            <p className="text-4xl font-bold text-[#0F5C5C]">
              {analytics.averageProgress}%
            </p>
          </div>

          <div className="bg-[#DDF3EE] rounded-xl shadow-lg p-6">
            <h2 className="text-gray-700">
              AI Recommendation
            </h2>

            <p className="font-semibold">
              {recommendations.length > 0
                ? recommendations[0].title
                : "No Recommendation"}
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
              style={{
                  width: `${analytics.averageProgress}%`,
              }}
            ></div>

          </div>

          <p className="mt-3 text-lg">
            {analytics.averageProgress}% Course Completion
          </p>

        </div>

        {/* Continue Learning */}

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Continue Learning
          </h2>

          {progress.length > 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold">
                    {progress[0].course.title}
                  </h3>

                  <p className="text-gray-500">
                    {progress[0].percentageCompleted}% Completed
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {progress[0].completedLessons} / {progress[0].totalLessons} Lessons Completed
                  </p>
                </div>

                <Link
                  to={`/course/${progress[0].course._id}`}
                  className="bg-[#0F5C5C] text-white px-6 py-3 rounded-xl hover:bg-[#0c4a4a]"
                >
                  Continue
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
              <p className="text-gray-500">
                You haven't started any course yet.
              </p>

              <Link
                to="/courses"
                className="inline-block mt-4 bg-[#0F5C5C] text-white px-6 py-3 rounded-xl hover:bg-[#0c4a4a]"
              >
                Browse Courses
              </Link>
            </div>
          )}
        </div>

          {/* Recent Activity */}

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Recent Activity
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            {activities.length > 0 ? (
              activities.map((activity) => (
                <div
                  key={activity._id}
                  className="border-b py-3 last:border-b-0"
                >
                  ✅ {activity.action}
                  {activity.course && (
                    <span className="text-gray-500">
                      {" "}
                      - {activity.course.title}
                    </span>
                  )}
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                No recent activity found.
              </p>
            )}
          </div>
        </div>
        {/* Upcoming Classes */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-6">
            Upcoming Classes
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-6">

            {classrooms.length > 0 ? (
              classrooms.map((classroom) => (
                <div
                  key={classroom._id}
                  className="border-b py-4 last:border-b-0"
                >
                  <h3 className="font-semibold text-lg">
                    📚 {classroom.course.title}
                  </h3>

                  <p className="text-gray-600">
                    👨‍🏫 {classroom.instructor}
                  </p>

                  <p className="text-gray-600">
                    🕒{" "}
                    {new Date(classroom.classDate).toLocaleString()}
                  </p>

                  <p className="text-gray-600">
                    ⏳ {classroom.duration}
                  </p>

                  <a
                    href={classroom.meetingLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0F5C5C] font-semibold hover:underline"
                  >
                    Join Class
                  </a>
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                No upcoming classes.
              </p>
            )}

          </div>

        </div>
       
        {/* AI Recommendations */}

        <div className="mt-16 bg-[#0F5C5C] text-white p-8 rounded-3xl">

          <h2 className="text-3xl font-bold mb-4">
            AI Recommended For You
          </h2>

          <ul className="space-y-3 text-lg">
            {recommendations.length > 0 ? (
              recommendations.slice(0, 3).map((course) => (
                <li key={course._id}>
                  🚀 {course.title}
                </li>
              ))
            ) : (
              <li>No recommendations available.</li>
            )}
          </ul>

        </div>
        {/* Achievements */}

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Achievements
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {progress.length > 0 ? (

              progress.flatMap((item) => {

                const cards = [];

                item.milestones.forEach((milestone) => {

                  let icon = "🎯";

                  if (milestone.title === "First Lesson Completed")
                    icon = "📖";

                  if (milestone.title === "25% Course Completion")
                    icon = "🥉";

                  if (milestone.title === "50% Course Completion")
                    icon = "🥈";

                  if (milestone.title === "Course Completed")
                    icon = "🎓";

                  cards.push(

                    <div
                      key={`${item._id}-${milestone.title}`}
                      className="bg-white p-6 rounded-2xl shadow-lg text-center"
                    >
                      <h3 className="text-5xl">
                        {icon}
                      </h3>

                      <p className="mt-4 font-bold">
                        {milestone.title}
                      </p>

                      <p className="text-sm text-gray-500 mt-2">
                        {item.course.title}
                      </p>
                    </div>

                  );
                });

                if (item.certificateIssued) {

                  cards.push(

                    <div
                      key={`${item._id}-certificate`}
                      className="bg-white p-6 rounded-2xl shadow-lg text-center"
                    >
                      <h3 className="text-5xl">
                        🏆
                      </h3>

                      <p className="mt-4 font-bold">
                        Certificate Earned
                      </p>

                      <p className="text-sm text-gray-500 mt-2">
                        {item.course.title}
                      </p>
                    </div>

                  );
                }

                return cards;

              })

            ) : (

              <div className="col-span-3 bg-white rounded-2xl shadow-lg p-6 text-center text-gray-500">
                No achievements yet. Keep learning!
              </div>

            )}

          </div>
        </div>

        {/* Recommended Courses */}

        <div className="mt-16">

          <h2 className="text-4xl font-bold mb-8">
            Recommended Courses
          </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {courses.slice(3, 6).map((course) => (
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
              ))}
            </div>
          

        </div>

      </div>
    </>
  );
}

export default StudentDashboard;