import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import cookieParser from "cookie-parser";
import express from "express"
import TourRoutes from "./routes/tourRoute.js"
import UserRoutes from "./routes/userRoute.js"
import { connectDB } from "./db.js"
const app = express()
const allowedOrigin = process.env.FRONTEND_URI.split(",")
app.use(cors({
    origin: allowedOrigin,
    credentials: true
}))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connectDB()
app.use("/api/tours", TourRoutes)
app.use("/users", UserRoutes)
export default app