const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const { authorize } = require("../middlewares/roleMiddleware");

const {
  createCourse,
  getCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

const router = express.Router();

router.get("/", getCourses);
router.get("/:id", getCourseById);

router.post(
  "/",
  protect,
  authorize("admin", "instructor"),
  createCourse
);

router.put(
  "/:id",
  protect,
  authorize("admin", "instructor"),
  updateCourse
);

router.delete(
  "/:id",
  protect,
  authorize("admin"),
  deleteCourse
);

module.exports = router;