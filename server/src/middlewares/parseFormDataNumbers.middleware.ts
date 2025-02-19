import { Request, Response, NextFunction } from "express";

export default function parseFormDataNumbers(req: Request, res: Response, next: NextFunction) {
  for (const key in req.body) {
    if (!isNaN(req.body[key])) {
      req.body[key] = Number(req.body[key]);
    }
  }

  next();
}