import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

// Función para obtener el color de cada tecnología (misma que en Experience)
const getTechColor = (techName) => {
  const techColorMap = {
    // Frontend
    "HTML5": "rgb(220, 38, 38)",
    "HTML": "rgb(220, 38, 38)",
    "CSS3": "rgb(37, 99, 235)",
    "CSS": "rgb(37, 99, 235)",
    "SCSS": "rgb(207, 102, 121)",
    "JavaScript": "rgb(250, 204, 21)",
    "TypeScript": "rgb(37, 99, 235)",
    "React": "rgb(34, 211, 238)",
    "React Native": "rgb(103, 232, 249)",
    "ReactJs": "rgb(34, 211, 238)",
    "Tailwind CSS": "rgb(96, 165, 250)",
    "Hooks": "rgb(34, 211, 238)",
    
    // Backend
    "Node.js": "rgb(22, 163, 74)",
    "Express.js": "rgb(156, 163, 175)",
    "API": "rgb(79, 70, 229)",
    "API REST": "rgb(79, 70, 229)",
    "JWT": "rgb(168, 85, 247)",
    
    // Databases
    "PostgreSQL": "rgb(96, 165, 250)",
    "MongoDB": "rgb(34, 197, 94)",
    "MongoDB Compass": "rgb(21, 128, 61)",
    
    // Tools
    "Git": "rgb(234, 88, 12)",
    "GitHub": "rgb(107, 114, 128)",
    "Docker": "rgb(59, 130, 246)",
    "Postman": "rgb(249, 115, 22)",
    "Ubuntu": "rgb(249, 115, 22)",
    "Linux-Ubuntu": "rgb(249, 115, 22)",
    "DBeaver": "rgb(29, 78, 216)",
    "EAS": "rgb(99, 102, 241)",
    "xCode": "rgb(37, 99, 235)",
    "AppStore": "rgb(107, 114, 128)",
    "PlayStore": "rgb(34, 197, 94)",
    "App Store Connect": "rgb(0, 122, 255)",
    "Google Play Console": "rgb(66, 133, 244)",
    "TestFlight": "rgb(0, 122, 255)",
    "Sentry": "rgb(255, 82, 82)",
    "Cursor AI": "rgb(34, 211, 238)",
    "Google AI Studio": "rgb(37, 99, 235)",
    "Rork": "rgb(34, 211, 238)",
    "Render": "rgb(126, 34, 206)",
    "Glitch": "rgb(37, 99, 235)",
    "Vite": "rgb(168, 85, 247)",
    "WSL": "rgb(107, 114, 128)",
    
    // Data Visualization
    "D3.js": "rgb(249, 115, 22)",
    "SVG": "rgb(34, 211, 238)",
    "GeoJSON": "rgb(34, 197, 94)",
    "AJAX": "rgb(250, 204, 21)",
    
    // Web APIs
    "LocalStorage": "rgb(250, 204, 21)",
    "Audio API": "rgb(250, 204, 21)",
    "Game Logic": "rgb(250, 204, 21)",
  };
  
  return techColorMap[techName] || "rgb(34, 211, 238)"; // Default cyan
};

