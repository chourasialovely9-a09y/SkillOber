const VirtualClassroom = require("../models/VirtualClassroom");

// Create Classroom
const createClassroom = async (req, res) => {
  try {
    const classroom = await VirtualClassroom.create(req.body);

    res.status(201).json(classroom);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Get All Classrooms
const getAllClassrooms = async (req, res) => {
  try {
    const classrooms = await VirtualClassroom.find()
      .populate("course", "title")
      .sort({ createdAt: 1 });

    res.status(200).json(classrooms);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Get Classroom by Course
const getClassroom = async (req, res) => {
  try {
    const classroom = await VirtualClassroom.findOne({
      course: req.params.courseId,
    });

    res.status(200).json(classroom);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
// Update Classroom
const updateClassroom = async (req, res) => {
  try {
    const classroom = await VirtualClassroom.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(classroom);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Classroom
const deleteClassroom = async (req, res) => {
  try {
    await VirtualClassroom.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Virtual classroom deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createClassroom,
  getAllClassrooms,
  getClassroom,
  updateClassroom,
  deleteClassroom,
};