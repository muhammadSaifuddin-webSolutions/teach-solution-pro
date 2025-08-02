
import axios from "axios";
const BASE_URL_API = "http://localhost:4500/api/v1";

export const api = axios.create({
  baseURL: BASE_URL_API,
  timeout: 30000, 
  headers: { type: "application/json" },
  withCredentials: true, 
});
