import { useState } from "react";
import axios from "axios";
import { useNavigate }
from "react-router-dom";

function Signup() {
   const navigate =
    useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {

  e.preventDefault();

  try {

    const response = await axios.post(
      " https://alumnicollab.onrender.com/api/auth/signup",
      formData
    );

    localStorage.setItem(
          "token",
          "loggedin"
        );

        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

        alert(response.data.message);

        navigate("/dashboard");

  } catch (error) {

    console.log(error);

    alert("Signup failed");

  }

};

  return (
    <div
      style={{
        backgroundColor: "#020617",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          backgroundColor: "#0f172a",
          padding: "40px",
          borderRadius: "15px",
          width: "400px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#38bdf8" }}>
          Signup
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <select
          name="role"
          onChange={handleChange}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
          }}
        >
          <option>Student</option>
          <option>Alumni</option>
          <option>Faculty</option>
          <option>Recruiter</option>
        </select>

        <button
          onClick={handleSignup}
          style={{
            padding: "12px",
            backgroundColor: "#38bdf8",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Create Account
        </button>
        <p
          style={{
            textAlign: "center",
            marginTop: "15px",
            color: "#cbd5e1",
          }}
        >

          Already have an account?{" "}

          <span

            onClick={() =>
              navigate("/")
            }

            style={{
              color: "#38bdf8",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >

            Login

          </span>

        </p>
      </div>
    </div>
  );
}

export default Signup;