import Event from "../models/Event.js";
import crud from "./crudFactory.js";

export const create = crud.createOne(Event);
export const list = crud.getAll(Event);
export const get = crud.getOne(Event);
export const update = crud.updateOne(Event);
export const remove = crud.deleteOne(Event);

export default {
  create,
  list,
  get,
  update,
  remove
};
