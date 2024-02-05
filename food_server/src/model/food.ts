import { Schema, model } from "mongoose";

const foodSchema = new Schema({
  name: {
    type: String,
    require: [true, "Food name required"],
    unique: true,
    maxlenght: [50, "Max lenght 50"],
  },
  price: { type: Number, default: 0 },
  discountPrice: { type: Number, default: 0 },
  isSale: { type: Boolean, default: false },
  description: {
    type: String,
    require: [true, "Food description required"],
  },
  image: { type: String, default: "No-food-image" },
  category: { type: Schema.ObjectId, ref: "Category", require: true },
  createdAt: { type: Date, default: Date.now },
});

const Food = model("Food", foodSchema);
export default Food;
