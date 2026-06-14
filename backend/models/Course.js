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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", courseSchema);