import useCars from '../../hooks/useCars';
import CarCard from '../CarCard/CarCard';

export default function Market() {
  const { data: cars } = useCars();

  return (
    <div>
      <div>
        
      </div>
      <section className='flex flex-wrap justify-center gap-x-7 gap-y-5 p-5'>
        {cars?.map((car) => (
          <CarCard key={car.id} {...car} />
        ))}
      </section>
    </div>
  );
}
