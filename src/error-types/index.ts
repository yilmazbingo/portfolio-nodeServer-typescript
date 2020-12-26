export * from "./bad-request";
export * from "./database-connection";
export * from "./request-validation";
export * from "./custom-error";
//  Object.setPrototypeOf(this, CustomError.prototype);  this is used if you are compiling in target:Es5 because Error can be correctly subclassed using only ES2015 and above
//SubClass.prototype = new SuperClass(); we lose our reference to the original constructor
// Ninja.prototype = Person.prototype . Any changes to the Ninja prototype will then also change the Person prototype (because they’re the same object), and that’s bound to have undesirable side effects.
