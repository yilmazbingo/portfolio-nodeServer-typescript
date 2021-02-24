import { Debugger } from "debug";

// declare logger:Debugger
// declare namespace NodeJS {
//   export interface Global {
//     logger: Debugger;
//   }
// }

// declare global {
//   interface Global {
//     logger: Debugger;
//   }
// }

// declare module NodeJS {
//   interface Global {
//     logger: Debugger;
//   }
// }

// declare global {
//   logger: Debugger;
// }

// declare global {
//   namespace NodeJS {
//     interface Global {
//       logger: Debugger;
//     }
//   }
// }
declare module NodeJS  {
  interface Global {
    logger: Debugger;

  }
export default NodeJS;
