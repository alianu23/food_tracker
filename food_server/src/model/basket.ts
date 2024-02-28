import { Schema, model } from "mongoose";

const basketSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User", require: true },
  foods: [
    {
      food: { type: Schema.Types.ObjectId, ref: "Food", required: true },
      count: { type: Number, default: 1 },
    },
  ],
  totalPrice: Number, //total price of all items in the basket
});

const Basket = model("Basket", basketSchema);
export default Basket;
