import { Request, Response, NextFunction } from "express";
export const checkRole = (role: string) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let user: string | undefined;
  if (req.user) {
    user = req.user;
  }
  // user[config.AUTH0_NAMESPACE + "/roles"] is an array of roles
  if (user && user[process.env.AUTH0_NAMESPACE + "/roles"].includes(role)) {
    next();
  } else {
    return res
      .status(401)
      .send("You are not authorized to access this resource!");
  }
};
