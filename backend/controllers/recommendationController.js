const { getRecommendations } = require("../services/recommendationService");

const getRecommendedCourses = async (req, res) => {
  try {
    const userId = req.params.userId;

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