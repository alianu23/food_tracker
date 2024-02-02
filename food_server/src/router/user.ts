import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controller/user";

const router = Router();

router.route("/users").get(getAllUsers);
router.route("/user/:userId").get(getUser).put(updateUser).delete(deleteUser);

export default router;
