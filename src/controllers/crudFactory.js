import { ApiResponse } from "../utils/ApiResponse.js";

export const createOne = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.create(req.body);
    res.json(new ApiResponse(200, { data: doc }, "Created successfully"));
  } catch (e) {
    next(e);
  }
};

export const getAll = (Model) => async (req, res, next) => {
  try {
    const docs = await Model.find().sort({ createdAt: -1 });
    res.json(new ApiResponse(200,  docs , "Listed successfully"));
  } catch (e) {
    next(e);
  }
};

export const getOne = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findById(req.params.id);
    if (!doc) return res.status(404).json(new ApiResponse(404, {}, "Not found"));
    res.json(new ApiResponse(200, { data: doc }, "Retrieved successfully"));
  } catch (e) {
    next(e);
  }
};

export const updateOne = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!doc) return res.status(404).json(new ApiResponse(404, {}, "Not found"));
    res.json(new ApiResponse(200, { data: doc }, "Updated successfully"));
  } catch (e) {
    next(e);
  }
};

export const deleteOne = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json(new ApiResponse(404, {}, "Not found"));
    res.json(new ApiResponse(200, { message: "Deleted" }, "Deleted successfully"));
  } catch (e) {
    next(e);
  }
};

export default {
  createOne,
  getAll,
  getOne,
  updateOne,
  deleteOne
};
