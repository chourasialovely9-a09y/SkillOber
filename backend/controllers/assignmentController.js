const Assignment = require("../models/Assignment");

// Create Assignment
const createAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.create(req.body);

    res.status(201).json(assignment);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Assignments by Course
const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({
      course: req.params.courseId,
    });

    res.status(200).json(assignments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Submit Assignment
const submitAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);

    assignment.submissions.push(req.body);

    await assignment.save();

    res.status(200).json({
      message: "Assignment submitted successfully",
      assignment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Assignment
const deleteAssignment = async (req, res) => {
  try {
    await Assignment.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Assignment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createAssignment,
  getAssignments,
  submitAssignment,
  deleteAssignment,
};