import mongoose from "mongoose";
import { milestonesSchema } from "../schemas/milestonesSchema.js";
export const milestone = mongoose.model("Milestone", milestonesSchema);
import { tourSchema } from "../schemas/tourSchema.js";
export const tour = mongoose.model("Tour", tourSchema);
import { userSchema } from "../schemas/userSchema.js";
export const user = mongoose.model("User", userSchema);
import {contactSchema} from "../schemas/contactSchema.js"
export const contact = mongoose.model("Contact", contactSchema);