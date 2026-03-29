import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGithub,
  FaGit,
  FaPaperPlane,
  FaLayerGroup,
  FaBell,
  FaKey,
  FaChartLine,
  FaBrain,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiDbeaver,
  SiPostman,
  SiRender,
  SiGlitch,
  SiGoogledrive,
  SiCanva,
  SiOpenai,
  SiWetransfer,
  SiVite,
  SiGnubash,
  SiJson,
  SiApachenetbeanside,
  SiReact,
  SiNginx,
  SiExpo,
  SiNextdotjs,
  SiPrisma,
  SiVercel,
  SiReactquery,
  SiI18Next,
  SiGooglegemini,
  SiWhatsapp,
  SiMeta,
  SiElevenlabs,
  SiSupabase,
  SiLinux,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { useTheme } from "../../context/ThemeContext";
import IconCard from "../ui/IconCard";

function Technologies() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();

  /** IA / LLM: WhatsApp AI SaaS (GPT-4, Meta API), voz Mental (ElevenLabs), ChatGPT/prompts BIOS, Cursor y Rork */
  const aiTechnologies = [
    {
      icon: SiOpenai,
      name: "OpenAI (GPT-4 API)",
      color: "text-gray-500",
      duration: 4.6,
    },
    {
      icon: SiElevenlabs,
      name: "ElevenLabs",
      color: "text-gray-400",
      duration: 4.45,
    },
    {
      icon: SiGooglegemini,
      name: "Google AI Studio",
      color: "text-blue-600",
      duration: 4.2,
    },
    {
      icon: SiWhatsapp,
      name: "WhatsApp Business API",
      color: "text-green-600",
      duration: 4.4,
    },
    {
      icon: SiMeta,
      name: "Meta for Developers",
      color: "text-indigo-600",
      duration: 4.3,
    },
    {
      icon: FaBrain,
      name: "Prompt engineering",
      color: "text-purple-500",
      duration: 4.5,
    },
    {
      icon: null,
      name: "Cursor",
      color: "text-cyan-400",
      duration: 4.35,
      customImage: "https://cursor.com/apple-touch-icon.png",
    },
    {
      icon: null,
      name: "Rork",
      color: "text-cyan-400",
      duration: 4.25,
      customImage: "https://www.rork.app/favicon.ico",
    },
  ];

  // Configuración de tecnologías Frontend
  const frontendTechnologies = [
    { icon: FaHtml5, name: "HTML5", color: "text-red-600", duration: 3.5 },
    { icon: FaCss3Alt, name: "CSS3", color: "text-blue-600", duration: 1.5 },
    {
      icon: FaJsSquare,
      name: "JavaScript",
      color: "text-yellow-400",
      duration: 2,
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
      color: "text-blue-600",
      duration: 3,
    },
    {
      icon: RiReactjsLine,
      name: "React",
      color: "text-cyan-400",
      duration: 2.5,
    },
    {
      icon: SiReact,
      name: "React Native",
      color: "text-cyan-300",
      duration: 2.8,
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      color: "text-gray-700 dark:text-gray-300",
      duration: 2.6,
    },
    {
      icon: null,
      name: "React Native Web",
      color: "text-cyan-300",
      duration: 2.9,
      customImage: "https://cdn.simpleicons.org/react/61DAFB",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
      color: "text-blue-400",
      duration: 5,
    },
  ];

  // Configuración de tecnologías Backend
  const backendTechnologies = [
    { icon: FaNodeJs, name: "Node.js", color: "text-green-600", duration: 3 },
    {
      icon: SiExpress,
      name: "Express.js",
      color: "text-gray-400",
      duration: 4,
    },
    {
      icon: SiPrisma,
      name: "Prisma ORM",
      color: "text-slate-500",
      duration: 3.2,
    },
    {
      icon: SiApachenetbeanside,
      name: "API",
      color: "text-indigo-600",
      duration: 2.2,
    },
  ];

  // SO tipo Unix + shell (cd, ls, pwd, mkdir, pipelines, etc.); Vite/JSON en el toolchain
  const systemBuildTools = [
    { icon: SiLinux, name: "Linux", color: "text-yellow-500", duration: 5.8 },
    { icon: SiGnubash, name: "Bash", color: "text-green-700", duration: 4.5 },
    { icon: SiVite, name: "Vite", color: "text-purple-500", duration: 5.5 },
    { icon: SiJson, name: "JSON", color: "text-amber-600", duration: 3.3 },
  ];

  // Configuración de bases de datos principales
  const databases = [
    {
      icon: SiPostgresql,
      name: "PostgreSQL",
      color: "text-blue-400",
      duration: 3,
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      color: "text-green-500",
      duration: 3.2,
    },
  ];

  // Configuración de clientes/herramientas de bases de datos
  const databaseClients = [
    {
      icon: SiMongodb,
      name: "MongoDB Compass",
      color: "text-green-700",
      duration: 2.8,
    },
    { icon: SiDbeaver, name: "DBeaver", color: "text-blue-700", duration: 3.5 },
    {
      icon: SiSupabase,
      name: "Supabase",
      color: "text-emerald-500",
      duration: 3.3,
    },
  ];

  // Configuración de herramientas - Version Control & Collaboration
  const versionControlTools = [
    { icon: FaGithub, name: "GitHub", color: "text-gray-500", duration: 2 },
    { icon: FaGit, name: "Git", color: "text-orange-600", duration: 2.8 },
  ];

  // Configuración de herramientas - DevOps & Infrastructure
  const devopsInfraTools = [
    { icon: SiDocker, name: "Docker", color: "text-blue-500", duration: 2.5 },
    { icon: SiNginx, name: "Nginx", color: "text-green-600", duration: 3.7 },
  ];

  // Monitoreo y observabilidad (errores, rendimiento en producción)
  const monitoringTools = [
    {
      icon: null,
      name: "Sentry",
      color: "text-red-500",
      duration: 4.3,
      customImage: "https://simpleicons.org/icons/sentry.svg",
    },
  ];

  // Configuración de herramientas - API Testing & Deployment
  const apiTestingTools = [
    { icon: SiPostman, name: "Postman", color: "text-orange-500", duration: 4 },
    { icon: SiRender, name: "Render", color: "text-purple-700", duration: 4.8 },
    { icon: SiGlitch, name: "Glitch", color: "text-blue-600", duration: 4.2 },
    { icon: SiVercel, name: "Vercel", color: "text-gray-600", duration: 4.1 },
    { icon: SiExpo, name: "EAS", color: "text-indigo-500", duration: 4.5 },
    { 
      icon: null, 
      name: "App Store Connect", 
      color: "text-blue-600", 
      duration: 4.6,
      customImage: "https://simpleicons.org/icons/appstore.svg"
    },
    { 
      icon: null, 
      name: "Google Play Console", 
      color: "text-green-600", 
      duration: 4.4,
      customImage: "https://simpleicons.org/icons/googleplay.svg"
    },
    { 
      icon: FaPaperPlane, 
      name: "TestFlight", 
      color: "text-blue-500", 
      duration: 4.2,
    },
  ];

  // Configuración de herramientas - Productivity & Design
  const productivityTools = [
    {
      icon: SiGoogledrive,
      name: "Google Drive",
      color: "text-green-600",
      duration: 3.6,
    },
    { icon: SiCanva, name: "Canva", color: "text-purple-500", duration: 3.4 },
    {
      icon: SiWetransfer,
      name: "WeTransfer",
      color: "text-blue-500",
      duration: 3.2,
    },
    {
      icon: FaLayerGroup,
      name: "Zustand",
      color: "text-orange-500",
      duration: 3.8,
    },
    {
      icon: SiReactquery,
      name: "TanStack Query",
      color: "text-red-500",
      duration: 3.9,
    },
    {
      icon: FaChartLine,
      name: "RevenueCat",
      color: "text-green-600",
      duration: 4.0,
    },
    {
      icon: FaBell,
      name: "OneSignal",
      color: "text-green-600",
      duration: 3.7,
    },
    {
      icon: FaKey,
      name: "NextAuth.js",
      color: "text-green-600",
      duration: 4.2,
    },
    {
      icon: SiI18Next,
      name: "i18next",
      color: "text-green-600",
      duration: 3.5,
    },
  ];

  return (
    <div id="technologies" className="border-b border-neutral-800 pb-12">
      {/* Section: Technologies - Layout en 2 columnas principales */}
      <h2 className="my-10 text-center text-3xl font-semibold
      text-neutral-900 dark:text-white lg:text-4xl">
        {t("technologies.title")}
      </h2>

      <motion.div
        id="ai-technologies"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 28 }}
        transition={{ type: "spring", stiffness: 380, damping: 32 }}
        viewport={{ once: true, margin: "-80px" }}
        className="max-w-4xl mx-auto mb-14 px-4"
      >
        <div
          className="rounded-2xl border border-cyan-500/25 dark:border-cyan-400/20
          bg-gradient-to-b from-cyan-500/[0.06] to-transparent dark:from-cyan-400/[0.08]
          px-6 py-10 shadow-[0_0_40px_-12px_rgba(34,211,238,0.35)]"
        >
          <h3
            className={`text-center text-2xl font-semibold mb-2 ${
              isDarkMode ? "text-neutral-100" : "text-neutral-900"
            }`}
          >
            {t("technologies.aiTitle")}
          </h3>
          <p
            className={`text-center text-sm max-w-2xl mx-auto mb-10 ${
              isDarkMode ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            {t("technologies.aiSubtitle")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {aiTechnologies.map((tech, index) => (
              <IconCard
                key={`ai-${tech.name}-${index}`}
                icon={tech.icon}
                name={tech.name}
                color={tech.color}
                duration={tech.duration}
                customImage={tech.customImage}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-full mx-auto px-4">
        {/* COLUMNA IZQUIERDA */}
        <div className="space-y-10">
          {/* Frontend Technologies */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="flex flex-col items-center"
          >
            <h3
              className={`text-2xl font-semibold mb-8 ${
                isDarkMode ? "text-neutral-300" : "text-black"
              }`}
            >
              {t("technologies.frontend")}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-lg">
              {frontendTechnologies.map((tech, index) => (
                <IconCard
                  key={index}
                  icon={tech.icon}
                  name={tech.name}
                  color={tech.color}
                  duration={tech.duration}
                />
              ))}
            </div>
          </motion.div>

          {/* Databases */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="flex flex-col items-center"
          >
            <h3
              className={`text-2xl font-semibold mb-8 ${
                isDarkMode ? "text-neutral-300" : "text-black"
              }`}
            >
              {t("technologies.databases")}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-lg">
              {databases.map((db, index) => (
                <IconCard
                  key={index}
                  icon={db.icon}
                  name={db.name}
                  color={db.color}
                  duration={db.duration}
                />
              ))}
            </div>
          </motion.div>

          {/* Version Control & DevOps */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="flex flex-col items-center"
          >
            <h3
              className={`text-2xl font-semibold mb-8 ${
                isDarkMode ? "text-neutral-300" : "text-black"
              }`}
            >
              {t("technologies.versionControl")} & DevOps
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-lg">
              {[...versionControlTools, ...devopsInfraTools].map(
                (tool, index) => (
                  <IconCard
                    key={index}
                    icon={tool.icon}
                    name={tool.name}
                    color={tool.color}
                    duration={tool.duration}
                  />
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="space-y-10">
          {/* Backend & System Tools */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="flex flex-col items-center"
          >
            <h3
              className={`text-2xl font-semibold mb-8 ${
                isDarkMode ? "text-neutral-300" : "text-black"
              }`}
            >
              {t("technologies.backend")} & {t("technologies.systemBuild")}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-lg">
              {[...backendTechnologies, ...systemBuildTools].map(
                (tech, index) => (
                  <IconCard
                    key={index}
                    icon={tech.icon}
                    name={tech.name}
                    color={tech.color}
                    duration={tech.duration}
                  />
                )
              )}
            </div>
          </motion.div>

          {/* Database Clients */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="flex flex-col items-center"
          >
            <h3
              className={`text-2xl font-semibold mb-8 ${
                isDarkMode ? "text-neutral-300" : "text-black"
              }`}
            >
              Database Clients
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-lg">
              {databaseClients.map((client, index) => (
                <IconCard
                  key={index}
                  icon={client.icon}
                  name={client.name}
                  color={client.color}
                  duration={client.duration}
                />
              ))}
            </div>
          </motion.div>

          {/* API Testing & Deployment */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="flex flex-col items-center"
          >
            <h3
              className={`text-2xl font-semibold mb-8 ${
                isDarkMode ? "text-neutral-300" : "text-black"
              }`}
            >
              {t("technologies.apiTesting")}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-lg">
              {apiTestingTools.map((tool, index) => (
                <IconCard
                  key={`api-${index}`}
                  icon={tool.icon}
                  name={tool.name}
                  color={tool.color}
                  duration={tool.duration}
                  customImage={tool.customImage}
                />
              ))}
            </div>
          </motion.div>

          {/* Monitoring & observability */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="flex flex-col items-center"
          >
            <h3
              className={`text-2xl font-semibold mb-8 ${
                isDarkMode ? "text-neutral-300" : "text-black"
              }`}
            >
              {t("technologies.monitoring")}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-lg">
              {monitoringTools.map((tool, index) => (
                <IconCard
                  key={`mon-${index}`}
                  icon={tool.icon}
                  name={tool.name}
                  color={tool.color}
                  duration={tool.duration}
                  customImage={tool.customImage}
                />
              ))}
            </div>
          </motion.div>

          {/* Productivity & Design */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="flex flex-col items-center"
          >
            <h3
              className={`text-2xl font-semibold mb-8 ${
                isDarkMode ? "text-neutral-300" : "text-black"
              }`}
            >
              {t("technologies.productivity")}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 max-w-lg">
              {productivityTools.map((tool, index) => (
                <IconCard
                  key={`prod-${index}`}
                  icon={tool.icon}
                  name={tool.name}
                  color={tool.color}
                  duration={tool.duration}
                  customImage={tool.customImage}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
