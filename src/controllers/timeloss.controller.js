import TimeLoss from "../models/TimeLoss.js";
import crud from "./crudFactory.js";

export const create = crud.createOne(TimeLoss);
export const list = crud.getAll(TimeLoss);
export const get = crud.getOne(TimeLoss);
export const update = crud.updateOne(TimeLoss);
export const remove = crud.deleteOne(TimeLoss);

export default {
  create,
  list,
  get,
  update,
  remove
};
