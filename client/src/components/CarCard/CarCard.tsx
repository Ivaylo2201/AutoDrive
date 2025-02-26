import { GasStation } from '../../icons/GasStation';
import { Speedometer } from '../../icons/Speedometer';
import { Transmission } from '../../icons/Transmission';
import capitalize from '../../utils/capitalize';
import Button from '../Link/Link';
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
};

export default function CarCard({
  id,
  make: { name: makeName },
  model: { name: modelName },
  fuel: { type: fuelType },
  transmission: { type: transmissionType },
  price,
  mileage,
  images
}: CarCardProps) {
  return (
    <article className='flex flex-col h-96 w-72 border border-neutral-300  rounded-md overflow-hidden'>
      <img
        src={`http://localhost:3000/${images[0].path}`}
        alt={`${makeName} ${modelName}`}
        className='w-full h-48 object-cover'
      />
      <div className='grow flex flex-col justify-between p-4'>
        <p className='text-xl font-bold'>
          {capitalize(`${makeName} ${modelName}`)}
        </p>
        <section className='flex justify-around'>
          <CarStat text={capitalize(fuelType)}>
            <GasStation />
          </CarStat>
          <CarStat text={`${mileage} km.`}>
            <Speedometer />
          </CarStat>
          <CarStat text={capitalize(transmissionType)}>
            <Transmission />
          </CarStat>
        </section>
        <section className='flex justify-between'>
          <p className='text-xl'>${price}</p>
          <Button to={`/cars/${id}`}>Details</Button>
        </section>
      </div>
    </article>
  );
}
