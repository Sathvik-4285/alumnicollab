const express = require("express");

const router = express.Router();

router.post("/chat", async (req, res) => {

  try {

    const message = req.body.message;

    let reply = "";

    if (
      message.toLowerCase().includes("full stack")
    ) {

      reply =
        "To become a Full Stack Developer, learn HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Build projects consistently and practice problem solving.";

    }

    else if (
      message.toLowerCase().includes("resume")
    ) {

      reply =
        "Improve your resume by adding strong projects, technical skills, certifications, and measurable achievements.";

    }

    else {

      reply =
        "Keep learning consistently, build projects, improve communication skills, and stay updated with industry technologies.";

    }

    res.json({
      reply,
    });

  }

  catch (error) {

    console.log(error);

    res.status(500).json({
      message: "AI error",
    });

  }

});

module.exports = router;