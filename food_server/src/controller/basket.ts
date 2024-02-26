import { NextFunction, Request, Response } from "express";
import Basket from "../model/basket";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";
import { ObjectId } from "mongoose";

export const createBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  const { food } = req.body;
  const basket = {
    user: req.user._id,
    foods: [
      {
        food: food,
      },
    ],
  };

  try {
    await Basket.create(basket);

    res.status(201).json({ message: "Basket created successfully" });
  } catch (error) {
    next(error);
  }
};
export const getBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    // const { userId } = req.params;
    // console.log("u", userId);
    const basket = await Basket.findOne({
      user: req.user._id,
    }).populate("foods.food");
    // console.log("f", basket);
    if (!basket) {
      throw new MyError(`Cannot found ${req.user._id}-id Basket table `, 400);
    }
    res
      .status(200)
      .json({ message: `Found this ${req.user._id}-id Basket`, basket });
  } catch (error) {
    next(error);
  }
};

export const updateBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId, count } = req.body;
    console.log("food.ID ====>", foodId);
    console.log("user.ID ====>", req.user._id);
    const basket = await Basket.findOne({ user: req.user._id });
    basket?.foods.push({ food: foodId, count: count });
    await basket?.save();
    res.status(200).json({ message: "successfully updated basket" });
  } catch (error) {
    next(error);
  }
};

export const deleteBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { foodId } = req.params;
    console.log("food.ID ====>", foodId);
    console.log("user.ID ====>", req.user._id);
    const basket = await Basket.findOne({ user: req.user._id });
    // const filteredFood = basket?.foods.filter((el) => el.food !== foodId);
    const findIndex = basket?.foods.findIndex((el) =>
      el.food?._id.equals(foodId)
    );
    console.log("FONDINDEX", findIndex);

    if (findIndex !== undefined) basket?.foods.splice(findIndex, 1);

    await basket?.save();
    // console.log("LAST basket", basket);
    res
      .status(200)
      .json({ message: `Deleted this ${foodId}-id food on basket` });
  } catch (error) {
    next(error);
  }
};
