import { GasStation } from '../../icons/GasStation';
import { Speedometer } from '../../icons/Speedometer';
import { Transmission } from '../../icons/Transmission';
import capitalize from '../../utils/capitalize';
import CarStat from '../CarStat/CarStat';

type CarCardProps = {
  id: string;
  make: {
    name: string;
  };
  model: {
    name: string;
  };
  fuel: {
    type: string;
  };
  transmission: {
    type: string;
  };
  price: string;
  mileage: number;
  images: { path: string }[];
  link: React.ReactNode;
};

export default function CarCard({
  id,
  make: { name: makeName },
  model: { name: modelName },
  fuel: { type: fuelType },
  transmission: { type: transmissionType },
  price,
  mileage,
  images,
  link
}: CarCardProps) {
  return (
    <article className='group w-72 h-96 border border-neutral-200 rounded-xl flex flex-col overflow-hidden'>
      <div className='overflow-hidden'>
        <img
          src={`http://localhost:3000/${images[0].path}`}
          alt={`${makeName} ${modelName}`}
          className='group-hover:scale-110 transition-transform duration-200 w-full h-48 object-cover '
        />
      </div>
      <div className='flex flex-col flex-grow px-5 py-3 justify-between'>
        <p className='text-xl font-semibold text-neutral-800'>
          {capitalize(`${makeName} ${modelName}`)}
        </p>
        <section className='flex border-t border-b border-neutral-200 justify-between py-3'>
          <CarStat text={capitalize(fuelType)}>
            <GasStation />
          </CarStat>
          <CarStat text={`${mileage} km`}>
            <Speedometer />
          </CarStat>
          <CarStat text={capitalize(transmissionType)}>
            <Transmission />
          </CarStat>
        </section>
        <div className='flex justify-between items-center'>
          {link}
          <p className='text-xl text-neutral-800 font-semibold'>${price}</p>
        </div>
      </div>
    </article>
  );
}
