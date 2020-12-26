class Plane {
  color: string = "red";
  @markFunction
  fly(): void {
    console.log("flytinh");
  }
  @markFunctionDecorator("hi there")
  flyDecorator(): void {
    console.log("flytinh");
  }
}
function markFunction(target: Plane, key: string) {
  Reflect.defineMetadata("secret", 123, target, key);
}
// this will look at the fly(), it will define some metadata "secret:!23", to retrieve this info, we reach to Plane prototype
const secret = Reflect.getMetadata("secret", Plane.prototype, "fly");
// conver this to decorator function, so we pass the value
function markFunctionDecorator(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}
console.log(Plane.prototype);
