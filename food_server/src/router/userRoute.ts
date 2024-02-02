import { Router } from "express";
import { getUsers } from "../controller/user";

const router = Router();

router.route("/users").get(getUsers);

export default router;
