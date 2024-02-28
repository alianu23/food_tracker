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
  console.log("User", req.user);
  console.log("Body", req.body);
  try {
    const findBasket = await Basket.findOne({ user: req.user._id });
    // const findFood = await Basket.findById({ foods: foodId });
    if (!findBasket) {
      const basket = await (
        await Basket.create({
          user: req.user._id,
          foods: [
            {
              food: req.body.foodId,
              count: req.body.count,
            },
          ],
          totalPrice: req.body.totalPrice,
        })
      ).populate("foods.food");
      res.status(200).json({
        message: "Basket successfully created",
        basket,
      });
    } else {
      console.log("req.body.foodId", req.body.foodId);

      const findIndex = findBasket.foods.findIndex(
        (item) => item.food?.toString() === req.body.foodId
      );

      if (findIndex !== -1) {
        findBasket.foods[findIndex].count = Number(req.body.count);
        findBasket.totalPrice = Number(req.body.totalPrice);
      } else {
        findBasket?.foods.push({
          food: req.body.foodId,
          count: req.body.count,
        });
        findBasket.totalPrice = Number(req.body.totalPrice);
      }

      const savedBasket = await (
        await findBasket.save()
      ).populate("foods.food");
      console.log("Ned saved basket data ===== ", savedBasket);
      res.status(200).json({
        message: "Food successfully added in basket",
        basket: { foods: savedBasket.foods, totalPrice: findBasket.totalPrice },
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
      throw new MyError(`Cannot found this users Basket table `, 400);
    }
    // console.log("BASKET BACK ===>", basket);
    res.status(200).json({
      message: `Found this ${req.user._id}-userId's Basket`,
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
    console.log("FINDINDEX", findIndex);

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
