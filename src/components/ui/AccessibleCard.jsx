import { useState, useRef } from "react";
import { useLanguage } from "../../context/LanguageContext";

const AccessibleCard = ({ title, description, imageSrc, altText, link }) => {
  const { t } = useLanguage();
  const [isFocused, setIsFocused] = useState(false);
  const cardRef = useRef(null);

  const handleKeyDown = (e) => {
    // Navegar con Enter o espacio
    if ((e.key === "Enter" || e.key === " ") && link) {
      e.preventDefault();
      window.open(link, "_blank", "noopener noreferrer");
    }
  };

  return (
    <div
      ref={cardRef}
      className={`group relative overflow-hidden rounded-md transition-all duration-300 
        bg-white dark:bg-gray-800 shadow-md hover:shadow-xl
        ${isFocused ? "ring-2 ring-primary-light dark:ring-primary-dark" : ""}`}
      tabIndex="0"
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onKeyDown={handleKeyDown}
      role="article"
      aria-labelledby={`title-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3
          id={`title-${title.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-xl font-bold mb-2 text-gray-900 dark:text-white"
        >
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-primary-light dark:text-primary-dark font-medium 
              hover:underline focus:outline-none focus:underline"
            aria-label={`${t("projects.viewProject")}: ${title}`}
          >
            {t("projects.viewProject")} →
          </a>
        )}
      </div>

      {/* Lector de pantalla solo */}
      <span className="sr-only">
        {link ? `${t("projects.pressEnterToView")} ${title}` : title}
      </span>
    </div>
  );
};

export default AccessibleCard;
