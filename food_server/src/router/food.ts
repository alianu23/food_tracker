import { Router } from "express";
import {
  createFood,
  deleteFood,
  getAllFood,
  getFood,
  updateFood,
} from "../controller/food";

const router = Router();

router.route("/").get(getAllFood).post(createFood);
router.route("/:foodId").get(getFood).put(updateFood).delete(deleteFood);

export default router;
