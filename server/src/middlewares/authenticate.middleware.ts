import { tokenService } from '@config';
import StatusCode from '@utils/StatusCode';
import { Request, Response, NextFunction } from 'express';

export default function authenticate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    res.status(StatusCode.UNAUTHORIZED).json({ message: 'Missing token.' });
    return;
  }

  try {
    const user = tokenService.verify(token);
    req.body.userId = user.id;
    next();
  } catch {
    res.status(StatusCode.UNAUTHORIZED).json({ message: 'Invalid token.' });
  }
}
