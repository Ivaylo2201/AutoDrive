import bcrypt from 'bcrypt';
import { Request, Response } from 'express';

import { prisma, SALT_ROUNDS, tokenService } from '@config';
import StatusCode from 'src/utils/StatusCode';

export async function signIn(req: Request, res: Response) {
  const { username, password } = req.body;

  const user = await prisma.user.findUnique({ where: { username } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    res
      .status(StatusCode.BAD_REQUEST)
      .json({ message: 'Invalid credentials.' });
    return;
  }

  const { access, refresh } = tokenService.obtainPair(user);

  res.cookie('refresh', refresh, {
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000
  });

  res.status(StatusCode.OK).json({ access, username: user.username });
}

export async function signUp(req: Request, res: Response) {
  const { username, password, phoneNumber } = req.body;

  const exists = await prisma.user.findUnique({ where: { username } });

  if (exists) {
    res
      .status(StatusCode.CONFLICT)
      .json({ message: 'Username already taken.' });
    return;
  }

  const user = await prisma.user.create({
    data: {
      username: username,
      password: await bcrypt.hash(password, SALT_ROUNDS),
      phoneNumber: phoneNumber
    }
  });

  const tokens = tokenService.obtainPair(user);
  res.status(StatusCode.OK).json({ ...tokens, username: user.username });
}

export async function refreshToken(req: Request, res: Response) {
  const { refresh: refreshToken } = req.cookies;

  if (!refreshToken) {
    res
      .status(StatusCode.BAD_REQUEST)
      .json({ message: 'Refresh token was not provided.' });
    return;
  }

  try {
    res.status(StatusCode.OK).json(tokenService.refresh(refreshToken));
  } catch {
    res
      .status(StatusCode.UNAUTHORIZED)
      .json({ message: 'Invalid refresh token.' });
  }
}
