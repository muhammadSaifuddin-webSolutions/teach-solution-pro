import { api } from "./baseUrl";
import axios from "axios";
export async function createBooking(data) {
  const endpoint = `/booking`;
  try {
    const res = await api.post(endpoint, data)
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data || "Failed to create Booking";
      return message;
    }
  }
}



export async function getBooking(data) {
  const endpoint = `/booking`;
  try {
    const res = await api.get(endpoint, data)
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data || "Failed to get Booking";
      return message;
    }
  }
}