import { Router } from "express";
import multer from "multer";
import { uploadFile } from "../controller/upload";

const router = Router();
const upload = multer({ dest: "./uploads" });

router.route("/").post(upload.single("image"), uploadFile);

export default router;
