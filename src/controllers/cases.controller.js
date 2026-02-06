import Case from "../models/Case.js";
import crud from "./crudFactory.js";

export const create = crud.createOne(Case);
export const list = crud.getAll(Case);
export const get = crud.getOne(Case);
export const update = crud.updateOne(Case);
export const remove = crud.deleteOne(Case);

export default {
  create,
  list,
  get,
  update,
  remove
};
