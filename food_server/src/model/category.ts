import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: {
    type: String,
    require: [true, "Category name required"],
    unique: true,
    maxlenght: [50, "Max lenght 50"],
  },
  description: {
    type: String,
    require: [true, "Category description required"],
  },
  image: { type: String, default: "No-category-image" },
  createdAt: { type: Date, default: Date.now },
});

const Category = model("Category", categorySchema);
export default Category;
