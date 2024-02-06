import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategory,
  updateCategory,
} from "../controller/category";
import { upload } from "../utils/multer";

const router = Router();

router
  .route("/")
  .get(getAllCategory)
  .post(upload.single("image"), createCategory);
router
  .route("/:categoryId")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

export default router;
