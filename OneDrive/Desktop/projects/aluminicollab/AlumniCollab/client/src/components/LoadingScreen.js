function LoadingScreen() {

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#020617",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 99999,
        color: "white",
      }}
    >

      <div
        style={{
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          border: "4px solid rgba(56,189,248,0.15)",
          borderTop: "4px solid #38bdf8",
          animation: "spin 1.2s linear infinite",
          boxShadow: "0 0 40px rgba(56,189,248,0.6)",
        }}
      />

      <h1
        style={{
          marginTop: "35px",
          color: "#38bdf8",
          textShadow: "0 0 20px #38bdf8",
          letterSpacing: "3px",
        }}
      >
        AlumniCollab AI
      </h1>

      <p
        style={{
          opacity: 0.7,
          marginTop: "10px",
        }}
      >
        Initializing Future Career Ecosystem...
      </p>

      <style>
        {`
          @keyframes spin {

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

export default LoadingScreen;