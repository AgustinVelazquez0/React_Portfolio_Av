import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import { connectDb } from "./db.js";
import contactRoutes from "./routes/contact.js";
import guestbookRoutes from "./routes/guestbook.js";

const app = express();

app.set("trust proxy", true);
app.use(helmet());

const origins = (process.env.CORS_ORIGINS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: origins.length ? origins : true,
    credentials: false,
  })
);

app.use(express.json({ limit: "32kb" }));

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    time: new Date().toISOString(),
    db: {
      readyState: mongoose.connection.readyState,
    },
  });
});

app.use("/api", contactRoutes);
app.use("/api", guestbookRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ ok: false, error: "Internal server error" });
});

const port = Number(process.env.PORT || 5050);

async function start() {
  await connectDb(process.env.MONGODB_URI);
  app.listen(port, () => {
    console.log(`[portfolio-api] listening on :${port}`);
  });
}

start().catch((e) => {
  console.error("[portfolio-api] failed to start", e);
  process.exit(1);
});

