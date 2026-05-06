import { visit } from "../models/Model.js";

const getIpAddress = (req) => {
  const forwardedFor = req.headers["x-forwarded-for"];

  if (typeof forwardedFor === "string" && forwardedFor.trim()) {
    return forwardedFor.split(",")[0].trim();
  }

  return (
    req.headers["x-real-ip"] ||
    req.socket?.remoteAddress ||
    req.ip ||
    ""
  );
};

const detectDeviceType = (userAgent) => {
  if (!userAgent) return "unknown";
  if (/bot|crawler|spider|crawling/i.test(userAgent)) return "bot";
  if (/tablet|ipad/i.test(userAgent)) return "tablet";
  if (/mobile|android|iphone|ipod/i.test(userAgent)) return "mobile";
  if (/windows|macintosh|linux/i.test(userAgent)) return "desktop";

  return "unknown";
};

const detectBrowser = (userAgent) => {
  if (!userAgent) return "Unknown";
  if (/edg/i.test(userAgent)) return "Edge";
  if (/opr|opera/i.test(userAgent)) return "Opera";
  if (/chrome|crios/i.test(userAgent) && !/edg/i.test(userAgent)) {
    return "Chrome";
  }
  if (/firefox|fxios/i.test(userAgent)) return "Firefox";
  if (/safari/i.test(userAgent) && !/chrome|crios|edg/i.test(userAgent)) {
    return "Safari";
  }

  return "Unknown";
};

const detectOs = (userAgent) => {
  if (!userAgent) return "Unknown";
  if (/windows/i.test(userAgent)) return "Windows";
  if (/android/i.test(userAgent)) return "Android";
  if (/iphone|ipad|ipod/i.test(userAgent)) return "iOS";
  if (/mac os|macintosh/i.test(userAgent)) return "macOS";
  if (/linux/i.test(userAgent)) return "Linux";

  return "Unknown";
};

export const trackVisit = async (req, res, next) => {
  try {
    const userAgent = req.headers["user-agent"] || "";
    const {
      visitorId,
      path,
      url = "",
      referrer = "",
      language = "",
      screen = "",
      timezone = "",
    } = req.body || {};

    if (!visitorId || !path) {
      return res.status(400).json({
        success: false,
        message: "visitorId and path are required.",
      });
    }

    await visit.create({
      visitorId: String(visitorId).trim(),
      path: String(path).trim(),
      url: String(url).trim(),
      referrer: String(referrer).trim(),
      ipAddress: getIpAddress(req),
      userAgent,
      browser: detectBrowser(userAgent),
      os: detectOs(userAgent),
      deviceType: detectDeviceType(userAgent),
      language: String(language).trim(),
      screen: String(screen).trim(),
      timezone: String(timezone).trim(),
    });

    return res.status(201).json({
      success: true,
      message: "Visit tracked successfully.",
    });
  } catch (error) {
    return next(error);
  }
};

export const getVisitStats = async (req, res, next) => {
  try {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const [totalVisits, uniqueVisitorIds, visitsToday, topPages, recentVisits] =
      await Promise.all([
        visit.countDocuments(),
        visit.distinct("visitorId"),
        visit.countDocuments({ visitedAt: { $gte: startOfToday } }),
        visit.aggregate([
          { $group: { _id: "$path", visits: { $sum: 1 } } },
          { $sort: { visits: -1 } },
          { $limit: 10 },
          { $project: { _id: 0, path: "$_id", visits: 1 } },
        ]),
        visit
          .find({})
          .sort({ visitedAt: -1 })
          .limit(20)
          .select("visitorId path browser os deviceType visitedAt referrer")
          .lean(),
      ]);

    return res.status(200).json({
      success: true,
      stats: {
        totalVisits,
        uniqueVisitors: uniqueVisitorIds.length,
        visitsToday,
        topPages,
        recentVisits,
      },
    });
  } catch (error) {
    return next(error);
  }
};
