import { PrismaClient, User } from '@prisma/client';
import dotenv from 'dotenv';
import TokenService from './services/token/TokenService';

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const ACCESS_SECRET = process.env.ACCESS_SECRET;
export const REFRESH_SECRET = process.env.REFRESH_SECRET;
export const prisma = new PrismaClient();
export const tokenService = new TokenService<User>();
export const SALT_ROUNDS = 10