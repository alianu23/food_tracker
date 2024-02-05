import express, { Application } from "express";
import color from "colors";
import "dotenv/config";
import cors from "cors";
import { connectDB } from "./config/db";
import authRouter from "./router/auth";
import userRoute from "./router/user";
import verifyRoute from "./router/verify";
import errorHandler from "./middleware/errorHandler";
import category from "./router/category";
import food from "./router/food";
import uploadRoute from "./router/upload";

const app: Application = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI as string;

connectDB(MONGO_URI);
app.use(cors());

app.use(express.json());
app.use("/auth", authRouter);
app.use("/api", userRoute);
app.use("/categories", category);
app.use("/foods", food);
app.use("/upload", uploadRoute);
app.use("/verify", verifyRoute);

app.use(errorHandler);

app.listen(PORT, () => console.log(color.rainbow(`Server started ${PORT} `)));
