import axios from "axios";
import { api } from "./baseUrl";

export async function createRooms(data) {
  const endpoint = `/rooms`;
  try {
    const res = await api.post(endpoint, data)
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data || "Failed to create rooms";
      return message;
    }
  }
}



export async function getRooms(data) {
  const endpoint = `/rooms/getRoom`;
  try {
    const res = await api.get(endpoint, data)
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data || "Failed to get rooms";
      return message;
    }
  }
}