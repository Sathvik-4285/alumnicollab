const express = require("express");

const Job = require("../models/Job");

const router = express.Router();



// CREATE JOB
router.post("/create", async (req, res) => {

  try {

    const {
      title,
      company,
      location,
      salary,
      description,
    } = req.body;

    const newJob = new Job({
      title,
      company,
      location,
      salary,
      description,
    });

    await newJob.save();

    res.status(201).json({
      message: "Job created successfully",
      job: newJob,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});



// GET ALL JOBS
router.get("/", async (req, res) => {

  try {

    const jobs = await Job.find();

    res.json(jobs);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;