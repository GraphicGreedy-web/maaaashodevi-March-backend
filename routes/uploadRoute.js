import express from "express";
import multer from "multer";
import { uploadImage } from "../controllers/uploadController.js";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
});

router.post("/image", upload.single("image"), uploadImage);

export default router;
