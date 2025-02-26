import { useMutation, useQueryClient } from '@tanstack/react-query';
import { http } from '../utils/http';
import { z } from 'zod';
import { addSchema } from '../schemas/add.schema';
import buildFormData from '../utils/buildFormData';

export default function useAddCar() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: z.infer<typeof addSchema>) => {
      const res = await http.post(
        '/cars/add',
        buildFormData({
          ...data,
          features: data.features.map((feature) => feature.id.toString())
        })
      );
      return res.data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cars'] })
  });
}
