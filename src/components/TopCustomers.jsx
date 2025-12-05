export default function TopCustomers({ data }) {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2>Top Customers</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Shopify ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Total Spent</th>
          </tr>
        </thead>

        <tbody>
          {data.map((c) => (
            <tr key={c.id}>
              <td>{c.shopifyId || "-"}</td>
              <td>{c.name || "Unnamed"}</td>
              <td>{c.email || "-"}</td>
              <td>{c.totalSpent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
