const express = require("express");
const router = express.Router();

const {
  getRecommendedCourses,
} = require("../controllers/recommendationController");

// Get recommended courses for a user
router.get("/:userId", getRecommendedCourses);

module.exports = router;