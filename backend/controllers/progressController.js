const Progress = require("../models/Progress");
const Activity = require("../models/Activity");

// Create Progress
const createProgress = async (req, res) => {
  try {
    const progress = await Progress.create(req.body);

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

// Get All Progress Records
const getProgress = async (req, res) => {
  try {
    const progress = await Progress.find()
      .populate("student", "name email")
      .populate("course", "title");

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
    const progress = await Progress.findById(req.params.id);

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

    // Milestones
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

// Analytics Dashboard Data
const getAnalytics = async (req, res) => {
  try {
    const progress = await Progress.find();

    const totalCourses = progress.length;

    const completedCourses = progress.filter(
      (p) => p.percentageCompleted === 100
    ).length;

    const averageProgress =
      totalCourses > 0
        ? Math.round(
            progress.reduce(
              (sum, p) => sum + p.percentageCompleted,
              0
            ) / totalCourses
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