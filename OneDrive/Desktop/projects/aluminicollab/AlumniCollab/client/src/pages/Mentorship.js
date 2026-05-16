import { useState } from "react";
import axios from "axios";

function Mentorship() {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const [formData, setFormData] = useState({
    alumniName: "",
    message: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "https://alumnicollab.onrender.com/api/mentorship/request",
        {
          studentName: user.name,
          studentEmail: user.email,
          alumniName: formData.alumniName,
          message: formData.message,
        }
      );

      alert(response.data.message);

    } catch (error) {

      alert("Request failed");

    }

  };

  return (

  <div
    style={{
      minHeight: "100vh",

      background: `
      radial-gradient(circle at top left, rgba(56,189,248,0.15), transparent 25%),
      radial-gradient(circle at bottom right, rgba(99,102,241,0.18), transparent 25%),
      #020617`,

      color: "white",

      padding: "40px",

      fontFamily: "Arial",
    }}
  >

    <h1
      style={{
        color: "#38bdf8",

        fontSize: "38px",

        marginBottom: "10px",
      }}
    >
      🎓 Alumni Mentorship
    </h1>

    <p
      style={{
        color: "#cbd5e1",

        marginBottom: "40px",

        fontSize: "18px",
      }}
    >
      Connect with experienced alumni
      and grow your career 🚀
    </p>

    <div
      style={{

        display: "flex",

        justifyContent: "center",

      }}
    >

      <form
        onSubmit={handleSubmit}

        style={{

          width: "500px",

          background:
            "rgba(255,255,255,0.05)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          borderRadius: "25px",

          padding: "35px",

          display: "flex",

          flexDirection: "column",

          gap: "20px",

          backdropFilter: "blur(18px)",

          WebkitBackdropFilter:
            "blur(18px)",

          boxShadow:
            "0 0 25px rgba(56,189,248,0.12)",
        }}
      >

        <input
          type="text"

          name="alumniName"

          placeholder="Enter Alumni Name"

          onChange={handleChange}

          style={{

            padding: "14px",

            borderRadius: "12px",

            border: "none",

            outline: "none",

            background:
              "rgba(255,255,255,0.08)",

            color: "white",

            fontSize: "16px",
          }}
        />

        <textarea
          name="message"

          placeholder="Write your mentorship request..."

          rows="6"

          onChange={handleChange}

          style={{

            padding: "14px",

            borderRadius: "12px",

            border: "none",

            outline: "none",

            resize: "none",

            background:
              "rgba(255,255,255,0.08)",

            color: "white",

            fontSize: "16px",
          }}
        />

        <button
          type="submit"

          style={{

            padding: "14px",

            border: "none",

            borderRadius: "12px",

            background:
              "linear-gradient(90deg,#38bdf8,#6366f1)",

            color: "white",

            fontSize: "18px",

            fontWeight: "bold",

            cursor: "pointer",

            boxShadow:
              "0 0 20px rgba(56,189,248,0.35)",

            transition: "0.3s ease",
          }}
        >
          Send Mentorship Request
        </button>

      </form>

    </div>

  </div>

);
}

export default Mentorship;