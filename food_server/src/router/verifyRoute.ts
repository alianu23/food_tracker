import { Router } from "express";
import {
  sendEmailToUser,
  verifyOtp,
  resetPassword,
} from "../controller/verifyController";

const router = Router();

router.route("/send-email").post(sendEmailToUser);
router.route("/otp").post(verifyOtp);
router.route("/repassword").put(resetPassword);
export default router;
