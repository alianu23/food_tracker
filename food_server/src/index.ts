import express, { Application } from "express";
import color from "colors";
import "dotenv/config";
import cors from "cors";
import { connectDB } from "./config/db";
import auth from "./router/auth";
import user from "./router/user";
import verify from "./router/verify";
import errorHandler from "./middleware/errorHandler";
import category from "./router/category";
import food from "./router/food";
import upload from "./router/upload";
import basket from "./router/basket";

const app: Application = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI as string;

connectDB(MONGO_URI);
app.use(cors());

app.use(express.json());
app.use("/auth", auth);
app.use("/api", user);
app.use("/categories", category);
app.use("/foods", food);
app.use("/basket", basket);
app.use("/upload", upload);
app.use("/verify", verify);

app.use(errorHandler);

app.listen(PORT, () => console.log(color.rainbow(`Server started ${PORT} `)));
