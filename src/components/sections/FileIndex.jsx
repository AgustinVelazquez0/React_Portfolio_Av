import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../data/projects";
import { CASE_STUDIES } from "../../data/caseStudies";
import { EXPERIENCES } from "../../constants";
import { useTranslation } from "../../hooks/useTranslation";
import { fadeUp, viewport } from "../../lib/motion";

/**
 * FileIndex — índice del expediente.
 *
 * La primera vulnerabilidad del inventario de Harris es el mal pronóstico:
 * nadie puede anticipar el costo de atención de una interacción antes de
 * aceptarla. Un índice es el antídoto directo — publica de entrada qué hay,
 * cuánto cuesta y cómo saltar a lo que a cada quien le importa.
 *
 * También resuelve un problema medido: la consola y las sub-páginas eran
 * invisibles porque solo se llegaba a ellas por ⌘K.
 */
export default function FileIndex() {
  const { language } = useTranslation();
  const es = language === "es";

  const inProduction = PROJECTS.filter((p) => p.evidence === "production").length;

  const scrollTo = (id) => (event) => {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 96;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const sections = [
    {
      n: "00",
      id: "evidence-matrix",
      name: es ? "Qué podés verificar" : "What you can verify",
      note: es
        ? "Mis afirmaciones calificadas por evidencia, las flojas incluidas"
        : "My claims graded by evidence, the weak ones included",
    },
    {
      n: "01",
      id: "case-studies",
      name: es ? "Casos documentados" : "Documented cases",
      note: es
        ? `${CASE_STUDIES.length} casos con problema, decisión técnica y resultado`
        : `${CASE_STUDIES.length} cases with problem, technical decision and outcome`,
    },
    {
      n: "02",
      id: "projects",
      name: es ? "Anexos" : "Exhibits",
      note: es
        ? `${PROJECTS.length} proyectos · ${inProduction} en producción con uso real`
        : `${PROJECTS.length} projects · ${inProduction} in production with real usage`,
    },
    {
      n: "03",
      id: "experience",
      name: es ? "Experiencia" : "Experience",
      note: es
        ? `${EXPERIENCES.length} registros de trabajo pago`
        : `${EXPERIENCES.length} paid work records`,
    },
    {
      n: "04",
      id: "bento",
      name: es ? "Actividad y métricas" : "Activity and metrics",
      note: es
        ? "Actividad de GitHub en vivo, sin maquillar"
        : "Live GitHub activity, unretouched",
    },
    {
      n: "05",
      id: "technologies",
      name: es ? "Stack" : "Stack",
      note: es ? "Lo que uso a diario" : "What I use daily",
    },
    {
      n: "06",
      id: "certifications",
      name: es ? "Credenciales" : "Credentials",
      note: es
        ? "Solo las que exigieron entregar proyectos evaluados"
        : "Only the ones that required graded project submissions",
    },
    {
      n: "07",
      id: "contact",
      name: es ? "Contacto" : "Contact",
      note: es ? "Correo directo, sin formulario intermedio" : "Direct email, no gatekeeping form",
    },
  ];

  // Anexos que viven fuera de esta página. Antes solo se llegaba por ⌘K,
  // es decir, no se llegaba.
  const annexes = [
    {
      n: "A",
      to: "/consola",
      name: es ? "Consola" : "Console",
      note: es
        ? "Los mismos datos, consultables por teclado"
        : "The same data, queryable from the keyboard",
    },
    {
      n: "B",
      to: "/now",
      name: es ? "En qué ando" : "Now",
      note: es ? "Qué estoy construyendo este mes" : "What I am building this month",
    },
    {
      n: "C",
      to: "/uses",
      name: es ? "Herramientas" : "Uses",
      note: es ? "Hardware, editor y stack diario" : "Hardware, editor and daily stack",
    },
    {
      n: "D",
      to: "/changelog",
      name: es ? "Changelog" : "Changelog",
      note: es ? "Historial de cambios de este sitio" : "Change history of this site",
    },
  ];

  const rowClass =
    "group grid grid-cols-[2.5rem_1fr] sm:grid-cols-[2.5rem_11rem_1fr] items-baseline gap-x-4 gap-y-0.5 border-b border-line-subtle py-3 text-left transition-colors hover:bg-surface-1";

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      aria-label={es ? "Índice del expediente" : "File index"}
      className="border-t border-line-subtle pt-10 pb-4"
    >
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <p className="font-mono text-2xs uppercase tracking-mono text-ink-faint">
          {es ? "Índice del expediente" : "File index"}
        </p>
        {/* Pronóstico explícito: el costo de atención se publica de entrada. */}
        <p className="font-mono text-2xs uppercase tracking-mono text-ink-faint">
          {es
            ? "60 s para decidir · 7 min si lo leés entero"
            : "60 s to decide · 7 min to read it all"}
        </p>
      </div>

      <div className="border-t border-line-DEFAULT">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} onClick={scrollTo(s.id)} className={rowClass}>
            <span className="font-mono text-2xs text-ink-faint">{s.n}</span>
            <span className="text-sm text-ink-primary group-hover:text-accent transition-colors">
              {s.name}
            </span>
            <span className="col-span-2 sm:col-span-1 text-xs text-ink-muted">
              {s.note}
            </span>
          </a>
        ))}

        {annexes.map((a) => (
          <Link key={a.to} to={a.to} className={rowClass}>
            <span className="font-mono text-2xs text-accent">{a.n}</span>
            <span className="text-sm text-ink-primary group-hover:text-accent transition-colors">
              {a.name} ↗
            </span>
            <span className="col-span-2 sm:col-span-1 text-xs text-ink-muted">
              {a.note}
            </span>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}
