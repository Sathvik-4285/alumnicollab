import { useEffect, useState } from "react";
import axios from "axios";

function Applicants() {

  const [applications, setApplications] =
    useState([]);

  useEffect(() => {

    fetchApplications();

  }, []);

  const fetchApplications = async () => {

    try {

      const response = await axios.get(
        "http://localhost:5000/api/applications"
      );

      setApplications(response.data);

    } catch (error) {

      console.log(error);

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
        👨‍💼 Applicants Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "30px",
        }}
      >

        {applications.map((app) => (

          <div
            key={app._id}
            style={{
              background:
                "rgba(255,255,255,0.05)",
              padding: "25px",
              borderRadius: "15px",
              width: "300px",
              boxShadow:
                "0 0 20px rgba(56,189,248,0.2)",
            }}
          >

            <h2 style={{ color: "#38bdf8" }}>
              {app.applicantName}
            </h2>

            <p>
              <strong>Email:</strong>
              {" "}
              {app.applicantEmail}
            </p>

            <p>
              <strong>Applied For:</strong>
              {" "}
              {app.job?.title}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Applicants;