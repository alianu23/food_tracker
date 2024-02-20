import { NextFunction, Request, Response } from "express";
import Food from "../model/food";
import MyError from "../utils/myError";
import cloudinary from "../utils/cloudinary";

export const createFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newFood = { ...req.body };

    console.log("NewFood", newFood);
    console.log("req file", req.file);

    if (req.file) {
      const { secure_url } = await cloudinary.uploader.upload(req.file.path);
      newFood.image = secure_url;
    }

    await Food.create(newFood);

    res.status(201).json({ message: "Food created successfully" });
  } catch (error) {
    next(error);
  }
};
export const getFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const food = await Food.findById(foodId);

    if (!food) {
      throw new MyError(`Cannot found ${foodId}-id food table `, 400);
    }
    res.status(200).json({ message: `Found this ${foodId}-id food`, food });
  } catch (error) {
    next(error);
  }
};
export const getAllFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const foods = await Food.find().populate("category", "_id name");
    res.status(200).json({ message: `all foods`, foods });
  } catch (error) {
    next(error);
  }
};
export const updateFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const updateFood = req.body;
    const food = await Food.findByIdAndUpdate(foodId, updateFood);
    if (!food) {
      throw new MyError(`Cannot found ${foodId}-id food table `, 400);
    }
    res.status(200).json({ message: `Updated this ${foodId}-id food`, food });
  } catch (error) {
    next(error);
  }
};
export const deleteFood = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    const food = await Food.findByIdAndDelete(foodId);
    if (!food) {
      throw new MyError(`Cannot found ${foodId}-id food table `, 400);
    }
    res.status(200).json({ message: `Deleted this ${foodId}-id food`, food });
  } catch (error) {
    next(error);
  }
};
