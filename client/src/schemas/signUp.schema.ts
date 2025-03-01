import { z } from 'zod';

export const signUpSchema = z
  .object({
    username: z
      .string({ required_error: 'Username is required.' })
      .min(5, 'Username must be at least 5 characters long.'),
    password: z
      .string({ required_error: 'Password is required.' })
      .min(8, 'Password must be at least 8 characters long')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number'),
    phoneNumber: z
      .string({ required_error: 'Phone number is required.' })
      .length(10, 'Phone number must be exactly 10 characters long.'),
    passwordConfirmation: z.string({
      required_error: 'Passoword confirmation is required.'
    })
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation']
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;
