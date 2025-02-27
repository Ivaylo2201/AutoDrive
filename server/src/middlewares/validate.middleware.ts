import { Request, Response, NextFunction } from 'express';
import StatusCode from '@utils/StatusCode';
import { ZodSchema } from 'zod';

export default function validate(schema: ZodSchema) {
  return function (req: Request, res: Response, next: NextFunction) {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errors = result.error.errors.map((e) => {
        return { field: e.path[0], message: e.message };
      });

      res.status(StatusCode.BAD_REQUEST).json(errors);
      return;
    }

    next();
  };
}
