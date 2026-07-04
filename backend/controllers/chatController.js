const Chat = require("../models/Chat");

// Save Chat Message
const saveMessage = async (req, res) => {
  try {
    const chat = await Chat.create(req.body);

    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Chat History
const getMessages = async (req, res) => {
  try {
    const chats = await Chat.find({
      course: req.params.courseId,
    }).sort({ createdAt: 1 });

    res.status(200).json(chats);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  saveMessage,
  getMessages,
};