import mongoose from "mongoose";

export const visitSchema = new mongoose.Schema(
  {
    visitorId: {
      type: String,
      trim: true,
      required: true,
      index: true,
    },
    path: {
      type: String,
      trim: true,
      required: true,
      index: true,
    },
    url: {
      type: String,
      trim: true,
      default: "",
    },
    referrer: {
      type: String,
      trim: true,
      default: "",
    },
    ipAddress: {
      type: String,
      trim: true,
      default: "",
      index: true,
    },
    userAgent: {
      type: String,
      trim: true,
      default: "",
    },
    browser: {
      type: String,
      trim: true,
      default: "Unknown",
    },
    os: {
      type: String,
      trim: true,
      default: "Unknown",
    },
    deviceType: {
      type: String,
      trim: true,
      enum: ["desktop", "mobile", "tablet", "bot", "unknown"],
      default: "unknown",
    },
    language: {
      type: String,
      trim: true,
      default: "",
    },
    screen: {
      type: String,
      trim: true,
      default: "",
    },
    timezone: {
      type: String,
      trim: true,
      default: "",
    },
    visitedAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  {
    versionKey: false,
  },
);
