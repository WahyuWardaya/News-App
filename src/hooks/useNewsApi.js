import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export function useNewsApi(query, page = 0) {
  return useQuery({
    queryKey: ['news', query, page],
    queryFn: async () => {
      const response = await axios.get(`${API_URL}?q=${query}&api-key=${API_KEY}&page=${page}`);
      console.log(response.data.response.docs);
      return response.data.response.docs;
    },
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  });
}
