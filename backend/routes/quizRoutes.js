const express = require("express");

const {
  createQuiz,
  getQuizByCourse,
  submitQuiz,
} = require("../controllers/quizController");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// Create Quiz (Instructor/Admin)
router.post("/", protect, createQuiz);

// Get Quiz for a Course
router.get("/course/:courseId", protect, getQuizByCourse);

// Submit Quiz
router.post("/:id/submit", protect, submitQuiz);

module.exports = router;