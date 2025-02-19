import { z } from 'zod';

export const addSchema = z.object({
  makeId: z.string(),
  modelId: z.string(),
  bodyId: z.string(),
  colorId: z.string(),
  transmissionId: z.string(),
  drivetrainId: z.string(),
  fuelId: z.string(),
  year: z.string(),
  price: z.string(),
  torque: z.string(),
  mileage: z.string(),
  horsepower: z.string(),
  seats: z.string(),
  doors: z.string(),
  description: z.string().optional(),
  features: z.array(z.string()),
});

