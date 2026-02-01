import express from "express"
const router = express.Router()
import { contact } from "../models/Model.js"
import axios from "axios"
const createContact = async () => {
    console.log("body: ", body)
    try {
        const con = await contact.create(req.body);
        axios.post(process.env.GSHEET_WEBHOOK_URL, {
            name: con.name,
            email: con.email,
            phone: con.phone,
            message: con.message,
        }).catch(() => { });

        res.status(201).json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false });
    }
}
router.post("/", createContact)
export default router