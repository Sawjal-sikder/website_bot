
import { useQuery } from "@tanstack/react-query";
import api from "../services/auth";


 
// Fetch chat history by treadId
export const useChatHistory = ({ treadId }) => {
  const getData = async () => {
    const response = await api.get(`/api/chat/history/${treadId}/`);
 
    return response.data;
  };
 
  const {
    data: chatHistory = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["chatHistory", treadId],
    queryFn: getData,
  });
 
  return { chatHistory, isLoading, isError, error, refetch };
};
