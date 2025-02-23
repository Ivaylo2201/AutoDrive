import { useQuery } from '@tanstack/react-query';
import { http } from '../utils/http';
import { Car } from '../types/Car';

export default function useCars() {
  return useQuery({
    queryKey: ['cars'],
    queryFn: async () => {
      const res = await http.get<Car[]>('/cars');
      return res.data;
    }
  });
}
