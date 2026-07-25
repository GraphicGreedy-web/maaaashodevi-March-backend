import { contact } from "../models/Model.js";
import { sendContactEmails } from "../utils/mailer.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\-\s()]{7,20}$/;
const CONTACT_METHODS = new Set(["Email", "Phone", "WhatsApp"]);

const normalizeContactPayload = (body = {}) => {
  const payload = {
    name: body.name?.trim() ?? "",
    email: body.email?.trim().toLowerCase() ?? "",
    phone: body.phone?.trim() ?? "",
    contactMethod: body.contactMethod?.trim() ?? "Email",
    subject: body.subject?.trim() ?? "",
    tour: body.tour?.trim() ?? "",
    message: body.message?.trim() ?? "",
  };

  return payload;
};

const validateContactPayload = (payload) => {
  if (!payload.name || payload.name.length < 2) {
    return "Please enter a valid name.";
  }

  if (!EMAIL_REGEX.test(payload.email)) {
    return "Please enter a valid email address.";
  }

  if (!payload.phone || !PHONE_REGEX.test(payload.phone)) {
    return "Please enter a valid phone number.";
  }

  if (!CONTACT_METHODS.has(payload.contactMethod)) {
    return "Please select a valid contact method.";
  }

  if (!payload.subject || payload.subject.length < 3) {
    return "Please enter a valid subject.";
  }

  if (payload.tour && payload.tour.length > 120) {
    return "Selected tour is too long.";
  }

  if (!payload.message || payload.message.length < 10) {
    return "Please enter a message with at least 10 characters.";
  }

  return null;
};

export const createContact = async (req, res) => {
  console.log("[contact] createContact called");
  const payload = normalizeContactPayload(req.body);
  console.log("[contact] normalized payload:", {
    ...payload,
    messageLength: payload.message.length,
  });
  const validationError = validateContactPayload(payload);

  if (validationError) {
    console.log("[contact] validation failed:", validationError);
    return res.status(400).json({
      success: false,
      message: validationError,
    });
  }

  try {
    console.log("[contact] saving to MongoDB");
    const savedContact = await contact.create(payload);
    console.log("[contact] MongoDB save success:", savedContact._id?.toString());

    try {
      console.log("[contact] starting email send");
      await sendContactEmails(savedContact.toObject());
      console.log("[contact] email send success");
    } catch (mailError) {
      console.error("[contact] email failed:", mailError.message);
      console.error("[contact] email error stack:", mailError.stack);

      return res.status(502).json({
        success: false,
        message: "Contact form was saved, but the confirmation email could not be sent.",
      });
    }

    console.log("[contact] returning success response");
    return res.status(201).json({
      success: true,
      message: "Contact form submitted successfully.",
    });
  } catch (error) {
    console.error("[contact] contact save failed:", error.message);
    return res.status(500).json({
      success: false,
      message: "Unable to submit the contact form right now.",
    });
  }
};
