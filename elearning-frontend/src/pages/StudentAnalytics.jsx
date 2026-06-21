import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import Navbar from "../components/Navbar";

const StudentAnalytics = () => {
  const [analytics, setAnalytics] = useState({
    totalCourses: 0,
    completedCourses: 0,
    averageProgress: 0,
    certificatesEarned: 0,
  });

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/progress/analytics"
      );

      setAnalytics(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const chartData = [
  { name: "Courses", value: analytics.totalCourses },
  { name: "Completed", value: analytics.completedCourses },
  { name: "Certificates", value: analytics.certificatesEarned },
  { name: "Progress", value: analytics.averageProgress },
  ];

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#F6F4E8] p-8">
        {/* Header */}

        <div className="bg-[#DDF3EE] rounded-3xl p-10 mb-10">
          <h1 className="text-5xl font-bold text-[#1A2B3C]">
            Learning Analytics Dashboard
          </h1>

          <p className="text-xl text-gray-700 mt-4">
            Track your learning progress, achievements,
            certificates and overall performance.
          </p>
        </div>

        {/* Analytics Cards */}

        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-[#DDF3EE] rounded-xl shadow-lg p-6">
            <h2 className="text-gray-700">
              Total Courses
            </h2>

            <p className="text-4xl font-bold text-[#0F5C5C] mt-2">
              {analytics.totalCourses}
            </p>
          </div>

          <div className="bg-[#DDF3EE] rounded-xl shadow-lg p-6">
            <h2 className="text-gray-700">
              Completed Courses
            </h2>

            <p className="text-4xl font-bold text-[#1C7C7D] mt-2">
              {analytics.completedCourses}
            </p>
          </div>

          <div className="bg-[#DDF3EE] rounded-xl shadow-lg p-6">
            <h2 className="text-gray-700">
              Average Progress
            </h2>

            <p className="text-4xl font-bold text-[#0F5C5C] mt-2">
              {analytics.averageProgress}%
            </p>
          </div>

          <div className="bg-[#DDF3EE] rounded-xl shadow-lg p-6">
            <h2 className="text-gray-700">
              Certificates Earned
            </h2>

            <p className="text-4xl font-bold text-[#1C7C7D] mt-2">
              {analytics.certificatesEarned}
            </p>
          </div>
        </div>

        {/* Progress Bar */}

        <div className="mt-10 bg-[#DDF3EE] p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#1A2B3C] mb-4">
            Overall Learning Progress
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

        {/* Performance Chart */}

        <div className="bg-[#DDF3EE] mt-10 p-8 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold text-[#1A2B3C] mb-6">
            Learning Performance
          </h2>

          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={chartData}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 20,
                }}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                    formatter={(value, name, props) => {
                        return props.payload.name === "Progress"
                        ? [`${value}%`, "Value"]
                        : [value, "Value"];
                    }}
                />
                <Bar
                dataKey="value"
                fill="#0F5C5C"
                radius={[10, 10, 0, 0]}
                >
                <LabelList
                content={(props) => {
                    const { x, y, width, value, index } = props;

                    const text =
                    chartData[index].name === "Progress"
                        ? `${value}%`
                        : value;

                    return (
                    <text
                        x={x + width / 2}
                        y={y - 10}
                        textAnchor="middle"
                        fill="#1A2B3C"
                        fontWeight="bold"
                    >
                        {text}
                    </text>
                    );
                }}
                />
                </Bar>

            </BarChart>
         </ResponsiveContainer>
        </div>

        {/* Achievements */}

        <div className="mt-10">
          <h2 className="text-3xl font-bold mb-6 text-[#1A2B3C]">
            Achievements
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <h3 className="text-5xl">🏆</h3>

              <p className="mt-4 font-bold">
                First Course Completed
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <h3 className="text-5xl">⭐</h3>

              <p className="mt-4 font-bold">
                Learning Milestone
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <h3 className="text-5xl">🎯</h3>

              <p className="mt-4 font-bold">
                Certificate Earned
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentAnalytics;