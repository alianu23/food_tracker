import { Schema, model } from "mongoose";

const basketSchema = new Schema({
  totalPrice: { type: Number, default: 0 },
  food: { type: Schema.ObjectId, ref: "Food", require: true },
  createdAt: { type: Date, default: Date.now },
});

const Basket = model("Basket", basketSchema);
export default Basket;
