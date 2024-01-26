import { Request, Response } from "express";
import User from "../model/user";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(201).json({ message: "Бүх хэрэглэгч олдлоо", users });
  } catch (error) {
    res.status(401).send({
      message: `Бүх хэрэглэгчийн мэдээлэл авах үед алдаа гарлаа`,
      error,
    });
  }
};
