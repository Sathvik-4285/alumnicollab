import { useEffect, useState } from "react";
import axios from "axios";

function MentorshipRequests() {

  const [requests, setRequests] = useState([]);

  useEffect(() => {

    fetchRequests();

  }, []);

  const fetchRequests = async () => {

    try {

      const response = await axios.get(
        "https://alumnicollab.onrender.com/api/mentorship"
      );

      setRequests(response.data);

    } catch (error) {

      console.log(error);

    }

  };
  const updateStatus = async (
  id,
  status
) => {

  try {

    await axios.put(
      "https://alumnicollab.onrender.com/api/mentorship/update/${id}",
      { status }
    );

    fetchRequests();

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
        🎓 Mentorship Requests
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "30px",
        }}
      >

        {requests.map((request) => (

          <div
            key={request._id}
            style={{
              background:
                "rgba(255,255,255,0.05)",
              padding: "25px",
              borderRadius: "15px",
              width: "320px",
              boxShadow:
                "0 0 20px rgba(56,189,248,0.2)",
            }}
          >

            <h2 style={{ color: "#38bdf8" }}>
              {request.studentName}
            </h2>

            <p>
              <strong>Email:</strong>
              {" "}
              {request.studentEmail}
            </p>

            <p>
              <strong>Requested Alumni:</strong>
              {" "}
              {request.alumniName}
            </p>

            <p>
              <strong>Message:</strong>
              {" "}
              {request.message}
            </p>

            <p>
              <strong>Status:</strong>
              {" "}
              {request.status}
            </p>
            <div
            style={{
                display: "flex",
                gap: "10px",
                marginTop: "15px",
            }}
            >

            <button
                onClick={() =>
                updateStatus(
                    request._id,
                    "Accepted"
                )
                }
                style={{
                padding: "10px",
                border: "none",
                borderRadius: "8px",
                background: "#22c55e",
                color: "white",
                cursor: "pointer",
                }}
            >
                Accept
            </button>

            <button
                onClick={() =>
                updateStatus(
                    request._id,
                    "Rejected"
                )
                }
                style={{
                padding: "10px",
                border: "none",
                borderRadius: "8px",
                background: "#ef4444",
                color: "white",
                cursor: "pointer",
                }}
            >
                Reject
            </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default MentorshipRequests;