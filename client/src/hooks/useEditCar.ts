import { useMutation, useQueryClient } from '@tanstack/react-query';
import { http } from '../utils/http';
import { toast } from 'react-toastify';

export default function useEditCar(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: any) => {
      const res = await http.patch(`/cars/edit/${id}`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cars'] });
      toast.success('Car edited successfully.');
    },
  });
}
