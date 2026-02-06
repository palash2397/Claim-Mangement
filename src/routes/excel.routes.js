import { Router } from "express";
import auth from "../middleware/auth.js";
import upload from "../middleware/upload.js";
import ctrl from "../controllers/excel.controller.js";

const router = Router();

router.use(auth);

router.post("/upload", upload.single("file"), ctrl.uploadExcel);
router.get("/", ctrl.list);
router.delete("/:id", ctrl.remove);

export default router;
