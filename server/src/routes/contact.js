import express from "express";
import { ContactMessage } from "../models/ContactMessage.js";

const router = express.Router();

function isValidEmail(email) {
  if (!email) return false;
  // Simple + safe enough for basic validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeString(v) {
  return typeof v === "string" ? v.trim() : "";
}

// Basic in-memory rate limiting (per-IP)
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 10;
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

router.post("/contact", rateLimit, async (req, res) => {
  // Honeypot field (bots usually fill it)
  const honey = normalizeString(req.body?.companyWebsite || req.body?._hp);
  if (honey) {
    return res.status(200).json({ ok: true }); // silently accept
  }

  const name = normalizeString(req.body?.name);
  const email = normalizeString(req.body?.email).toLowerCase();
  const message = normalizeString(req.body?.message);

  if (!message || message.length < 5) {
    return res.status(400).json({ ok: false, error: "Message is too short." });
  }
  if (message.length > 2000) {
    return res.status(400).json({ ok: false, error: "Message is too long." });
  }
  if (email && !isValidEmail(email)) {
    return res.status(400).json({ ok: false, error: "Invalid email." });
  }
  if (name.length > 80) {
    return res.status(400).json({ ok: false, error: "Name is too long." });
  }

  const ip =
    (req.headers["x-forwarded-for"]?.toString().split(",")[0] || req.ip || "")
      .toString()
      .trim();

  const doc = await ContactMessage.create({
    name,
    email,
    message,
    source: "portfolio",
    meta: {
      ip,
      userAgent: req.headers["user-agent"]?.toString().slice(0, 500) || "",
    },
  });

  return res.status(201).json({ ok: true, id: doc._id.toString() });
});

export default router;

