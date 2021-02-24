import MongoDB, { MongoDBTransportInstance } from "winston-mongodb";
import winston from "winston";
import { DB_URI } from "../constants";

console.log("db", DB_URI);
console.log("produc", process.env.DB_PROD_URI);
export const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new MongoDB.MongoDB({
      db: DB_URI!,
    }),
    // new winston.transports.
  ],
});
