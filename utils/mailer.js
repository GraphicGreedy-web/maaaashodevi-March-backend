import nodemailer from "nodemailer";

let cachedTransporter = null;

const resolveEnvValue = (value, fallback) => {
    if (!value) return fallback;

    const normalizedValue = String(value).trim();
    if (!normalizedValue) return fallback;
    if (normalizedValue === "your_email@example.com") return fallback;
    if (normalizedValue === "your_app_password") return fallback;

    return normalizedValue;
};

const createTransporter = () => {
    const SMTP_HOST = resolveEnvValue(process.env.SMTP_HOST, "smtp.gmail.com");
    const SMTP_PORT = resolveEnvValue(process.env.SMTP_PORT, "465");
    const SMTP_USER = resolveEnvValue(process.env.SMTP_USER, "");
    const SMTP_PASS = resolveEnvValue(process.env.SMTP_PASS, "");
    const SMTP_SECURE = resolveEnvValue(process.env.SMTP_SECURE, "true");

    console.log("[mailer] createTransporter called");
    console.log("[mailer] SMTP_HOST:", SMTP_HOST);
    console.log("[mailer] SMTP_PORT:", SMTP_PORT);
    console.log("[mailer] SMTP_SECURE:", SMTP_SECURE);
    console.log("[mailer] SMTP_USER:", SMTP_USER);
    console.log("[mailer] SMTP_PASS length:", SMTP_PASS ? SMTP_PASS.length : 0);

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
        console.log("[mailer] transporter config missing");
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
        connectionTimeout: 15000,
        greetingTimeout: 15000,
        socketTimeout: 20000,
    });
};

const getTransporter = () => {
    if (cachedTransporter) {
        return cachedTransporter;
    }

    cachedTransporter = createTransporter();
    console.log("[mailer] transporter ready");
    return cachedTransporter;
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

export const sendContactEmails = async(contactData) => {
    console.log("[mailer] sendContactEmails start");
    const transporter = getTransporter();

    if (!transporter) {
        throw new Error(
            "SMTP configuration is missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.",
        );
    }

    const ownerEmail =
        resolveEnvValue(process.env.CONTACT_RECEIVER_EMAIL, "") ||
        resolveEnvValue(process.env.SMTP_USER, "");
    const fromEmail =
        resolveEnvValue(process.env.SMTP_FROM, "") ||
        resolveEnvValue(process.env.SMTP_USER, "");
    console.log("[mailer] ownerEmail:", ownerEmail);
    console.log("[mailer] fromEmail:", fromEmail);
    console.log("[mailer] customerEmail:", contactData.email);

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

    console.log("[mailer] sending owner and customer emails");
    const [ownerResult, customerResult] = await Promise.all([
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

    console.log("[mailer] owner email sent:", ownerResult.messageId);
    console.log("[mailer] customer email sent:", customerResult.messageId);
    console.log("[mailer] sendContactEmails completed");

    return {
        ownerMessageId: ownerResult.messageId,
        customerMessageId: customerResult.messageId,
    };
};

export const queueContactEmails = (contactData) => {
    setTimeout(() => {
        sendContactEmails(contactData).catch((error) => {
            console.error("[mailer] queued email failed:", error.message);
            console.error("[mailer] queued email stack:", error.stack);
        });
    }, 0);
};
