const express = require("express");

const {
  createDiscussion,
  getDiscussionsByCourse,
  deleteDiscussion,
} = require("../controllers/discussionController");

const router = express.Router();

router.post("/", createDiscussion);

router.get("/:courseId", getDiscussionsByCourse);

router.delete("/:id", deleteDiscussion);

module.exports = router;