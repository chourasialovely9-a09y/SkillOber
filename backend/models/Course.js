const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    instructor: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String,
      default: "",
    },

    price: {
      type: Number,
      default: 0,
    },

    // Difficulty level
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },

    // Keywords used for recommendation
    tags: {
      type: [String],
      default: [],
    },
    duration: {
        type: String,
        default: "10 Hours",
      },

      language: {
        type: String,
        default: "English",
      },
    // Average course rating
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    // Number of students enrolled
    enrolledStudents: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);