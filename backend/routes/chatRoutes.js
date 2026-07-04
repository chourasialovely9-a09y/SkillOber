const express = require("express");

const {
  saveMessage,
  getMessages,
} = require("../controllers/chatController");

const router = express.Router();

router.post("/", saveMessage);

router.get("/:courseId", getMessages);

module.exports = router;