import { motion } from "framer-motion";
import { EXPERIENCES } from "../../constants";
import { useTranslation } from "../../hooks/useTranslation";
import { fadeUp, viewport } from "../../lib/motion";
import Tag from "../ui/Tag";
import Redacted from "../ui/Redacted";

/**
 * Experience — registros de trabajo del expediente.
 * Solo empleo real: los cursos y diplomas viven en Credenciales y repetirlos
 * aquí inflaba la sección con formación disfrazada de experiencia.
 */
function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="border-t border-line-subtle pt-16 pb-12">
      <header className="mb-12">
        <p className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-3">
          03 — {t("experience.title")}
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
        {EXPERIENCES.map((experience, index) => (
          <motion.article
            key={experience.company}
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

              {experience.redactedClient ? (
                <p className="mb-3 text-sm text-ink-muted">
                  <Redacted
                    width="9ch"
                    label={t("experience.redacted.client")}
                    reason={t("experience.redacted.reason")}
                  />
                </p>
              ) : null}

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
    </section>
  );
}

export default Experience;
