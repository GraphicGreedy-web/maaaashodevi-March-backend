import express from "express"
const router = express.Router()
import { contact } from "../models/Model.js"
const createContact = async (req, res) => {
    console.log("body: ", req.body)
    try {
        const con = await contact.create(req.body);
        console.log("contact created: ", con.toObject())
        console.log("contact created:", con._id);

        // axios.post(process.env.GSHEET_WEBHOOK_URL, {
        //     name: con.name,
        //     email: con.email,
        //     phone: con.phone,
        //     message: con.message,
        //     subject: con.subject,
        //     tour: con.tour,
        // }).catch(err => {
        //     console.error("Sheet logging failed:", err.message);
        // });
        return res.status(201).json({ success: true });
    } catch (err) {
        console.log("backe error: ", err?.message);
        res.status(500).json({ success: false });
    }
}
router.post("/", createContact)
export default router