import { Router } from "express";
import { login, signup } from "../controller/authController";

const router = Router();

router.route("/signup").post(signup);
router.route("/login").get(login);

export default router;
