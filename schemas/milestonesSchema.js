import mongoose from "mongoose";

export const milestonesSchema = new mongoose.Schema([{
    year: Number,
    title: String,
    description:
        String,
}])