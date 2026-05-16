import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const storedUser =
  localStorage.getItem("user");

  const user =

  storedUser &&
  storedUser !== "undefined"

    ? JSON.parse(storedUser)

    : {};

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");

  };

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.05)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        padding: "18px 35px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >

      <div>

        <h2
          style={{
            color: "#38bdf8",
            margin: 0,
            fontSize: "28px",
            textShadow: "0 0 15px #38bdf8",
          }}
        >
          AlumniCollab AI
        </h2>

        <p
          style={{
            margin: 0,
            fontSize: "12px",
            opacity: 0.7,
          }}
        >
          Future Career Ecosystem
        </p>

      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >

        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            padding: "10px 15px",
            borderRadius: "12px",
            boxShadow: "0 0 10px rgba(56,189,248,0.2)",
          }}
        >
          {user?.role}
        </div>

        <button
          onClick={handleLogout}
          style={{
            padding: "10px 18px",
            background: "linear-gradient(90deg,#38bdf8,#6366f1)",
            border: "none",
            borderRadius: "12px",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 0 15px rgba(56,189,248,0.5)",
          }}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;