import { z } from 'zod';

const signInSchema = z.object({
  username: z.string({ required_error: 'Username is required.' }).min(1, 'Username should at least 1 character long.'),
  password: z.string({ required_error: 'Password is required.' }).min(1, 'Password should at least 1 character long.')
});

export default signInSchema;
