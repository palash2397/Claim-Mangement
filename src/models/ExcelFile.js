import mongoose from "mongoose";

const ExcelFileSchema = new mongoose.Schema(
  {
    sheetName: String,
    sheetType: String,
    fileUrl: String,
    records: Number,
    lastUpdated: String,
  },
  { timestamps: true }
);

export default mongoose.model("ExcelFile", ExcelFileSchema);
