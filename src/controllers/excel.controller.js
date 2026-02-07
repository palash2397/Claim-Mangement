import ExcelFile from "../models/ExcelFile.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const uploadExcel = async (req, res, next) => {
  try {
    const { sheetName, sheetType } = req.body;

    if (!req.file) {
      return res.status(400).json(new ApiResponse(400, {}, "Excel file required"));
    }

    const doc = await ExcelFile.create({
      sheetName,
      sheetType,
      fileUrl: `/uploads/${req.file.filename}`,
      records: 0,
      lastUpdated: new Date().toISOString().slice(0, 10),
    });

    return res.json(new ApiResponse(200, { data: doc }, "Excel file uploaded successfully"));
  } catch (e) {
    next(e);
  }
};

export const list = async (req, res, next) => {
  try {
    const docs = await ExcelFile.find().sort({ createdAt: -1 });
    res.json(new ApiResponse(200, { data: docs }, "Excel files listed successfully"));
  } catch (e) {
    next(e);
  }
};

export const remove = async (req, res, next) => {
  try {
    const doc = await ExcelFile.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json(new ApiResponse(404, {}, "Not found"));
    res.json(new ApiResponse(200, { message: "Deleted" }, "Excel file deleted successfully"));
  } catch (e) {
    next(e);
  }
};

export default {
  uploadExcel,
  list,
  remove
};
