const Activity = require("../models/Activity");

// Get activities of logged-in student
const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find({
      student: req.user.id,
    })
      .populate("course", "title")
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getActivities,
};