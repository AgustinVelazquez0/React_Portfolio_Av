/**
 * Ask my CV — endpoint del agente AI (provider-agnostic).
 *
 * Pipeline:
 *   POST /api/ask  { question, language }
 *   → stream text/plain del modelo
 *
 * Providers soportados (env var AI_PROVIDER):
 *   - "groq"   (default si hay GROQ_API_KEY)   — gratis, ultrarrápido
 *   - "openai" (default si hay OPENAI_API_KEY) — paid
 *
 * Si ninguna API key está presente, el endpoint devuelve un mensaje
 * placeholder y el frontend cae a su fallback local por keywords.
 *
 * Rate-limit in-memory: 10 req / IP / hora.
 */

import { Router } from "express";

const router = Router();

// ---- rate limit in-memory ----
const buckets = new Map();
const LIMIT = 60; // ~1 req/min sostenido por hora
const WINDOW_MS = 60 * 60 * 1000;

// IPs locales bypass del rate limit (útil en dev). En producción detrás de
// un proxy el cliente NO aparece como ::1 / 127.0.0.1, así que esto no es
// un agujero de seguridad real.
const LOCAL_IPS = new Set(["::1", "127.0.0.1", "::ffff:127.0.0.1"]);

function rateLimit(ip) {
  if (LOCAL_IPS.has(ip)) return true;
  const now = Date.now();
  const bucket = buckets.get(ip) || { count: 0, resetAt: now + WINDOW_MS };
  if (now > bucket.resetAt) {
    bucket.count = 0;
    bucket.resetAt = now + WINDOW_MS;
  }
  bucket.count += 1;
  buckets.set(ip, bucket);
  return bucket.count <= LIMIT;
}

// ---- Provider config ----
function resolveProvider() {
  const explicit = process.env.AI_PROVIDER?.toLowerCase();
  if (explicit === "groq") return providerGroq();
  if (explicit === "openai") return providerOpenAI();

  // Auto-detect
  if (process.env.GROQ_API_KEY) return providerGroq();
  if (process.env.OPENAI_API_KEY) return providerOpenAI();
  return null;
}

function isPlaceholder(key) {
  if (!key) return true;
  // Detecta los placeholders que dejamos en env.example / .env de plantilla
  return /REEMPLAZAR|YOUR[_-]?KEY|sk-...|gsk_\.\.\.|^$/i.test(key);
}

function providerGroq() {
  const apiKey = process.env.GROQ_API_KEY;
  if (isPlaceholder(apiKey)) return null;
  return {
    name: "groq",
    url: "https://api.groq.com/openai/v1/chat/completions",
    apiKey,
    model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
  };
}

function providerOpenAI() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (isPlaceholder(apiKey)) return null;
  return {
    name: "openai",
    url: "https://api.openai.com/v1/chat/completions",
    apiKey,
    model: process.env.OPENAI_MODEL || "gpt-4o-mini",
  };
}

// ---- CV knowledge (mantener sincronizado con src/data/cvKnowledge.js) ----
const CV_KNOWLEDGE = `
Agustin Velazquez — Full-Stack Engineer, Montevideo, Uruguay.
Email: agubolso2@gmail.com. LinkedIn: agustin-velazquez-dev.

CURRENT WORK (since 06/2025):
- Full-Stack Developer at Mental.
- React Native/Expo app published on App Store and Google Play.
- React Native Web / Next.js platform with offline audio, RevenueCat subs,
  OneSignal push, Sentry monitoring, i18next.
- State: Zustand + TanStack Query.

SIGNATURE PROJECTS:
1) WhatsApp AI SaaS (https://whatsapp-ai-saas-1zya.vercel.app):
   SaaS with real AI tool use (not fixed workflow). Up to 10 iterations per
   message, LLM autonomously decides which tools to call (DB queries,
   knowledge base, schedule messages). Multi-tenant via single Prisma schema
   + business_id. Stack: Next.js, TypeScript, PostgreSQL, Prisma, OpenAI,
   NextAuth, Vercel.

2) Arbix (https://arbibuy.vercel.app):
   Alibaba <-> Amazon FBA arbitrage SaaS. 5 fault-tolerant scrapers,
   multi-marketplace calculator (9 countries), 4 Vercel cron jobs,
   educational mode with glossary. Stack: Next.js, Supabase + RLS,
   shadcn/ui, Cheerio, Recharts.

3) Mental (https://mental-web-three.vercel.app):
   Cross-platform hypnosis app with dynamic AI voice (ElevenLabs),
   offline audio, subscriptions. iOS + Android.

STACK:
- Frontend: React, Next.js 14/15, React Native, TypeScript, Tailwind, shadcn/ui.
- Backend: Node, Express, Prisma, NextAuth, PostgreSQL, MongoDB, Supabase.
- AI: OpenAI tool use, agentic loops, ElevenLabs, prompt engineering.
- Mobile: Expo, EAS, App Store Connect, Google Play Console, TestFlight.
- Ops: Vercel, Sentry, Render, Docker, Git.

EDUCATION:
- Instituto BIOS — Full-Stack MERN diploma (2024-2025).
- FreeCodeCamp — multiple certifications (2023-2024).
- Santander Open Academy — several certifications.

PHILOSOPHY:
"Code is the medium. Detail is the difference." Builds agentic AI products,
not marketing chatbots. Obsessed with the gap between something that works
and something that feels right.
`.trim();

