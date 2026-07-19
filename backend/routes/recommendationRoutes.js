const express = require("express");
const router = express.Router();

const {
  getRecommendedCourses,
} = require("../controllers/recommendationController");

const { protect } = require("../middlewares/authMiddleware");

// Get recommendations for the logged-in user
router.get("/", protect, getRecommendedCourses);

module.exports = router;