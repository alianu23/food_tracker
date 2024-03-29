import { NextFunction, Response } from "express";
import { IReq } from "../utils/interface";
import MyError from "../utils/myError";
import User from "../model/user";
import Food from "../model/food";

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
        buildingNo: req.body.buildingNo,
        info: req.body.info,
      },
      phone: req.body.phone,
    };
    const findUser = await User.findById(req.user._id);

    if (!findUser) {
      throw new MyError(`Бүртгэлгүй хэрэглэгч байна.`, 400);
    }
    const order = findUser.orders.push(newOrder);
    await findUser.save();

    res.status(200).json({ message: "Захиалга амжилттай үүслээ.", order });
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
    // const d = Food.findOne({ price: { $or: [{ $gt: 100 }, { $lte: 500 }] } })

    console.log("pstatus", req.body.pStatus, "dstatus", req.body.dStatus);
    const findIndex = findUser?.orders.findIndex(
      (item) => item._id?.toString() == req.params.orderId
    );
    console.log("orderID req", req.params.orderId);
    console.log("first findindex", findIndex);
    if (findIndex !== -1) {
      const updateOrder = findUser?.orders?.at(findIndex!);
      updateOrder!.payment!.status = req.body.pStatus;
      updateOrder!.delivery!.status = req.body.dStatus;
    } else {
      throw new MyError(`index oldsongu.`, 400);
    }

    await findUser!.save();

    res.status(200).json({ message: "Захиалга амжилттай үүслээ." });
  } catch (error) {
    next(error);
  }
};

// export const updateOrder = async (
//   req: IReq,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const findUser = await User.findById(req.user._id);

//     const findIndex = findUser?.orders.findIndex(
//       (item) => item._id?.toString() === req.params.orderId
//     );
//     console.log("first find index", findIndex);
//     if (findIndex !== -1) {
//       findUser?.orders?[findIndex] = {
//         ...findUser?.orders[findIndex],
//         payment: {
//           ...findUser?.orders[findIndex].payment,
//           status: req.body.pStatus,
//         },
//         delivery: {
//           ...findUser?.orders[findIndex].delivery,
//           status: req.body.dStatus,
//         },
//       };

//       await findUser?.save();
//     } else {
//       throw new MyError(`index олдсонгүй.`, 400);
//     }

//     res.status(200).json({ message: "Захиалга амжилттай засагдлаа." });
//   } catch (error) {
//     next(error);
//   }
// };
