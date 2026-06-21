const express = require("express");

const {
  createProgress,
  getProgress,
  updateProgress,
  getAnalytics,
} = require("../controllers/progressController");

const router = express.Router();

router.post("/", createProgress);

router.get("/", getProgress);

router.get("/analytics", getAnalytics);

router.put("/:id", updateProgress);

module.exports = router;