function Projects() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  const [expandedGroups, setExpandedGroups] = useState({
    react: false,
    d3: false,
    js: false,
  });

  const toggleGroup = (group) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  };

  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-16 text-center text-3xl font-semibold
        text-neutral-900 dark:text-white lg:text-4xl"
      >
        {t("projects.title")}
      </motion.h2>

      {/* Grupo de proyectos: Mobile Apps */}
      <div className="mb-12">
        <h3 className="my-10 text-xl text-center font-semibold
        text-neutral-800 dark:text-neutral-200 lg:text-2xl">
          {t("projects.mobileAppsTitle")}
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
          {/* Proyecto Mobile - Mental: Hipnosis personalizada */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="bg-white dark:bg-neutral-900/50 p-6 rounded-md border-0
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] dark:hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]
            transition-all duration-200"
          >
            <div className="flex gap-6 mb-4">
              <div className="flex-shrink-0 flex flex-col items-center">
                <a
                  href="https://www.mental.app/descarga"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https%3A%2F%2Fwww.mental.app%2Fdescarga"
                    alt="QR Code - Mental App"
                    className="w-20 h-20 rounded-md object-cover hover:scale-105 transition-transform duration-300"
                  />
                </a>
                <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-2 text-center">
                  {t("projects.MOBILE_APPS.mental.qrText")}
                </p>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                  {t("projects.MOBILE_APPS.mental.title")}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {t("projects.MOBILE_APPS.mental.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["React Native", "MongoDB", "MongoDB Compass", "TypeScript", "Postman", "Cursor AI", "xCode", "EAS", "AppStore", "PlayStore", "App Store Connect", "Google Play Console", "TestFlight", "Sentry"].map((tech) => {
                const techColor = getTechColor(tech);
                return (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                    style={{
                      borderColor: techColor,
                      color: techColor,
                      boxShadow: `0 0 10px ${techColor}40`,
                    }}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Grupo de proyectos: REACT */}
      <div className="mb-16">
        <h3 className="my-10 text-xl text-center font-semibold
        text-neutral-800 dark:text-neutral-200 lg:text-2xl">
          React
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
          {/* Proyecto React 1 - Sistema de Biblioteca Digital */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="bg-white dark:bg-neutral-900/50 p-6 rounded-md border-0
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] dark:hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]
            transition-all duration-200"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://corner-books-log.onrender.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project24_library.png"
                  alt="Sistema de Biblioteca Digital"
                  className="w-20 h-20 rounded-md object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                  {t("projects.REACT.library.title")}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {t("projects.REACT.library.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Node.js", "Express.js", "MongoDB", "JWT"].map(
                (tech) => {
                  const techColor = getTechColor(tech);
                  return (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                      style={{
                        borderColor: techColor,
                        color: techColor,
                        boxShadow: `0 0 10px ${techColor}40`,
                      }}
                    >
                      {tech}
                    </span>
                  );
                }
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open("https://corner-books-log.onrender.com/register")
                }
                className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors duration-200"
              >
                {t("projects.buttonViewProject")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/library-front-end"
                  )
                }
                className={`px-2 py-1 rounded transition-colors duration-200 ${isDarkMode ? "bg-white hover:bg-neutral-200 text-black" : "bg-black hover:bg-neutral-800 text-white"}`}
              >
                {t("projects.buttonViewFrontCode")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/library-back-end"
                  )
                }
                className={`px-2 py-1 rounded transition-colors duration-200 ${isDarkMode ? "bg-white hover:bg-neutral-200 text-black" : "bg-black hover:bg-neutral-800 text-white"}`}
              >
                {t("projects.buttonViewBackCode")}
              </button>
            </div>
          </motion.div>

          {/* Proyecto React 2 - Task Manager Avanzado */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="bg-white dark:bg-neutral-900/50 p-6 rounded-md 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] dark:hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]
            transition-all duration-200"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://todo-list-front-yvrl.onrender.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project7.png"
                  alt="Task Manager Avanzado"
                  className="w-20 h-20 rounded-md object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                  {t("projects.REACT.todo.title")}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {t("projects.REACT.todo.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Node.js", "PostgreSQL", "MongoDB", "Docker"].map(
                (tech) => {
                  const techColor = getTechColor(tech);
                  return (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                      style={{
                        borderColor: techColor,
                        color: techColor,
                        boxShadow: `0 0 10px ${techColor}40`,
                      }}
                    >
                      {tech}
                    </span>
                  );
                }
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open("https://todo-list-front-yvrl.onrender.com/login")
                }
                className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors duration-200"
              >
                {t("projects.buttonViewProject")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Todo_List_Front"
                  )
                }
                className={`px-2 py-1 rounded transition-colors duration-200 ${isDarkMode ? "bg-white hover:bg-neutral-200 text-black" : "bg-black hover:bg-neutral-800 text-white"}`}
              >
                {t("projects.buttonViewFrontCode")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Todo_List_Back"
                  )
                }
                className={`px-2 py-1 rounded transition-colors duration-200 ${isDarkMode ? "bg-white hover:bg-neutral-200 text-black" : "bg-black hover:bg-neutral-800 text-white"}`}
              >
                {t("projects.buttonViewBackCode")}
              </button>
            </div>
          </motion.div>

          {/* Proyecto React 3 - Sistema de Pedidos Online */}
          {(expandedGroups.react || false) && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="bg-white dark:bg-neutral-900/50 p-6 rounded-md 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] dark:hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]
            transition-all duration-200"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://github.com/AgustinVelazquez0/Food_List_Front"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project5.png"
                  alt="Sistema de Pedidos Online"
                  className="w-20 h-20 rounded-md object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                  {t("projects.REACT.food.title")}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {t("projects.REACT.food.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "MongoDB", "Express.js", "Node.js"].map((tech) => {
                const techColor = getTechColor(tech);
                return (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                    style={{
                      borderColor: techColor,
                      color: techColor,
                      boxShadow: `0 0 10px ${techColor}40`,
                    }}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Food_List_Front"
                  )
                }
                className={`px-2 py-1 rounded transition-colors duration-200 ${isDarkMode ? "bg-white hover:bg-neutral-200 text-black" : "bg-black hover:bg-neutral-800 text-white"}`}
              >
                {t("projects.buttonViewFrontCode")}
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Food_List_Back"
                  )
                }
                className={`px-2 py-1 rounded transition-colors duration-200 ${isDarkMode ? "bg-white hover:bg-neutral-200 text-black" : "bg-black hover:bg-neutral-800 text-white"}`}
              >
                {t("projects.buttonViewBackCode")}
              </button>
            </div>
          </motion.div>
          )}

          {/* Proyecto React 4 - Explorador Rick & Morty */}
          {(expandedGroups.react || false) && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="bg-white dark:bg-neutral-900/50 p-6 rounded-md 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] dark:hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]
            transition-all duration-200"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://github.com/AgustinVelazquez0/Rick_and_Morty"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project4.png"
                  alt="Explorador Rick & Morty"
                  className="w-20 h-20 rounded-md object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                  {t("projects.REACT.rickandmorty.title")}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {t("projects.REACT.rickandmorty.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "API REST", "CSS3", "JavaScript"].map((tech) => {
                const techColor = getTechColor(tech);
                return (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                    style={{
                      borderColor: techColor,
                      color: techColor,
                      boxShadow: `0 0 10px ${techColor}40`,
                    }}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Rick_and_Morty"
                  )
                }
                className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors duration-200"
              >
                {t("projects.buttonViewProject")}
              </button>
            </div>
          </motion.div>
          )}

          {/* Proyecto React 5 - Calculadora Científica */}
          {(expandedGroups.react || false) && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="bg-white dark:bg-neutral-900/50 p-6 rounded-md 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] dark:hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]
            transition-all duration-200"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://github.com/AgustinVelazquez0/React-Calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project16_calculator.png"
                  alt="Calculadora Científica"
                  className="w-20 h-20 rounded-md object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                  {t("projects.REACT.calculator.title")}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {t("projects.REACT.calculator.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "Hooks", "CSS3", "JavaScript"].map((tech) => {
                const techColor = getTechColor(tech);
                return (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                    style={{
                      borderColor: techColor,
                      color: techColor,
                      boxShadow: `0 0 10px ${techColor}40`,
                    }}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://calculator-agustins-projects-569e7477.vercel.app/"
                  )
                }
                className="px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors duration-200"
              >
                {t("projects.buttonViewProject")}
              </button>
              <button
                onClick={() =>
                  window.open("https://github.com/AgustinVelazquez0/Calculator")
                }
                className={`px-2 py-1 rounded transition-colors duration-200 ${isDarkMode ? "bg-white hover:bg-neutral-200 text-black" : "bg-black hover:bg-neutral-800 text-white"}`}
              >
                {t("projects.buttonViewCode")}
              </button>
            </div>
          </motion.div>
          )}
        </div>
        {!expandedGroups.react && (
          <div className="text-center mt-6">
            <button
              onClick={() => toggleGroup("react")}
              className={`text-lg px-2.5 py-1 rounded transition-colors duration-200 ${
                isDarkMode
                  ? "bg-white hover:bg-neutral-200 text-black"
                  : "bg-black hover:bg-neutral-800 text-white"
              }`}
            >
              {t("projects.showMore").replace("{count}", "3")}
            </button>
          </div>
        )}
        {expandedGroups.react && (
          <div className="text-center mt-6">
            <button
              onClick={() => toggleGroup("react")}
              className={`text-lg px-2.5 py-1 rounded transition-colors duration-200 ${
                isDarkMode
                  ? "bg-white hover:bg-neutral-200 text-black"
                  : "bg-black hover:bg-neutral-800 text-white"
              }`}
            >
              {t("projects.showLess")}
            </button>
          </div>
        )}
      </div>

      {/* Grupo de proyectos: Vanilla JavaScript */}
      <div className="mb-12">
        <h3 className="my-10 text-xl text-center font-semibold
        text-neutral-800 dark:text-neutral-200 lg:text-2xl">
          Vanilla JavaScript
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
          {/* Proyecto JS 1 - Todo App Vanilla */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="bg-white dark:bg-neutral-900/50 p-6 rounded-md 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] dark:hover:shadow-[0_0_15px_rgba(250,204,21,0.4)]
            transition-all duration-200"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://github.com/AgustinVelazquez0/TO-DO-LIST"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project1.png"
                  alt="Todo App Vanilla JS"
                  className="w-20 h-20 rounded-md object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                  {t("projects.JS.todo.title")}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {t("projects.JS.todo.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["JavaScript", "HTML5", "CSS3", "LocalStorage"].map((tech) => {
                const techColor = getTechColor(tech);
                return (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                    style={{
                      borderColor: techColor,
                      color: techColor,
                      boxShadow: `0 0 10px ${techColor}40`,
                    }}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open("https://github.com/AgustinVelazquez0/TO-DO-LIST")
                }
                className={`px-2 py-1 rounded transition-colors duration-200 ${isDarkMode ? "bg-white hover:bg-neutral-200 text-black" : "bg-black hover:bg-neutral-800 text-white"}`}
              >
                {t("projects.buttonViewCode")}
              </button>
            </div>
          </motion.div>

          {/* Proyecto JS 2 - Reproductor Musical */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="bg-white dark:bg-neutral-900/50 p-6 rounded-md 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:!shadow-[0_0_15px_rgba(250,204,21,0.4)] dark:hover:!shadow-[0_0_15px_rgba(250,204,21,0.4)]
            transition-all duration-200"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://github.com/AgustinVelazquez0/Music-Player"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project15_music_player.png"
                  alt="Reproductor Musical Web"
                  className="w-20 h-20 rounded-md object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                  {t("projects.JS.music.title")}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {t("projects.JS.music.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["JavaScript", "HTML5", "CSS3", "Audio API"].map((tech) => {
                const techColor = getTechColor(tech);
                return (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                    style={{
                      borderColor: techColor,
                      color: techColor,
                      boxShadow: `0 0 10px ${techColor}40`,
                    }}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Music-Player"
                  )
                }
                className={`px-2 py-1 rounded transition-colors duration-200 ${isDarkMode ? "bg-white hover:bg-neutral-200 text-black" : "bg-black hover:bg-neutral-800 text-white"}`}
              >
                {t("projects.buttonViewCode")}
              </button>
            </div>
          </motion.div>

          {/* Proyecto JS 3 - Juego de Plataformas */}
          {(expandedGroups.js || false) && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="bg-white dark:bg-neutral-900/50 p-6 rounded-md 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] dark:hover:shadow-[0_0_15px_rgba(250,204,21,0.4)]
            transition-all duration-200"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://github.com/AgustinVelazquez0/Platformer-Game"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project8_platformer_game.png"
                  alt="Juego de Plataformas 2D"
                  className="w-20 h-20 rounded-md object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                  {t("projects.JS.PlataformerGame.title")}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {t("projects.JS.PlataformerGame.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["JavaScript", "Canvas API", "Game Physics", "CSS3"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-yellow-600/20 text-yellow-700 dark:text-yellow-300 text-xs rounded-md border border-yellow-500/30 font-medium"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Platformer-Game"
                  )
                }
                className={`px-2 py-1 rounded transition-colors duration-200 ${isDarkMode ? "bg-white hover:bg-neutral-200 text-black" : "bg-black hover:bg-neutral-800 text-white"}`}
              >
                {t("projects.buttonViewCode")}
              </button>
            </div>
          </motion.div>
          )}

          {/* Proyecto JS 4 - RPG Interactivo */}
          {(expandedGroups.js || false) && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="bg-white dark:bg-neutral-900/50 p-6 rounded-md 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(250,204,21,0.4)] dark:hover:shadow-[0_0_15px_rgba(250,204,21,0.4)]
            transition-all duration-200"
          >
            <div className="flex gap-6 mb-4">
              <a
                href="https://github.com/AgustinVelazquez0/Role-Playing-Game"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                <img
                  src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/projects/project10_role_playing_game.png"
                  alt="RPG Interactivo"
                  className="w-20 h-20 rounded-md object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">
                  {t("projects.JS.RolePlayingGame.title")}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {t("projects.JS.RolePlayingGame.description")}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {["JavaScript", "Game Logic", "HTML5", "CSS3"].map((tech) => {
                const techColor = getTechColor(tech);
                return (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                    style={{
                      borderColor: techColor,
                      color: techColor,
                      boxShadow: `0 0 10px ${techColor}40`,
                    }}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() =>
                  window.open(
                    "https://github.com/AgustinVelazquez0/Role-Playing-Game"
                  )
                }
                className={`px-2 py-1 rounded transition-colors duration-200 ${isDarkMode ? "bg-white hover:bg-neutral-200 text-black" : "bg-black hover:bg-neutral-800 text-white"}`}
              >
                {t("projects.buttonViewCode")}
              </button>
            </div>
          </motion.div>
          )}
        </div>
        {!expandedGroups.js && (
          <div className="text-center mt-6">
            <button
              onClick={() => toggleGroup("js")}
              className={`text-lg px-2.5 py-1 rounded transition-colors duration-200 ${
                isDarkMode
                  ? "bg-white hover:bg-neutral-200 text-black"
                  : "bg-black hover:bg-neutral-800 text-white"
              }`}
            >
              {t("projects.showMore").replace("{count}", "2")}
            </button>
          </div>
        )}
        {expandedGroups.js && (
          <div className="text-center mt-6">
            <button
              onClick={() => toggleGroup("js")}
              className={`text-lg px-2.5 py-1 rounded transition-colors duration-200 ${
                isDarkMode
                  ? "bg-white hover:bg-neutral-200 text-black"
                  : "bg-black hover:bg-neutral-800 text-white"
              }`}
            >
              {t("projects.showLess")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
