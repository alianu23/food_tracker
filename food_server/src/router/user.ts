import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controller/user";
import { authenticate } from "../middleware/auth";
import { upload } from "../utils/multer";

const router = Router();

router.route("/users").get(getAllUsers);
router
  .route("/user/")
  .post(authenticate, getUser)
  .put(authenticate, upload.single("avatarurl"), updateUser)
  .delete(authenticate, deleteUser);

export default router;
