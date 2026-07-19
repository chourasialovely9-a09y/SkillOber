const express = require("express");

const {
  createClassroom,
  getAllClassrooms,
  getClassroom,
  updateClassroom,
  deleteClassroom,
} = require("../controllers/virtualClassroomController");

const router = express.Router();

router.post("/", createClassroom);

router.get("/", getAllClassrooms);

router.get("/:courseId", getClassroom);

router.put("/:id", updateClassroom);

router.delete("/:id", deleteClassroom);

module.exports = router;