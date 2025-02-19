import { z } from 'zod';

export const addSchema = z.object({
  makeId: z.number(),
  modelId: z.number(),
  bodyId: z.number(),
  colorId: z.number(),
  transmissionId: z.number(),
  drivetrainId: z.number(),
  fuelId: z.number(),
  year: z.number(),
  price: z.number(),
  torque: z.number(),
  mileage: z.number(),
  horsepower: z.number(),
  seats: z.number(),
  doors: z.number(),
  description: z.string().optional(),
  features: z.array(z.string()),
});

