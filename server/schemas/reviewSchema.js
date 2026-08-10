import mongoose from "mongoose";

export const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 80,
    },
    location: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 80,
    },
    quote: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      maxlength: 800,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
