import { Router } from "express";

import { authenticate } from "../middleware/auth";
import { createOrder, updateOrder } from "../controller/order";

const router = Router();

router.route("/").post(authenticate, createOrder);
router.route("/:orderId").put(authenticate, updateOrder);

export default router;
