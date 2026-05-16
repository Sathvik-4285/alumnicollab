const express = require("express");

const Mentorship =
require("../models/Mentorship");

const router = express.Router();



// CREATE MENTORSHIP REQUEST
router.post("/request", async (req, res) => {

  try {

    const {
      studentName,
      studentEmail,
      alumniName,
      message,
    } = req.body;

    const newRequest = new Mentorship({
      studentName,
      studentEmail,
      alumniName,
      message,
    });

    await newRequest.save();

    res.status(201).json({
      message:
        "Mentorship request sent",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});



// GET ALL REQUESTS
router.get("/", async (req, res) => {

  try {

    const requests =
      await Mentorship.find();

    res.json(requests);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});
// UPDATE REQUEST STATUS
router.put("/update/:id", async (req, res) => {

  try {

    const updatedRequest =
      await Mentorship.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status,
        },
        { new: true }
      );

    res.json({
      message: "Status updated",
      request: updatedRequest,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;