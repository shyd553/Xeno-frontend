This is the frontend for my Xeno Data Ingestion & Insights Assignment.  
It’s a simple, clean dashboard built using React and Vite that displays insights derived from Shopify data.  
The goal of the UI is to present the key business metrics in a clear and easy-to-understand format.

## Deployed dashboard:

Frontend: https://xeno-frontend-tau.vercel.app  
Backend API: https://xeno-backend-5e1f.onrender.com

## What this frontend does

The dashboard fetches processed data from the backend and displays:

- **Total Customers**, **Total Orders** and **Total Revenue** 
- A revenue-over-time chart using Recharts  
- A Top Customers table sorted by total spending  
Everything updates automatically based on the data returned by the backend APIs.

## Tech Stack

 Tools used:

- **React** – for building the UI  
- **Vite** – for fast development and optimized builds  
- **Recharts** – for charts and visualizations  
- **Axios** – for API requests  

## Environment Setup

The dashboard needs to know where the backend is hosted.  
For that, I created a `.env` file with:
VITE_API_URL= https://xeno-backend-5e1f.onrender.com/

Vite exposes this to the app through `import.meta.env`.

## APIs the frontend uses

The frontend calls three backend routes:

### 1. Summary API
Fetches total customers, orders, and revenue  
`GET /metrics/summary?tenantKey=testTenant`
**link-** https://xeno-backend-5e1f.onrender.com/metrics/summary?tenantKey=testTenant

### 2. Revenue by Date
Used for the line chart  
`GET /metrics/ordersByDate?tenantKey=testTenant`
**link-**https://xeno-backend-5e1f.onrender.com/metrics/ordersByDate?tenantKey=testTenant

### 3. Top Customers
Fetches the top 5 customers  
`GET /metrics/topCustomers?tenantKey=testTenant`
**link-** https://xeno-backend-5e1f.onrender.com/metrics/topCustomers?tenantKey=testTenant

## Working of Dashboard.jsx and Components

**Dashboard.jsx**: Fetches all data from backend and passes it to components
  
Components include SummaryCard.jsx, RevenueChart.jsx, TopCustomers.jsx.
- **SummaryCards.jsx**: Shows high-level metrics  
- **RevenueChart.jsx**: Visualizes revenue by date  
- **TopCustomers.jsx**: Displays customer rankings

## How to run project
### -npm install
### -npm run dev
### The app will open at:  
`http://localhost:5173` 

## Deployment

The frontend is deployed on **Vercel**.  
I connected my GitHub repository, added the environment variable (`VITE_API_URL`), and Vercel handled the build and deployment.

## Author
**Shubhra Yadav** 
