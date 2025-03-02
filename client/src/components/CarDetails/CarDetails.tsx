import { Calendar } from '../../icons/Calendar';
import { CarDoor } from '../../icons/CarDoor';
import { CarSeat } from '../../icons/CarSeat';
import { Drivetrain } from '../../icons/Drivetrain';
import { GasStation } from '../../icons/GasStation';
import { PaintBucket } from '../../icons/PaintBucket';
import { Speed } from '../../icons/Speed';
import { Speedometer } from '../../icons/Speedometer';
import { Transmission } from '../../icons/Transmission';
import { Car } from '../../types/Car';
import capitalize from '../../utils/capitalize';
import Item, { ItemProps } from './Item';

type CarDetailsProps = Omit<
  Car,
  | 'make'
  | 'model'
  | 'features'
  | 'images'
  | 'price'
  | 'description'
  | 'user'
  | 'createdAt'
>;

export default function CarDetails(car: CarDetailsProps) {
  const data: ItemProps[] = [
    { icon: <PaintBucket />, text: capitalize(car.color.name) },
    { icon: <Transmission />, text: capitalize(car.transmission.type) },
    { icon: <GasStation />, text: capitalize(car.fuel.type) },
    { icon: <Drivetrain />, text: car.drivetrain.type.toUpperCase() },
    { icon: <Calendar />, text: car.year },
    { icon: <Speed />, text: `${car.torque} Nm` },
    { icon: <Speedometer />, text: `${car.mileage} km` },
    { icon: <Speed />, text: `${car.horsepower} km/h` },
    { icon: <CarSeat />, text: car.seats },
    { icon: <CarDoor />, text: car.doors }
  ];

  return (
    <ul className='grid grid-cols-5 gap-x-5 gap-y-3'>
      {data.map((item) => (
        <Item key={item.text} {...item} />
      ))}
    </ul>
  );
}
