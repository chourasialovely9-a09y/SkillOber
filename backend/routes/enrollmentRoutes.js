const express = require("express");
const { protect } = require("../middlewares/authMiddleware");

const {
  enrollCourse,
  getEnrollments,
} = require("../controllers/enrollmentController");

const router = express.Router();

router.post("/", protect, enrollCourse);
router.get("/", protect, getEnrollments);

module.exports = router;