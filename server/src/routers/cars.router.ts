import { Router } from 'express';
import { addCar, getAllCars, getCarById, getUserCars } from '@controllers/car.controller';
import validate from '@middlewares/validate.middleware';
import { addSchema } from '@schemas/add.schema';
import authenticate from '@middlewares/authenticate.middleware';
import { upload } from '@config';
import parseFormDataNumbers from '@middlewares/parseFormDataNumbers.middleware';

const carsRouter = Router();

carsRouter.get('/', getAllCars);
carsRouter.get('/:id', getCarById);
carsRouter.post(
  '/add',
  [
    upload.array('images[]', 8),
    parseFormDataNumbers,
    validate(addSchema),
    authenticate
  ],
  addCar
);
carsRouter.get('/your-listings', authenticate, getUserCars);

export default carsRouter;
