import nodemailer from "nodemailer";

const getTransporter = () => {
  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP_USER and SMTP_PASS must be configured.");
  }

  return nodemailer.createTransport({
    host: SMTP_HOST || "smtp.gmail.com",
    port: Number(SMTP_PORT || 465),
    secure: SMTP_SECURE !== "false",
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });
};

const contactDetails = ({ name, email, phone, tour, message }) => `
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>
  <p><strong>Tour:</strong> ${tour || "Not selected"}</p>
  <p><strong>Message:</strong><br>${message}</p>
`;

export const sendContactEmails = async (contact) => {
  const transporter = getTransporter();
  const from = process.env.SMTP_FROM || process.env.SMTP_USER;
  const owner = process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER;
  const details = contactDetails(contact);

  const [ownerEmail, customerEmail] = await Promise.all([
    transporter.sendMail({
      from,
      to: owner,
      replyTo: contact.email,
      subject: "New contact form submission",
      html: `<h2>New Contact Form Submission</h2>${details}`,
    }),
    transporter.sendMail({
      from,
      to: contact.email,
      subject: "We received your contact request",
      html: `<h2>We received your message</h2><p>Thank you for contacting Maa Asho Devi Dharam Yatra.</p>${details}<p>Our team will get back to you soon.</p>`,
    }),
  ]);

  return {
    ownerMessageId: ownerEmail.messageId,
    customerMessageId: customerEmail.messageId,
  };
};
