import { EXPERIENCES } from "../../constants";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";

function Experience() {
  const { t } = useTranslation();
  const { isDarkMode } = useTheme();
  const [showAll, setShowAll] = useState(false);
  const initialCount = 2;
  const remainingCount = EXPERIENCES.length - initialCount;
  const displayedExperiences = showAll ? EXPERIENCES : EXPERIENCES.slice(0, initialCount);

  // Función para obtener el color de cada tecnología
  const getTechColor = (techName) => {
    const techColorMap = {
      // Frontend
      "HTML5": "rgb(220, 38, 38)", // red-600
      "CSS3": "rgb(37, 99, 235)", // blue-600
      "JavaScript": "rgb(250, 204, 21)", // yellow-400
      "TypeScript": "rgb(37, 99, 235)", // blue-600
      "React": "rgb(34, 211, 238)", // cyan-400
      "React Native": "rgb(103, 232, 249)", // cyan-300
      "Tailwind CSS": "rgb(96, 165, 250)", // blue-400
      
      // Backend
      "Node.js": "rgb(22, 163, 74)", // green-600
      "Express.js": "rgb(156, 163, 175)", // gray-400
      "API": "rgb(79, 70, 229)", // indigo-600
      
      // Databases
      "PostgreSQL": "rgb(96, 165, 250)", // blue-400
      "MongoDB": "rgb(34, 197, 94)", // green-500
      "MongoDB Compass": "rgb(21, 128, 61)", // green-700
      
      // Tools
      "Git": "rgb(234, 88, 12)", // orange-600
      "GitHub": "rgb(107, 114, 128)", // gray-500
      "Docker": "rgb(59, 130, 246)", // blue-500
      "Postman": "rgb(249, 115, 22)", // orange-500
      "Ubuntu": "rgb(249, 115, 22)", // orange-500
      "Linux-Ubuntu": "rgb(249, 115, 22)", // orange-500
      "DBeaver": "rgb(29, 78, 216)", // blue-700
      "EAS": "rgb(99, 102, 241)", // indigo-500
      "xCode": "rgb(37, 99, 235)", // blue-600
      "AppStore": "rgb(107, 114, 128)", // gray-500
      "PlayStore": "rgb(34, 197, 94)", // green-500
      "App Store Connect": "rgb(0, 122, 255)", // iOS blue
      "Google Play Console": "rgb(66, 133, 244)", // Google blue
      "TestFlight": "rgb(0, 122, 255)", // iOS blue
      "Sentry": "rgb(255, 82, 82)", // Sentry red
      "Cursor AI": "rgb(34, 211, 238)", // cyan-400
      "Google AI Studio": "rgb(37, 99, 235)", // blue-600
      "Rork": "rgb(34, 211, 238)", // cyan-400
      "Render": "rgb(126, 34, 206)", // purple-700
      "Glitch": "rgb(37, 99, 235)", // blue-600
    };
    
    return techColorMap[techName] || "rgb(34, 211, 238)"; // Default cyan
  };

  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-16 text-center text-3xl font-semibold
        text-neutral-900 dark:text-white lg:text-4xl"
      >
        {t("experience.title")}
      </motion.h2>
      <div>
        {displayedExperiences.map((experience, index) => (
          <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/4 mb-4 lg:mb-0"
            >
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400">
                {t(`experience.items.${index}.year`)}
              </p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-2xl lg:w-3/4"
            >
              <h6 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white">
                {t(`experience.items.${index}.role`)} -{" "}
                <span className="text-base font-medium text-neutral-700 dark:text-neutral-300">
                  {t(`experience.items.${index}.company`)}
                </span>
              </h6>
              <p className="mb-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {t(`experience.items.${index}.description`)}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {experience.technologies.map((tech, techIndex) => {
                  const techColor = getTechColor(tech);
                  return (
                  <span
                    key={techIndex}
                      className="rounded-md bg-black dark:bg-black 
                      border-2 px-3 py-1.5 text-sm font-medium"
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
        ))}
      </div>
      {EXPERIENCES.length > initialCount && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`text-lg px-2.5 py-1 rounded transition-colors duration-200 ${
              isDarkMode
                ? "bg-white hover:bg-neutral-200 text-black"
                : "bg-black hover:bg-neutral-800 text-white"
            }`}
          >
            {showAll
              ? t("experience.showLess")
              : t("experience.showMore").replace("{count}", remainingCount.toString())}
          </button>
        </div>
      )}
    </div>
  );
}

export default Experience;
