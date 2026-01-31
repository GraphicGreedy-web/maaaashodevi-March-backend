import { tour } from "../models/Model.js"

export const allTours = async (req, res) => {
    const tours = await tour.find({})
    // console.log("all tours: ", tours)
    if (tours.length === 0) return res.status(200).json({ message: "no tours", tours: [] })
    res.status(200).json({
        message: "success",
        tours
    })
}