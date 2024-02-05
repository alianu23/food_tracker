import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/senEmail";
import User from "../model/user";
import { htmlConfirm } from "../utils/htmlFile";
import MyError from "../utils/myError";

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { token } = req.query;
    const { email } = jwt.verify(
      token as string,
      process.env.JWT_PRIVATE_KEY as string
    ) as { email: string };
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      throw new MyError("Not verified", 500);
    } else {
    }
    findUser?.isVerified && true;
    await findUser?.save();
    res.status(200).send(htmlConfirm);
  } catch (error) {
    next(error);
  }
};

export const sendEmailToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email } = req.body;
    const otp = Math.round(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
    const verUser = await User.findOne({ email });
    if (!verUser) {
      throw new MyError("Хэрэглэгч олдсонгүй", 400);
    }
    const salt = await bcrypt.genSalt(10);
    verUser.otp = await bcrypt.hash(otp, salt);
    await verUser.save();
    await sendEmail({ email, otp });
    res.status(201).json({ message: "Email амжилттай илгээгдлээ" });
  } catch (error) {
    next(error);
  }
};

export const verifyOtp = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, otp } = req.body;
    const findUser = await User.findOne({ email });
    console.log("USER", findUser);
    if (!findUser) {
      throw new MyError("Хэрэглэгч олдсонгүй", 400);
    }
    const validOtp = await bcrypt.compare(otp, findUser?.otp);
    if (!validOtp) {
      throw new MyError("Код буруу байна", 400);
    }
    console.log("valid", validOtp);
    res.status(200).json({ message: "OTP is validated" });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, email } = req.body;

    const findUser = await User.findOne({ email });
    if (!findUser) {
      throw new MyError("Хэрэглэгч олдсонгүй", 400);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await findUser.updateOne({ password: hashedPassword });
    await findUser.save();
    res.status(200).json({ message: "Password changed" });
  } catch (error) {
    next(error);
  }
};
