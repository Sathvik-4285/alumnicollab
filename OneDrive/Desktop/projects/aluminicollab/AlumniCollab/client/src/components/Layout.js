import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ParticlesBackground from "./ParticlesBackground";

function Layout({ children }) {

  return (
    <>
      <Navbar />
      <ParticlesBackground />

      <div
        style={{
          display: "flex",
          backgroundColor: "#020617",
          minHeight: "100vh",
        }}
      >

        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "30px",
            color: "white",
          }}
        >
          {children}
        </div>

      </div>
    </>
  );
}

export default Layout;