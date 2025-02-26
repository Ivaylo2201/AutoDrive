import { PORT } from '@config';
import authRouter from '@routers/auth.router';
import carsRouter from '@routers/cars.router';
import dataRouter from '@routers/data.router';
import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';

export const app = express();

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true
  })
);
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/cars', carsRouter);
app.use('/api/data', dataRouter);

app.use('/assets', express.static('assets'));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
