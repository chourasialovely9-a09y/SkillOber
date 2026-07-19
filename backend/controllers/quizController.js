const Quiz = require("../models/Quiz");
const Progress = require("../models/Progress");
const Activity = require("../models/Activity");
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

const submitQuiz = async (req, res) => {
  try {
    const { answers } = req.body;

    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({
        message: "Quiz not found",
      });
    }

    // Calculate Score
    let score = 0;

    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        score++;
      }
    });

    const percentage = Math.round(
      (score / quiz.questions.length) * 100
    );

    // Find Student Progress
    const progress = await Progress.findOne({
      student: req.user.id,
      course: quiz.course,
    });

    let certificateIssued = false;

    if (progress) {
      // Update existing quiz attempt instead of creating duplicates
      const existingAttempt = progress.quizzes.find(
        (q) => q.quizId === quiz._id.toString()
      );

      if (existingAttempt) {
        existingAttempt.score = score;
        existingAttempt.attemptedAt = new Date();
      } else {
        progress.quizzes.push({
          quizId: quiz._id.toString(),
          score,
        });
      }

      // Certificate Rule
      if (
        progress.percentageCompleted === 100 &&
        percentage >= 60
      ) {
        progress.certificateIssued = true;
      }

      await progress.save();

      certificateIssued = progress.certificateIssued;
    }

    // Activity
    await Activity.create({
      student: req.user.id,
      course: quiz.course,
      action: `Completed Quiz (${score}/${quiz.questions.length})`,
    });

    res.status(200).json({
      totalQuestions: quiz.questions.length,
      score,
      percentage,
      certificateIssued,
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