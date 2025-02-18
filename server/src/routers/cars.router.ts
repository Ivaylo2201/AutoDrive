import { Router } from 'express';
import { getAllCars, getCarById } from '@controllers/car.controller';

const carsRouter = Router();

carsRouter.get('/', getAllCars); 
carsRouter.get('/:id', getCarById); 
// carsRouter.post('/add', validate(refreshSchema), refreshToken);

export default carsRouter;
