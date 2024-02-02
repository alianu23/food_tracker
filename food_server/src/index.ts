import express, { Application } from "express";
import color from "colors";
import "dotenv/config";
import cors from "cors";
import { connectDB } from "./config/db";
import authRouter from "./router/authRouter";
import userRoute from "./router/userRoute";
import verifyRoute from "./router/verifyRoute";
import errorHandler from "./middleware/errorHandler";
import category from "./router/category";

const app: Application = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI as string;

connectDB(MONGO_URI);
app.use(cors());

app.use(express.json());
app.use("/auth", authRouter);
app.use("/api", userRoute);
app.use("/categories", category);
app.use("/verify", verifyRoute);

app.use(errorHandler);

app.listen(PORT, () => console.log(color.rainbow(`Server started ${PORT} `)));
