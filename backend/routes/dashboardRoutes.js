const express = require("express");

const {
  getDashboardStats,
  getStudentDashboard,
} = require("../controllers/dashboardController");

const router = express.Router();

router.get("/", getDashboardStats);

router.get(
  "/student/:studentId",
  getStudentDashboard
);

module.exports = router;