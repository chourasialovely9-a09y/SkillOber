const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();
const authRoutes = require("./routes/authRoutes");
const courseRoutes = require("./routes/courseRoutes");
const progressRoutes = require("./routes/progressRoutes");
const enrollmentRoutes = require("./routes/enrollmentRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const recommendationRoutes = require("./routes/recommendationRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const discussionRoutes = require("./routes/discussionRoutes");
const quizRoutes = require("./routes/quizRoutes");
const assignmentRoutes = require("./routes/assignmentRoutes");
const chatRoutes = require("./routes/chatRoutes");
const virtualClassroomRoutes = require("./routes/virtualClassroomRoutes");
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);
app.get("/", (req, res) => {
  res.send("SkillOber Backend Running");
});
app.use("/api/progress", progressRoutes);
app.use("/api/enrollments", enrollmentRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/recommendations", recommendationRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/discussions", discussionRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/classrooms", virtualClassroomRoutes);
const PORT = process.env.PORT || 5000;

const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User Connected:", socket.id);

  socket.on("joinRoom", (courseId) => {
    socket.join(courseId);
  });

  socket.on("sendMessage", (data) => {
    io.to(data.course).emit("receiveMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});