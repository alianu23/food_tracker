import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controller/user";
import { authenticate } from "../middleware/auth";

const router = Router();

router.route("/users").get(getAllUsers);
router
  .route("/user/")
  .get(authenticate, getUser)
  .put(authenticate, updateUser)
  .delete(authenticate, deleteUser);

export default router;
