import { useParams } from 'react-router-dom';
import useCar from '../../hooks/useCar';
import { Loader } from '@mantine/core';
import EditCarForm from '../EditCarForm/EditCarForm';

type EditCarProps = {};

export default function EditCar({}: EditCarProps) {
  const { id } = useParams();
  const { data: car } = useCar(id as string);

  if (!car) {
    return <Loader color='red' type='dots' />;
  }

  return (
    <EditCarForm car={car} />
  );
}
