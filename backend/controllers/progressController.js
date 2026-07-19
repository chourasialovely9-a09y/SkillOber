const Progress = require("../models/Progress");
const Activity = require("../models/Activity");
const Enrollment = require("../models/Enrollment");
// Create Progress
const createProgress = async (req, res) => {
  try {
    const progress = await Progress.create({
      ...req.body,
      student: req.user.id,
    });

    await Activity.create({
      student: progress.student,
      course: progress.course,
      action: "Started Course",
    });

    res.status(201).json(progress);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Logged-in User Progress
const getProgress = async (req, res) => {
  try {
    const progress = await Progress.find({
      student: req.user.id,
    })
      .populate("student", "name email")
      .populate("course", "title thumbnail instructor level price rating enrolledStudents");

    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Progress
const updateProgress = async (req, res) => {
  try {
    const progress = await Progress.findOne({
      _id: req.params.id,
      student: req.user.id,
    });

    if (!progress) {
      return res.status(404).json({
        message: "Progress record not found",
      });
    }

    Object.assign(progress, req.body);

    // Calculate Percentage
    progress.percentageCompleted = Math.round(
      (progress.completedLessons / progress.totalLessons) * 100
    );

    // Milestone 1
    if (
      progress.completedLessons >= 1 &&
      !progress.milestones.find(
        (m) => m.title === "First Lesson Completed"
      )
    ) {
      progress.milestones.push({
        title: "First Lesson Completed",
        achieved: true,
        achievedAt: new Date(),
      });
    }
    // Milestone 2
    if (
      progress.percentageCompleted >= 25 &&
      !progress.milestones.find(
        (m) => m.title === "25% Course Completion"
      )
    ) {
      progress.milestones.push({
        title: "25% Course Completion",
        achieved: true,
        achievedAt: new Date(),
      });
    }
    // Milestone 3
    if (
      progress.percentageCompleted >= 50 &&
      !progress.milestones.find(
        (m) => m.title === "50% Course Completion"
      )
    ) {
      progress.milestones.push({
        title: "50% Course Completion",
        achieved: true,
        achievedAt: new Date(),
      });
    }

    // Course Completed
    if (
      progress.percentageCompleted === 100 &&
      !progress.certificateIssued
    ) {
      progress.certificateIssued = true;

      progress.milestones.push({
        title: "Course Completed",
        achieved: true,
        achievedAt: new Date(),
      });

      await Activity.create({
        student: progress.student,
        course: progress.course,
        action: "Certificate Earned",
      });
    }

    await progress.save();

    await Activity.create({
      student: progress.student,
      course: progress.course,
      action: `Progress Updated (${progress.percentageCompleted}%)`,
    });

    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Analytics Dashboard
const getAnalytics = async (req, res) => {
  try {
    const studentId = req.user.id;

    const totalCourses = await Enrollment.countDocuments({
      student: studentId,
    });

    const progress = await Progress.find({
       student: req.user.id,
      }).populate("course");

    const completedCourses = progress.filter(
      (p) => p.percentageCompleted === 100
    ).length;

    const averageProgress =
      progress.length > 0
        ? Math.round(
            progress.reduce(
              (sum, p) => sum + p.percentageCompleted,
              0
            ) / progress.length
          )
        : 0;

    const certificatesEarned = progress.filter(
      (p) => p.certificateIssued
    ).length;

    res.status(200).json({
      totalCourses,
      completedCourses,
      averageProgress,
      certificatesEarned,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = {
  createProgress,
  getProgress,
  updateProgress,
  getAnalytics,
};