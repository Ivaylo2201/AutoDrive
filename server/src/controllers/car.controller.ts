import { Request, Response } from 'express';

import { prisma } from '@config';
import StatusCode from 'src/utils/StatusCode';

type CarSearchQueryParams = Partial<{
  location: string;
  body: string;
  make: string;
  price: {
    min: number;
    max: number;
  };
  color: string;
}>;

export async function getAllCars(req: Request, res: Response) {
  const query: CarSearchQueryParams = req.query;
  const where: Record<string, object> = {};

  if (query.location) {
    where.owner = { address: { city: { name: query.location } } };
  }

  if (query.body) {
    where.body = { type: query.body };
  }

  if (query.make) {
    where.make = { name: query.make };
  }

  if (query.price) {
    where.price = {
      gte: query.price.min,
      lte: query.price.max
    };
  }

  if (query.color) {
    where.color = {
      name: query.color
    };
  }

  const cars2 = await prisma.car.findMany({
    where,
    select: {
      id: true,
      year: true,
      price: true,
      discountPercentage: true,
      mileage: true,
      horsepower: true,
      seats: true,
      doors: true,
      description: true,
      createdAt: true,
      make: true,
      model: true,
      body: true,
      color: true,
      transmission: true,
      fuel: true,
      drivetrain: true,
      features: true,
      images: true,
      owner: {
        select: {
          username: true,
          phoneNumber: true,
          address: {
            select: {
              city: {
                select: { name: true }
              },
              street: true
            }
          }
        }
      }
    }
  });

  const cars = await prisma.car.findMany({
    where,
    select: {
      make: { select: { name: true } },
      model: { select: { name: true } },
      body: { select: { type: true } },
      color: { select: { name: true } },
      transmission: { select: { type: true } },
      fuel: { select: { type: true } },
      drivetrain: { select: { type: true } },
      features: { select: { name: true } },
      images: { select: { path: true } },
      owner: {
        select: {
          username: true,
          phoneNumber: true,
          address: {
            select: {
              city: {
                select: { name: true }
              },
              street: true
            }
          }
        }
      }
    }
  });

  // const formattedCars = cars.map((car) => ({
  //   id: car.id,
  //   year: car.year,
  //   price: car.price,
  //   discountPercentage: car.discountPercentage,
  //   mileage: car.mileage,
  //   horsepower: car.horsepower,
  //   seats: car.seats,
  //   doors: car.doors,
  //   description: car.description,
  //   createdAt: new Date(car.createdAt).toLocaleDateString('en-GB'),
  //   make: car.make.name,
  //   model: car.model.name,
  //   body: car.body.type,
  //   color: car.color.name,
  //   transmission: car.transmission.type,
  //   fuel: car.fuel.type,
  //   drivetrain: car.drivetrain.type,
  //   features: car.features.map(feature => feature.name),
  //   images: car.images.map(image => image.path),
  //   owner: {
  //     ...car.owner,
  //     address: {
  //       city: car.owner.address?.city.name,
  //       street: car.owner.address?.street
  //     }
  //   }
  // }));

  res.status(StatusCode.OK).json(cars2);
}

export async function getCarById(req: Request, res: Response) {
  const { id } = req.params;

  const car = await prisma.car.findUnique({ where: { id } });

  if (!car) {
    res
      .status(StatusCode.NOT_FOUND)
      .json({ message: `Car '${id}' not found.` });
  }

  res.status(StatusCode.OK).json(car);
}
