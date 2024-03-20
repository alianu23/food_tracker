import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategory,
  updateCategory,
} from "../controller/category";

import { authenticate, authorize } from "../middleware/auth";
import { upload } from "../utils/multer";

const router = Router();

router
  .route("/")
  .get(getAllCategory)
  .post(
    authenticate,
    authorize("superAdmin", "Admin"),
    upload.single("image"),
    createCategory
  );
router
  .route("/:categoryId")
  .get(getCategory)
  .put(authenticate, authorize("superAdmin", "Admin"), updateCategory)
  .delete(authenticate, authorize("superAdmin", "Admin"), deleteCategory);

export default router;
