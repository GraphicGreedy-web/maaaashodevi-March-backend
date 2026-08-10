import { contact } from "./models/Model.js";
import axios from "axios";
export const syncAllContactsToSheet = async () => {
    const contacts = await contact.find({});
    console.log("all contatc: ", contacts.length)
    for (const c of contacts) {
        try {
            const response = await axios.post(process.env.GSHEET_WEBHOOK_URL,
                JSON.stringify({
                    id: c._id.toString(),
                    name: c.name,
                    email: c.email,
                    phone: c.phone,
                    contactMethod: c.contactMethod,
                    subject: c.subject,
                    tour: c.tour,
                    message: c.message
                }), 
                {
                    headers: {
                        "Content-Type": "text/plain;charset=utf-8"  // ← THIS IS KEY
                    },
                    timeout: 10000
                }
            );
            console.log("✅ Sheet saved:", c._id, response.status);
        } catch (e) {
            console.error("❌ Sheet sync failed for", c._id, e.response?.status, e.message);
        }
    }
};
