import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    name: String,
    position: String,
    image: String,
    bio: String,
})