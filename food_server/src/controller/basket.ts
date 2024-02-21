import { NextFunction, Request, Response } from "express";
import Basket from "../model/basket";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";

export const createBasket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newBasket = req.body;

    await Basket.create(newBasket);

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
    console.log("f", basket);
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

export const deleteBasket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { basketId } = req.params;
    const basket = await Basket.findByIdAndDelete(basketId);
    if (!basket) {
      throw new MyError(`Cannot found ${basketId}-id Basket table `, 400);
    }
    res
      .status(200)
      .json({ message: `Deleted this ${basketId}-id Basket`, basket });
  } catch (error) {
    next(error);
  }
};
