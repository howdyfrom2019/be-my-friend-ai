import client from "@/lib/axios-config";
import axios from "axios";

export const completeChats = async (message: string) => {
  try {
    const { data } = await client.post("/api/openai", { message });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw {
        status: error.response?.status,
        error: error.response?.data.error,
      };
    }

    throw error;
  }
};
