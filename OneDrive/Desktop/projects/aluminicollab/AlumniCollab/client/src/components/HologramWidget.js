function HologramWidget() {

  return (
    <div
      style={{
        marginTop: "35px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(56,189,248,0.2)",
        borderRadius: "25px",
        padding: "35px",
        position: "relative",
        overflow: "hidden",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        boxShadow: "0 0 40px rgba(56,189,248,0.2)",
        color: "white",
      }}
    >

      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle, rgba(56,189,248,0.25), transparent 70%)",
          top: "-120px",
          right: "-120px",
          animation: "rotateGlow 8s linear infinite",
        }}
      />

      <h2
        style={{
          color: "#38bdf8",
          textShadow: "0 0 15px #38bdf8",
          fontSize: "30px",
        }}
      >
        🧠 AI Intelligence Core
      </h2>

      <p
        style={{
          marginTop: "20px",
          lineHeight: "1.8",
          opacity: 0.9,
          maxWidth: "700px",
        }}
      >
        AI systems are continuously analyzing placement trends,
        alumni engagement, and skill-demand intelligence.
      </p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "25px",
          flexWrap: "wrap",
        }}
      >

        <div
          style={{
            padding: "18px",
            borderRadius: "15px",
            background: "rgba(255,255,255,0.05)",
            minWidth: "160px",
          }}
        >
          ⚡ AI Processing
        </div>

        <div
          style={{
            padding: "18px",
            borderRadius: "15px",
            background: "rgba(255,255,255,0.05)",
            minWidth: "160px",
          }}
        >
          📊 Skill Mapping
        </div>

        <div
          style={{
            padding: "18px",
            borderRadius: "15px",
            background: "rgba(255,255,255,0.05)",
            minWidth: "160px",
          }}
        >
          🚀 Career Prediction
        </div>

      </div>

      <style>
        {`
          @keyframes rotateGlow {

            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(360deg);
            }

          }
        `}
      </style>

    </div>
  );
}

export default HologramWidget;