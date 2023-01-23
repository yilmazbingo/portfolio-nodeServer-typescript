import { Response, Request, NextFunction, RequestHandler } from "express";

// using 'express-async-errors' for now. this gives me error in typescript.
export const asyncMiddleware = (handler: Function): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res);
    } catch (error) {
      next(error);
    }
  };
};
