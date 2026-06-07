/**
 * Vercel Serverless Function — POST /api/ask
 *
 * Reemplaza el servidor Express para producción en Vercel.
 * La GROQ_API_KEY se configura en Vercel → Settings → Environment Variables
 * (server-side, nunca expuesta al browser).
 *
 * Rate-limit in-memory: 20 req / IP / hora.
 * (Las funciones serverless pueden reiniciarse, pero es suficiente para un portfolio.)
 */

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
   Production-grade SaaS with real AI tool use (not fixed workflow). Up to
   10 iterations per message, LLM autonomously decides which tools to call
   (DB queries, knowledge base, schedule messages). Multi-tenant via single
   Prisma schema + business_id.
   - Stack: Next.js 16, React 19, TypeScript, tRPC v11, Prisma, PostgreSQL,
     OpenAI, NextAuth v5, Stripe + MercadoPago (LATAM), Upstash Redis,
     QStash, Resend, Zod, Jest, Vercel.
   - Production hardening: HMAC-SHA256 webhook validation, message
     idempotency in Upstash Redis, dual payments for Uruguay/LATAM coverage,
     custom evals system to regression-test agent trajectories, 16 Jest
     tests, env var validation at boot.

2) Arbix (https://getarbix.com — own domain):
   Alibaba <-> Amazon FBA arbitrage SaaS. 5 fault-tolerant scrapers cached
   in Upstash Redis, multi-marketplace calculator (9 countries), 4 Vercel
   cron jobs (scraping, alerts, trends, daily pick with 7-day dedup),
   Listing Studio with AI image generation + per-product-type prompts and
   name suggestions, feedback system with voting + similarity-based
   deduplication (Jaccard 70%) + admin notifications at 15 votes,
   guided onboarding with driver.js, educational mode with glossary.
   Monetized tiers: Free / Pro $99 / Elite $199.
   - Stack: Next.js 16, React 19, TypeScript, Supabase + RLS, shadcn/ui v4,
     base-ui/react, Tailwind v4, Upstash Redis, Cheerio, Recharts,
     Google Trends, Resend, driver.js, Vercel Cron.

3) Mental (https://mental-web-three.vercel.app):
   Cross-platform hypnosis app with dynamic AI voice (ElevenLabs),
   offline audio, subscriptions. iOS + Android.

STACK:
- Frontend: React 19, Next.js 16, React Native, TypeScript, Tailwind v4,
  shadcn/ui v4, base-ui/react.
- Backend: Node, Express, tRPC v11, Prisma, NextAuth v5, PostgreSQL,
  MongoDB, Supabase + RLS.
- AI: OpenAI tool use, agentic loops, ElevenLabs, prompt engineering,
  custom evals systems.
- Payments: Stripe, MercadoPago, RevenueCat.
- Infra: Upstash Redis, Upstash QStash, Resend, Vercel Cron, HMAC webhooks.
- Mobile: Expo, EAS, App Store Connect, Google Play Console, TestFlight.
- Ops: Vercel, Sentry, Render, Docker, Git, Jest.

EDUCATION:
- Instituto BIOS — Full-Stack MERN diploma (2024-2025).
- FreeCodeCamp — multiple certifications (2023-2024).
- Santander Open Academy — several certifications.

PHILOSOPHY:
"Code is the medium. Detail is the difference." Builds full-stack products
end-to-end — web, mobile, SaaS — and reaches for agentic AI when the
problem calls for it, not as marketing. Obsessed with the gap between
something that works and something that feels right.
`.trim();

// Rate limit in-memory (por instancia serverless)
const buckets = new Map();
const LIMIT = 20;
const WINDOW_MS = 60 * 60 * 1000;

function rateLimit(ip) {
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

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  // CORS — permite el dominio de producción y localhost
  const origin = req.headers.origin || "";
  const allowed = [
    "https://react-portfolio-av.vercel.app",
    "http://localhost:5173",
    "http://localhost:5174",
  ];
  if (allowed.includes(origin) || origin.endsWith(".vercel.app")) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();

  // Rate limit
  const ip =
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    "unknown";

  if (!rateLimit(ip)) {
    return res.status(429).json({ ok: false, error: "Rate limit. Try again in an hour." });
  }

  const { question, language = "es" } = req.body || {};
  if (!question || typeof question !== "string" || question.length > 500) {
    return res.status(400).json({ ok: false, error: "Invalid question." });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    return res.end(
      language === "es"
        ? "El agente no está configurado. Configurá GROQ_API_KEY en Vercel."
        : "Agent not configured. Set GROQ_API_KEY in Vercel."
    );
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
    const upstream = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || "llama-3.3-70b-versatile",
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
      console.error("[ask] groq error", upstream.status, errorText);
      res.status(502);
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      return res.end(`Upstream error: ${upstream.status}`);
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
          // chunk malformado — ignorar
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
}
