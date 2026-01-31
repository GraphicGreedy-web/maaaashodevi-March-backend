import { tour } from "../models/Model.js"

export const allTours = async (req,res) => {
    const tours = await tour.find({})
    // console.log("all tours: ", tours)
    res.status(200).json({
        message: "success",
        tours
    })
}