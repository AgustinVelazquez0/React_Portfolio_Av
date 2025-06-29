import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGithub,
  FaGit,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiUbuntu,
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
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import IconCard from "../ui/IconCard";

function Technologies() {
  const { t } = useTranslation();

  // Configuración de tecnologías (Frontend/Backend)
  const technologies = [
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
    { icon: FaNodeJs, name: "Node.js", color: "text-green-600", duration: 3 },
    {
      icon: SiExpress,
      name: "Express.js",
      color: "text-gray-400",
      duration: 4,
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind CSS",
      color: "text-blue-400",
      duration: 5,
    },
    { icon: SiUbuntu, name: "Ubuntu", color: "text-orange-500", duration: 6 },
    { icon: SiVite, name: "Vite", color: "text-purple-500", duration: 5.5 },
    { icon: SiGnubash, name: "Bash", color: "text-green-700", duration: 4.5 },
    { icon: SiJson, name: "JSON", color: "text-amber-600", duration: 3.3 },
    {
      icon: SiApachenetbeanside,
      name: "API",
      color: "text-indigo-600",
      duration: 2.2,
    },
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
  ];

  // Configuración de herramientas de desarrollo
  const tools = [
    { icon: SiDocker, name: "Docker", color: "text-blue-500", duration: 2.5 },
    { icon: FaGithub, name: "GitHub", color: "text-gray-500", duration: 2 },
    { icon: FaGit, name: "Git", color: "text-orange-600", duration: 2.8 },
    { icon: SiPostman, name: "Postman", color: "text-orange-500", duration: 4 },
    { icon: SiRender, name: "Render", color: "text-purple-700", duration: 4.8 },
    { icon: SiGlitch, name: "Glitch", color: "text-blue-600", duration: 4.2 },
    {
      icon: SiGoogledrive,
      name: "Google Drive",
      color: "text-green-600",
      duration: 3.6,
    },
    { icon: SiCanva, name: "Canva", color: "text-purple-500", duration: 3.4 },
    { icon: SiOpenai, name: "OpenAI", color: "text-gray-500", duration: 5 },
    {
      icon: SiWetransfer,
      name: "WeTransfer",
      color: "text-blue-500",
      duration: 3.2,
    },
    { icon: SiNginx, name: "Nginx", color: "text-green-600", duration: 3.7 },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      {/* Section: Technologies */}
      <h2 className="my-20 text-center text-4xl">{t("technologies.title")}</h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map((tech, index) => (
          <IconCard
            key={index}
            icon={tech.icon}
            name={tech.name}
            color={tech.color}
            duration={tech.duration}
          />
        ))}
      </motion.div>

      {/* Section: Databases */}
      <h2 className="my-20 text-center text-4xl">
        {t("technologies.databases")}
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Bases de datos principales */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <h3 className="text-xl font-semibold text-neutral-300 mb-6">
            Databases
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
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

        {/* Clientes de bases de datos */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center"
        >
          <h3 className="text-xl font-semibold text-neutral-300 mb-6">
            Database Clients
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
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
      </div>

      {/* Section: Tools */}
      <h2 className="my-20 text-center text-4xl">{t("technologies.tools")}</h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {tools.map((tool, index) => (
          <IconCard
            key={index}
            icon={tool.icon}
            name={tool.name}
            color={tool.color}
            duration={tool.duration}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;
