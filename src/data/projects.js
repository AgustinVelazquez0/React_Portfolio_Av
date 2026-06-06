/**
 * Catálogo único de proyectos — data-driven.
 * Antes vivían inline en Projects.jsx (~880 líneas con duplicación).
 *
 * Estructura:
 *   slug          → id estable (URL friendly)
 *   group         → bucket visual (nextjsSaas | mobile | react | js)
 *   featured      → si tiene case study completo
 *   metric        → 1 número señal que se muestra en card y case study
 */

import mentalWebImg from "../assets/Mental-web.png";
import mentalLogoImg from "../assets/mental-logo.png";
import whatsappSaasImg from "../assets/whatsappSaas.png";
import arbibuyImg from "../assets/arbibuy.png";

export const PROJECT_GROUPS = [
  { id: "nextjsSaas", titleKey: "projects.nextjsSaasTitle" },
  { id: "mobile", titleKey: "projects.mobileAppsTitle" },
  { id: "react", titleKey: "projects.reactTitle" },
  { id: "js", titleKey: "projects.jsTitle" },
];

export const PROJECTS = [
  // ---- Next.js & SaaS ----
  {
    slug: "whatsapp-ai-saas",
    group: "nextjsSaas",
    featured: true,
    image: whatsappSaasImg,
    titleKey: "projects.NEXTJS_SAAS.whatsappAI.title",
    descriptionKey: "projects.NEXTJS_SAAS.whatsappAI.description",
    tag: { variant: "accent", label: "Agentic AI", dot: true },
    metric: { value: "10", unit: "tool calls/loop", labelKey: "projects.metric.agentic" },
    tech: [
      "Agentic AI",
      "Tool Use",
      "Evals",
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
      "TanStack Query",
      "Jest",
      "Sonner",
      "Tailwind CSS",
      "Vercel",
    ],
    links: {
      demo: "https://whatsapp-ai-saas-1zya.vercel.app",
      code: "https://github.com/AgustinVelazquez0/whatsapp-ai-saas",
    },
  },
  {
    slug: "arbix",
    group: "nextjsSaas",
    featured: true,
    image: arbibuyImg,
    titleKey: "projects.NEXTJS_SAAS.arbibuy.title",
    descriptionKey: "projects.NEXTJS_SAAS.arbibuy.description",
    metric: { value: "9", unit: "marketplaces", labelKey: "projects.metric.marketplaces" },
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui v4",
      "base-ui/react",
      "Supabase",
      "PostgreSQL + RLS",
      "Upstash Redis",
      "Recharts",
      "Cheerio",
      "Google Trends",
      "Resend",
      "driver.js",
      "Sonner",
      "Vercel Cron",
    ],
    links: {
      demo: "https://getarbix.com",
      code: "https://github.com/AgustinVelazquez0/arbibuy",
    },
  },

  // ---- Mobile Apps ----
  {
    slug: "mental",
    group: "mobile",
    featured: true,
    image: mentalLogoImg,
    titleKey: "projects.MOBILE_APPS.mental.title",
    descriptionKey: "projects.MOBILE_APPS.mental.description",
    metric: { value: "2", unit: "stores", labelKey: "projects.metric.stores" },
    qr: {
      url: "https://www.mental.app/descarga",
      labelKey: "projects.MOBILE_APPS.mental.qrText",
    },
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "MongoDB",
      "ElevenLabs",
      "Reanimated",
      "EAS",
      "App Store Connect",
      "Google Play Console",
      "TestFlight",
      "Sentry",
    ],
    links: {
      appStore:
        "https://apps.apple.com/us/app/mental-hipnosis-personalizada/id6740008581",
      playStore:
        "https://play.google.com/store/apps/details?id=com.mentalmagnet.mentalMagnetApp",
    },
  },

  // ---- React ----
  {
    slug: "mental-web",
    group: "react",
    image: mentalWebImg,
    titleKey: "projects.REACT.mentalWeb.title",
    descriptionKey: "projects.REACT.mentalWeb.description",
    tech: [
      "React Native Web",
      "Expo",
      "TypeScript",
      "ElevenLabs",
      "Zustand",
      "TanStack Query",
      "RevenueCat",
      "OneSignal",
      "Sentry",
      "i18next",
      "Vercel",
    ],
    links: {
      demo: "https://mental-web-three.vercel.app",
    },
  },
  {
    slug: "library",
    group: "react",
    image:
      "https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project24_library.png",
    titleKey: "projects.REACT.library.title",
    descriptionKey: "projects.REACT.library.description",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
    links: {
      demo: "https://corner-books-log.onrender.com/register",
      front: "https://github.com/AgustinVelazquez0/library-front-end",
      back: "https://github.com/AgustinVelazquez0/library-back-end",
    },
  },
  {
    slug: "task-manager",
    group: "react",
    image:
      "https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project7.png",
    titleKey: "projects.REACT.todo.title",
    descriptionKey: "projects.REACT.todo.description",
    tech: ["React", "Node.js", "PostgreSQL", "MongoDB", "Docker"],
    links: {
      demo: "https://todo-list-front-yvrl.onrender.com/login",
      front: "https://github.com/AgustinVelazquez0/Todo_List_Front",
      back: "https://github.com/AgustinVelazquez0/Todo_List_Back",
    },
  },
  {
    slug: "food-menu",
    group: "react",
    collapsed: true,
    image:
      "https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project5.png",
    titleKey: "projects.REACT.food.title",
    descriptionKey: "projects.REACT.food.description",
    tech: ["React", "MongoDB", "Express.js", "Node.js"],
    links: {
      front: "https://github.com/AgustinVelazquez0/Food_List_Front",
      back: "https://github.com/AgustinVelazquez0/Food_List_Back",
    },
  },

  // ---- Vanilla JS games ----
  {
    slug: "platformer-game",
    group: "js",
    image:
      "https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project8_platformer_game.png",
    titleKey: "projects.JS.PlataformerGame.title",
    descriptionKey: "projects.JS.PlataformerGame.description",
    tech: ["JavaScript", "Canvas API", "Game Physics", "CSS3"],
    links: {
      code: "https://github.com/AgustinVelazquez0/Platformer-Game",
    },
  },
  {
    slug: "rpg-game",
    group: "js",
    image:
      "https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project10_role_playing_game.png",
    titleKey: "projects.JS.RolePlayingGame.title",
    descriptionKey: "projects.JS.RolePlayingGame.description",
    tech: ["JavaScript", "Game Logic", "HTML5", "CSS3"],
    links: {
      code: "https://github.com/AgustinVelazquez0/Role-Playing-Game",
    },
  },
];

export const getProjectBySlug = (slug) =>
  PROJECTS.find((p) => p.slug === slug);
