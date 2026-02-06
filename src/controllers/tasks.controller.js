import Task from "../models/Task.js";
import crud from "./crudFactory.js";

export const create = crud.createOne(Task);
export const list = crud.getAll(Task);
export const get = crud.getOne(Task);
export const update = crud.updateOne(Task);
export const remove = crud.deleteOne(Task);

export default {
  create,
  list,
  get,
  update,
  remove
};
