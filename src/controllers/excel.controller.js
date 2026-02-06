import ExcelFile from "../models/ExcelFile.js";

export const uploadExcel = async (req, res, next) => {
  try {
    const { sheetName, sheetType } = req.body;

    if (!req.file) {
      return res.status(400).json({ ok: false, message: "Excel file required" });
    }

    const doc = await ExcelFile.create({
      sheetName,
      sheetType,
      fileUrl: `/uploads/${req.file.filename}`,
      records: 0,
      lastUpdated: new Date().toISOString().slice(0, 10),
    });

    return res.json({ ok: true, data: doc });
  } catch (e) {
    next(e);
  }
};

export const list = async (req, res, next) => {
  try {
    const docs = await ExcelFile.find().sort({ createdAt: -1 });
    res.json({ ok: true, data: docs });
  } catch (e) {
    next(e);
  }
};

export const remove = async (req, res, next) => {
  try {
    const doc = await ExcelFile.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ ok: false, message: "Not found" });
    res.json({ ok: true, message: "Deleted" });
  } catch (e) {
    next(e);
  }
};

export default {
  uploadExcel,
  list,
  remove
};
