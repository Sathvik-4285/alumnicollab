function JobCard({ title, company, skills }) {

  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        padding: "20px",
        borderRadius: "15px",
        width: "300px",
        marginTop: "20px",
      }}
    >

      <h3 style={{ color: "#38bdf8" }}>
        {title}
      </h3>

      <p>
        <strong>Company:</strong> {company}
      </p>

      <p>
        <strong>Skills:</strong> {skills}
      </p>

      <button
        style={{
          marginTop: "15px",
          padding: "10px",
          backgroundColor: "#38bdf8",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Apply Now
      </button>

    </div>
  );
}

export default JobCard;