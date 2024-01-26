import { Request, Response } from "express";
import User from "../model/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup = async (req: Request, res: Response) => {
  try {
    const newUser = req.body;

    const user = await User.create(newUser);

    res.status(201).json({ message: "Шинэ хэрэглэгч бүртгэгдлээ" });
  } catch (error) {
    res
      .status(401)
      .send({ message: `There is an error to create new user`, error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log("Login body", req.body);
    const user = await User.findOne({ email }).select("+password");
    if (!user)
      return res.status(400).send({ message: "Invalid user email address" });
    const validPass = bcrypt.compareSync(password, user.password);
    if (!validPass)
      return res.status(400).send({ message: "Invalid pass or email" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_PRIVATE_KEY as string,
      { expiresIn: process.env.JWT_EXPIRE_IN }
    );
    res.status(201).send({ message: "Хэрэглэгч нэвтэрлээ", token });
  } catch (error) {
    res.status(401).send({ message: `Хэрэглэгч олдсонгүй`, error });
  }
};

// https://mongoosejs.com/docs/queries.html
