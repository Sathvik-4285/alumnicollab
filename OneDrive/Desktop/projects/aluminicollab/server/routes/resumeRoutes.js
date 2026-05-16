const express = require("express");

const multer = require("multer");

const path = require("path");

const router = express.Router();
const fs = require("fs");

const pdfParse = require("pdf-parse");



// STORAGE CONFIG
const storage = multer.diskStorage({

  destination: (req, file, cb) => {

    cb(null, "uploads/");

  },

  filename: (req, file, cb) => {

    cb(
      null,
      Date.now() +
      path.extname(file.originalname)
    );

  },

});



const upload = multer({ storage });



// UPLOAD RESUME
router.post(
  "/upload",
  upload.single("resume"),
  (req, res) => {

    try {

      res.json({
        message:
          "Resume uploaded successfully",
        file: req.file,
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

  }
);
// ANALYZE RESUME
router.post("/analyze", async (req, res) => {

  try {

    const filePath = req.body.path;

    const dataBuffer =
      fs.readFileSync(filePath);

    const pdfData =
      await pdfParse(dataBuffer);

    const text =
  pdfData.text.toLowerCase();

        const skills = [
        "react",
        "node",
        "mongodb",
        "express",
        "python",
        "java",
        "javascript",
        "docker",
        "aws",
        ];

        const detectedSkills =
        skills.filter((skill) =>
            text.includes(skill)
        );



        let score =
        detectedSkills.length * 10;

        if (score > 100) {
        score = 100;
        }



        const suggestions = [];

        if (!text.includes("project")) {

        suggestions.push(
            "Add projects section"
        );

        }

        if (!text.includes("internship")) {

        suggestions.push(
            "Add internship experience"
        );

        }

        if (!text.includes("skills")) {

        suggestions.push(
            "Add skills section"
        );

        }

        const recommendedJobs = [];



            if (
            detectedSkills.includes("react")
            ) {

            recommendedJobs.push(
                "Frontend Developer"
            );

            }



            if (
            detectedSkills.includes("node")
            ) {

            recommendedJobs.push(
                "Backend Developer"
            );

            }



            if (
            detectedSkills.includes("mongodb")
            ) {

            recommendedJobs.push(
                "MERN Stack Developer"
            );

            }



            if (
            detectedSkills.includes("python")
            ) {

            recommendedJobs.push(
                "Python Developer"
            );

            }

                    res.json({

                    extractedText: pdfData.text,

                    atsScore: score,

                    detectedSkills,

                    suggestions,
                    
                    recommendedJobs,

                    });

            } catch (error) {

                res.status(500).json({
                message: error.message,
                });

            }

            });

            module.exports = router;