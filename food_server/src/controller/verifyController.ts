import { Request, Response } from "express";
import { sendEmail } from "../utils/senEmail";
import User from "../model/user";

export const sendEmailToUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    const verUser = await User.findOne({ email });
    if (verUser == email) {
      await sendEmail(email, "Verify Account for Food platform", "Anuka");
      return res.status(201).json({ message: "Email амжилттай илгээгдлээ" });
    }
  } catch (error) {
    res.status(401).send({
      message: `Email илгээхэд алдаа гарлаа`,
      error,
    });
  }
};
