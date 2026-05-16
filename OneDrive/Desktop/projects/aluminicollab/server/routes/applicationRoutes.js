const express = require("express");

const Application = require("../models/Application");

const router = express.Router();



// APPLY JOB
router.post("/apply", async (req, res) => {

  try {

    const {
      job,
      applicantName,
      applicantEmail,
    } = req.body;

    const newApplication = new Application({
      job,
      applicantName,
      applicantEmail,
    });

    await newApplication.save();

    res.status(201).json({
      message: "Applied successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});
// GET ALL APPLICATIONS
router.get("/", async (req, res) => {

  try {

    const applications =
      await Application.find()
      .populate("job");

    res.json(applications);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});
module.exports = router;