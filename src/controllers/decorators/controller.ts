import { AppRouter } from "./../../AppRouter";
// it will iterate over all of the different properties of the class' prototype and it's going to see if those methods have any metada associated with them. if they do, it  is going to take that medata infromation and associate it with express router

//  controller will take prefix "/auth"
import "reflect-metadata";
// import { AppRouter } from "../../AppRouter";
import { Methods } from "../enums/Methods";
import { MetadataKeys } from "../enums/MetadataKeys";

// this decorator will be called last
export function controller(routePrefix: string) {
  // target is the constructor function of the class butif we apply decorator to a method, its target would be the prototype
  return function (target: Function) {
    const router = AppRouter.getInstance();
    // for ..in goes all enumerable properties of
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]; //getLogin
      const path = Reflect.getMetadata(
        MetadataKeys.Path,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MetadataKeys.Method,
        target.prototype,
        key
      );
      const middlewares =
        Reflect.getMetadata(MetadataKeys.Middleware, target.prototype, key) ||
        [];

      //   const requiredBodyProps =
      //     Reflect.getMetadata(MetadataKeys.Validator, target.prototype, key) ||
      //     [];
      //   const validator = bodyValidators(requiredBodyProps);

      // not all keys in prototype has "path" property
      if (path) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          //   validator,
          routeHandler
        );
      }
    }
  };
}
