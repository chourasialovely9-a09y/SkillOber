const express = require("express");

const {
  createProgress,
  getProgress,
  updateProgress,
  getAnalytics,
} = require("../controllers/progressController");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// Protected Routes
router.post("/", protect, createProgress);

router.get("/", protect, getProgress);

router.get("/analytics", protect, getAnalytics);

router.put("/:id", protect, updateProgress);

module.exports = router;