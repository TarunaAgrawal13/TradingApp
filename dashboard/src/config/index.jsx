import axios from "axios";

// export const BASE_URL = "http://localhost:3002";
export const BASE_URL = "https://tradingapp-mno8.onrender.com";

export const clientServer = axios.create({
  baseURL: BASE_URL,
});