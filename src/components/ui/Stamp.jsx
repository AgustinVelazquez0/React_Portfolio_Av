import { motion } from "framer-motion";

/**
 * AV Stamp — sello de expediente.
 *
 * El grado de evidencia se imprime como un sello de goma en vez de un chip:
 * borde grueso, versalita espaciada y una inclinación mínima. La inclinación
 * se deriva del texto para que cada sello caiga siempre igual y no baile
 * entre renders.
 *
 * tone: production | live | exercise | neutral
 */
const toneClasses = {
  production: "text-signal-success border-signal-success/50",
  live: "text-signal-warning border-signal-warning/50",
  exercise: "text-ink-faint border-line-strong",
  neutral: "text-ink-muted border-line-DEFAULT",
};

/** Inclinación estable por sello: -2, -1, 1 o 2 grados según el texto. */
function tiltFor(text) {
  let sum = 0;
  for (let i = 0; i < text.length; i += 1) sum += text.charCodeAt(i);
  return [-2, -1, 1, 2][sum % 4];
}

export default function Stamp({
  children,
  tone = "neutral",
  title,
  className = "",
}) {
  const label = String(children);
  const tilt = tiltFor(label);
  return (
    <motion.span
      title={title}
      initial={{ opacity: 0, scale: 1.5, rotate: tilt }}
      whileInView={{ opacity: 0.9, scale: 1, rotate: tilt }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.18, ease: [0.2, 0, 0, 1] }}
      className={[
        "inline-flex items-center gap-1.5 shrink-0",
        "border-2 rounded-sm px-1.5 py-0.5",
        "font-mono text-[10px] uppercase tracking-mono font-semibold",
        toneClasses[tone],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span className="h-1 w-1 rounded-full bg-current" aria-hidden />
      {label}
    </motion.span>
  );
}
