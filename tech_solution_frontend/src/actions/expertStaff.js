import { api } from "./baseUrl";
import axios from "axios";
export async function getExpertStaff(data) {
  const endpoint = `/staff/getStaff`;
  try {
    const res = await api.get(endpoint, data)
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data || "Failed to get staff";
      return message;
    }
  }
}