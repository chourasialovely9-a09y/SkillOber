const { getRecommendations } = require("../services/recommendationService");

const getRecommendedCourses = async (req, res) => {
  try {
    // Get logged-in user's ID from JWT
    const userId = req.user.id;

    const recommendations = await getRecommendations(userId);

    res.status(200).json({
      success: true,
      count: recommendations.length,
      recommendations,
    });
  } catch (error) {
    console.error("Recommendation Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getRecommendedCourses,
};