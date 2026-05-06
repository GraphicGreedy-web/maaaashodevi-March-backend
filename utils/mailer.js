import nodemailer from "nodemailer";

const createTransporter = () => {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_SECURE,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
};

const formatHtml = (contactData) => `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${contactData.name}</p>
    <p><strong>Email:</strong> ${contactData.email}</p>
    <p><strong>Phone:</strong> ${contactData.phone}</p>
    <p><strong>Preferred Contact:</strong> ${contactData.contactMethod}</p>
    <p><strong>Subject:</strong> ${contactData.subject}</p>
    <p><strong>Tour:</strong> ${contactData.tour || "Not selected"}</p>
    <p><strong>Message:</strong><br />${contactData.message}</p>
  </div>
`;

export const sendContactEmails = async (contactData) => {
  const transporter = createTransporter();

  if (!transporter) {
    throw new Error(
      "SMTP configuration is missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.",
    );
  }

  const ownerEmail =
    process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER;
  const fromEmail = process.env.SMTP_FROM || process.env.SMTP_USER;
  const ownerHtml = formatHtml(contactData);
  const customerHtml = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #222;">
      <h2>We received your message</h2>
      <p>Thank you for contacting Maa Asho Devi Dharam Yatra.</p>
      <p>Here is a copy of the details you submitted:</p>
      ${ownerHtml}
      <p>Our team will get back to you soon.</p>
    </div>
  `;

  await Promise.all([
    transporter.sendMail({
      from: fromEmail,
      to: ownerEmail,
      replyTo: contactData.email,
      subject: `New contact form: ${contactData.subject}`,
      html: ownerHtml,
    }),
    transporter.sendMail({
      from: fromEmail,
      to: contactData.email,
      subject: "We received your contact request",
      html: customerHtml,
    }),
  ]);
};
