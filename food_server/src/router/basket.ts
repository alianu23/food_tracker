import { Router } from "express";
import {
  createBasket,
  deleteBasket,
  getAllBasket,
  getBasket,
} from "../controller/basket";

const router = Router();

router.route("/").get(getAllBasket).post(createBasket);
router.route("/:basketId").get(getBasket).delete(deleteBasket);

export default router;
