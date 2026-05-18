import { useState } from "react";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../../constants";
import { useTranslation } from "../../hooks/useTranslation";
import { fadeUp, viewport } from "../../lib/motion";
import Button from "../ui/Button";
import Tag from "../ui/Tag";

/**
 * Experience — refactor con sistema de diseño nuevo.
 * Estructura editorial estilo brittanychiang.com: timeline a la izquierda,
 * descripción a la derecha. Sin glow neón en los tags.
 */
function Experience() {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  const initialCount = 2;
  const remainingCount = EXPERIENCES.length - initialCount;
  const displayedExperiences = showAll
    ? EXPERIENCES
    : EXPERIENCES.slice(0, initialCount);

  return (
    <section
      id="experience"
      className="border-t border-line-subtle pt-16 pb-12"
    >
      <header className="mb-12">
        <p className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-3">
          02 — {t("experience.title")}
        </p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="font-display text-4xl lg:text-5xl text-ink-primary tracking-tightest leading-none"
        >
          {t("experience.title")}
        </motion.h2>
      </header>

      <div className="space-y-12">
        {displayedExperiences.map((experience, index) => (
          <motion.article
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8"
          >
            {/* Timeline marker */}
            <div className="lg:col-span-3 flex flex-col gap-1">
              <span className="font-mono text-2xs uppercase tracking-mono text-ink-faint">
                {t(`experience.items.${index}.year`)}
              </span>
              <span className="text-xs text-ink-muted">
                {t(`experience.items.${index}.company`)}
              </span>
            </div>

            {/* Content */}
            <div className="lg:col-span-9 max-w-3xl">
              <h3 className="text-xl lg:text-2xl font-medium text-ink-primary tracking-snug mb-3">
                {t(`experience.items.${index}.role`)}
              </h3>
              <p className="text-base text-ink-secondary leading-relaxed mb-5 whitespace-pre-line">
                {t(`experience.items.${index}.description`)}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {experience.technologies.map((tech) => (
                  <Tag key={tech} variant="neutral" size="xs">
                    {tech}
                  </Tag>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {EXPERIENCES.length > initialCount ? (
        <div className="text-center mt-12">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll
              ? t("experience.showLess")
              : t("experience.showMore").replace(
                  "{count}",
                  remainingCount.toString()
                )}
          </Button>
        </div>
      ) : null}
    </section>
  );
}

export default Experience;
