import 'dotenv/config';
import "./database/connection";

import express from "express";
import morgan from "morgan";
import cors from "cors";
import errorHandler from "./middleware/errorHandler";
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

  app.post("/api/users", async (req, res) => {
    const user = await User.create(req.body);
    return res.status(201).json(user);
  });

  app.get("/api/users", async (req, res) => {
    const users = await User.findAll();
    return res.status(200).json(users);
  });

  app.use(errorHandler);

  return app;
};
