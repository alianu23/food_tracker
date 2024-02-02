import { NextFunction, Request, Response } from "express";
import User from "../model/user";
import MyError from "../utils/myError";

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    console.log("get user id", userId);
    const user = await User.findById(userId);
    if (!user) {
      throw new MyError(`Cannot found ${userId}-id category table `, 400);
    }
    res.status(200).json({ message: `Found this ${userId}-id category`, user });
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
    res.status(200).json({ message: `Found all category`, users });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const updateUser = req.body;
    const user = await User.findByIdAndUpdate(userId, updateUser);
    if (!user) {
      throw new MyError(`Cannot found ${userId}-id category table `, 400);
    }
    res
      .status(200)
      .json({ message: `Updated this ${userId}-id category`, user });
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
