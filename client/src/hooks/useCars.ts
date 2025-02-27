import { useQuery } from '@tanstack/react-query';
import { http } from '../utils/http';
import { Car } from '../types/Car';
import { Filters } from '../components/Market/Market';

export default function useCars(filters: Filters) {
  return useQuery({
    queryKey: ['cars', filters],
    queryFn: async () => {
      console.log('requestng with ', filters);
      const res = await http.get<Car[]>(`/cars`, { params: filters });
      return res.data;
    }
  });
}
