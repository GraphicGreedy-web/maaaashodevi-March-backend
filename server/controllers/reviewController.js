import { review } from "../models/Model.js";

const normalizeReviewPayload = (body = {}) => ({
  name: body.name?.trim() ?? "",
  location: body.location?.trim() ?? "",
  quote: body.quote?.trim() ?? "",
  rating: Number(body.rating),
});

const validateReviewPayload = (payload) => {
  if (!payload.name || payload.name.length < 2) {
    return "Please enter a valid name.";
  }

  if (!payload.location || payload.location.length < 2) {
    return "Please enter a valid location.";
  }

  if (!payload.quote || payload.quote.length < 10) {
    return "Please enter a remark with at least 10 characters.";
  }

  if (!Number.isInteger(payload.rating) || payload.rating < 1 || payload.rating > 5) {
    return "Please select a star rating between 1 and 5.";
  }

  return null;
};

export const getReviews = async (req, res) => {
  const reviews = await review.find({}).sort({ createdAt: -1 }).limit(12).lean();

  return res.status(200).json({
    success: true,
    reviews,
  });
};

export const createReview = async (req, res) => {
  const payload = normalizeReviewPayload(req.body);
  const validationError = validateReviewPayload(payload);

  if (validationError) {
    return res.status(400).json({
      success: false,
      message: validationError,
    });
  }

  try {
    const savedReview = await review.create(payload);

    return res.status(201).json({
      success: true,
      message: "Thank you for your rating.",
      review: savedReview,
    });
  } catch (error) {
    console.error("review save failed:", error.message);
    return res.status(500).json({
      success: false,
      message: "Unable to save your rating right now.",
    });
  }
};
