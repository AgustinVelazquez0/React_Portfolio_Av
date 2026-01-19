import { EXPERIENCES } from "../../constants";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { useState } from "react";

function Experience() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const initialCount = 2;
  const remainingCount = EXPERIENCES.length - initialCount;
  const displayedExperiences = showAll ? EXPERIENCES : EXPERIENCES.slice(0, initialCount);

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
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-md bg-neutral-100 dark:bg-neutral-800 
                    border border-neutral-200 dark:border-neutral-700
                    px-3 py-1.5 text-sm font-medium 
                    text-neutral-700 dark:text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
      {EXPERIENCES.length > initialCount && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-neutral-700 hover:bg-neutral-800 
            dark:bg-neutral-600 dark:hover:bg-neutral-700 
            text-white rounded-lg transition-colors duration-200"
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
