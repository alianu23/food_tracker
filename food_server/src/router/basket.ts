import { Router } from "express";
import {
  createBasket,
  deleteBasket,
  deleteBasketFood,
  getBasket,
} from "../controller/basket";
import { authenticate } from "../middleware/auth";

const router = Router();

router.route("/").get(authenticate, getBasket).post(authenticate, createBasket);

router.route("/:foodId").delete(authenticate, deleteBasketFood);
router.route("/:basketId").delete(deleteBasket);

export default router;
