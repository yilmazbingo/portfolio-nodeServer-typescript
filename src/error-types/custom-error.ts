export abstract class CustomError extends Error {
  abstract statusCode: number;
  constructor(message: string) {
    // The super() function only takes message as an argument because that’s what Error takes natively.
    super(message);
    // this is set to be able to use isntance of method
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  //   this is not a method. it is a method signature. abstract class should have at least one method
  abstract serializeErrors(): { message: string; field?: string }[];
}
