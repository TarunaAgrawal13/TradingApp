const axios = require("axios");

// const FRONTEND_URL = "http://localhost:3000";
// const DASHBOARD_URL = "http://localhost:3001";

const FRONTEND_URL = "https://trading-app-vcup.vercel.app"
const DASHBOARD_URL = "https://trading-app-rho-eight.vercel.app"

const clientServer = axios.create({
  baseURL: FRONTEND_URL,
});

module.exports = {
  FRONTEND_URL,
  DASHBOARD_URL,
  clientServer,
};