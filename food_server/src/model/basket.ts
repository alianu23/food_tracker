import { Schema, model } from "mongoose";

const basketSchema = new Schema({
  foods: [
    {
      food: { type: Schema.ObjectId, ref: "Food", require: true },
      count: { type: Number, default: 1 },
    },
  ],
  user: { type: Schema.ObjectId, ref: "User", require: true },
  totalPrice: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const Basket = model("Basket", basketSchema);
export default Basket;
