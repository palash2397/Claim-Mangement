import Contact from "../models/Contact.js";
import crud from "./crudFactory.js";

export const create = crud.createOne(Contact);
export const list = crud.getAll(Contact);
export const get = crud.getOne(Contact);
export const update = crud.updateOne(Contact);
export const remove = crud.deleteOne(Contact);

export default {
  create,
  list,
  get,
  update,
  remove
};
