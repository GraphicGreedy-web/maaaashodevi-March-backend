import express from "express";
import { createContact, getContactStatus } from "../controllers/userController.js";

const router = express.Router();

router.post("/", createContact);
router.get("/:id/status", getContactStatus);

export default router;
