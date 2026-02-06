import FeeList from "../models/FeeList.js";
import crud from "./crudFactory.js";

export const create = crud.createOne(FeeList);
export const list = crud.getAll(FeeList);
export const get = crud.getOne(FeeList);
export const update = crud.updateOne(FeeList);
export const remove = crud.deleteOne(FeeList);

export default {
  create,
  list,
  get,
  update,
  remove
};
