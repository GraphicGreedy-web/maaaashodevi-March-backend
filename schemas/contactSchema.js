import mongoose from "mongoose";

export const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
    },
    contactMethod: {
        type: String,
        enum: ["Email", "Phone", "WhatsApp"],
        default: "Email",
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },
    tour: {
        type: String,
        default: "",
        trim: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
    date: { type: Date, default: Date.now }
})
