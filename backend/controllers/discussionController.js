const Discussion = require("../models/Discussion");

// Create Discussion
const createDiscussion = async (req, res) => {
  try {
    const discussion = await Discussion.create(req.body);

    res.status(201).json(discussion);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Discussions by Course
const getDiscussionsByCourse = async (req, res) => {
  try {
    const discussions = await Discussion.find({
      course: req.params.courseId,
    })
      .populate("user", "name")
      .sort({ createdAt: -1 });

    res.status(200).json(discussions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Discussion
const deleteDiscussion = async (req, res) => {
  try {
    await Discussion.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Discussion deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createDiscussion,
  getDiscussionsByCourse,
  deleteDiscussion,
};