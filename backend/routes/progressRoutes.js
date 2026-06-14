const express = require("express");

const {
  createProgress,
  getProgress,
  updateProgress,
} = require("../controllers/progressController");

const router = express.Router();

router.post("/", createProgress);
router.get("/", getProgress);
router.put("/:id", updateProgress);

module.exports = router;