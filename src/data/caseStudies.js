/**
 * Case studies completos — 3 proyectos top.
 * Estructura: context → role → decisiones → métricas → aprendizajes.
 *
 * Inspirado por paco.me y brittanychiang.com.
 * Los strings están bilingüe (es/en) inline para evitar fragmentar las locales.
 */

import whatsappImg from "../assets/whatsappSaas.png";
import arbibuyImg from "../assets/arbibuy.png";
import mentalImg from "../assets/Mental-web.png";

export const CASE_STUDIES = [
  {
    slug: "whatsapp-ai-saas",
    image: whatsappImg,
    accent: "var(--accent)",
    tag: { label: "Agentic AI", variant: "accent" },
    metrics: [
      { value: "10", label: { es: "tool calls / loop", en: "tool calls / loop" } },
      { value: "<2s", label: { es: "respuesta P50", en: "P50 response" } },
      { value: "HMAC", label: { es: "webhook firmado", en: "signed webhook" } },
    ],
    title: {
      es: "WhatsApp AI SaaS — agentes con tool use real",
      en: "WhatsApp AI SaaS — agents with real tool use",
    },
    summary: {
      es: "SaaS production-grade donde el agente IA decide autónomamente qué herramientas llamar en lugar de seguir un workflow fijo. Hasta 10 iteraciones por mensaje, evals automatizadas, webhook HMAC-SHA256, idempotencia, pagos duales Stripe + MercadoPago y stack moderno tRPC v11 / NextAuth v5.",
      en: "Production-grade SaaS where the AI agent autonomously decides which tools to call instead of following a fixed workflow. Up to 10 iterations per message, automated evals, HMAC-SHA256 webhook, idempotency, dual Stripe + MercadoPago payments and a modern tRPC v11 / NextAuth v5 stack.",
    },
    sections: [
      {
        heading: { es: "Contexto", en: "Context" },
        body: {
          es: "Negocios pequeños (restaurantes, spas, talleres) responden WhatsApps repetitivos manualmente. Necesitaban automatizar reservas y atención sin perder calidad ni contexto entre mensajes — y sin perder ventas porque el agente respondiera mal a algo no anticipado. Además debía ser cobrable: pagos para Uruguay/LATAM (MercadoPago) y global (Stripe).",
          en: "Small businesses (restaurants, spas, workshops) reply repetitive WhatsApps by hand. They needed to automate bookings and support without losing quality or cross-message context — and without losing sales because the agent mishandled something unforeseen. It also had to be billable: payments for Uruguay/LATAM (MercadoPago) and global (Stripe).",
        },
      },
      {
        heading: { es: "Mi rol", en: "My role" },
        body: {
          es: "End-to-end como solo developer: arquitectura del agente, schema Prisma multi-tenant, capa tRPC v11 type-safe, integración OpenAI tool calls, webhook de WhatsApp Business con validación HMAC, sistema de evals propio, billing dual Stripe + MercadoPago, dashboard NextAuth v5, suite de tests con Jest (16 tests) y deploy en Vercel.",
          en: "End-to-end as solo developer: agent architecture, multi-tenant Prisma schema, type-safe tRPC v11 layer, OpenAI tool-call integration, HMAC-validated WhatsApp Business webhook, custom evals system, dual Stripe + MercadoPago billing, NextAuth v5 dashboard, Jest test suite (16 tests) and Vercel deploy.",
        },
      },
      {
        heading: { es: "Decisiones técnicas clave", en: "Key technical decisions" },
        bullets: [
          {
            es: "Tool use real (no workflow). La LLM decide la próxima acción cada turno. Costo extra en tokens, pero el agente maneja casos no anticipados sin código nuevo.",
            en: "Real tool use (not workflows). The LLM decides the next action each turn. Higher token cost, but the agent handles unforeseen cases without new code.",
          },
          {
            es: "Loop con límite duro de 10 iteraciones. Evita runaway agents y costos descontrolados.",
            en: "Loop with hard 10-iteration cap. Prevents runaway agents and uncontrolled cost.",
          },
          {
            es: "Multi-tenant con un único schema Prisma + business_id en cada fila. Más barato que schema-per-tenant a este volumen.",
            en: "Multi-tenant via single Prisma schema + business_id on every row. Cheaper than schema-per-tenant at this volume.",
          },
          {
            es: "Webhook HMAC SHA-256 + idempotencia con Upstash Redis. El webhook de Meta puede reintentar; si no deduplicás por messageId terminás respondiendo 3 veces al mismo cliente.",
            en: "HMAC SHA-256 webhook + idempotency with Upstash Redis. Meta's webhook can retry; without dedup-by-messageId you end up replying 3 times to the same customer.",
          },
          {
            es: "tRPC v11 end-to-end en lugar de REST. Tipos del backend llegan al frontend sin un generador OpenAPI intermedio; refactor sin miedo.",
            en: "tRPC v11 end-to-end instead of REST. Backend types reach the frontend without an intermediate OpenAPI generator; refactor without fear.",
          },
          {
            es: "Pagos duales: Stripe para internacional + MercadoPago para Uruguay/LATAM. Sin esto perdés el 60% del mercado regional que no tiene tarjeta internacional.",
            en: "Dual payments: Stripe for international + MercadoPago for Uruguay/LATAM. Without it you lose 60% of the regional market that has no international card.",
          },
          {
            es: "QStash para jobs diferidos (recordatorios, follow-ups) en vez de cron simple. Retries automáticos y exactly-once delivery sin levantar infra propia.",
            en: "QStash for deferred jobs (reminders, follow-ups) instead of plain cron. Auto-retries and exactly-once delivery without standing up own infra.",
          },
          {
            es: "Sistema de evals propio (npm run evals). Cada trayectoria del agente se guarda y replaya contra una suite de prompts de regresión. Sin esto, los tool-use agents fallan creativamente en producción.",
            en: "Custom evals system (npm run evals). Every agent trajectory is saved and replayed against a regression prompt suite. Without it, tool-use agents fail creatively in production.",
          },
        ],
      },
      {
        heading: { es: "Lo que aprendí", en: "What I learned" },
        body: {
          es: "Los tool-use agents fallan distinto que los workflows: cuando fallan, fallan creativamente. Hace falta evals continuas, no QA manual de happy paths. La segunda lección: en LATAM, integrar MercadoPago no es opcional — es la diferencia entre cobrar y no cobrar.",
          en: "Tool-use agents fail differently than workflows: when they fail, they fail creatively. You need continuous evals, not manual happy-path QA. Second lesson: in LATAM, integrating MercadoPago is not optional — it's the difference between getting paid and not.",
        },
      },
    ],
    links: {
      demo: "https://whatsapp-ai-saas-1zya.vercel.app",
      code: "https://github.com/AgustinVelazquez0/whatsapp-ai-saas",
    },
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "tRPC v11",
      "Prisma ORM",
      "PostgreSQL",
      "OpenAI API",
      "NextAuth v5",
      "Stripe",
      "MercadoPago",
      "Upstash Redis",
      "QStash",
      "Resend",
      "Zod",
      "Jest",
      "Tailwind CSS",
      "Vercel",
    ],
  },

  {
    slug: "mental",
    image: mentalImg,
    accent: "#a855f7",
    tag: { label: "Mobile · Cross-platform", variant: "neutral" },
    metrics: [
      { value: "2", label: { es: "stores publicadas", en: "stores live" } },
      { value: "iOS+Android", label: { es: "release continuo", en: "continuous release" } },
      { value: "ElevenLabs", label: { es: "voz dinámica", en: "dynamic voice" } },
    ],
    title: {
      es: "Mental — hipnosis personalizada cross-platform",
      en: "Mental — cross-platform personalized hypnosis",
    },
    summary: {
      es: "App mobile (React Native / Expo) y plataforma web (React Native Web / Next.js) con reproductor de audio offline, voz AI dinámica (ElevenLabs), suscripciones con RevenueCat y monitoreo Sentry. Publicada en App Store y Google Play.",
      en: "Mobile app (React Native / Expo) and web platform (React Native Web / Next.js) with offline audio player, dynamic AI voice (ElevenLabs), RevenueCat subscriptions and Sentry monitoring. Live on App Store and Google Play.",
    },
    sections: [
      {
        heading: { es: "Contexto", en: "Context" },
        body: {
          es: "Mental necesitaba pasar de un MVP a una app cross-platform real, publicada en stores, con audio offline, suscripciones, observabilidad y release continuo. Mi rol cubre desarrollo y publicación.",
          en: "Mental needed to move from MVP to a real cross-platform app: live in stores, with offline audio, subscriptions, observability and continuous release. My role covers development and publishing.",
        },
      },
      {
        heading: { es: "Mi rol", en: "My role" },
        body: {
          es: "Full-stack: app mobile, plataforma web, publicación en App Store + Play Store (TestFlight, App Store Connect, Google Play Console), EAS builds, integración de RevenueCat, OneSignal, Sentry e i18next.",
          en: "Full-stack: mobile app, web platform, App Store + Play Store publishing (TestFlight, App Store Connect, Google Play Console), EAS builds, integration of RevenueCat, OneSignal, Sentry and i18next.",
        },
      },
      {
        heading: { es: "Decisiones técnicas clave", en: "Key technical decisions" },
        bullets: [
          {
            es: "React Native Web para web en lugar de Next.js puro: máximo reuso de componentes mobile, costo de bundling aceptable.",
            en: "React Native Web instead of pure Next.js for web: maximum mobile-component reuse, acceptable bundling cost.",
          },
          {
            es: "Descargas offline con Service Workers + filesystem nativo. La app debe funcionar en avión, no solo bonita en wifi.",
            en: "Offline downloads via Service Workers + native filesystem. The app must work on a plane, not just look pretty on wifi.",
          },
          {
            es: "Zustand + TanStack Query: separación estricta entre estado de UI y estado de servidor. Evita el patrón anti-pattern de meter todo en un solo store.",
            en: "Zustand + TanStack Query: strict separation between UI state and server state. Avoids the anti-pattern of dumping everything into one store.",
          },
          {
            es: "Sentry en producción desde día 1: el costo de no tener observabilidad supera el de una suscripción mensual.",
            en: "Sentry in production from day 1: the cost of no observability beats the cost of a monthly subscription.",
          },
        ],
      },
      {
        heading: { es: "Lo que aprendí", en: "What I learned" },
        body: {
          es: "Publicar en App Store implica un 30% de trabajo que nadie te cuenta: privacy manifests, screenshots por device, in-app purchase IDs, versioning policies. Vale la pena documentarlo.",
          en: "Publishing on App Store is 30% work no one tells you about: privacy manifests, per-device screenshots, IAP IDs, versioning policies. Worth documenting.",
        },
      },
    ],
    links: {
      appStore:
        "https://apps.apple.com/us/app/mental-hipnosis-personalizada/id6740008581",
      playStore:
        "https://play.google.com/store/apps/details?id=com.mentalmagnet.mentalMagnetApp",
      web: "https://mental-web-three.vercel.app",
    },
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Next.js",
      "React Native Web",
      "ElevenLabs",
      "RevenueCat",
      "OneSignal",
      "Sentry",
      "Zustand",
      "TanStack Query",
    ],
  },

  {
    slug: "arbix",
    image: arbibuyImg,
    accent: "#10b981",
    tag: { label: "SaaS · Scraping", variant: "neutral" },
    metrics: [
      { value: "9", label: { es: "marketplaces", en: "marketplaces" } },
      { value: "5", label: { es: "scrapers tolerantes", en: "fault-tolerant scrapers" } },
      { value: "3", label: { es: "planes monetizados", en: "monetized tiers" } },
    ],
    title: {
      es: "Arbix — plataforma de arbitraje Alibaba ↔ Amazon",
      en: "Arbix — Alibaba ↔ Amazon arbitrage platform",
    },
    summary: {
      es: "SaaS con dominio propio (getarbix.com) que detecta oportunidades de arbitraje entre Alibaba y Amazon FBA. Calculadora multi-marketplace, scrapers tolerantes a fallos cacheados con Upstash Redis, Listing Studio con generación de imágenes IA, sistema de feedback con votación + dedup, y planes Free / Pro 99 USD / Elite 199 USD.",
      en: "SaaS on its own domain (getarbix.com) that detects arbitrage opportunities between Alibaba and Amazon FBA. Multi-marketplace calculator, fault-tolerant scrapers cached with Upstash Redis, Listing Studio with AI image generation, feedback system with voting + dedup, and tiers Free / Pro $99 / Elite $199.",
    },
    sections: [
      {
        heading: { es: "Contexto", en: "Context" },
        body: {
          es: "Comprar al por mayor en Alibaba y vender en Amazon es un negocio real, pero calcular la rentabilidad (FBA fees por país, aranceles, cupones, cashback, cambio de moneda) es tedioso y error-prone. Los sellers además necesitan onboarding asistido, listing optimizado y un canal claro de feedback al producto.",
          en: "Wholesale-on-Alibaba/sell-on-Amazon is a real business, but computing true profitability (FBA fees per country, tariffs, coupons, cashback, FX) is tedious and error-prone. Sellers also need guided onboarding, optimized listings, and a clear feedback channel into the product.",
        },
      },
      {
        heading: { es: "Mi rol", en: "My role" },
        body: {
          es: "Solo developer + product. Diseño del schema en Supabase + RLS, scrapers de 5 fuentes con cache Redis y retry/backoff, calculadora multi-marketplace (9 países), integración con Google Trends, 4 cron jobs en Vercel, Listing Studio con generación de imágenes IA, sistema de feedback con votación y dedup por similitud (70%), onboarding guiado con driver.js, emails transaccionales con Resend.",
          en: "Solo developer + product. Supabase + RLS schema design, scrapers for 5 sources with Redis cache and retry/backoff, multi-marketplace calculator (9 countries), Google Trends integration, 4 Vercel cron jobs, Listing Studio with AI image generation, feedback system with voting and similarity dedup (70%), guided onboarding with driver.js, transactional emails with Resend.",
        },
      },
      {
        heading: { es: "Decisiones técnicas clave", en: "Key technical decisions" },
        bullets: [
          {
            es: "Supabase + RLS en lugar de NextAuth + Prisma: el negocio es multi-tenant, RLS resuelve la autorización al nivel de DB y elimina clases enteras de bugs.",
            en: "Supabase + RLS instead of NextAuth + Prisma: business is multi-tenant, RLS solves authorization at the DB level and eliminates whole bug classes.",
          },
          {
            es: "Scrapers tolerantes con Cheerio + retry/backoff + cache en Upstash Redis. Si Amazon bloquea, los demás siguen sirviendo resultados; lo cacheado responde en <100ms.",
            en: "Fault-tolerant scrapers with Cheerio + retry/backoff + Upstash Redis cache. If Amazon blocks, others keep serving; cached hits answer in <100ms.",
          },
          {
            es: "4 cron jobs separados en Vercel: scraping, alertas, refresh de trends y daily pick con dedup de ASINs de 7 días. Cada uno con su SLA propio.",
            en: "4 separate Vercel cron jobs: scraping, alerts, trends refresh, and daily pick with 7-day ASIN dedup. Each with its own SLA.",
          },
          {
            es: "Listing Studio con generación de imágenes IA y prompt detection por tipo de producto (Blender, Fan, Phone Case, etc.). Una licuadora portátil deja de aparecer como una de cocina industrial.",
            en: "Listing Studio with AI image generation and per-product-type prompt detection (Blender, Fan, Phone Case, etc.). A portable blender stops looking like an industrial kitchen one.",
          },
          {
            es: "Sistema de feedback con votación, detección de duplicados por similitud (Jaccard 70%), usernames anónimos determinísticos (seller_a4b2f1) y notificación a admins al alcanzar 15 votos. Construyo el producto en público con los usuarios.",
            en: "Feedback system with voting, similarity-based dedup (Jaccard 70%), deterministic anonymous usernames (seller_a4b2f1) and admin notifications at 15 votes. Building the product in public with users.",
          },
          {
            es: "Onboarding guiado con driver.js + tours por sección. Reduce el TTFV (time-to-first-value) de minutos a segundos para sellers no técnicos.",
            en: "Guided onboarding with driver.js + per-section tours. Reduces TTFV (time-to-first-value) from minutes to seconds for non-technical sellers.",
          },
          {
            es: "Planes monetizados Free / Pro 99 USD / Elite 199 USD. Free no puede crear sugerencias (solo votar); Elite incluye multi-usuario, API completa, bulk scanning y webhooks.",
            en: "Monetized tiers Free / Pro $99 / Elite $199. Free can't post suggestions (only vote); Elite includes multi-user, full API access, bulk scanning and webhooks.",
          },
          {
            es: "Modo educativo con glosario: la calculadora explica de dónde sale cada número. Aumenta la confianza del usuario al invertir capital real.",
            en: "Educational mode with glossary: the calculator explains where each number comes from. Builds user trust when investing real capital.",
          },
        ],
      },
      {
        heading: { es: "Lo que aprendí", en: "What I learned" },
        body: {
          es: "Empecé con un único cron job 'do everything every 10 min' y se me cayó. Dividir por responsabilidad + observabilidad por job fue clave: cron jobs son microservicios disfrazados. El otro aprendizaje fue el sistema de feedback: tener un loop directo usuario → producto sin pasar por email cambia la velocidad de iteración.",
          en: "I started with a single 'do everything every 10 min' cron job and it fell over. Splitting by responsibility + per-job observability was key: cron jobs are microservices in disguise. The other lesson was the feedback system: a direct user-to-product loop without going through email changes iteration velocity.",
        },
      },
    ],
    links: {
      demo: "https://getarbix.com",
      code: "https://github.com/AgustinVelazquez0/arbibuy",
    },
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "PostgreSQL + RLS",
      "shadcn/ui v4",
      "base-ui/react",
      "Upstash Redis",
      "Recharts",
      "Cheerio",
      "Google Trends",
      "Resend",
      "driver.js",
      "Vercel",
    ],
  },
];

export const getCaseStudyBySlug = (slug) =>
  CASE_STUDIES.find((cs) => cs.slug === slug);
