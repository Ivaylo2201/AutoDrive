import { prisma } from '@config';
import capitalize from '@utils/capitalize';
import StatusCode from '@utils/StatusCode';
import { Router } from 'express';

const dataRouter = Router();

dataRouter.get('/models/:make', async (req, res) => {
  if (!req.params.make === null) {
    res.status(StatusCode.BAD_REQUEST).json({ message: 'Make not provided.' });
    return;
  }

  const models = await prisma.model.findMany({
    where: {
      make: {
        name: capitalize(req.params.make)
      }
    },
    select: {
      id: true,
      name: true
    }
  });

  if (models.length > 0) {
    res.status(StatusCode.OK).json(models);
  } else {
    res.status(StatusCode.NOT_FOUND).json({ message: 'Make not found.' });
  }
});

dataRouter.get('/', async (req, res) => {
  const data = {
    makes: await prisma.make.findMany({ include: { models: true } }),
    bodies: await prisma.body.findMany(),
    colors: await prisma.color.findMany(),
    transmissions: await prisma.transmission.findMany(),
    fuels: await prisma.fuel.findMany(),
    drivetrains: await prisma.drivetrain.findMany(),
    features: await prisma.feature.findMany()
  };

  res.status(StatusCode.OK).json(data);
});

export default dataRouter;
