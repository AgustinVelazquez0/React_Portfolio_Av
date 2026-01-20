import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { useState } from "react";

// Función para obtener el color de cada tecnología
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
    "Flexbox": "rgb(37, 99, 235)",
    "Grid": "rgb(37, 99, 235)",
    "jQuery": "rgb(7, 89, 133)",
    "Bootstrap": "rgb(121, 82, 179)",
    "Redux": "rgb(118, 74, 188)",
    
    // Backend
    "Node.js": "rgb(22, 163, 74)",
    "Express.js": "rgb(156, 163, 175)",
    "Express": "rgb(156, 163, 175)",
    "API": "rgb(79, 70, 229)",
    "API REST": "rgb(79, 70, 229)",
    "APIs": "rgb(79, 70, 229)",
    "APIs dinámicas": "rgb(79, 70, 229)",
    "JWT": "rgb(168, 85, 247)",
    "Microservicios RESTful": "rgb(79, 70, 229)",
    "RESTful microservices": "rgb(79, 70, 229)",
    "RESTful": "rgb(79, 70, 229)",
    
    // Databases
    "PostgreSQL": "rgb(96, 165, 250)",
    "MongoDB": "rgb(34, 197, 94)",
    "MongoDB Compass": "rgb(21, 128, 61)",
    "SQL avanzado": "rgb(96, 165, 250)",
    "Advanced SQL": "rgb(96, 165, 250)",
    "SQL": "rgb(96, 165, 250)",
    
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
    "Cursor AI": "rgb(34, 211, 238)",
    "Google AI Studio": "rgb(37, 99, 235)",
    "Rork": "rgb(34, 211, 238)",
    "Render": "rgb(126, 34, 206)",
    "Glitch": "rgb(37, 99, 235)",
    "Vite": "rgb(168, 85, 247)",
    "WSL": "rgb(107, 114, 128)",
    "Bash scripting": "rgb(34, 197, 94)",
    "Bash": "rgb(34, 197, 94)",
    
    // Data Visualization
    "D3.js": "rgb(249, 115, 22)",
    "SVG": "rgb(34, 211, 238)",
    "GeoJSON": "rgb(34, 197, 94)",
    "AJAX": "rgb(250, 204, 21)",
    "Gráficos interactivos": "rgb(249, 115, 22)",
    "Interactive charts": "rgb(249, 115, 22)",
    "Dynamic APIs": "rgb(79, 70, 229)",
    
    // Web APIs
    "LocalStorage": "rgb(250, 204, 21)",
    "Audio API": "rgb(250, 204, 21)",
    "Game Logic": "rgb(250, 204, 21)",
    "DOM": "rgb(250, 204, 21)",
    "Web accessibility": "rgb(37, 99, 235)",
    "Accesibilidad web": "rgb(37, 99, 235)",
    
    // Testing & QA
    "Chai testing": "rgb(161, 161, 170)",
    "Chai": "rgb(161, 161, 170)",
    "Passport auth": "rgb(34, 197, 94)",
    "Socket.io": "rgb(0, 0, 0)",
    "Pug templates": "rgb(168, 85, 247)",
    "Pug": "rgb(168, 85, 247)",
    
    // State Management
    "State management": "rgb(118, 74, 188)",
    
    // Programming Concepts
    "OOP": "rgb(250, 204, 21)",
    "Programación funcional": "rgb(250, 204, 21)",
    "Functional programming": "rgb(250, 204, 21)",
    "JavaScript ES6+": "rgb(250, 204, 21)",
    "ES6+": "rgb(250, 204, 21)",
    
    // MERN Stack
    "Stack MERN completo": "rgb(34, 211, 238)",
    "Complete MERN Stack": "rgb(34, 211, 238)",
    "MERN": "rgb(34, 211, 238)",
    "Frontend": "rgb(34, 211, 238)",
    "Backend": "rgb(22, 163, 74)",
    "Bases de datos": "rgb(96, 165, 250)",
    "Databases": "rgb(96, 165, 250)",
    "Frontend + Backend + Bases de datos": "rgb(34, 211, 238)",
    "Frontend + Backend + Databases": "rgb(34, 211, 238)",
    
    // Office Tools
    "Office 365": "rgb(234, 67, 53)",
    "Power BI": "rgb(249, 115, 22)",
    "Flujos de trabajo empresariales": "rgb(107, 114, 128)",
    "Enterprise workflows": "rgb(107, 114, 128)",
    
    // Data Science
    "Análisis de datos": "rgb(34, 211, 238)",
    "Data analysis": "rgb(34, 211, 238)",
    "Conceptos fundamentales": "rgb(107, 114, 128)",
    "Fundamental concepts": "rgb(107, 114, 128)",
    "Metodologías": "rgb(107, 114, 128)",
    "Methodologies": "rgb(107, 114, 128)",
    
    // Languages
    "Python": "rgb(59, 130, 246)",
    "Python fundamentals": "rgb(59, 130, 246)",
    "Scripting": "rgb(59, 130, 246)",
    "Automatización": "rgb(59, 130, 246)",
    "Automation": "rgb(59, 130, 246)",
    
    // AI Tools
    "Prompt engineering": "rgb(168, 85, 247)",
    "Productividad con IA": "rgb(168, 85, 247)",
    "AI productivity": "rgb(168, 85, 247)",
    "ChatGPT": "rgb(34, 211, 238)",
    "AI Tools": "rgb(168, 85, 247)",
    
    // Language Skills
    "Comunicación técnica": "rgb(107, 114, 128)",
    "Technical communication": "rgb(107, 114, 128)",
    "Inglés empresarial": "rgb(107, 114, 128)",
    "Business English": "rgb(107, 114, 128)",
    "B2 level": "rgb(107, 114, 128)",
    "Inglés Profesional": "rgb(107, 114, 128)",
  };
  
  return techColorMap[techName] || "rgb(34, 211, 238)"; // Default cyan
};

