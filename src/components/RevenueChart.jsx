import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function RevenueChart({ data }) {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Revenue by Date</h2>

      <LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </div>
  );
}
