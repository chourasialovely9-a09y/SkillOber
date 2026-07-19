const Enrollment = require("../models/Enrollment");
const Activity = require("../models/Activity");
const Progress = require("../models/Progress");
const Course = require("../models/Course");
// Enroll Student
const enrollCourse = async (req, res) => {
  try {
    // Check if already enrolled
    const existingEnrollment = await Enrollment.findOne({
      student: req.user.id,
      course: req.body.course,
    });

    if (existingEnrollment) {
      return res.status(400).json({
        message: "Student is already enrolled in this course",
      });
    }

   const enrollment = await Enrollment.create({
      student: req.user.id,
      course: req.body.course,
    });
    const course = await Course.findById(req.body.course);

    await Progress.create({
      student: req.user.id,
      course: req.body.course,
      completedLessons: 0,
      totalLessons: course.totalLessons || 20,
    });
    // Create activity
    await Activity.create({
      student: req.user.id,
      course: req.body.course,
      action: "Enrolled in Course",
    });

    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Logged-in User Enrollments
const getEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({
      student: req.user.id,
    })
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