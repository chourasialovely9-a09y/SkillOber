const express = require("express");
const { authorize } = require("../middlewares/roleMiddleware");
const {
  getDashboardStats,
  getStudentDashboard,
} = require("../controllers/dashboardController");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.get(
  "/",
  protect,
  authorize("admin"),
  getDashboardStats
);

router.get(
  "/student/:studentId",
  protect,
  authorize("student", "admin"),
  getStudentDashboard
);
module.exports = router;