import { useEffect, useState } from "react";

import { io } from "socket.io-client";

const socket = io("https://alumnicollab.onrender.com");

function Chat() {

  const [message, setMessage] = useState("");

  const [messages, setMessages] =
    useState([]);

  const user = JSON.parse(
    localStorage.getItem("user")
  );



  const sendMessage = () => {

    if (!message) return;

    const messageData = {
      sender: user.name,
      text: message,
    };

    socket.emit(
      "send_message",
      messageData
    );

    setMessage("");

  };



  useEffect(() => {

    socket.on(
      "receive_message",
      (data) => {

        setMessages((prev) => [
          ...prev,
          data,
        ]);

      }
    );

  }, []);




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
        💬 Real-Time Chat
      </h1>

      <div
        style={{
          marginTop: "30px",
          background:
            "rgba(255,255,255,0.05)",
          padding: "25px",
          borderRadius: "15px",
          height: "400px",
          overflowY: "auto",
        }}
      >

        {messages.map((msg, index) => (

          <div
            key={index}
            style={{
              marginBottom: "15px",
              padding: "12px",
              borderRadius: "10px",
              background:
                "rgba(56,189,248,0.1)",
            }}
          >

            <strong>
              {msg.sender}
            </strong>

            <p>{msg.text}</p>

          </div>

        ))}

      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "20px",
        }}
      >

        <input
          type="text"
          placeholder="Type message..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          style={{
            flex: 1,
            padding: "12px",
            borderRadius: "10px",
            border: "none",
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            padding: "12px 20px",
            background:
              "linear-gradient(90deg,#38bdf8,#6366f1)",
            border: "none",
            borderRadius: "10px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Send
        </button>

      </div>

    </div>
  );
}

export default Chat;