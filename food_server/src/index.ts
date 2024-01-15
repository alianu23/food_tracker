import express, { Application } from "express";
import color from "colors";

const app = express();

app.listen(8080, () => console.log(color.rainbow("Server running")));
