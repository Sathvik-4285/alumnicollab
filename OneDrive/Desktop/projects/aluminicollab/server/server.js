require("dotenv").config();
const mentorshipRoutes =
require("./routes/mentorshipRoutes");
const profileRoutes =
require("./routes/profileRoutes");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes =
require("./routes/applicationRoutes");
require("dotenv").config();
const adminRoutes =
require("./routes/adminRoutes");
const aiRoutes =
require("./routes/aiRoutes");

const app = express();
const resumeRoutes =
require("./routes/resumeRoutes");

app.use(cors());
app.use(express.json());
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use(
  "/api/applications",
  applicationRoutes
);
app.use("/api/profile", profileRoutes);
app.use(
  "/api/mentorship",
  mentorshipRoutes
);
app.use("/api/resume", resumeRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/ai", aiRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("AlumniCollab Backend Running");
});

const PORT = 5000;
app.post("/api/auth/login", async (req, res) => {

  const { email, password } = req.body;

  try {

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password"
      });
    }

    res.json({
      message: "Login successful",
      user
    });

  } catch (error) {
    console.log(error);
  }

});

const http = require("http");

const { Server } = require("socket.io");

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});



io.on("connection", (socket) => {

  console.log("User connected");



  socket.on("send_message", (data) => {

    io.emit("receive_message", data);

  });



  socket.on("disconnect", () => {

    console.log("User disconnected");

  });

});


server.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});