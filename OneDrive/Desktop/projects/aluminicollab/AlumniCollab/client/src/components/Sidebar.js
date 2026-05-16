import { useNavigate }
from "react-router-dom";
function Sidebar() {

  const menuItems = [
    "🏠 Dashboard",
    "👤 Profile",
    "💼 Jobs",
    "🎓 Alumni",
    "🤖 AI Assistant",
    "📄 Resume",
  ];
  const navigate = useNavigate();

  return (
    <div
          style={{

        width: "260px",

        minHeight: "100vh",

        background:
          "rgba(15,23,42,0.85)",

        borderRight:
          "1px solid rgba(255,255,255,0.08)",

        backdropFilter: "blur(18px)",

        WebkitBackdropFilter:
          "blur(18px)",

        padding: "30px 20px",

        position: "fixed",

        left: 0,

        top: 0,

        color: "white",

      }}
    >

      <h2
        style={{
          color: "#38bdf8",
          textShadow: "0 0 15px #38bdf8",
        }}
              >
                Navigation
              </h2>
              

        

      <div
        style={{
          marginTop: "35px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >

        {menuItems.map((item, index) => (

        <div

          key={index}

          onClick={() => {

            if (
              item.includes("Dashboard")
            ) {

              navigate("/dashboard");

            }

            else if (
              item.includes("Jobs")
            ) {

              navigate("/jobs");

            }

            else if (
              item.includes("AI Assistant")
            ) {

              navigate("/ai-assistant");

            }

            else if (
              item.includes("Alumni")
            ) {

              navigate("/mentorship");

            }

            else if (
              item.includes("Resume")
            ) {

              navigate("/dashboard");

            }
            else if (
              item.includes("Profile")
            ) {

              navigate("/profile");

            }

          }}

          style={{

            padding: "14px",

            borderRadius: "12px",

            background:
              "rgba(255,255,255,0.05)",

            cursor: "pointer",

            transition: "0.3s",

            boxShadow:
              "0 0 10px rgba(56,189,248,0.1)",

            marginBottom: "12px",

          }}

  >

    {item}

  </div>

))}


      </div>

    </div>
    
  );
}

export default Sidebar;