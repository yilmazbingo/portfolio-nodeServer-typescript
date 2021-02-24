import mongoose from "mongoose";
import { DatabaseConnectionError } from "../error-types";
import "./models/Portfolio";
import "./models/Blog";

const DB_URI =
  process.env.NODE_ENV === "development"
    ? process.env.DB_URI
    : process.env.DB_PROD_URI;
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
