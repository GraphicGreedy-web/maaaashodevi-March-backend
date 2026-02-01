import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import cookieParser from "cookie-parser";
import express from "express"
import TourRoutes from "./routes/tourRoute.js"
import {syncAllContactsToSheet} from "./cron.js"
import UserRoutes from "./routes/userRoute.js"
import { connectDB } from "./db.js"
import cron from "node-cron";
const app = express()
const allowedOrigin = process.env.FRONTEND_URI.split(",").map(o => o.trim())
console.log("back: ", allowedOrigin)
app.use(cors({
    origin: allowedOrigin,
    credentials: true
}))
app.set("trust proxy", 1);
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectDB()
// cron.schedule("*/10 * * * * *", syncAllContactsToSheet);
app.use("/api/tours", TourRoutes)
app.use("/api/contacts", UserRoutes)
app.use((err, req, res, next) => {
    const { message = "Not found", status = 500 } = err
    res.status(status).json({ message })
})
app.use((req, res) => {
    res.status(404).json({ message: "Not Found" })
})

export default app