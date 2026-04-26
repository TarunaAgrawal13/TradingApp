import axios from "axios";

// export const BACKEND_URL = "http://localhost:3002";
export const BACKEND_URL = "https://tradingapp-mno8.onrender.com";

// export const DASHBOARD_URL = "http://localhost:3001";
export const DASHBOARD_URL ="https://trading-app-rho-eight.vercel.app"

export const clientServer = axios.create({
  baseURL: BACKEND_URL,
});