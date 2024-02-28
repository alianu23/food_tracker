import { NextFunction, Request, Response } from "express";
import Basket from "../model/basket";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";
import { ObjectId } from "mongoose";
import Food from "../model/food";

export const createBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  const { foodId, count, totalPrice } = req.body;

  try {
    const findBasket = await Basket.findOne({ user: req.user._id });
    // const findFood = await Basket.findById({ foods: foodId });
    if (!findBasket) {
      const basket = await (
        await Basket.create({
          user: req.user._id,
          foods: [
            {
              food: foodId,
              count: count,
            },
          ],
          totalPrice: totalPrice,
        })
      ).populate("foods.food");
      res.status(200).json({
        message: "Basket successfully created",
        basket: { foods: basket.foods, totalPrice: basket.totalPrice },
      });
    } else {
      console.log("FoodId", foodId);

      const findIndex = findBasket.foods.findIndex(
        (item) => item.food?._id?.toString() === foodId
      );

      if (findIndex !== -1) {
        findBasket.foods[findIndex].count = Number(count);
        findBasket.totalPrice = Number(totalPrice);
      } else {
        findBasket?.foods.push({ food: foodId, count: count });
      }

      const saveBasket = await (await findBasket.save()).populate("foods.food");
      console.log("Ned saved basket data ===== ", saveBasket);
      res.status(200).json({
        message: "Food successfully added in basket",
        basket: {
          foods: saveBasket.foods,
          totalPrice: saveBasket.totalPrice,
        },
      });
    }
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
    console.log("BASKET BACK ===>", basket);
    res.status(200).json({
      message: `Found this ${req.user._id}-id Basket`,
      basket: { foods: basket.foods, totalPrice: basket.totalPrice },
    });
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
    const basket = await Basket.findOne({ user: req.user._id }).populate(
      "foods.food"
    );
    // const filteredFood = basket?.foods.filter((el) => el.food !== foodId);
    const findIndex = basket?.foods.findIndex((el) =>
      el.food?._id.equals(foodId)
    );
    console.log("FONDINDEX", findIndex);

    if (findIndex !== undefined) {
      basket?.foods.splice(findIndex, 1);
      basket!.totalPrice = basket?.foods.reduce(
        (s, f: any) => s + f.food.price * f.count,
        0
      );
    }
    await basket?.save();
    // console.log("LAST basket", basket);
    res
      .status(200)
      .json({ message: `Deleted this ${foodId}-id food on basket` });
  } catch (error) {
    next(error);
  }
};
