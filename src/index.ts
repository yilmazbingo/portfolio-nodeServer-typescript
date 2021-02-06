import { connect } from "./db";
import { app } from "./app";

const start = async () => {
  if (!process.env.DB_URI) {
    throw new Error("Database url must be passed");
  }
  await connect();
  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log("Server ready on port:", PORT);
  });
};

start();
