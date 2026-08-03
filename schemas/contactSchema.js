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
    emailStatus: {
        type: String,
        enum: ["queued", "sending", "sent", "retrying", "failed"],
        default: "queued",
    },
    emailAttempts: {
        type: Number,
        default: 0,
    },
    emailLastError: {
        type: String,
        default: "",
        trim: true,
    },
    emailLastAttemptAt: {
        type: Date,
        default: null,
    },
    emailNextRetryAt: {
        type: Date,
        default: Date.now,
    },
    emailSentAt: {
        type: Date,
        default: null,
    },
    date: { type: Date, default: Date.now }
})
