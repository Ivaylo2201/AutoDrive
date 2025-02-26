import useCars from '../../hooks/useCars';
import CarCard from '../CarCard/CarCard';

export default function Market() {
  const { data: cars } = useCars();

  return (
    <section className='grid grid-cols-5 gap-2'>
      {cars?.map((car) => (
        <CarCard key={car.id} {...car} />
      ))}
    </section>
  );
}
