import { useParams } from 'react-router-dom';
import useCar from '../../hooks/useCar';
import Slider from '../Slider';
import { Loader } from '@mantine/core';
import FeaturesDisplay from '../FeaturesDisplay/FeaturesDisplay';
import capitalize from '../../utils/capitalize';
import CarDetails from '../CarDetails/CarDetails';

type CarDetailsProps = {};

export default function CarPage({}: CarDetailsProps) {
  const { id } = useParams();
  const { data: car } = useCar(id as string);

  if (!car) {
    return <Loader color='red' type='dots' />;
  }

  return (
    <div className='grid grid-cols-2 gap-4'>
      <section className='flex flex-col gap-10'>
        <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-2'>
            <p className='text-5xl font-semibold'>
              {capitalize(`${car.make.name} ${car.model.name}`)}
            </p>
            <p>
              {car.user.username}, {car.user.phoneNumber}
            </p>
          </div>
          <p className='text-5xl font-semibold'>${car.price}</p>
        </div>
        <Slider images={car.images.map((img) => img.path)} />
      </section>
      <FeaturesDisplay features={car.features} />
      <CarDetails {...car} />
      <p>{`Description: ${car.description}` || 'No description provided.'}</p>
    </div>
  );
}
