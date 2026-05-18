/**
 * Local CV knowledge — fallback para AskMyCV cuando no hay endpoint AI.
 * El backend en server/src/index.js puede usar este mismo objeto como context.
 *
 * IMPORTANTE: este es el "system prompt" del agente cuando se conecta
 * a una LLM real. Mantener actualizado.
 */

export const CV_FACTS = {
  identity: {
    name: "Agustin Velazquez",
    role: "Full-Stack Engineer",
    location: "Montevideo, Uruguay",
    email: "agubolso2@gmail.com",
    availability: "Disponible / Open to opportunities",
    languages: ["Español (nativo)", "Inglés profesional B2"],
  },
  currentWork: {
    company: "Mental",
    since: "06/2025",
    role: "Full-Stack Developer",
    deliverables: [
      "App mobile React Native/Expo publicada en App Store y Google Play",
      "Plataforma web React Native Web/Next.js",
      "Integración de RevenueCat (suscripciones), OneSignal (push), Sentry (errors), i18next",
      "Estado: Zustand + TanStack Query",
    ],
  },
  signatureProjects: [
    {
      name: "WhatsApp AI SaaS",
      what: "SaaS con agente IA con tool use real (no workflow). Hasta 10 iteraciones por mensaje, decisiones autónomas, multi-tenant.",
      stack: "Next.js · TypeScript · PostgreSQL · Prisma · OpenAI · NextAuth · Vercel",
      url: "https://whatsapp-ai-saas-1zya.vercel.app",
    },
    {
      name: "Arbix",
      what: "Plataforma de arbitraje Alibaba ↔ Amazon FBA. 5 scrapers tolerantes a fallos, calculadora multi-marketplace (9 países), 4 cron jobs.",
      stack: "Next.js · Supabase + RLS · shadcn/ui · Cheerio · Recharts · Vercel",
      url: "https://arbibuy.vercel.app",
    },
    {
      name: "Mental",
      what: "App cross-platform de hipnosis personalizada con voz AI dinámica (ElevenLabs), audio offline y suscripciones.",
      stack: "React Native · Expo · TypeScript · ElevenLabs · RevenueCat · Sentry",
      url: "https://mental-web-three.vercel.app",
    },
  ],
  stack: {
    frontend: ["React", "Next.js 14/15", "React Native", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    backend: ["Node.js", "Express", "Prisma ORM", "NextAuth.js", "PostgreSQL", "MongoDB", "Supabase"],
    ai: ["OpenAI tool use", "Agentic loops", "ElevenLabs voice", "prompt engineering", "Vercel AI SDK"],
    mobile: ["Expo", "EAS", "App Store Connect", "Google Play Console", "TestFlight"],
    ops: ["Vercel", "Sentry", "Render", "Docker", "Git/GitHub"],
  },
  education: [
    "Instituto BIOS — Diplomado Full-Stack MERN (2024-2025)",
    "FreeCodeCamp — Multiple certifications (2023-2024)",
    "Santander Open Academy — varias certificaciones",
  ],
  philosophy:
    "Construyo producto con IA agéntica real, no chatbots de marketing. Me obsesiona la diferencia entre algo que funciona y algo que se siente correcto.",
};

export const SUGGESTIONS = {
  es: [
    "¿Qué hizo en Mental?",
    "¿Qué experiencia tiene con agentes IA?",
    "¿Stack favorito en mobile?",
    "¿Cómo contacto?",
  ],
  en: [
    "What did he do at Mental?",
    "What experience does he have with AI agents?",
    "Favorite mobile stack?",
    "How to contact?",
  ],
};

/**
 * Local matching de keywords → bullet de respuesta.
 * Es un fallback intencionalmente simple. La versión real usa LLM.
 */
export function localAnswer(question, lang = "es") {
  const q = question.toLowerCase();
  const isEs = lang === "es";

  const sayContact = isEs
    ? `Email: ${CV_FACTS.identity.email}. LinkedIn: https://www.linkedin.com/in/agustin-vel%C3%A1zquez-dev/. También podés copiar el email con ⌘K.`
    : `Email: ${CV_FACTS.identity.email}. LinkedIn: https://www.linkedin.com/in/agustin-vel%C3%A1zquez-dev/. You can also copy the email via ⌘K.`;

  if (/(contact|email|reach|escrib|comunic|hablar)/i.test(q)) return sayContact;

  if (/(mental)/i.test(q)) {
    const w = CV_FACTS.currentWork;
    return isEs
      ? `Desde ${w.since} es ${w.role} en Mental: app React Native publicada en stores, plataforma web React Native Web/Next.js, integración de RevenueCat (subs), OneSignal (push), Sentry (errors) y i18next. Estado con Zustand + TanStack Query.`
      : `Since ${w.since} he's a ${w.role} at Mental: React Native app published in stores, React Native Web/Next.js web platform, integration of RevenueCat (subs), OneSignal (push), Sentry (errors) and i18next. State with Zustand + TanStack Query.`;
  }

  if (/(agent|agente|ia|ai|llm|openai|tool)/i.test(q)) {
    const p = CV_FACTS.signatureProjects[0];
    return isEs
      ? `Construyó ${p.name}: ${p.what} Stack: ${p.stack}. La diferencia clave es que la LLM decide qué tool llamar y en qué orden — no es un workflow fijo. Demo: ${p.url}`
      : `Built ${p.name}: ${p.what} Stack: ${p.stack}. The key difference is the LLM decides which tool to call and in what order — not a fixed workflow. Demo: ${p.url}`;
  }

  if (/(mobile|react.?native|expo|android|ios|store)/i.test(q)) {
    return isEs
      ? `Stack mobile: React Native + Expo + TypeScript, EAS para builds, publicación en App Store Connect y Google Play Console (TestFlight para beta). Apps en producción: Mental (iOS + Android). Subs con RevenueCat, push con OneSignal, errors con Sentry.`
      : `Mobile stack: React Native + Expo + TypeScript, EAS for builds, publishing via App Store Connect and Google Play Console (TestFlight for beta). Production apps: Mental (iOS + Android). Subs via RevenueCat, push via OneSignal, errors via Sentry.`;
  }

  if (/(arbix|arbitra|amazon|alibaba|scrap)/i.test(q)) {
    const p = CV_FACTS.signatureProjects[1];
    return isEs
      ? `${p.name}: ${p.what} Stack: ${p.stack}. Demo: ${p.url}`
      : `${p.name}: ${p.what} Stack: ${p.stack}. Demo: ${p.url}`;
  }

  if (/(stack|tech|tecnolog)/i.test(q)) {
    return isEs
      ? `Frontend: ${CV_FACTS.stack.frontend.join(", ")}. Backend: ${CV_FACTS.stack.backend.join(", ")}. AI: ${CV_FACTS.stack.ai.join(", ")}. Mobile: ${CV_FACTS.stack.mobile.join(", ")}.`
      : `Frontend: ${CV_FACTS.stack.frontend.join(", ")}. Backend: ${CV_FACTS.stack.backend.join(", ")}. AI: ${CV_FACTS.stack.ai.join(", ")}. Mobile: ${CV_FACTS.stack.mobile.join(", ")}.`;
  }

  if (/(philosoph|filosof|enfoque|principi)/i.test(q)) {
    return CV_FACTS.philosophy;
  }

  // Default
  return isEs
    ? `Soy un agente local sobre el CV de Agustin. Probá preguntarme sobre Mental, agentes IA, stack mobile, Arbix, o cómo contactarlo. (${CV_FACTS.identity.email})`
    : `I'm a local agent over Agustin's CV. Try asking about Mental, AI agents, mobile stack, Arbix, or how to reach him. (${CV_FACTS.identity.email})`;
}
