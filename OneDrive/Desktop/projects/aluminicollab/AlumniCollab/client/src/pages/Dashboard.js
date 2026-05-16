import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";
import JobCard from "../components/JobCard";
import AIAssistant from "../components/AIAssistant";
import ResumeUpload from "../components/ResumeUpload";
import EditProfile from "../components/EditProfile";
import Layout from "../components/Layout";
import StatsCard from "../components/StatsCard";
import ActivityFeed from "../components/ActivityFeed";
import NotificationPanel from "../components/NotificationPanel";
import AnalyticsChart from "../components/AnalyticsChart";
import AIOrb from "../components/AIOrb";
import HologramWidget from "../components/HologramWidget";
import { useEffect, useState } from "react";
import LoadingScreen from "../components/LoadingScreen";

function Dashboard() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const storedUser =
  localStorage.getItem("user");

  const user =

  storedUser &&
  storedUser !== "undefined"

    ? JSON.parse(storedUser)

    : {};
  const roleMessage = {
  Student: "Explore jobs and build your career 🚀",
  Alumni: "Help students through mentorship 🎓",
  Recruiter: "Find talented candidates 💼",
  Faculty: "Guide and support students 📚",
    };

  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("user");

    navigate("/login");

  };
  useEffect(() => {

  const timer = setTimeout(() => {
    setLoading(false);
  }, 2500);
  return () => clearTimeout(timer);

    }, []);

  if (loading) {
  return <LoadingScreen />;
}

  return ( 
           <Layout>

    <div
      style={{
        background: `
        radial-gradient(circle at top left, rgba(56,189,248,0.15), transparent 25%),
        radial-gradient(circle at bottom right, rgba(99,102,241,0.18), transparent 25%),
        #020617`,
        overflow: "hidden",
        position: "relative",
        color: "white",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial",
        marginLeft: "260px",
        
      }}
    >
      <div>
      <div
  style={{

    display: "flex",

    justifyContent: "space-between",

    alignItems: "center",

    flexWrap: "wrap",

    marginBottom: "30px",

  }}
>

  <div>

    <h1
      style={{

        color: "#38bdf8",

        fontSize: "38px",

        marginBottom: "10px",

      }}
    >
      Welcome back,
      {user?.name} 👋
    </h1>

    <p
      style={{
        color: "#cbd5e1",
        fontSize: "18px",
      }}
    >
      Track your career growth
      and alumni connections 🚀
    </p>

  </div>

  <div
    style={{

      background:
        "rgba(255,255,255,0.05)",

      padding: "15px 20px",

      borderRadius: "15px",

      border:
        "1px solid rgba(255,255,255,0.08)",

      color: "#38bdf8",

      fontWeight: "bold",

    }}
  >

    {new Date().toDateString()}

  </div>

</div>
            <div
        style={{
          display: "grid",
          flexDirection: "column",
          gap: "30px",
          marginTop: "30px",
        }}
      ></div>
      </div>

      <div>
        <ProfileCard user={user} />
         
         <div
          style={{
            display: "grid",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >

          <StatsCard
            title="Jobs Matched"
            value="24"
            glow="#38bdf8"
          />

          <StatsCard
            title="AI Score"
            value="92%"
            glow="#6366f1"
          />

          <StatsCard
            title="Alumni Connected"
            value="18"
            glow="#8b5cf6"
          />

          <StatsCard
            title="Applications"
            value="11"
            glow="#0ea5e9"
          />

</div>

        <div
        style={{
          display: "grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >

        <JobCard
          title="Frontend Developer"
          company="Google"
          skills="React, JavaScript"
        />

        <JobCard
          title="AI Engineer"
          company="Microsoft"
          skills="Python, Machine Learning"
        />

        <JobCard
          title="Embedded Engineer"
          company="Intel"
          skills="C, Microcontrollers"
        />

</div>
       <div
        style={{

        display: "grid",

        gridTemplateColumns:
          "repeat(auto-fit,minmax(320px,1fr))",

        gap: "20px",

        marginTop: "30px",

        alignItems: "stretch",

      }}
      >

        <AIAssistant user={user} />

        <ResumeUpload />

        <EditProfile />

</div>
              <div
          style={{
            display: "grid",
            gap: "20px",
            flexWrap: "wrap",
            alignItems: "stretch",
          }}
        >

          <ActivityFeed />

          <NotificationPanel />

          <AnalyticsChart />

        </div>
       <AIOrb />
       <HologramWidget />
       <NotificationPanel />

        <h2>User Information</h2>
        <p>
          <strong>Name:</strong> {user?.name}
        </p>

        <p>
          <strong>Email:</strong> {user?.email}
        </p>

        <p>
          <strong>Role:</strong> {user?.role}
        </p>
        <p style={{ marginTop: "15px", color: "#38bdf8" }}>
            {roleMessage[user?.role]}
        </p>

      </div>

    </div>
    </Layout>
    
  );
  
}

export default Dashboard;