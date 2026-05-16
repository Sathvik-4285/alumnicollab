import { useState } from "react";
import axios from "axios";

function AIAssistant() {

  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");


const askAI = async () => {

  if (!question) return;

  try {

    const response =
      await axios.post(
        "https://alumnicollab.onrender.com/api/ai/chat",
        {
          message: question,
        }
      );

    setAnswer(
      response.data.reply
    );

  } catch (error) {

    console.log(error);

    setAnswer(
      "AI server error"
    );

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
        🤖 AI Career Assistant
      </h1>

      <input
        type="text"
        placeholder="Ask career question..."
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
        style={{
          marginTop: "20px",
          width: "400px",
          padding: "12px",
          borderRadius: "10px",
          border: "none",
        }}
      />

      <br />

      <button
        onClick={askAI}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          background:
            "linear-gradient(90deg,#38bdf8,#6366f1)",
          border: "none",
          borderRadius: "10px",
          color: "white",
          cursor: "pointer",
        }}
      >
        Ask AI
      </button>

      {answer && (

        <div
          style={{
            marginTop: "30px",
            background:
              "rgba(255,255,255,0.05)",
            padding: "20px",
            borderRadius: "15px",
            width: "500px",
          }}
        >

          <h3 style={{ color: "#38bdf8" }}>
            AI Response
          </h3>

          <p>{answer}</p>

        </div>

      )}

    </div>
  );
}

export default AIAssistant;