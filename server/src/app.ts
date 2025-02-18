import { PORT } from '@config';
import authRouter from '@routers/auth.router';
import cookieParser from 'cookie-parser';
import express from 'express';

export const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
