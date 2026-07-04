const Quiz = require("../models/Quiz");

// Create Quiz
const createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);

    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Quiz by Course
const getQuizByCourse = async (req, res) => {
  try {
    const quiz = await Quiz.findOne({
      course: req.params.courseId,
    });

    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Submit Quiz
const submitQuiz = async (req, res) => {
  try {
    const { answers } = req.body;

    const quiz = await Quiz.findById(req.params.id);

    let score = 0;

    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        score++;
      }
    });

    res.status(200).json({
      totalQuestions: quiz.questions.length,
      score,
      percentage: (
        (score / quiz.questions.length) *
        100
      ).toFixed(2),
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createQuiz,
  getQuizByCourse,
  submitQuiz,
};