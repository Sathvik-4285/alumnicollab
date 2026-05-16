const express = require("express");

const User = require("../models/User");

const router = express.Router();



// UPDATE PROFILE
router.put("/update/:id", async (req, res) => {

  try {

    const updatedUser =
      await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json({
      message: "Profile updated",
      user: updatedUser,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});



// GET PROFILE
router.get("/:id", async (req, res) => {

  try {

    const user = await User.findById(
      req.params.id
    );

    res.json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;