// Función para convertir RGB a RGBA con opacidad
const rgbToRgba = (rgb, opacity = 0.5) => {
  return rgb.replace('rgb', 'rgba').replace(')', `, ${opacity})`);
};

// Función para parsear tecnologías de la descripción y crear badges
const parseTechnologies = (description) => {
  // Primero separar por "•", luego por "+" para manejar tecnologías combinadas
  const techs = [];
  const parts = description.split("•");
  
  parts.forEach(part => {
    const trimmed = part.trim();
    if (trimmed.includes("+")) {
      // Si contiene "+", separar también por "+"
      const subTechs = trimmed.split("+").map(t => t.trim()).filter(t => t.length > 0);
      techs.push(...subTechs);
    } else if (trimmed.length > 0) {
      techs.push(trimmed);
    }
  });
  
  return techs;
};

function Certifications() {
  const { t } = useTranslation();
  const [expandedAcademies, setExpandedAcademies] = useState({
    bios: false,
    freeCodeCamp: false,
    santander: false,
  });

  const toggleAcademy = (academy) => {
    setExpandedAcademies((prev) => ({
      ...prev,
      [academy]: !prev[academy],
    }));
  };

  return (
    <div id="certifications" className="pb-4 border-b border-neutral-900 dark:border-neutral-700">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-3xl font-semibold
        text-neutral-900 dark:text-white lg:text-4xl"
      >
        {t("certifications.title")}
      </motion.h2>

      {/* BIOS Institute Certifications */}
      <div className="mb-12">
        <h3 className="text-2xl text-center font-semibold mb-8 
        text-neutral-800 dark:text-neutral-200">
          BIOS Institute
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {/* Certificado 1 (Full Stack Developer) */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
            transition-all duration-200"
          >
            <a
              href="https://drive.google.com/file/d/1YKgsHIwNC8eGZc2k1cErBzAJJR2tgwSl/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/main/src/assets/projects/Full%20stack.png"
                alt="Full Stack Developer Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.fullStack.title")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {parseTechnologies(t("certifications.certificates.fullStack.description")).map((tech, index) => {
                  const techColor = getTechColor(tech);
                  return (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                      style={{
                        color: techColor,
                        borderColor: techColor,
                        boxShadow: `0 0 8px ${rgbToRgba(techColor, 0.5)}`,
                      }}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Certificado 2 (Digital Skills in the Professional World) */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
            transition-all duration-200"
          >
            <a
              href="https://drive.google.com/file/d/1FmlQ96_KjTt2A2_-JaCKlljDAejCCyYy/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/main/src/assets/projects/Habilidades%20Digitales%20Certificado.png"
                alt="Digital Skills Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.digitalSkills.title")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {parseTechnologies(t("certifications.certificates.digitalSkills.description")).map((tech, index) => {
                  const techColor = getTechColor(tech);
                  return (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                      style={{
                        color: techColor,
                        borderColor: techColor,
                        boxShadow: `0 0 8px ${rgbToRgba(techColor, 0.5)}`,
                      }}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FreeCodeCamp Certifications */}
      <div className="mb-12">
        <h3 className="text-2xl text-center font-semibold mb-8 
        text-neutral-800 dark:text-neutral-200">
          FreeCodeCamp
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {/* Certificado Back End Development and APIs */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
            transition-all duration-200"
          >
            <a
              href="https://www.freecodecamp.org/certification/AgustinVelazquez/back-end-development-and-apis"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/Back%20End%20Development%20and%20APIs.png"
                alt="Back End Development and APIs Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.backEnd.title")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {parseTechnologies(t("certifications.certificates.backEnd.description")).map((tech, index) => {
                  const techColor = getTechColor(tech);
                  return (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                      style={{
                        color: techColor,
                        borderColor: techColor,
                        boxShadow: `0 0 8px ${rgbToRgba(techColor, 0.5)}`,
                      }}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Certificado Relational Database */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
            transition-all duration-200"
          >
            <a
              href="https://www.freecodecamp.org/certification/AgustinVelazquez/relational-database-v8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/Relational%20Database.png"
                alt="Relational Database Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.relationalDatabase.title")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {parseTechnologies(t("certifications.certificates.relationalDatabase.description")).map((tech, index) => {
                  const techColor = getTechColor(tech);
                  return (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                      style={{
                        color: techColor,
                        borderColor: techColor,
                        boxShadow: `0 0 8px ${rgbToRgba(techColor, 0.5)}`,
                      }}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Certificado JavaScript Algorithms and Data Structures */}
          {(expandedAcademies.freeCodeCamp || false) && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
            transition-all duration-200"
          >
            <a
              href="https://www.freecodecamp.org/certification/AgustinVelazquez/javascript-algorithms-and-data-structures-v8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/JavaScript%20Algorithms%20and%20Data%20Structures.png"
                alt="JavaScript Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.javascript.title")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {parseTechnologies(t("certifications.certificates.javascript.description")).map((tech, index) => {
                  const techColor = getTechColor(tech);
                  return (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                      style={{
                        color: techColor,
                        borderColor: techColor,
                        boxShadow: `0 0 8px ${rgbToRgba(techColor, 0.5)}`,
                      }}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
          )}

          {/* Certificado Quality Assurance */}
          {(expandedAcademies.freeCodeCamp || false) && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
            transition-all duration-200"
          >
            <a
              href="https://www.freecodecamp.org/certification/AgustinVelazquez/quality-assurance-v7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/Quality%20Assurance.png"
                alt="Quality Assurance Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.qualityAssurance.title")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {parseTechnologies(t("certifications.certificates.qualityAssurance.description")).map((tech, index) => {
                  const techColor = getTechColor(tech);
                  return (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                      style={{
                        color: techColor,
                        borderColor: techColor,
                        boxShadow: `0 0 8px ${rgbToRgba(techColor, 0.5)}`,
                      }}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
          )}

          {/* Certificado Data Visualization */}
          {(expandedAcademies.freeCodeCamp || false) && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
            transition-all duration-200"
          >
            <a
              href="https://www.freecodecamp.org/certification/AgustinVelazquez/data-visualization"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/Data%20Visualization.png"
                alt="Data Visualization Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.dataVisualization.title")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {parseTechnologies(t("certifications.certificates.dataVisualization.description")).map((tech, index) => {
                  const techColor = getTechColor(tech);
                  return (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                      style={{
                        color: techColor,
                        borderColor: techColor,
                        boxShadow: `0 0 8px ${rgbToRgba(techColor, 0.5)}`,
                      }}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
          )}

          {/* Certificado Responsive Web Design */}
          {(expandedAcademies.freeCodeCamp || false) && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
            transition-all duration-200"
          >
            <a
              href="https://www.freecodecamp.org/certification/AgustinVelazquez/responsive-web-design"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/Responsive%20Web%20Design.png"
                alt="Responsive Web Design Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.responsiveWebDesign.title")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {parseTechnologies(t("certifications.certificates.responsiveWebDesign.description")).map((tech, index) => {
                  const techColor = getTechColor(tech);
                  return (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                      style={{
                        color: techColor,
                        borderColor: techColor,
                        boxShadow: `0 0 8px ${rgbToRgba(techColor, 0.5)}`,
                      }}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
          )}

          {/* Certificado Front End Development Libraries */}
          {(expandedAcademies.freeCodeCamp || false) && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
            transition-all duration-200"
          >
            <a
              href="https://www.freecodecamp.org/certification/AgustinVelazquez/front-end-development-libraries"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/refs/heads/main/src/assets/certificates/Front%20end%20freecodecamp%20certification.png"
                alt="Front End Development Libraries Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.frontEnd.title")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {parseTechnologies(t("certifications.certificates.frontEnd.description")).map((tech, index) => {
                  const techColor = getTechColor(tech);
                  return (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                      style={{
                        color: techColor,
                        borderColor: techColor,
                        boxShadow: `0 0 8px ${rgbToRgba(techColor, 0.5)}`,
                      }}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
          )}
        </div>
        {!expandedAcademies.freeCodeCamp && (
          <div className="text-center mt-6">
            <button
              onClick={() => toggleAcademy("freeCodeCamp")}
              className="px-6 py-2 bg-neutral-700 hover:bg-neutral-800 
              dark:bg-neutral-600 dark:hover:bg-neutral-700 
              text-white rounded-lg transition-colors duration-200"
            >
              {t("certifications.showMore").replace("{count}", "5")}
            </button>
          </div>
        )}
        {expandedAcademies.freeCodeCamp && (
          <div className="text-center mt-6">
            <button
              onClick={() => toggleAcademy("freeCodeCamp")}
              className="px-6 py-2 bg-neutral-700 hover:bg-neutral-800 
              dark:bg-neutral-600 dark:hover:bg-neutral-700 
              text-white rounded-lg transition-colors duration-200"
            >
              {t("certifications.showLess")}
            </button>
          </div>
        )}
      </div>

      {/* Santander Open Academy Certifications */}
      <div className="mb-8">
        <h3 className="text-2xl text-center font-semibold mb-8 
        text-neutral-800 dark:text-neutral-200">
          Santander Open Academy
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {/* Certificado Introduction to Data Science */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
            transition-all duration-200"
          >
            <a
              href="https://drive.google.com/file/d/12z8akRooJ2q7XJXj5sp1TANJkpEZTOeo/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/main/src/assets/projects/Certificado%20Ciencia%20de%20datos.png"
                alt="Data Science Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.dataScience.title")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {parseTechnologies(t("certifications.certificates.dataScience.description")).map((tech, index) => {
                  const techColor = getTechColor(tech);
                  return (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                      style={{
                        color: techColor,
                        borderColor: techColor,
                        boxShadow: `0 0 8px ${rgbToRgba(techColor, 0.5)}`,
                      }}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Certificado English Essentials for Professional Growth */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
            transition-all duration-200"
          >
            <a
              href="https://drive.google.com/file/d/1-wnjPOFy7Ujb_G7PwPGAUiqQ_imwr6Dx/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/main/src/assets/projects/English%20Essentials%20for%20Professional%20Growth%20Certificate.png"
                alt="English Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.english.title")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {parseTechnologies(t("certifications.certificates.english.description")).map((tech, index) => {
                  const techColor = getTechColor(tech);
                  return (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                      style={{
                        color: techColor,
                        borderColor: techColor,
                        boxShadow: `0 0 8px ${rgbToRgba(techColor, 0.5)}`,
                      }}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Certificado Python Programming */}
          {(expandedAcademies.santander || false) && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
            transition-all duration-200"
          >
            <a
              href="https://drive.google.com/file/d/1ArqH7x6Owqm3Z6Tb3DATVXj9p258XeSJ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/main/src/assets/projects/Python.png"
                alt="Python Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.python.title")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {parseTechnologies(t("certifications.certificates.python.description")).map((tech, index) => {
                  const techColor = getTechColor(tech);
                  return (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                      style={{
                        color: techColor,
                        borderColor: techColor,
                        boxShadow: `0 0 8px ${rgbToRgba(techColor, 0.5)}`,
                      }}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
          )}

          {/* Certificado ChatGPT */}
          {(expandedAcademies.santander || false) && (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="flex items-center gap-6 
            bg-white dark:bg-neutral-900/50 
            rounded-lg p-6 
            shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.1)]
            hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
            transition-all duration-200"
          >
            <a
              href="https://drive.google.com/file/d/1HmojqKuGJJPOL6PuTFZmB1cGFd-WACJ7/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <img
                src="https://raw.githubusercontent.com/AgustinVelazquez0/React_Portfolio_Av/main/src/assets/projects/ChatGPT.png"
                alt="ChatGPT Certification"
                className="rounded w-24 h-24 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="flex-1">
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">
                {t("certifications.certificates.chatGPT.title")}
              </h4>
              <div className="flex flex-wrap gap-2">
                {parseTechnologies(t("certifications.certificates.chatGPT.description")).map((tech, index) => {
                  const techColor = getTechColor(tech);
                  return (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-black dark:bg-black text-xs rounded-md border-2 font-medium"
                      style={{
                        color: techColor,
                        borderColor: techColor,
                        boxShadow: `0 0 8px ${rgbToRgba(techColor, 0.5)}`,
                      }}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>
          )}
        </div>
        {!expandedAcademies.santander && (
          <div className="text-center mt-6">
            <button
              onClick={() => toggleAcademy("santander")}
              className="px-6 py-2 bg-neutral-700 hover:bg-neutral-800 
              dark:bg-neutral-600 dark:hover:bg-neutral-700 
              text-white rounded-lg transition-colors duration-200"
            >
              {t("certifications.showMore").replace("{count}", "2")}
            </button>
          </div>
        )}
        {expandedAcademies.santander && (
          <div className="text-center mt-6">
            <button
              onClick={() => toggleAcademy("santander")}
              className="px-6 py-2 bg-neutral-700 hover:bg-neutral-800 
              dark:bg-neutral-600 dark:hover:bg-neutral-700 
              text-white rounded-lg transition-colors duration-200"
            >
              {t("certifications.showLess")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Certifications;
