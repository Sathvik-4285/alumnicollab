function NotificationPanel() {

  const notifications = [
    "🔥 AI detected a high-match job for you",
    "📢 New alumni networking event available",
    "💼 Recruiter viewed your profile",
    "🚀 Your resume ATS score improved",
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
        boxShadow: "0 0 25px rgba(99,102,241,0.2)",
      }}
    >

      <h2
        style={{
          color: "#6366f1",
          marginBottom: "25px",
          textShadow: "0 0 12px #6366f1",
        }}
      >
        🔔 Notification Center
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >

        {notifications.map((item, index) => (

          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "15px",
              borderRadius: "12px",
              borderLeft: "3px solid #6366f1",
            }}
          >
            {item}
          </div>

        ))}

      </div>

    </div>
  );
}

export default NotificationPanel;