import axios from "axios";
import { api } from "./baseUrl";

export async function getRoomType(data) {
  const endpoint = `/roomtype/getRoomType`;
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