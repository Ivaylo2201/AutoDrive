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

const fields = {
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
  owner: {
    select: {
      username: true,
      phoneNumber: true,
      address: {
        select: { city: { select: { name: true } }, street: true }
      }
    }
  },
  features: { select: { name: true } },
  images: { select: { path: true } }
};

export async function getAllCars(req: Request, res: Response) {
  const query: CarSearchQueryParams = req.query;

  const cars = await prisma.car.findMany({
    where: {
      owner: { address: { city: { name: query.location } } },
      body: { type: query.body },
      make: { name: query.make },
      price: {
        gte: query.price?.min,
        lte: query.price?.max
      },
      color: { name: query.color }
    },
    select: fields
  });

  res.status(StatusCode.OK).json(cars);
}

export async function getCarById(req: Request, res: Response) {
  const { id } = req.params;

  const car = await prisma.car.findUnique({ where: { id }, select: fields });

  if (!car) {
    res
      .status(StatusCode.NOT_FOUND)
      .json({ message: `Car '${id}' not found.` });
  }

  res.status(StatusCode.OK).json(car);
}

export async function addCar(req: Request, res: Response) {
  if (req.files?.length === 0 || !(req.files instanceof Array)) {
    res.status(StatusCode.BAD_REQUEST).json({ message: 'No images provided.' });
    return;
  }

  try {
    const car = await prisma.car.create({
      data: {
        make: { connect: { id: Number(req.body.makeId) } },
        model: { connect: { id: Number(req.body.modelId) } },
        body: { connect: { id: Number(req.body.bodyId) } },
        color: { connect: { id: Number(req.body.colorId) } },
        transmission: { connect: { id: Number(req.body.transmissionId) } },
        drivetrain: { connect: { id: Number(req.body.drivetrainId) } },
        fuel: { connect: { id: Number(req.body.fuelId) } },
        year: Number(req.body.year),
        price: Number(req.body.price),
        torque: Number(req.body.torque),
        mileage: Number(req.body.mileage),
        horsepower: Number(req.body.horsepower),
        seats: Number(req.body.seats),
        doors: Number(req.body.doors),
        description: req.body.description,
        features: {
          connect: req.body.features.map((feature: string) => ({
            id: Number(feature)
          }))
        },
        owner: { connect: { id: req.body.user.id } }
      }
    });

    const images = await prisma.image.createMany({
      data: (req.files as Express.Multer.File[]).map((file) => ({
        path: file.path,
        carId: car.id
      }))
    });

    res.status(StatusCode.CREATED).json(
      await prisma.car.findUnique({
        where: { id: car.id },
        select: fields
      })
    );
  } catch (e) {
    throw e;
  }
}
