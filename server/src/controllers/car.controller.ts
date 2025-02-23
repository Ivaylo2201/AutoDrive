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
      images: { select: { path: true }, take: 1 }
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

export async function getUserCars(req: Request, res: Response) {
  const cars = await prisma.car.findMany({
    where: { user: { id: req.body.userId } },
    select: {
      id: true,
      make: { select: { name: true } },
      model: { select: { name: true } },
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
      createdAt: true
    }
  });

  res.status(StatusCode.OK).json(cars);
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
      make: { connect: { name: req.body.make } },
      model: { connect: { name: req.body.model } },
      color: { connect: { name: req.body.color } },
      transmission: { connect: { type: req.body.transmission } },
      fuel: { connect: { type: req.body.fuel } },
      drivetrain: { connect: { type: req.body.drivetrain } },
      year: req.body.year,
      price: req.body.price,
      torque: req.body.torque,
      mileage: req.body.mileage,
      horsepower: req.body.horsepower,
      seats: req.body.seats,
      doors: req.body.doors,
      description: req.body.description,
      features: {
        connect: req.body.features.map((feature) => ({
          id: Number(feature)
        }))
      },
      images: {
        create: req.files.map((file) => ({
          path: file.path
        }))
      },
      user: { connect: { id: req.body.userId } }
    }
  });

  res.status(StatusCode.CREATED).json({ message: 'Car created successfully.' });
}
