import express from "express";
import { GuestbookEntry } from "../models/GuestbookEntry.js";

const router = express.Router();

function normalizeString(v) {
  return typeof v === "string" ? v.trim() : "";
}

// Basic in-memory rate limiting (per-IP)
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 15;
const ipBuckets = new Map(); // ip -> { count, resetAt }

function rateLimit(req, res, next) {
  const ip = req.ip || req.headers["x-forwarded-for"] || "unknown";
  const now = Date.now();
  const bucket = ipBuckets.get(ip);

  if (!bucket || bucket.resetAt <= now) {
    ipBuckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return next();
  }

  if (bucket.count >= MAX_PER_WINDOW) {
    return res.status(429).json({
      ok: false,
      error: "Too many requests. Please try again in a minute.",
    });
  }

  bucket.count += 1;
  return next();
}

router.get("/guestbook", async (req, res) => {
  const limit = Math.min(Number(req.query.limit || 20), 50);
  const items = await GuestbookEntry.find({}, { __v: 0 })
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean();

  res.json({ ok: true, items });
});

router.post("/guestbook", rateLimit, async (req, res) => {
  // Honeypot field (bots usually fill it)
  const honey = normalizeString(req.body?.companyWebsite || req.body?._hp);
  if (honey) return res.status(200).json({ ok: true });

  const name = normalizeString(req.body?.name);
  const message = normalizeString(req.body?.message);

  if (!message || message.length < 2) {
    return res.status(400).json({ ok: false, error: "Message is too short." });
  }
  if (message.length > 400) {
    return res.status(400).json({ ok: false, error: "Message is too long." });
  }
  if (name.length > 60) {
    return res.status(400).json({ ok: false, error: "Name is too long." });
  }

  const ip =
    (req.headers["x-forwarded-for"]?.toString().split(",")[0] || req.ip || "")
      .toString()
      .trim();

  const doc = await GuestbookEntry.create({
    name,
    message,
    meta: {
      ip,
      userAgent: req.headers["user-agent"]?.toString().slice(0, 500) || "",
    },
  });

  res.status(201).json({ ok: true, id: doc._id.toString() });
});

export default router;