router.post("/ask", async (req, res) => {
  const ip =
    req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
    req.socket.remoteAddress ||
    "unknown";

  if (!rateLimit(ip)) {
    return res.status(429).json({
      ok: false,
      error: "Rate limit. Try again in an hour.",
    });
  }

  const { question, language = "es" } = req.body || {};
  if (!question || typeof question !== "string" || question.length > 500) {
    return res.status(400).json({ ok: false, error: "Invalid question." });
  }

  const provider = resolveProvider();
  if (!provider) {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.write(
      language === "es"
        ? "El agente real no está configurado en este entorno. " +
            "Configurá GROQ_API_KEY (gratis) o OPENAI_API_KEY en el server. " +
            "El frontend muestra una respuesta local mientras tanto."
        : "The real agent is not configured in this environment. " +
            "Set GROQ_API_KEY (free) or OPENAI_API_KEY on the server. " +
            "The frontend shows a local answer in the meantime."
    );
    return res.end();
  }

  const systemPrompt =
    language === "es"
      ? `Eres un asistente sobre el CV de Agustin Velazquez. Responde EN ESPAÑOL,
de forma concisa (máximo 3 frases), en tercera persona (usando "él" o "Agustin").
Si te preguntan algo que no está en el contexto, sé honesto y sugiere
contactar a Agustin directamente (agubolso2@gmail.com).
NO inventes proyectos, fechas o tecnologías. Solo usa el contexto.
Contexto:
${CV_KNOWLEDGE}`
      : `You are an assistant about Agustin Velazquez's CV. Answer IN ENGLISH,
concisely (max 3 sentences), third person ("he" or "Agustin").
If asked something not in the context, be honest and suggest contacting
Agustin directly (agubolso2@gmail.com).
Do NOT invent projects, dates or technologies. Use only the context.
Context:
${CV_KNOWLEDGE}`;

  try {
    const upstream = await fetch(provider.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${provider.apiKey}`,
      },
      body: JSON.stringify({
        model: provider.model,
        stream: true,
        temperature: 0.3,
        max_tokens: 240,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: question },
        ],
      }),
    });

    if (!upstream.ok || !upstream.body) {
      const errorText = await upstream.text().catch(() => "");
      console.error(`[ask] upstream ${provider.name} ${upstream.status}`, errorText);
      res.status(502);
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      res.end(`Upstream error (${provider.name}): ${upstream.status}`);
      return;
    }

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("X-Accel-Buffering", "no");

    const reader = upstream.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      // SSE format compartido por OpenAI y Groq: líneas que empiezan con "data: "
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith("data:")) continue;
        const payload = trimmed.slice(5).trim();
        if (payload === "[DONE]") {
          res.end();
          return;
        }
        try {
          const parsed = JSON.parse(payload);
          const token = parsed?.choices?.[0]?.delta?.content;
          if (token) res.write(token);
        } catch {
          // ignore malformed chunk
        }
      }
    }

    res.end();
  } catch (err) {
    console.error("[ask] error", err);
    if (!res.headersSent) res.status(500);
    res.end(
      language === "es"
        ? "Error procesando la pregunta."
        : "Error processing the question."
    );
  }
});

export default router;
