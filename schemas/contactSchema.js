import mongoose from "mongoose";

export const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    contactMethod: {
        type: String,
        enum: ["Email", "Phone", "WhatsApp"]
    },
    subject: String,
    tour: String,
    message: String,
    date: { type: Date, default: Date.now }
})