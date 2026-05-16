import { useState } from "react";
import axios from "axios";

function ResumeUpload() {

  const [fileName, setFileName] = useState("");
  const [atsScore, setAtsScore] =
  useState(0);

  const [skills, setSkills] =
  useState([]);
  const [recommendedJobs,
    setRecommendedJobs] =
    useState([]);

  const [suggestions, setSuggestions] =
  useState([]);
  const [resumeText, setResumeText] =
  useState("");

  const [file, setFile] = useState(null);
  const handleUpload = async () => {

  if (!file) {

    alert("Select a file first");

    return;

  }

  const formData = new FormData();

  formData.append("resume", file);

  try {

    const response = await axios.post(
      "http://localhost:5000/api/resume/upload",
      formData
    );
    const analysis =
  await axios.post(
    "http://localhost:5000/api/resume/analyze",
    {
      path:
        response.data.file.path,
    }
  );

  setAtsScore(
      analysis.data.atsScore
    );

    setSkills(
      analysis.data.detectedSkills
    );
    setRecommendedJobs(
      analysis.data.recommendedJobs
    );

    setSuggestions(
      analysis.data.suggestions
    );

    setResumeText(
      analysis.data.extractedText
    );

    alert(response.data.message);

  } catch (error) {

    alert("Upload failed");

  }

};

  const handleFileChange = (e) => {

  const selectedFile =
    e.target.files[0];

  if (selectedFile) {

    setFile(selectedFile);

    setFileName(selectedFile.name);

  }

};

  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        padding: "25px",
        borderRadius: "15px",
        marginTop: "30px",
        width: "400px",
      }}
    >

      <h2 style={{ color: "#38bdf8" }}>
        📄 Resume Upload
      </h2>

      <input
        type="file"
        onChange={handleFileChange}
        style={{
          marginTop: "20px",
        }}
      />

      {fileName && (
        <p style={{ marginTop: "15px" }}>
          Uploaded: {fileName}
        </p>
        
      )}
      <div
  style={{
    marginTop: "20px",
    background:
      "rgba(255,255,255,0.05)",
    padding: "15px",
    borderRadius: "10px",
    color: "white",
  }}
>

  <h3 style={{ color: "#38bdf8" }}>
    📊 ATS Score
  </h3>

  <h1>{atsScore}%</h1>

  <h3 style={{ color: "#38bdf8" }}>
    🛠 Detected Skills
  </h3>

  <p>
    {skills.join(", ")}
  </p>
  <h3 style={{ color: "#38bdf8" }}>
  🚀 Recommended Careers
</h3>

<ul>

  {recommendedJobs.map(
    (job, index) => (

      <li key={index}>
        {job}
      </li>

    )
  )}

</ul>

  <h3 style={{ color: "#38bdf8" }}>
    💡 Suggestions
  </h3>

  <ul>

    {suggestions.map(
      (item, index) => (

        <li key={index}>
          {item}
        </li>

      )
    )}

  </ul>

</div>
      {resumeText && (

        

  <div
  
    style={{
      marginTop: "20px",
      background:
        "rgba(255,255,255,0.05)",
      padding: "15px",
      borderRadius: "10px",
      color: "white",
      maxHeight: "250px",
      overflowY: "auto",
    }}
  >

    <h3 style={{ color: "#38bdf8" }}>
      🤖 Extracted Resume Text
    </h3>

    <p
      style={{
        whiteSpace: "pre-wrap",
      }}
    >
      {resumeText}
    </p>

  </div>

  )}
      <button
        onClick={handleUpload}
        style={{
          marginTop: "15px",
          padding: "10px 15px",
          border: "none",
          borderRadius: "10px",
          background:
            "linear-gradient(90deg,#38bdf8,#6366f1)",
          color: "white",
          cursor: "pointer",
        }}
      >
        Upload Resume
      </button>

    </div>
    
  );
}

export default ResumeUpload;