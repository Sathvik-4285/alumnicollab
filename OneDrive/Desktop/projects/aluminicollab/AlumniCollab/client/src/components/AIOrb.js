import { useNavigate }
from "react-router-dom";
function AIOrb() {
  const navigate = useNavigate();

  return (
    <div
         onClick={() => navigate("/ai-assistant")}

      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "90px",
        height: "90px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, #38bdf8 0%, #0f172a 70%)",
        boxShadow:
          "0 0 30px #38bdf8, 0 0 60px rgba(56,189,248,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "30px",
        cursor: "pointer",
        zIndex: 9999,
        animation: "pulse 2s infinite",
      }}
    >
      🤖

      <style>
        {`
          @keyframes pulse {

            0% {
              transform: scale(1);
              box-shadow:
                0 0 30px #38bdf8,
                0 0 60px rgba(56,189,248,0.6);
            }

            50% {
              transform: scale(1.08);
              box-shadow:
                0 0 45px #38bdf8,
                0 0 90px rgba(56,189,248,0.9);
            }

            100% {
              transform: scale(1);
              box-shadow:
                0 0 30px #38bdf8,
                0 0 60px rgba(56,189,248,0.6);
            }

          }
        `}
      </style>

    </div>
  );
}

export default AIOrb;