import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  getCategory,
  updateCategory,
} from "../controller/category";

const router = Router();

router.route("/").get(getAllCategory).post(createCategory);
router
  .route("/:categoryId")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

export default router;
