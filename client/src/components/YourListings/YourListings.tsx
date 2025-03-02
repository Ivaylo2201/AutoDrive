import { useQuery } from '@tanstack/react-query';
import CarCard from '../CarCard/CarCard';
import { http } from '../../utils/http';
import { Car } from '../../types/Car';
import { Link } from 'react-router-dom';

export default function YourListings() {
  const { data: cars } = useQuery({
    queryFn: async () => {
      const res = await http.get<Car[]>(`/cars/your-listings`);
      console.log(res.data);
      return res.data;
    },
    queryKey: ['userCars']
  });

  return (
    <div className='min-h-[51rem] flex flex-col justify-center items-center gap-4'>
      <section className='flex flex-wrap justify-center gap-x-7 gap-y-5 p-5'>
        {cars?.map((car) => (
          <CarCard
            key={car.id}
            {...car}
            link={
              <Link
                to={`/edit/${car.id}`}
                className='bg-neutral-800 rounded-full py-1.5 px-8 text-white cursor-pointer hover:bg-neutral-700 transition-colors duration-300'
              >
                Edit
              </Link>
            }
          />
        ))}
      </section>
    </div>
  );
}
