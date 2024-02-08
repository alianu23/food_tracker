import { Router } from "express";
import { login, signup } from "../controller/auth";
import { authenticate, authorize } from "../middleware/auth";

const router = Router();

router.route("/signup").post(signup);
router.route("/login").post(login);

export default router;
