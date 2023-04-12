import { default as express, Router } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { AppRouter } from "./router.js";
import createHttpError from "http-errors";
import logger from "morgan";

const app = express();

app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: "*" }));
app.use((_, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  });
  next();
});

app.use("/api", AppRouter);

app.use((req, res, next) => {
  next(createHttpError(404));
});

app.listen(2222, () => {
  console.log("Express server started at port : 2222");
});
