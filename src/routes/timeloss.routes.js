import { Router } from "express";
import auth from "../middleware/auth.js";
import ctrl from "../controllers/timeloss.controller.js";

const router = Router();

router.use(auth);

router.post("/", ctrl.create);
router.get("/", ctrl.list);
router.get("/:id", ctrl.get);
router.put("/:id", ctrl.update);
router.delete("/:id", ctrl.remove);

export default router;
