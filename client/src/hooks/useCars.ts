import { useQuery } from '@tanstack/react-query';
import { http } from '../utils/http';
import { Car } from '../types/Car';
import { Filters } from '../components/Market/Market';

export default function useCars(filters: Filters) {
  return useQuery({
    queryKey: ['cars', filters],
    queryFn: async () => {
      const res = await http.get<Car[]>(`/cars`, { params: filters });
      return res.data;
    },
    staleTime: 15 * 60 * 1000
  });
}
