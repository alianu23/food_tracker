import { Router } from "express";
import {
  createFood,
  deleteFood,
  getAllFood,
  getFood,
  updateFood,
} from "../controller/food";
import { upload } from "../utils/multer";
import { authenticate, authorize } from "../middleware/auth";

const router = Router();

router
  .route("/")
  .get(getAllFood)
  .post(
    authenticate,
    authorize("superAdmin", "Admin"),
    upload.single("image"),
    createFood
  );
router
  .route("/:foodId")
  .get(getFood)
  .put(authenticate, authorize("superAdmin", "Admin"), updateFood)
  .delete(authenticate, authorize("superAdmin"), deleteFood);

export default router;
