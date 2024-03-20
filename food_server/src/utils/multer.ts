import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    console.log("path", path.join(__dirname, "../uploads"));
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, _file, cb) => {
    cb(null, _file.originalname);
  },
});

export const upload = multer({ storage });
