import mongoose from "mongoose";
import color from "colors";

export const connectDB = async (uri: string) => {
  try {
    await mongoose.connect(uri);
    console.log(color.bgMagenta("DataBase is connected."));
  } catch (error) {
    console.log(
      color.bgRed(`DataBase is cannot connect. ${error} aldaa garlaa`)
    );
  }
};
