const mongoose = require("mongoose");

const virtualClassroomSchema = new mongoose.Schema(
  {
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    instructor: {
      type: String,
      required: true,
    },

    meetingLink: {
      type: String,
      required: true,
    },

    classDate: {
      type: Date,
      required: true,
    },

    duration: {
      type: String,
      default: "60 Minutes",
    },

    resources: [
      {
        title: String,
        link: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("VirtualClassroom", virtualClassroomSchema);
