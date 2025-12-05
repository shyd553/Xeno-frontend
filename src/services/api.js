import axios from "axios";

const API = import.meta.env.VITE_API_URL;
const tenantKey = "testTenant";

export default {
  getSummary: async () => {
    const res = await axios.get(`${API}/metrics/summary?tenantKey=${tenantKey}`);
    return res.data;
  },

  getRevenueByDate: async () => {
    const res = await axios.get(`${API}/metrics/ordersByDate?tenantKey=${tenantKey}`);
    return res.data;
  },

  getTopCustomers: async () => {
    const res = await axios.get(`${API}/metrics/topCustomers?tenantKey=${tenantKey}`);
    return res.data;
  },
};
