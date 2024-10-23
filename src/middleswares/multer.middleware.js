import multer from "multer";
import path from "path";
const tempDir = path.resolve("public");


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log("Storing file in:", tempDir);
    cb(null, tempDir)
  },
  filename: function (req, file, cb) {

    cb(null, file.originalname)
  }
})

export const upload = multer({
  storage,
})