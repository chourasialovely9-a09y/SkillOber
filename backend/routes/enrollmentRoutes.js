const express = require("express");

const {
  enrollCourse,
  getEnrollments,
} = require("../controllers/enrollmentController");

const router = express.Router();

router.post("/", enrollCourse);
router.get("/", getEnrollments);

module.exports = router;