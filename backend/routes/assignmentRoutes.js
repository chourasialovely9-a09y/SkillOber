const express = require("express");

const {
  createAssignment,
  getAssignments,
  submitAssignment,
  deleteAssignment,
} = require("../controllers/assignmentController");

const router = express.Router();

router.post("/", createAssignment);

router.get("/:courseId", getAssignments);

router.post("/submit/:id", submitAssignment);

router.delete("/:id", deleteAssignment);

module.exports = router;