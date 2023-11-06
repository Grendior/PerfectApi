import express from "express";
import morgan from "morgan";
import cors from "cors";
import "./database/connection";
import errorHandler from "./middleware/errorHandler";
import v1 from "./routes/v1";
import User from "./database/models/User";

export const createServer = () => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(cors());

  app.get("/healthz", (req, res) => {
    return res.json({ ok: true, environment: process.env.NODE_ENV });
  });

  app.post("api/users", async (req, res) => {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  });

  app.get("api/users", async (req, res) => {
    const users = await User.findAll();
    return res.status(201).json(users);
  });

  // app.use("/v1", v1);

  // app.use(errorHandler);

  return app;
};
