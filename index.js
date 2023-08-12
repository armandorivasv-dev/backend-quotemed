import express, { json } from "express";
import cors from "cors";
import { config } from "./config.js";
import routes from "./routes/index.js";
import mongoose from "mongoose";

const app = express();

app.use(json());

app.use(express.urlencoded({ extended: true }));

mongoose.connect(config.database.dbUrlLocal);

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use("/api", routes);

app.listen(config.app.port, config.app.host, () => {
  console.log(
    `Server listen http://${config.app.host} PORT:${config.app.port} `
  );
});
