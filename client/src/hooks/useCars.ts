import { useQuery } from '@tanstack/react-query';
import { http } from '../utils/http';
import { Car } from '../types/Car';

export default function useCars(make?: string) {
  return useQuery({
    queryKey: ['cars', make],
    queryFn: async () => {
      const res = await http.get<Car[]>(`/cars${make ? `?make=${make}` : ''}`);
      return res.data;
    }
  });
}
