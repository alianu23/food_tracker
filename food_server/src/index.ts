import express, { Application, Request, Response } from "express";
import color from "colors";
import "dotenv/config";
import { connectDB } from "./config/db";
import authRouter from "./router/authRouter";

const app: Application = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI as string;

connectDB(MONGO_URI);

app.use(express.json());
app.use("/auth", authRouter);

app.listen(PORT, () => console.log(color.rainbow(`Server started ${PORT} `)));
