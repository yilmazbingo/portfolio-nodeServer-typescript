import { Request, Response, NextFunction } from "express";
export const checkRole = (role: string) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // let user: { [key: string]: string } = {};
  let user: Record<string, any> = {};
  user = req.user;
  console.log("user", user);
  // console.log("process.env.AUTH0_NAMESPACE", process.env.AUTH0_NAMESPACE);
  // console.log("user.process", user[process.env.AUTH0_NAMESPACE!]);
  const userRoles = Object.keys(user)[0];
  // console.log("userRoles", user[userRoles]);
  // if (user && user[process.env.AUTH0_NAMESPACE + "/roles"].includes(role)) {
  if (user && user[userRoles].includes(role)) {
    next();
  } else {
    return res
      .status(401)
      .send("You are not authorized to access this resource!");
  }
};
