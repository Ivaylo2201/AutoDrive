import { refreshToken, signIn, signUp } from '@controllers/auth.controller';
import validate from '@middlewares/validate.middleware';
import signInSchema from '@schemas/signIn.schema';
import signUpSchema from '@schemas/signUp.schema';
import { Router } from 'express';

const authRouter = Router();

authRouter.post('/sign-up', validate(signUpSchema), signUp);
authRouter.post('/sign-in', validate(signInSchema), signIn);
authRouter.post('/refresh', refreshToken);

export default authRouter;
