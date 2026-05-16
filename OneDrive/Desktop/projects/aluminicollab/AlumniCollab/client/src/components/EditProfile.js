import { useState } from "react";
import axios from "axios";

function EditProfile() {

  const [profile, setProfile] = useState({
    bio: "",
    skills: "",
    github: "",
    linkedin: "",
  });

  const handleSave = async () => {

  try {

    const response = await axios.put(
       "https://alumnicollab.onrender.com/api/profile/update/${user._id}",
      profile
    );

    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );

    alert(response.data.message);

  } catch (error) {

    alert("Profile update failed");

  }

};

  const handleChange = (e) => {

    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });

  };
   
   const storedUser =
  localStorage.getItem("user");

  const user =

  storedUser &&
  storedUser !== "undefined"

    ? JSON.parse(storedUser)

    : {};

  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        padding: "25px",
        borderRadius: "15px",
        marginTop: "30px",
        width: "400px",
      }}
    >

      <h2 style={{ color: "#38bdf8" }}>
        ✏ Edit Profile
      </h2>

      <input
        type="text"
        name="bio"
        placeholder="Enter Bio"
        onChange={handleChange}
        style={{
          width: "100%",
          marginTop: "15px",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
        }}
      />

      <input
        type="text"
        name="skills"
        placeholder="Skills"
        onChange={handleChange}
        style={{
          width: "100%",
          marginTop: "15px",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
        }}
      />

      <input
        type="text"
        name="github"
        placeholder="GitHub Link"
        onChange={handleChange}
        style={{
          width: "100%",
          marginTop: "15px",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
        }}
      />

      <input
        type="text"
        name="linkedin"
        placeholder="LinkedIn Link"
        onChange={handleChange}
        style={{
          width: "100%",
          marginTop: "15px",
          padding: "10px",
          borderRadius: "8px",
          border: "none",
        }}
      />

      <button
        onClick={handleSave}
        style={{
          marginTop: "20px",
          padding: "10px",
          width: "100%",
          backgroundColor: "#38bdf8",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Save Profile
      </button>

    </div>
  );
}

export default EditProfile;