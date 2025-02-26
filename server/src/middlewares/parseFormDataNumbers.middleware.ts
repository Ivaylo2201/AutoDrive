import { Request, Response, NextFunction } from 'express';

export default function parseFormDataNumbers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  for (const key in req.body) {
    if (!isNaN(req.body[key])) {
      req.body[key] = Number(req.body[key]);
    }
  }

  req.body.features = Array.isArray(req.body.features)
    ? req.body.features.map((feature: string) => Number(feature))
    : [Number(req.body.features)];

  console.log(req.body);

  next();
}
