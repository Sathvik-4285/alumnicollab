const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["Student", "Alumni", "Faculty", "Recruiter"],
    default: "Student",
  },

  bio: {
  type: String,
  default: "",
},

skills: {
  type: String,
  default: "",
},

github: {
  type: String,
  default: "",
},

linkedin: {
  type: String,
  default: "",
},


});

module.exports = mongoose.model("User", userSchema);
