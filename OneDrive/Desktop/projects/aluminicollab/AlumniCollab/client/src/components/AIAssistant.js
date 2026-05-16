import { useState } from "react";

import { useNavigate }
from "react-router-dom";
import axios from "axios";
function AIAssistant({ user }) {
  const [question, setQuestion] =
  useState("");
  const navigate = useNavigate();
  const [answer, setAnswer] =
  useState("");

  const suggestions = {

    Student:
      "Learn React + DSA to unlock more placement opportunities 🚀",

    Alumni:
      "Guide juniors and build strong mentorship connections 🎓",

    Recruiter:
      "Discover top candidates using AI-powered recommendations 💼",

    Faculty:
      "Help students align with industry-focused skills 📚",
  };
  const askAI = async () => {

  if (!question) return;

  try {

    const response =
      await axios.post(
        " https://alumnicollab.onrender.com/api/ai/chat",
        {
          message: question,
        }
      );

    setAnswer(
      response.data.reply
    );

  } catch (error) {

    setAnswer(
      "AI server error"
    );

  }

};

  return (
    <div
      style={{
        marginTop: "35px",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderRadius: "25px",
        padding: "35px",
        color: "white",
        position: "relative",
        overflow: "hidden",
        boxShadow: "0 0 30px rgba(56,189,248,0.25)",
      }}
    >

      <div
        style={{
          position: "absolute",
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.35), transparent 70%)",
          top: "-60px",
          right: "-60px",
        }}
      />

      <h2
        style={{
          color: "#38bdf8",
          fontSize: "30px",
          marginBottom: "20px",
          textShadow: "0 0 15px #38bdf8",
        }}
      >
        🤖 AI Career Assistant
      </h2>

      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.8",
          opacity: 0.9,
          maxWidth: "700px",
        }}
      >
        {suggestions[user?.role]}
      </p>
      <input
  type="text"
  placeholder="Ask AI career question..."
  value={question}
  onChange={(e) =>
    setQuestion(e.target.value)
  }
  style={{
    marginTop: "20px",
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    outline: "none",
    background: "rgba(255,255,255,0.08)",
    color: "white",
  }}
/>

      <div
        style={{
          marginTop: "25px",
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >

        <button
                onClick={askAI}
                style={{
                  padding: "12px 20px",
                  borderRadius: "12px",
                  border: "none",
                  background:
                    "linear-gradient(90deg,#38bdf8,#6366f1)",
                  color: "white",
                  cursor: "pointer",
                  boxShadow:
                    "0 0 20px rgba(56,189,248,0.5)",
                }}
              >
                Ask AI
              </button>

        <button 
              onClick={() => navigate("/ai-assistant")
            }
          style={{
            padding: "12px 20px",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.05)",
            color: "white",
            cursor: "pointer",
          }}
        >
          AI Career Roadmap
        </button>
        {answer && (

        <div
          style={{
            marginTop: "25px",
            background:
              "rgba(255,255,255,0.05)",
            padding: "20px",
            borderRadius: "15px",
            border:
              "1px solid rgba(56,189,248,0.2)",
          }}
        >

          <h3 style={{ color: "#38bdf8" }}>
            🤖 AI Response
          </h3>

          <p
            style={{
              lineHeight: "1.8",
            }}
          >
            {answer}
          </p>

        </div>

      )}

            </div>

          </div>
  );
}

export default AIAssistant;