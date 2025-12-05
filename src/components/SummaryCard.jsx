export default function SummaryCard({ data }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Summary</h2>
      <p><strong>Customers:</strong> {data.customersCount}</p>
      <p><strong>Orders:</strong> {data.ordersCount}</p>
      <p><strong>Total Revenue:</strong> ₹{data.totalRevenue.toFixed(2)}</p>
    </div>
  );
}
