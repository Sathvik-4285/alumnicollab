import Particles from "react-tsparticles";

function ParticlesBackground() {

  return (
    <Particles
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 60,

        particles: {
          color: {
            value: "#38bdf8",
          },

          links: {
            color: "#38bdf8",
            distance: 120,
            enable: true,
            opacity: 0.3,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          number: {
            value: 45,
          },

          opacity: {
            value: 0.4,
          },

          size: {
            value: 2,
          },
        },
      }}

      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
}

export default ParticlesBackground;