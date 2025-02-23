import { useMutation, useQueryClient } from '@tanstack/react-query';
import { http } from '../utils/http';
import { z } from 'zod';
import { addSchema } from '../schemas/add.schema';

export default function useAddCar() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (car: z.infer<typeof addSchema>) => {
      console.log(car);
      const res = await http.post('/cars/add', car);
      return res.data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cars'] })
  });
}
