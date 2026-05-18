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
      { value: "100%", label: { es: "autonomía decisional", en: "decision autonomy" } },
    ],
    title: {
      es: "WhatsApp AI SaaS — agentes con tool use real",
      en: "WhatsApp AI SaaS — agents with real tool use",
    },
    summary: {
      es: "Plataforma SaaS donde el agente IA decide autónomamente qué herramientas llamar (consulta historial, busca en knowledge base, agenda mensajes) en lugar de seguir un workflow fijo. Hasta 10 iteraciones por mensaje.",
      en: "SaaS where the AI agent autonomously decides which tools to call (query history, search knowledge base, schedule messages) instead of following a fixed workflow. Up to 10 iterations per message.",
    },
    sections: [
      {
        heading: { es: "Contexto", en: "Context" },
        body: {
          es: "Negocios pequeños (restaurantes, spas, talleres) responden WhatsApps repetitivos manualmente. Necesitaban automatizar reservas y atención sin perder calidad ni contexto entre mensajes — y sin perder ventas porque el agente respondiera mal a algo no anticipado.",
          en: "Small businesses (restaurants, spas, workshops) reply repetitive WhatsApps by hand. They needed to automate bookings and support without losing quality or cross-message context — and without losing sales because the agent mishandled something unforeseen.",
        },
      },
      {
        heading: { es: "Mi rol", en: "My role" },
        body: {
          es: "End-to-end: arquitectura del agente, schema de Prisma, integración con OpenAI tool calls, webhook de WhatsApp Business, dashboard NextAuth y deploy en Vercel. Solo developer.",
          en: "End-to-end: agent architecture, Prisma schema, OpenAI tool-call integration, WhatsApp Business webhook, NextAuth dashboard and Vercel deploy. Solo developer.",
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
            es: "Mensajes diferidos via cron job de Vercel cada 5 min en lugar de queue. Una dependencia menos, performance suficiente para reservas no críticas.",
            en: "Deferred messages via Vercel cron every 5 min instead of a queue. One fewer dependency, sufficient performance for non-critical bookings.",
          },
        ],
      },
      {
        heading: { es: "Lo que aprendí", en: "What I learned" },
        body: {
          es: "Los tool-use agents fallan distinto que los workflows: cuando fallan, fallan creativamente. Hace falta evals continuas, no QA manual de happy paths. Empecé a guardar todas las trayectorias del agente para poder hacer 'replays' cuando un cliente reporta un caso raro.",
          en: "Tool-use agents fail differently than workflows: when they fail, they fail creatively. You need continuous evals, not manual happy-path QA. I started saving every agent trajectory so I can 'replay' edge cases customers report.",
        },
      },
    ],
    links: {
      demo: "https://whatsapp-ai-saas-1zya.vercel.app",
      code: "https://github.com/AgustinVelazquez0/whatsapp-ai-saas",
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "OpenAI API",
      "NextAuth.js",
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
      { value: "4", label: { es: "cron jobs", en: "cron jobs" } },
    ],
    title: {
      es: "Arbix — plataforma de arbitraje Alibaba ↔ Amazon",
      en: "Arbix — Alibaba ↔ Amazon arbitrage platform",
    },
    summary: {
      es: "SaaS que detecta oportunidades de arbitraje entre Alibaba y Amazon FBA. Búsqueda multi-fuente, calculadora multi-marketplace con fees y cashback, análisis de tendencias con Google Trends, alertas automáticas.",
      en: "SaaS that detects arbitrage opportunities between Alibaba and Amazon FBA. Multi-source search, multi-marketplace calculator with fees and cashback, trend analysis with Google Trends, automated alerts.",
    },
    sections: [
      {
        heading: { es: "Contexto", en: "Context" },
        body: {
          es: "Comprar al por mayor en Alibaba y vender en Amazon es un negocio real, pero calcular la rentabilidad real (FBA fees por país, aranceles, cupones, cashback, cambio de moneda) es tedioso y error-prone.",
          en: "Wholesale-on-Alibaba/sell-on-Amazon is a real business, but computing true profitability (FBA fees per country, tariffs, coupons, cashback, FX) is tedious and error-prone.",
        },
      },
      {
        heading: { es: "Mi rol", en: "My role" },
        body: {
          es: "Solo developer. Diseño de schema en Supabase + RLS, scrapers de 5 fuentes con manejo de bloqueos, calculadora multi-marketplace (9 países), integración con Google Trends, cron jobs en Vercel.",
          en: "Solo developer. Schema design on Supabase + RLS, scrapers for 5 sources with anti-blocking, multi-marketplace calculator (9 countries), Google Trends integration, Vercel cron jobs.",
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
            es: "Scrapers tolerantes a fallos con Cheerio + retry/backoff. Si un sitio bloquea, los demás siguen sirviendo resultados.",
            en: "Fault-tolerant scrapers with Cheerio + retry/backoff. If one site blocks, the others keep serving results.",
          },
          {
            es: "4 cron jobs separados en Vercel: scraping, alertas, refresh de trends y limpieza. Cada uno con su límite de tiempo y SLA propio.",
            en: "4 separate Vercel cron jobs: scraping, alerts, trends refresh, cleanup. Each with its own timeout and SLA.",
          },
          {
            es: "Modo educativo con glosario: la calculadora explica de dónde sale cada número. Aumenta la confianza del usuario.",
            en: "Educational mode with glossary: the calculator explains where each number comes from. Increases user trust.",
          },
        ],
      },
      {
        heading: { es: "Lo que aprendí", en: "What I learned" },
        body: {
          es: "Empecé con un único cron job 'do everything every 10 min' y se me cayó. Dividir por responsabilidad + observabilidad por job fue clave. La lección: cron jobs son microservicios disfrazados.",
          en: "I started with a single 'do everything every 10 min' cron job and it fell over. Splitting by responsibility + per-job observability was key. Lesson: cron jobs are microservices in disguise.",
        },
      },
    ],
    links: {
      demo: "https://arbibuy.vercel.app",
      code: "https://github.com/AgustinVelazquez0/arbibuy",
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "shadcn/ui",
      "Recharts",
      "Cheerio",
      "Google Trends",
      "Vercel",
    ],
  },
];

export const getCaseStudyBySlug = (slug) =>
  CASE_STUDIES.find((cs) => cs.slug === slug);
