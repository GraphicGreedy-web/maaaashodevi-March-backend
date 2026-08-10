import { tour } from "../models/Model.js"
import crypto from "crypto"

export const allTours = async (req, res) => {
    const tours = await tour.find({})
    const cacheTag = crypto
        .createHash("sha1")
        .update(JSON.stringify(tours))
        .digest("hex")

    res.set("X-Tours-Cache-Tag", cacheTag)
    // console.log("all tours: ", tours)
    if (tours.length === 0) return res.status(200).json({ message: "no tours", tours: [] })
    res.status(200).json({
        message: "success",
        tours
    })
}
