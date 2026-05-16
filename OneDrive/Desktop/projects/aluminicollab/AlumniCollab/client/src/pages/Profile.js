import ProfileCard from "../components/ProfileCard";

function Profile() {

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

        background: "#020617",

        minHeight: "100vh",

        padding: "40px",

        color: "white",

      }}
    >

      <h1
        style={{
          color: "#38bdf8",
          marginBottom: "30px",
        }}
      >
        My Profile
      </h1>

      <ProfileCard user={user} />

    </div>

  );

}

export default Profile;