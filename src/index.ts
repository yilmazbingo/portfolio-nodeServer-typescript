import Debug, { Debugger } from "debug";

const logger = Debug("dev");
import { connect } from "./db";
import { app } from "./app";
import { DB_URI } from "./constants";

//  declare function logger:debugger
//  global.logger=debugger

const start = async () => {
  if (!DB_URI) {
    throw new Error("Database url must be passed");
  }
  await connect();
  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    logger("Server ready on port:", PORT);
  });
};

start();
