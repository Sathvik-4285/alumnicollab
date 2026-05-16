import { useState } from "react";
import axios from "axios";

function PostJob() {

  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
  });

  const handleChange = (e) => {

    setJobData({
      ...jobData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        " https://alumnicollab.onrender.com/api/jobs/create",
        jobData
      );

      alert(response.data.message);

    } catch (error) {

      alert("Job creation failed");

    }

  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "40px",
      }}
    >

      <h1 style={{ color: "#38bdf8" }}>
        🚀 Post New Job
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          gap: "15px",
          marginTop: "30px",
        }}
      >

        <input
          type="text"
          name="title"
          placeholder="Job Title"
          onChange={handleChange}
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          onChange={handleChange}
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        />

        <input
          type="text"
          name="salary"
          placeholder="Salary"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Job Description"
          rows="5"
          onChange={handleChange}
        />

        <button type="submit">
          Post Job
        </button>

      </form>

    </div>
  );
}

export default PostJob;