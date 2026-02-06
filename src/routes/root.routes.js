import { Router } from "express";
import authRoutes from "./auth.routes.js";
import contactsRoutes from "./contacts.routes.js";
import casesRoutes from "./cases.routes.js";
import eventsRoutes from "./events.routes.js";
import tasksRoutes from "./tasks.routes.js";
import callLogsRoutes from "./calllogs.routes.js";
import feeListRoutes from "./feelist.routes.js";
import timeLossRoutes from "./timeloss.routes.js";
import excelRoutes from "./excel.routes.js";

const rootRouter = Router();

rootRouter.use("/auth", authRoutes);
rootRouter.use("/contacts", contactsRoutes);
rootRouter.use("/cases", casesRoutes);
rootRouter.use("/events", eventsRoutes);
rootRouter.use("/tasks", tasksRoutes);
rootRouter.use("/calllogs", callLogsRoutes);
rootRouter.use("/feelist", feeListRoutes);
rootRouter.use("/timeloss", timeLossRoutes);
rootRouter.use("/excel", excelRoutes);

export default rootRouter;
