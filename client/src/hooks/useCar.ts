import { useQuery } from '@tanstack/react-query';
import { Car } from '../types/Car';
import { http } from '../utils/http';

export default function useCar(id: string) {
  return useQuery({
    queryFn: async () => {
      const res = await http.get<Car>(`/cars/${id}`);
      return res.data;
    },
    queryKey: ['car', id],
  });
}
