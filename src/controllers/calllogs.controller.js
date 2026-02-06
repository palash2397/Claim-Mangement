import CallLog from "../models/CallLog.js";
import crud from "./crudFactory.js";

export const create = crud.createOne(CallLog);
export const list = crud.getAll(CallLog);
export const get = crud.getOne(CallLog);
export const update = crud.updateOne(CallLog);
export const remove = crud.deleteOne(CallLog);

export default {
  create,
  list,
  get,
  update,
  remove
};
