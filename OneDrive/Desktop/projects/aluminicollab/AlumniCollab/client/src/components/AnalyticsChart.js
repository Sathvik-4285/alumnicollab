import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AnalyticsChart() {

  const data = [
    { month: "Jan", score: 40 },
    { month: "Feb", score: 55 },
    { month: "Mar", score: 68 },
    { month: "Apr", score: 80 },
    { month: "May", score: 92 },
  ];

  return (
    <div
      style={{
        marginTop: "35px",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        borderRadius: "20px",
        padding: "30px",
        color: "white",
        boxShadow: "0 0 25px rgba(56,189,248,0.2)",
      }}
    >

      <h2
        style={{
          color: "#38bdf8",
          marginBottom: "25px",
          textShadow: "0 0 12px #38bdf8",
        }}
      >
        📈 AI Career Analytics
      </h2>

      <div style={{ width: "100%", height: 300 }}>

        <ResponsiveContainer>

          <LineChart data={data}>

            <XAxis dataKey="month" stroke="#ffffff" />

            <YAxis stroke="#ffffff" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#38bdf8"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default AnalyticsChart;