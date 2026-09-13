import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/useTranslation";
import { fadeUp, viewport } from "../../lib/motion";

/**
 * EvidenceMatrix — la matriz de mecanismos del dossier, vuelta contra mí mismo.
 *
 * El dossier califica cada mecanismo por grado de evidencia y publica también
 * una sección de higiene epistémica separando lo documentado de lo conjetural.
 * Esta sección hace lo mismo con mis propias afirmaciones: qué las respalda y
 * cuánto pesa ese respaldo, incluidas las que son solo mi palabra.
 *
 * Es la pieza que se recuerda, y el motivo es el efecto de aislamiento: nadie
 * declara sus propios puntos débiles en un portfolio. Hacerlo es la única
 * forma de que el resto de las afirmaciones se lean como verificables y no
 * como marketing.
 */
const GRADES = {
  high: {
    tone: "text-signal-success border-signal-success/50",
    es: "Alta",
    en: "High",
  },
  medium: {
    tone: "text-signal-warning border-signal-warning/50",
    es: "Media",
    en: "Medium",
  },
  low: {
    tone: "text-ink-faint border-line-strong",
    es: "Declarativa",
    en: "Declarative",
  },
};

const CLAIMS = [
  {
    grade: "high",
    claim: {
      es: "Turnia está en producción con dominio propio",
      en: "Turnia is in production on its own domain",
    },
    backing: {
      es: "turniagenda.com responde ahora mismo. Comprobable en un clic.",
      en: "turniagenda.com responds right now. Verifiable in one click.",
    },
  },
  {
    grade: "high",
    claim: {
      es: "Arbix está en producción con dominio propio",
      en: "Arbix is in production on its own domain",
    },
    backing: {
      es: "getarbix.com responde ahora mismo.",
      en: "getarbix.com responds right now.",
    },
  },
  {
    grade: "high",
    claim: {
      es: "Mental está publicada en App Store y Play Store",
      en: "Mental is published on the App Store and Play Store",
    },
    backing: {
      es: "Fichas públicas en ambas tiendas, enlazadas en su anexo.",
      en: "Public listings on both stores, linked from its exhibit.",
    },
  },
  {
    grade: "high",
    claim: {
      es: "La actividad de GitHub que se ve en este sitio es real",
      en: "The GitHub activity shown on this site is real",
    },
    backing: {
      es: "Se lee en vivo de la API pública de GitHub, sin caché editable.",
      en: "Read live from GitHub's public API, with no editable cache.",
    },
  },
  {
    grade: "medium",
    claim: {
      es: "Cobros con Stripe, MercadoPago, Paddle y PayPal funcionando",
      en: "Working payments with Stripe, MercadoPago, Paddle and PayPal",
    },
    backing: {
      es: "El checkout se puede recorrer en vivo, pero el código que lo sostiene es privado.",
      en: "The checkout can be walked through live, but the code behind it is private.",
    },
  },
  {
    grade: "low",
    claim: {
      es: "12 herramientas del agente, 11 evals con 26 asserts, 223 tests",
      en: "12 agent tools, 11 evals with 26 asserts, 223 tests",
    },
    backing: {
      es: "El repositorio es privado. Estos números son mi palabra: los abro en una llamada o en una revisión de código compartida.",
      en: "The repository is private. These numbers are my word: I open them on a call or in a shared code review.",
    },
  },
  {
    grade: "low",
    claim: {
      es: "Trabajo freelance en curso para SOMMOS",
      en: "Ongoing freelance work for SOMMOS",
    },
    backing: {
      es: "El producto todavía no se publicó y el nombre de la clienta está reservado. No hay nada que auditar por ahora.",
      en: "The product has not launched and the client's name is withheld. There is nothing to audit yet.",
    },
  },
];

export default function EvidenceMatrix() {
  const { language } = useTranslation();
  const es = language === "es";

  return (
    <section
      id="evidence-matrix"
      className="border-t border-line-subtle pt-16 pb-12"
    >
      <header className="mb-8">
        <p className="font-mono text-2xs uppercase tracking-mono text-ink-faint mb-3">
          {es ? "Higiene epistémica" : "Epistemic hygiene"}
        </p>
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="font-display text-4xl lg:text-5xl text-ink-primary tracking-tightest leading-none"
        >
          {es ? "Qué de todo esto podés verificar" : "What of this you can verify"}
        </motion.h2>
        <p className="mt-4 max-w-xl text-sm text-ink-muted leading-relaxed">
          {es
            ? "Todo portfolio afirma. Casi ninguno dice cuánto pesa cada afirmación. Acá están las mías con lo que las respalda, incluidas las dos que hoy son solo mi palabra."
            : "Every portfolio makes claims. Almost none say how much each claim weighs. Here are mine with what backs them, including the two that are, today, only my word."}
        </p>
      </header>

      <div className="border-t border-line-DEFAULT">
        {CLAIMS.map((c, i) => {
          const g = GRADES[c.grade];
          return (
            <motion.div
              key={c.claim.en}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: Math.min(i * 0.04, 0.2) }}
              className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr_7rem] items-baseline gap-x-6 gap-y-1 border-b border-line-subtle py-4"
            >
              <p className="text-sm text-ink-primary">{es ? c.claim.es : c.claim.en}</p>
              <p className="text-xs text-ink-muted leading-relaxed">
                {es ? c.backing.es : c.backing.en}
              </p>
              <span
                className={[
                  "justify-self-start md:justify-self-end shrink-0",
                  "border-2 rounded-sm px-1.5 py-0.5",
                  "font-mono text-[10px] uppercase tracking-mono font-semibold",
                  g.tone,
                ].join(" ")}
              >
                {es ? g.es : g.en}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
