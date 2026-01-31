import express from "express"
const router = express.Router()
import { allTours } from "../controllers/tourController.js"
router.get("/", allTours)
export default router