import { useNavigate, useParams } from 'react-router-dom';
import useCar from '../../hooks/useCar';
import { Loader } from '@mantine/core';
import EditCarForm from '../EditCarForm/EditCarForm';
import { useAuthStore } from '../../stores/useAuthStore';

type EditCarProps = {};

export default function EditCar({}: EditCarProps) {
  const { id } = useParams();
  const { data: car } = useCar(id as string);
  const { username } = useAuthStore();
  const navigate = useNavigate();

  if (!car) {
    return <Loader color='red' type='dots' />;
  }

  if (car.user.username !== username) {
    navigate('/');
  }

  return <EditCarForm car={car} />;
}
