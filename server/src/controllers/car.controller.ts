import { Request, Response } from 'express';

import { prisma } from '@config';
import StatusCode from 'src/utils/StatusCode';
import { z } from 'zod';
import { addSchema } from '@schemas/add.schema';

type CarSearchQueryParams = Partial<{
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

  const cars = await prisma.car.findMany({
    where: {
      body: { type: query.body },
      make: { name: query.make },
      price: {
        gte: query.price?.min,
        lte: query.price?.max
      },
      color: { name: query.color }
    },
    select: {
      id: true,
      make: { select: { name: true } },
      model: { select: { name: true } },
      fuel: { select: { type: true } },
      transmission: { select: { type: true } },
      price: true,
      mileage: true,
      images: { select: { path: true } }
    }
  });

  res.status(StatusCode.OK).json(cars);
}

export async function getCarById(req: Request<{ id: string }>, res: Response) {
  const car = await prisma.car.findUnique({
    where: { id: req.params.id },
    select: {
      id: true,
      make: { select: { name: true } },
      model: { select: { name: true } },
      body: { select: { type: true } },
      color: { select: { name: true } },
      transmission: { select: { type: true } },
      fuel: { select: { type: true } },
      drivetrain: { select: { type: true } },
      year: true,
      price: true,
      torque: true,
      mileage: true,
      horsepower: true,
      seats: true,
      doors: true,
      description: true,
      createdAt: true,
      user: {
        select: {
          username: true,
          phoneNumber: true
        }
      },
      features: { select: { name: true } },
      images: { select: { path: true } }
    }
  });

  if (!car) {
    res
      .status(StatusCode.NOT_FOUND)
      .json({ message: `The requested resource was not found on the server.` });
    return;
  }

  res.status(StatusCode.OK).json(car);
}

export async function addCar(
  req: Request<{}, {}, z.infer<typeof addSchema> & { userId: string }>,
  res: Response
) {
  if (req.files?.length === 0 || !(req.files instanceof Array)) {
    res
      .status(StatusCode.BAD_REQUEST)
      .json({ message: 'Images were not provided.' });
    return;
  }

  await prisma.car.create({
    data: {
      ...req.body,
      features: {
        connect: req.body.features.map((feature) => ({
          id: Number(feature)
        }))
      },
      images: {
        create: req.files.map((file) => ({
          path: file.path
        }))
      }
    }
  });

  res.status(StatusCode.CREATED).json({ message: 'Car created successfully.' });
}
