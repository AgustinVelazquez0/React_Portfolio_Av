import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import { connectDb, isDbConnected } from "./db.js";
import contactRoutes from "./routes/contact.js";
import guestbookRoutes from "./routes/guestbook.js";
import askRoutes from "./routes/ask.js";

// Middleware que bloquea rutas Mongo-dependientes si la DB no conectó.
// Permite que /api/ask y /api/health funcionen sin Mongo.
function requireDb(req, res, next) {
  if (!isDbConnected()) {
    return res.status(503).json({
      ok: false,
      error: "Database not configured on this environment.",
    });
  }
  next();
}

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

// /api/ask se monta PRIMERO para que el middleware requireDb
// (necesario solo para contact/guestbook) no bloquee al agente AI.
app.use("/api", askRoutes);
app.use("/api", requireDb, contactRoutes);
app.use("/api", requireDb, guestbookRoutes);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ ok: false, error: "Internal server error" });
});

const port = Number(process.env.PORT || 5050);

async function start() {
  // Mongo es opcional: si no hay URI o falla la conexión, el server arranca igual.
  // Las rutas que la requieren responden 503 explícitamente.
  await connectDb(process.env.MONGODB_URI);
  app.listen(port, () => {
    console.log(`[portfolio-api] listening on :${port}`);
  });
}

start().catch((e) => {
  console.error("[portfolio-api] failed to start", e);
  process.exit(1);
});

