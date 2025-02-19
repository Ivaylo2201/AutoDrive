import { prisma } from '@config';
import StatusCode from '@utils/StatusCode';
import { Router } from 'express';

const dataRouter = Router();

dataRouter.get('/models/:makeId', async (req, res) => {
  const models = await prisma.model.findMany({
    where: {
      makeId: Number(req.params.makeId)
    }
  });
  res.status(StatusCode.OK).json(models);
});

dataRouter.get('/makes', async (req, res) => {
  res
    .status(StatusCode.OK)
    .json(await prisma.make.findMany({ include: { models: true } }));
});

dataRouter.get('/bodies', async (req, res) => {
  res.status(StatusCode.OK).json(await prisma.body.findMany());
});

dataRouter.get('/colors', async (req, res) => {
  res.status(StatusCode.OK).json(await prisma.color.findMany());
});
dataRouter.get('/transmissions', async (req, res) => {
  res.status(StatusCode.OK).json(await prisma.transmission.findMany());
});

dataRouter.get('/fuels', async (req, res) => {
  res.status(StatusCode.OK).json(await prisma.fuel.findMany());
});

dataRouter.get('/drivetrains', async (req, res) => {
  res.status(StatusCode.OK).json(await prisma.drivetrain.findMany());
});

export default dataRouter;
