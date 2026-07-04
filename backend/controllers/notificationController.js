const Notification = require("../models/Notification");

// Create Notification
const createNotification = async (req, res) => {
  try {
    const notification = await Notification.create(req.body);

    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Notifications for User
const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({
      user: req.params.userId,
    }).sort({ createdAt: -1 });

    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Mark Notification as Read
const markAsRead = async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      {
        isRead: true,
      },
      {
        new: true,
      }
    );

    res.status(200).json(notification);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Notification
const deleteNotification = async (req, res) => {
  try {
    await Notification.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Notification deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createNotification,
  getNotifications,
  markAsRead,
  deleteNotification,
};