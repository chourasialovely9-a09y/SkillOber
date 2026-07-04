const express = require("express");

const {
  createQuiz,
  getQuizByCourse,
  submitQuiz,
} = require("../controllers/quizController");

const router = express.Router();

router.post("/", createQuiz);

router.get("/:courseId", getQuizByCourse);

router.post("/submit/:id", submitQuiz);

module.exports = router;