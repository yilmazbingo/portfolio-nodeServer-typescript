import { Request, Response, NextFunction } from "express";
import { CustomError } from "../error-types";
import { logger } from "../helpers";

export const errorHandler = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.error(error);
  res.json({
    status: "Error",
    statusCode: error.statusCode,
    message: error.message,
  });
};
