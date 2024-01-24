import { Request, Response } from "express";
import User from "../model/user";

export const signup = async (req: Request, res: Response) => {
  const newUser = {
    name: "Admin",
    email: "admin@gmail.com",
    password: "pass123",
  };

  const user = await User.create(newUser);

  res.json({ message: "New user created", user });
};
