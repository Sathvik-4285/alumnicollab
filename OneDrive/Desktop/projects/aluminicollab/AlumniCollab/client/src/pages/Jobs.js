import { useEffect, useState } from "react";
import axios from "axios";

function Jobs() {
  const [search, setSearch] =
  useState("");

    const [filteredJobs,
    setFilteredJobs] =
    useState([]);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {

    fetchJobs();

  }, []);

  const fetchJobs = async () => {

    try {

      const response = await axios.get(
        " https://alumnicollab.onrender.com/api/jobs"
      );

      setJobs(response.data);

    setFilteredJobs(response.data);

    } catch (error) {

      console.log(error);

    }

  };
  const handleApply = async (jobId) => {

  try {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    const response = await axios.post(
      " https://alumnicollab.onrender.com/api/applications/apply",
      {
        job: jobId,
        applicantName: user.name,
        applicantEmail: user.email,
      }
    );

    alert(response.data.message);

  } catch (error) {

    alert("Application failed");

  }

};
const handleSearch = (value) => {

  setSearch(value);

  const filtered =
    jobs.filter((job) =>

      job.title
        .toLowerCase()
        .includes(
          value.toLowerCase()
        ) ||

      job.company
        .toLowerCase()
        .includes(
          value.toLowerCase()
        ) ||

      job.location
        .toLowerCase()
        .includes(
          value.toLowerCase()
        )

    );

  setFilteredJobs(filtered);

};
const saveJob = (job) => {

  const savedJobs =
    JSON.parse(
      localStorage.getItem(
        "savedJobs"
      )
    ) || [];



  savedJobs.push(job);



  localStorage.setItem(
    "savedJobs",
    JSON.stringify(savedJobs)
  );



  alert("Job saved");

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
        💼 Available Jobs
      </h1>
      <input
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) =>
          handleSearch(e.target.value)
        }
        style={{
          marginTop: "20px",
          padding: "12px",
          width: "350px",
          borderRadius: "10px",
          border: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "30px",
        }}
      >

        {filteredJobs.map((job) => (

          <div
            key={job._id}
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "25px",
              borderRadius: "15px",
              width: "300px",
              boxShadow:
                "0 0 20px rgba(56,189,248,0.2)",
            }}
          >

            <h2 style={{ color: "#38bdf8" }}>
              {job.title}
            </h2>

            <p>
              <strong>Company:</strong>
              {" "}
              {job.company}
            </p>

            <p>
              <strong>Location:</strong>
              {" "}
              {job.location}
            </p>

            <p>
              <strong>Salary:</strong>
              {" "}
              {job.salary}
            </p>

            <p>
              {job.description}
            </p>

            <button
                onClick={() => handleApply(job._id)}
                style={{
                    marginTop: "15px",
                    padding: "10px 15px",
                    background:
                    "linear-gradient(90deg,#38bdf8,#6366f1)",
                    border: "none",
                    borderRadius: "10px",
                    color: "white",
                    cursor: "pointer",
                }}
                >
                  <button
                        onClick={() => saveJob(job)}
                        style={{
                          marginTop: "10px",
                          padding: "10px 15px",
                          background:
                            "rgba(255,255,255,0.1)",
                          border: "none",
                          borderRadius: "10px",
                          color: "white",
                          cursor: "pointer",
                          marginLeft: "10px",
                        }}
                      >
                        ⭐ Save Job
                      </button>
                Apply Now
                </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Jobs;