import { useEffect, useState } from "react";

import axios from "axios";

function AdminPanel() {

  const [stats, setStats] =
    useState({

      users: 0,

      jobs: 0,

      applications: 0,

      mentorships: 0,

    });



  useEffect(() => {

    fetchStats();

  }, []);




  const fetchStats = async () => {

    try {

      const users =
        await axios.get(
          " https://alumnicollab.onrender.com/api/admin/users"
        );

      const jobs =
        await axios.get(
          " https://alumnicollab.onrender.com/api/jobs"
        );

      const applications =
        await axios.get(
          " https://alumnicollab.onrender.com/api/applications"
        );

      const mentorships =
        await axios.get(
          " https://alumnicollab.onrender.com/api/mentorship"
        );



      setStats({

        users:
          users.data.length,

        jobs:
          jobs.data.length,

        applications:
          applications.data.length,

        mentorships:
          mentorships.data.length,

      });

    } catch (error) {

      console.log(error);

    }

  };



  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        padding: "40px",
      }}
    >

      <h1 style={{ color: "#38bdf8" }}>
        🛡 Admin Panel
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >

        <div
          style={{
            background:
              "rgba(255,255,255,0.05)",
            padding: "25px",
            borderRadius: "15px",
            width: "220px",
          }}
        >

          <h2>Total Users</h2>

          <h1>{stats.users}</h1>

        </div>



        <div
          style={{
            background:
              "rgba(255,255,255,0.05)",
            padding: "25px",
            borderRadius: "15px",
            width: "220px",
          }}
        >

          <h2>Total Jobs</h2>

          <h1>{stats.jobs}</h1>

        </div>



        <div
          style={{
            background:
              "rgba(255,255,255,0.05)",
            padding: "25px",
            borderRadius: "15px",
            width: "220px",
          }}
        >

          <h2>Applications</h2>

          <h1>{stats.applications}</h1>

        </div>



        <div
          style={{
            background:
              "rgba(255,255,255,0.05)",
            padding: "25px",
            borderRadius: "15px",
            width: "220px",
          }}
        >

          <h2>Mentorships</h2>

          <h1>{stats.mentorships}</h1>

        </div>

      </div>

    </div>
  );
}

export default AdminPanel;