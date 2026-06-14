const Progress = require("../models/Progress");

// Create Progress
const createProgress = async (req, res) => {
  try {
    const progress = await Progress.create(req.body);

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
    const progress = await Progress.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!progress) {
      return res.status(404).json({
        message: "Progress record not found",
      });
    }

    res.status(200).json(progress);
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
};