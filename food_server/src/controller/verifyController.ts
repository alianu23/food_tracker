import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendEmail } from "../utils/senEmail";
import User from "../model/user";

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { token } = req.query;
    const { email } = jwt.verify(
      token as string,
      process.env.JWT_PRIVATE_KEY as string
    ) as { email: string };

    const findUser = await User.findOne({ email: email });

    if (!findUser) {
    } else {
      findUser.isVerified = true;
    }

    await findUser?.save();

    res.status(200).send(`<h1 style="color: green">Valid Link </h1>`);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Server is internal error", error });
  }
};

export const sendEmailToUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const otp = Math.round(Math.random() * 10000)
      .toString()
      .padStart(4, "0");

    const verUser = await User.findOne({ email });
    if (!verUser) {
      return res.status(400).json({ message: "Хэрэглэгч олдсонгүй" });
    }
    const salt = await bcrypt.genSalt(10);

    verUser.otp = await bcrypt.hash(otp, salt);

    await verUser.save();

    await sendEmail({ email, otp });
    res.status(201).json({ message: "Email амжилттай илгээгдлээ" });
  } catch (error) {
    res.status(401).send({
      message: `Email илгээхэд алдаа гарлаа`,
      error,
    });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;
    console.log("email", email);
    console.log("OTP", otp);

    const findUser = await User.findOne({ email });
    console.log("USER", findUser);
    if (!findUser) {
      return res.status(400).json({ message: "Хэрэглэгч олдсонгүй" });
    }

    const validOtp = await bcrypt.compare(otp, findUser?.otp);

    if (!validOtp) {
      return res.status(400).json({ message: "Код буруу байна" });
    }
    console.log("valid", validOtp);
    res.status(200).json({ message: "OTP is validated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server is internal error" });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const { password, email } = req.body;

    const findUser = await User.findOne({ email });
    console.log("USER", findUser);
    if (!findUser) {
      return res.status(400).json({ message: "Хэрэглэгч олдсонгүй" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await findUser.updateOne({ password: hashedPassword });

    await findUser.save();

    res.status(200).json({ message: "Password changed" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
