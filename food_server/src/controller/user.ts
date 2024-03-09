import { NextFunction, Request, Response } from "express";
import User from "../model/user";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";
import cloudinary from "../utils/cloudinary";

export const getUser = async (req: IReq, res: Response, next: NextFunction) => {
  try {
    const user = await User.findById(req.user._id).populate(
      "orders.foods.food"
    );

    if (!user) {
      throw new MyError(`Cannot found user table `, 400);
    }
    res.status(200).json({ message: `Found this user`, user });
  } catch (error) {
    next(error);
  }
};
export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: `Found all users`, users });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const updateUser = { ...req.body };
    // console.log("file avatarurl", req.file);
    if (req.file) {
      const { secure_url } = await cloudinary.uploader.upload(req.file.path);
      updateUser.avatarUrl = secure_url;
      console.log("secure-file", updateUser);
    }
    const user = await User.findByIdAndUpdate(req.user._id, updateUser, {
      new: true,
    });

    if (!user) {
      throw new MyError(`Cannot found user table `, 400);
    }

    res.status(200).json({ message: `Updated this user`, user });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw new MyError(`Cannot found ${userId}-id category table `, 400);
    }
    res
      .status(200)
      .json({ message: `Deleted this ${userId}-id category`, user });
  } catch (error) {
    next(error);
  }
};
