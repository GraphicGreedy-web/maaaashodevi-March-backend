import { contact } from "../models/Model.js";
import { sendContactEmails } from "../utils/mailer.js";

const RETRY_DELAYS_MS = [0, 30_000, 2 * 60_000];
const MAX_ATTEMPTS = RETRY_DELAYS_MS.length;
const POLL_INTERVAL_MS = 15_000;

let workerStarted = false;
let pollTimer = null;
let processingDueJobs = false;

const getRetryDelay = (attempts) => {
  const retryIndex = Math.max(0, attempts - 1);
  return RETRY_DELAYS_MS[Math.min(retryIndex, RETRY_DELAYS_MS.length - 1)];
};

const scheduleSingleRun = (contactId, delayMs = 0) => {
  setTimeout(() => {
    processContactEmail(contactId).catch((error) => {
      console.error("[contact-email-queue] single run failed:", error.message);
    });
  }, Math.max(0, delayMs));
};

export const enqueueContactEmail = async (contactId) => {
  const now = new Date();
  await contact.findByIdAndUpdate(contactId, {
    $set: {
      emailStatus: "queued",
      emailLastError: "",
      emailNextRetryAt: now,
    },
  });

  scheduleSingleRun(contactId, 0);
};

export const processContactEmail = async (contactId) => {
  const now = new Date();
  const lockedContact = await contact.findOneAndUpdate(
    {
      _id: contactId,
      emailStatus: { $in: ["queued", "retrying"] },
      emailAttempts: { $lt: MAX_ATTEMPTS },
      $or: [
        { emailNextRetryAt: null },
        { emailNextRetryAt: { $lte: now } },
      ],
    },
    {
      $set: {
        emailStatus: "sending",
        emailLastAttemptAt: now,
      },
      $inc: {
        emailAttempts: 1,
      },
    },
    {
      new: true,
    },
  );

  if (!lockedContact) {
    return null;
  }

  try {
    await sendContactEmails(lockedContact.toObject());

    await contact.findByIdAndUpdate(lockedContact._id, {
      $set: {
        emailStatus: "sent",
        emailLastError: "",
        emailNextRetryAt: null,
        emailSentAt: new Date(),
      },
    });

    console.log("[contact-email-queue] email sent:", lockedContact._id.toString());
    return "sent";
  } catch (error) {
    const attempts = lockedContact.emailAttempts;
    const hasAttemptsLeft = attempts < MAX_ATTEMPTS;
    const nextRetryAt = hasAttemptsLeft
      ? new Date(Date.now() + getRetryDelay(attempts))
      : null;
    const nextStatus = hasAttemptsLeft ? "retrying" : "failed";

    await contact.findByIdAndUpdate(lockedContact._id, {
      $set: {
        emailStatus: nextStatus,
        emailLastError: error.message,
        emailNextRetryAt: nextRetryAt,
      },
    });

    console.error(
      "[contact-email-queue] email attempt failed:",
      lockedContact._id.toString(),
      error.message,
    );

    if (hasAttemptsLeft) {
      scheduleSingleRun(lockedContact._id.toString(), getRetryDelay(attempts));
    }

    return nextStatus;
  }
};

export const processDueContactEmails = async () => {
  if (processingDueJobs) {
    return;
  }

  processingDueJobs = true;

  try {
    const now = new Date();
    const dueContacts = await contact
      .find({
        emailStatus: { $in: ["queued", "retrying"] },
        emailAttempts: { $lt: MAX_ATTEMPTS },
        $or: [
          { emailNextRetryAt: null },
          { emailNextRetryAt: { $lte: now } },
        ],
      })
      .sort({ emailNextRetryAt: 1, date: 1 })
      .limit(10)
      .select("_id");

    for (const dueContact of dueContacts) {
      await processContactEmail(dueContact._id);
    }
  } finally {
    processingDueJobs = false;
  }
};

export const startContactEmailQueueWorker = () => {
  if (workerStarted) {
    return;
  }

  workerStarted = true;
  pollTimer = setInterval(() => {
    processDueContactEmails().catch((error) => {
      console.error("[contact-email-queue] poll failed:", error.message);
    });
  }, POLL_INTERVAL_MS);

  if (typeof pollTimer?.unref === "function") {
    pollTimer.unref();
  }

  processDueContactEmails().catch((error) => {
    console.error("[contact-email-queue] initial run failed:", error.message);
  });
};

export const getContactEmailStatus = async (contactId) => {
  return contact
    .findById(contactId)
    .select("_id emailStatus emailAttempts emailLastError emailLastAttemptAt emailNextRetryAt emailSentAt");
};
