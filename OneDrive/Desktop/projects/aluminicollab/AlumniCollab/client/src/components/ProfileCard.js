function ProfileCard({ user }) {

  return (

    <div
      style={{

        background:
          "rgba(255,255,255,0.05)",

        border:
          "1px solid rgba(255,255,255,0.08)",

        borderRadius: "25px",

        padding: "30px",

        backdropFilter: "blur(18px)",

        WebkitBackdropFilter:
          "blur(18px)",

        boxShadow:
          "0 0 25px rgba(56,189,248,0.12)",

        color: "white",

        marginTop: "30px",

      }}
    >

      <div
        style={{

          display: "flex",

          alignItems: "center",

          gap: "25px",

          flexWrap: "wrap",

        }}
      >

        <div
          style={{

            width: "90px",

            height: "90px",

            borderRadius: "50%",

            background:
              "linear-gradient(90deg,#38bdf8,#6366f1)",

            display: "flex",

            alignItems: "center",

            justifyContent: "center",

            fontSize: "38px",

            fontWeight: "bold",

            boxShadow:
              "0 0 20px rgba(56,189,248,0.4)",
          }}
        >

          {user?.name?.charAt(0)}

        </div>

        <div>

          <h2
            style={{
              color: "#38bdf8",
              marginBottom: "10px",
            }}
          >
            {user?.name}
          </h2>

          <p>
            📧 {user?.email}
          </p>

          <p>
            🎓 Role: {user?.role}
          </p>

          <p
            style={{
              marginTop: "10px",
              color: "#cbd5e1",
            }}
          >
            Welcome to AlumniCollab 🚀
          </p>

        </div>

      </div>

      <div
        style={{
          marginTop: "30px",
        }}
      >

        <h3
          style={{
            color: "#38bdf8",
          }}
        >
          Skills
        </h3>

        <div
          style={{

            display: "flex",

            gap: "10px",

            flexWrap: "wrap",

            marginTop: "15px",
          }}
        >

          {[
            "React",
            "MongoDB",
            "Networking",
            "AI",
          ].map((skill) => (

            <span
              key={skill}

              style={{

                padding: "8px 14px",

                borderRadius: "20px",

                background:
                  "rgba(56,189,248,0.15)",

                color: "#38bdf8",

                fontSize: "14px",

              }}
            >

              {skill}

            </span>

          ))}

        </div>

      </div>

    </div>

  );

}

export default ProfileCard;