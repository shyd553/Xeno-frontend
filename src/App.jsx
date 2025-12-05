import { useEffect, useState } from "react";
import SummaryCard from "./components/SummaryCard";
import RevenueChart from "./components/RevenueChart";
import TopCustomers from "./components/TopCustomers";
import api from "./services/api";

function App() {
  const [summary, setSummary] = useState(null);
  const [revenue, setRevenue] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const s = await api.getSummary();
    const r = await api.getRevenueByDate();
    const c = await api.getTopCustomers();

    setSummary(s);
    setRevenue(r);
    setCustomers(c);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Xeno Insights Dashboard</h1>

      {summary && <SummaryCard data={summary} />}

      <RevenueChart data={revenue} />

      <TopCustomers data={customers} />
    </div>
  );
}

export default App;
