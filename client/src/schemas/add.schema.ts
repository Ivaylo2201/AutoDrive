import { z } from 'zod';

export const addSchema = z.object({
  make: z.string({ required_error: 'Make is required.' }),
  model: z.string({ required_error: 'Model is required.' }),
  color: z.string({ required_error: 'Color is required.' }),
  transmission: z.string({ required_error: 'Transmission is required.' }),
  drivetrain: z.string({ required_error: 'Drivetrain is required.' }),
  fuel: z.string({ required_error: 'Fuel type is required.' }),
  year: z
    .number({ required_error: 'Year is required.' })
    .min(1975, { message: 'Year must be greater than or equal to 1975.' })
    .max(new Date().getFullYear(), {
      message: 'Year cannot be in the future.'
    }),
  price: z
    .number({ required_error: 'Price is required.' })
    .positive({ message: 'Price must be a positive number.' })
    .max(1000000, { message: 'Price cannot exceed 1,000,000.' }),
  torque: z
    .number({ required_error: 'Torque is required.' })
    .positive({ message: 'Torque must be a positive number.' })
    .max(1000, { message: 'Torque cannot exceed 1,000.' }),
  mileage: z
    .number({ required_error: 'Mileage is required.' })
    .positive({ message: 'Mileage must be a positive number.' })
    .max(1000000, { message: 'Mileage cannot exceed 1,000,000.' }),
  horsepower: z
    .number({ required_error: 'Horsepower is required.' })
    .positive({ message: 'Horsepower must be a positive number.' })
    .max(5000, { message: 'Horsepower cannot exceed 5,000.' }),
  seats: z
    .number({ required_error: 'Seats are required.' })
    .positive({ message: 'Seats must be a positive number.' })
    .max(10, { message: 'Seats cannot exceed 10.' }),

  doors: z
    .number({ required_error: 'Doors are required.' })
    .positive({ message: 'Doors must be a positive number.' })
    .max(10, { message: 'Doors cannot exceed 10.' }),

  description: z.string().optional(),
  features: z
    .array(z.object({ id: z.number() }))
    .min(1, { message: 'At least one feature is required.' })
});
