import "express-async-errors";
import express from "express";
import bodyParser from "body-parser";
import { errorHandler, Cors } from "./middlewares";
import { connect } from "./db";
import { AppRouter } from "./AppRouter";

const server = express();
console.log("pro", process.env.PORT);
async function runServer() {
  await connect();
  server.use(bodyParser.json());
  server.use(Cors);

  // server.use("/api/v1/portfolios", require("./routes/portfolios"));
  // server.use("/api/v1/blogs", require("./routes/blogs"));

  import("./controllers/blogs");
  import("./controllers/portfolios");

  server.get("", (req, res) => {
    res.sendFile("index.html", { root: __dirname });
  });
  server.use(AppRouter.getInstance());

  server.use(errorHandler);

  const PORT = process.env.PORT;
  server.listen(PORT, () => {
    console.log("Server ready on port:", PORT);
  });
}

runServer();
