import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {

  e.preventDefault();

  try {

        const response =
      await axios.post(
    "https://alumnicollab.onrender.com/api/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

    console.log(
      "LOGIN RESPONSE:",
      response.data
    );

    localStorage.setItem(
      "token",
      response.data.token || "loggedin"
    );

    localStorage.setItem(
      "user",
      JSON.stringify(
        response.data.user
      )
    );

    console.log(
      "STORED USER:",
      localStorage.getItem("user")
    );

    alert(response.data.message);

    navigate("/dashboard");

  }  catch (error) {

  console.log("LOGIN ERROR:", error);

  console.log(
    error.response?.data
  );

  alert(
    error.response?.data?.message ||
    "Login failed"
  );

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
          width: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#38bdf8" }}>
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
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
          placeholder="Enter Password"
          onChange={handleChange}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            padding: "12px",
            backgroundColor: "#38bdf8",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
        <p
            style={{
              textAlign: "center",
              marginTop: "15px",
              color: "#cbd5e1",
            }}
          >

            Don't have an account?{" "}

            <span

              onClick={() =>
                navigate("/signup")
              }

              style={{
                color: "#38bdf8",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >

              Sign Up

            </span>

          </p>
                </div>
              </div>
  );
}

export default Login;