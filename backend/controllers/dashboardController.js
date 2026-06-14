const User = require("../models/User");
const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");
const Progress = require("../models/Progress");

const getStudentDashboard = async (req, res) => {
  try {
    const { studentId } = req.params;

    const enrolledCourses = await Enrollment.countDocuments({
      student: studentId,
    });

    const progressRecords = await Progress.find({
      student: studentId,
    });

    const completedCourses = progressRecords.filter(
      (item) => item.percentageCompleted === 100
    ).length;

    const overallProgress =
      progressRecords.length > 0
        ? Math.round(
            progressRecords.reduce(
              (sum, item) => sum + item.percentageCompleted,
              0
            ) / progressRecords.length
          )
        : 0;

    res.status(200).json({
      enrolledCourses,
      completedCourses,
      overallProgress,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getDashboardStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalCourses = await Course.countDocuments();
    const totalEnrollments = await Enrollment.countDocuments();

    res.status(200).json({
      totalUsers,
      totalCourses,
      totalEnrollments,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardStats,
  getStudentDashboard,
};