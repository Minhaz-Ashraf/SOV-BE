import cloudinary from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    // Upload the file to Cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: 'auto',
    });
    
    // Remove the local file after successful upload
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    // Log the error for debugging
    console.error('Cloudinary upload failed', error);

    // Ensure the local file is deleted even if upload fails
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }
    return null;
  }
};
