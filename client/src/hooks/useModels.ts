import { useQuery, useQueryClient } from '@tanstack/react-query';
import { http } from '../utils/http';
import { Model } from '../types/Model';

export default function useModels(make: string | null) {
  const client = useQueryClient();

  return useQuery({
    queryKey: ['models', make],
    queryFn: async () => {
      const cached = client.getQueryData(['models', make]);

      if (cached) {
        return cached as Model[];
      }

      try {
        const res = await http.get<Model[]>(`/data/models/${make}`);
        return res.data;
      } catch {
        return [];
      }
    },
    staleTime: 15 * 60 * 1000
  });
}
