import { useQuery } from '@tanstack/react-query';
import { http } from '../utils/http';
import { Data } from '../types/Data';

export default function useServerData() {
  return useQuery({
    queryKey: ['serverData'],
    queryFn: async () => {
      const res = await http.get<Data>(`/data`);
      return res.data;
    },
    staleTime: 15 * 60 * 1000
  });
}
