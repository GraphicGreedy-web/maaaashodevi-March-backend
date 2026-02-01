import mongoose from "mongoose";

export const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    contactMethod: "Email",
    subject: String,
    tour: String,
    message: String,
    date: { type: Date, default: Date.now }
})