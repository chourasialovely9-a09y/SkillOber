const Enrollment = require("../models/Enrollment");

// Enroll Student
const enrollCourse = async (req, res) => {
  try {
    const enrollment = await Enrollment.create(req.body);

    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Enrollments
const getEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find()
      .populate("student", "name email")
      .populate("course", "title");

    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  enrollCourse,
  getEnrollments,
};