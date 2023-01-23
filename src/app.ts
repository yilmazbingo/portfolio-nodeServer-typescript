import "express-async-errors";
import express, { Response, Request, NextFunction } from "express";
import bodyParser from "body-parser";
import { errorHandler } from "./middlewares";
import path from "path";
import { AppRouter } from "./AppRouter";
import cors from "cors";
import("./controllers/blogs");
import("./controllers/portfolios");

const app = express();
function ignoreFavicon(req: Request, res: Response, next: NextFunction) {
  if (req.originalUrl.includes("favicon.ico")) {
    res.status(204).end();
  }
  next();
}
app.use(bodyParser.json());
//app.use(Cors);
app.use((req: Request, res: Response, next: NextFunction) => {
  next();
}, cors({ maxAge: 84600 }));
app.use(AppRouter.getInstance());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(ignoreFavicon);

//app.use("/api/v1/portfolios", require("./routes/portfolios"));
//app.use("/api/v1/blogs", require("./routes/blogs"))

app.get("/", (req, res) => {
  res.sendFile("index.html");
});
app.get("/me", (req, res) => {
  res.send("yilm");
});
app.get("/favicon.ico", function (req, res) {
  res.status(204);
  res.end();
});
app.use(errorHandler);

export { app };
