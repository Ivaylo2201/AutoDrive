export type Car = {
  id: string;
  make: { name: string };
  model: { name: string };
  color: { name: string };
  transmission: { type: string };
  fuel: { type: string };
  drivetrain: { type: string };
  year: number;
  price: string;
  torque: number;
  mileage: number;
  horsepower: number;
  seats: number;
  doors: number;
  description: string;
  createdAt: string;
  user: {
    username: string;
    phoneNumber: string;
  };
  features: { name: string }[];
  images: { path: string }[];
};
