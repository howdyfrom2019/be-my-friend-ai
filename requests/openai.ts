import client from "@/lib/axios-config";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface AIResponse {
  choices: {
    index: number;
    finish_reason: string;
    message: {
      content: string;
      role: "assistant";
    };
  }[];
  create: number;
  id: string;
  model: string;
  object: string;
}

export const completeChats = async (message: string) => {
  try {
    const { data } = await client.post<AIResponse>("/api/openai", { message });
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

export const useCreateChat = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: AIResponse) => void;
  onError?: (error: { status: number; error: string | string[] }) => void;
}) => {
  const { mutate, mutateAsync, isPending } = useMutation({
    mutationFn: (message: string) => completeChats(message),
    onSuccess,
    onError,
  });

  return {
    mutate,
    mutateAsync,
    isPending,
  };
};
