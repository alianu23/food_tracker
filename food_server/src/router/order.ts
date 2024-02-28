import { Router } from "express";

import { authenticate } from "../middleware/auth";
import { createOrder } from "../controller/order";

const router = Router();

router.route("/").post(authenticate, createOrder);

export default router;
