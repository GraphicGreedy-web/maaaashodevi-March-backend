import mongoose from "mongoose";

export const tourSchema = new mongoose.Schema([{
    order: Number,
    title: String,
    image: String,
    startDate: String,
    endDate: String,
    duration: String,
    price: Number,
    locations: [String],
    region: String,
    state: String,
    groupSize: Number,
    availableSeats: Number,
    featured: { type: Boolean, default: false },
    popular: { type: Boolean, default: false },
    description:
        String,
}])