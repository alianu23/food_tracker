import { Request, Response } from "express";
import { sendEmail } from "../utils/senEmail";

export const sendEmailToUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    await sendEmail(email, "Verify Account for Food platform");
    res.status(201).json({ message: "Email амжилттай илгээгдлээ" });
  } catch (error) {
    res.status(401).send({
      message: `Email илгээхэд алдаа гарлаа`,
      error,
    });
  }
};
