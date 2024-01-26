import { Router } from "express";
import { getUsers } from "../controller/userController";

const router = Router();

router.route("/users").get(getUsers);

export default router;
