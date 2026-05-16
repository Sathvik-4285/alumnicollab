import { useState } from "react";

function StatsCard({
  title,
  value,
  glow,
}) {

  const [hover, setHover] =
    useState(false);

  return (

    <div

      onMouseEnter={() =>
        setHover(true)
      }

      onMouseLeave={() =>
        setHover(false)
      }

      style={{

        flex: "1",

        minWidth: "220px",

        background:
          "rgba(255,255,255,0.05)",

        border:
          "1px solid rgba(255,255,255,0.08)",

        borderRadius: "22px",

        padding: "25px",

        backdropFilter:
          "blur(18px)",

        WebkitBackdropFilter:
          "blur(18px)",

        boxShadow:
          `0 0 25px ${glow}`,

        transition:
          "0.3s ease",

        cursor: "pointer",

        overflow: "hidden",

        position: "relative",

        transform:
          hover
            ? "translateY(-6px)"
            : "translateY(0px)",

      }}
    >

      <h3
        style={{
          color: "#38bdf8",
        }}
      >
        {title}
      </h3>

      <h1>{value}</h1>

    </div>

  );

}

export default StatsCard;