import multer from "multer";
import path from "path";

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public'); // Ensure the folder exists and is writable
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

// Multer file filter (optional)
const fileFilter = (req, file, cb) => {
  // Accept only certain file types (example: only images)
  if (file.mimetype.startsWith('image/')) {
    cb(null, true); // Accept file
  } else {
    cb(new Error('Unsupported file type'), false); // Reject file
  }
};

// Set up multer middleware
export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5 MB file size limit (optional)
});
