const User = require("../models/User");
const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");
const calculateScore = require("../utils/scoreCalculator");

const getRecommendations = async (userId) => {
  // Get logged-in user
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  const userInterests = user.interests || [];

  // Get enrolled courses
  const enrollments = await Enrollment.find({ student: userId });

  const enrolledCourseIds = enrollments.map((enrollment) =>
    enrollment.course.toString()
  );

  // Fetch courses not already enrolled
  const courses = await Course.find({
    _id: { $nin: enrolledCourseIds },
  });

  // Calculate recommendation score
  const recommendations = courses.map((course) => ({
    ...course.toObject(),
    score: calculateScore(course, userInterests),
  }));

  // Sort by score (highest first)
  recommendations.sort((a, b) => b.score - a.score);

  // Return top 5
  return recommendations.slice(0, 5);
};

module.exports = {
  getRecommendations,
};
