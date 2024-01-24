import { Request, Response } from "express";
import User from "../model/user";
import { hashSync } from "bcrypt";
import { compareSync } from "bcrypt";

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  console.log("BODY", req.body);
  const hashPass = hashSync(password, 10);
  const newUser = {
    name: name,
    email: email,
    password: hashPass,
  };

  const user = await User.create(newUser);

  res.json({ message: "New user created", user });
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email: email });
    if (!findUser)
      return res.status(400).send({ message: "Invalid user email address" });
    const validPass = compareSync(password, findUser.password as string);
    if (!validPass) return res.status(400).send({ message: "Invalid pass" });
    else {
      const { password, ...user } = findUser;
      res.status(201).send({ message: "success", user });
    }
  } catch (error) {
    res.status(500).send({ message: `${error}-iim aldaa garlaa` });
  }
};

// https://mongoosejs.com/docs/queries.html
