import express from "express";
import { getVisitStats, trackVisit } from "../controllers/visitController.js";

const router = express.Router();

router.post("/track", trackVisit);
router.get("/stats", getVisitStats);

export default router;
