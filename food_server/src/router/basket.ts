import { Router } from "express";
import {
  createBasket,
  deleteBasket,
  getBasket,
  updateBasket,
} from "../controller/basket";
import { authenticate } from "../middleware/auth";

const router = Router();

router
  .route("/")
  .get(authenticate, getBasket)
  .post(authenticate, createBasket)
  .put(updateBasket)
  .delete(deleteBasket);

export default router;
