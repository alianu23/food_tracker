import { NextFunction, Request, Response } from "express";
import User from "../model/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { sendEmail } from "../utils/senEmail";
import MyError from "../utils/myError";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = req.body;
    const user = await User.create({ ...newUser });
    if (!user) {
      throw new MyError("Invalid user email address", 400);
    }
    const verifyToken = jwt.sign(
      { email: user.email },
      process.env.JWT_PRIVATE_KEY as string,
      {
        expiresIn: "1d",
      }
    );
    sendEmail({ email: user.email, token: verifyToken });
    res.status(201).json({
      message:
        "Шинэ хэрэглэгч амжилттай бүртгэгдлээ. Таны бүгтгүүлсэн хаягруу баталгаажуулах код явууллаа",
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userEmail, userPassword } = req.body;
    console.log("Login body", req.body);
    const user = await User.findOne({ email: userEmail })
      .select("+password")
      .lean();
    if (!user) {
      throw new MyError("Invalid user email address", 400);
    }
    const validPass = bcrypt.compareSync(userPassword, user.password);
    if (!validPass) {
      throw new MyError("Invalid pass or email", 400);
    }
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_PRIVATE_KEY as string,
      { expiresIn: process.env.JWT_EXPIRE_IN }
    );

    const { password, ...otherParams } = user;
    res
      .status(201)
      .send({ message: "Хэрэглэгч нэвтэрлээ", token, user: otherParams });
  } catch (error) {
    next(error);
  }
};

// https://mongoosejs.com/docs/queries.html
