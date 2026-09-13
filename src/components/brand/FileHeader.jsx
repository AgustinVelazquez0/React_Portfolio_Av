import { PROJECTS } from "../../data/projects";
import { CASE_STUDIES } from "../../data/caseStudies";
import { useTranslation } from "../../hooks/useTranslation";

/**
 * FileHeader — carátula del expediente.
 *
 * Encabeza la home con los datos del caso. Todas las cifras salen de los
 * mismos datos que renderiza el sitio, y la fecha la inyecta Vite en el build:
 * si algo cambia, la carátula cambia sola. Una carátula que hay que actualizar
 * a mano termina mintiendo.
 */
export default function FileHeader() {
  const { language } = useTranslation();
  const es = language === "es";

  const enProduccion = PROJECTS.filter((p) => p.evidence === "production").length;

  const campos = [
    { k: es ? "Expediente" : "File", v: "AV-2026" },
    {
      k: es ? "Anexos" : "Exhibits",
      v: `${PROJECTS.length} · ${enProduccion} ${es ? "en producción" : "in production"}`,
    },
    {
      k: es ? "Casos documentados" : "Documented cases",
      v: String(CASE_STUDIES.length),
    },
    { k: es ? "Actualizado" : "Updated", v: __BUILD_DATE__ },
  ];

  return (
    <div
      className="border-y border-line-subtle py-2.5
        flex flex-wrap items-center gap-x-6 gap-y-1
        font-mono text-2xs uppercase tracking-mono text-ink-faint"
    >
      {campos.map(({ k, v }) => (
        <span key={k} className="flex items-baseline gap-2">
          <span>{k}</span>
          <span className="text-ink-secondary">{v}</span>
        </span>
      ))}
      <span className="ml-auto text-ink-faint">
        {es ? "Clasificación: público" : "Classification: public"}
      </span>
    </div>
  );
}
