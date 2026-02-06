import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";

import { errorHandler } from "./middleware/errorHandler.js";
import rootRouter from "./routes/root.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(helmet());

app.use(
  rateLimit({
    windowMs: 60 * 1000,
    max: 200,
  })
);

// static uploads
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

app.get("/api", (_, res) => res.json({ ok: true, message: "Backend Running ✅" }));

app.use("/api/v1", rootRouter);

app.use(errorHandler);

export default app;
