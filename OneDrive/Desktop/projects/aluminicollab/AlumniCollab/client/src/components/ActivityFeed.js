function ActivityFeed() {

  const activities = [
    "🚀 AI matched you with 3 new jobs",
    "🎓 Alumni mentor accepted your request",
    "💼 Google posted a Frontend role",
    "🤖 Resume score increased to 92%",
    "📄 New internship recommendations available",
  ];

  return (
    <div
      style={{
        marginTop: "35px",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        borderRadius: "20px",
        padding: "30px",
        color: "white",
        boxShadow: "0 0 25px rgba(56,189,248,0.15)",
      }}
    >

      <h2
        style={{
          color: "#38bdf8",
          marginBottom: "25px",
          textShadow: "0 0 12px #38bdf8",
        }}
      >
        ⚡ Live Activity Feed
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >

        {activities.map((activity, index) => (

          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "15px",
              borderRadius: "12px",
              borderLeft: "3px solid #38bdf8",
            }}
          >
            {activity}
          </div>

        ))}

      </div>

    </div>
  );
}

export default ActivityFeed;