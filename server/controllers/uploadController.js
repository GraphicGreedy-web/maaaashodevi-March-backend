import cloudinary from "../middlewares/cloudinary.js";

const uploadBufferToCloudinary = (buffer, folder = "tour-booking") =>
  new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          reject(error);
          return;
        }

        resolve(result);
      },
    );

    stream.end(buffer);
  });

export const uploadImage = async (req, res) => {
  if (!req.file?.buffer) {
    return res.status(400).json({
      success: false,
      message: "Please upload an image file.",
    });
  }

  const hasCloudinaryConfig =
    (process.env.CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_NAME) &&
    process.env.CLOUDINARY_API_KEY &&
    process.env.CLOUDINARY_API_SECRET;

  if (!hasCloudinaryConfig) {
    return res.status(500).json({
      success: false,
      message: "Cloudinary environment variables are missing.",
    });
  }

  const folder = req.body?.folder?.trim() || "tour-booking";
  const uploadedImage = await uploadBufferToCloudinary(req.file.buffer, folder);

  return res.status(201).json({
    success: true,
    message: "Image uploaded successfully.",
    image: {
      url: uploadedImage.secure_url,
      publicId: uploadedImage.public_id,
      width: uploadedImage.width,
      height: uploadedImage.height,
      format: uploadedImage.format,
      bytes: uploadedImage.bytes,
      originalName: req.file.originalname,
    },
  });
};
