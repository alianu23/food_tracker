import { Router } from "express";
import {
  createFood,
  deleteFood,
  getAllFood,
  getFood,
  updateFood,
} from "../controller/food";
import { upload } from "../utils/multer";

const router = Router();

router.route("/").get(getAllFood).post(upload.single("image"), createFood);
router.route("/:foodId").get(getFood).put(updateFood).delete(deleteFood);

export default router;
