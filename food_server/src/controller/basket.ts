import { NextFunction, Request, Response } from "express";
import Basket from "../model/basket";
import MyError from "../utils/myError";

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
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { basketId } = req.params;
    const basket = await Basket.findById(basketId);
    if (!basket) {
      throw new MyError(`Cannot found ${basketId}-id Basket table `, 400);
    }
    res
      .status(200)
      .json({ message: `Found this ${basketId}-id Basket`, basket });
  } catch (error) {
    next(error);
  }
};
export const getAllBasket = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const baskets = await Basket.find().populate(
      "food",
      "_id name price description"
    );

    res.status(200).json({ message: `all Baskets`, baskets });
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
