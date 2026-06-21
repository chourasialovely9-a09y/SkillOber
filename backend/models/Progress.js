const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    completedLessons: {
      type: Number,
      default: 0,
    },

    totalLessons: {
      type: Number,
      required: true,
    },

    percentageCompleted: {
      type: Number,
      default: 0,
    },

    quizzes: [
      {
        quizId: {
          type: String,
        },

        score: {
          type: Number,
          default: 0,
        },

        attemptedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],

    certificateIssued: {
      type: Boolean,
      default: false,
    },

    milestones: [
      {
        title: {
          type: String,
        },

        achieved: {
          type: Boolean,
          default: false,
        },

        achievedAt: {
          type: Date,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Progress", progressSchema);