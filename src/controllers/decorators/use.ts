import "reflect-metadata";
import { MetadataKeys } from "../enums/MetadataKeys";
import { RequestHandler } from "express";
import { RequestHandler as jwtRequestHandler } from "express-jwt";

// factory decorator returns a function. we use them anytime our decorator needs to take an argument
export function use(middleware: RequestHandler | jwtRequestHandler) {
  // target is the object prototype
  return function (target: any, key: string, desc: PropertyDescriptor) {
    // this decorator has to be called many times. so we are storing an array of middlewares
    const middlewares =
      Reflect.getMetadata(MetadataKeys.Middleware, target, key) || [];
    Reflect.defineMetadata(
      MetadataKeys.Middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
