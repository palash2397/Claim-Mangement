import multer from "multer";
import path from "path";
import fs from "fs";

const dir = process.env.UPLOAD_DIR || "uploads";
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, dir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const safeName = file.originalname.replace(/\s+/g, "_").replace(ext, "");
    cb(null, `${Date.now()}_${safeName}${ext}`);
  },
});

const upload = multer({ storage });

export default upload;
