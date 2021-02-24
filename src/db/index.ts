import mongoose from "mongoose";
import { DatabaseConnectionError } from "../error-types";
import "./models/Portfolio";
import "./models/Blog";
import { DB_URI } from "../constants";

console.log("prod", process.env.NODE_ENV);

console.log("dbuti", DB_URI);
export const connect = () => {
  return mongoose.connect(
    DB_URI!,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    (err: Error) => {
      if (err) {
        throw new DatabaseConnectionError();
      } else {
        console.log("Connected to DB!");
      }
    }
  );
};
