import { NextFunction, Response } from "express";
import { IReq } from "../utils/interface";
import MyError from "../utils/myError";
import User from "../model/user";

export const createOrder = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const newOrder = {
      orderNo: "#" + Math.floor(Math.random() * 1000000),
      foods: req.body.foods,
      payment: {
        paymentAmount: req.body.paymentAmount,
        method: req.body.method,
      },
      address: {
        khoroo: req.body.khoroo,
        duureg: req.body.duureg,
        buildingNo: req.body.duureg,
        info: req.body.info,
      },
      phone: req.body.phone,
    };
    const findUser = await User.findById(req.user._id);

    if (!findUser) {
      throw new MyError(`Бүртгэлгүй хэрэглэгч байна.`, 400);
    }
    findUser.orders.push(newOrder);
    await findUser.save();

    res.status(200).json({ message: "Захиалга амжилттай үүслээ." });
  } catch (error) {
    next(error);
  }
};
export const updateOrder = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const findUser = await User.findById(req.user._id);

    const findIndex = findUser?.orders.findIndex(
      (item) => item._id === req.body.orderId
    );
    console.log("first find index", findIndex);
    if (findIndex !== -1) {
      findUser?.updateOne({
        _id: req.user._id,
        orders: [
          {
            payment: {
              status: req.body.pStatus,
            },
            delivery: {
              status: req.body.dStatus,
            },
          },
        ],
      });
    } else {
      throw new MyError(`index oldsongu.`, 400);
    }

    await findUser!.save();

    res.status(200).json({ message: "Захиалга амжилттай үүслээ." });
  } catch (error) {
    next(error);
  }
};
