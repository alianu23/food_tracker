import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  user: { type: Schema.ObjectId, ref: "User", require: true },

  createdAt: { type: Date, default: () => new Date() },
});

const Order = model("Order", orderSchema);
export default Order;
