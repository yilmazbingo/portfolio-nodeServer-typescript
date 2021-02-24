import mongoose from "mongoose";
import { DatabaseConnectionError } from "../error-types";
import "./models/Portfolio";
import "./models/Blog";
import { DB_URI } from "../constants";

export const connect = () => {
  return mongoose.connect(
    " mongodb+srv://yilmaz:programci1040@cluster0.qrw9h.mongodb.net/portfolio?retryWrites=true&w=majority",
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
