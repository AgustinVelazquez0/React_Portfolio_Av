import { useState } from "react";

/**
 * Redacted — barra de tachadura de expediente.
 *
 * Cubre un dato que no se puede publicar. El nombre real nunca aparece:
 * lo que el clic revela es el motivo de la reserva, no el dato.
 * Se abre con clic y no con hover, para que nadie la dispare sin querer.
 */
export default function Redacted({ width = "7ch", reason, label }) {
  const [open, setOpen] = useState(false);

  return (
    <span className="inline-flex flex-wrap items-baseline gap-x-2">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={reason}
        title={reason}
        className="group relative inline-block translate-y-[0.1em] cursor-help rounded-[1px] bg-ink-primary align-baseline outline-none ring-accent/60 transition-opacity hover:opacity-80 focus-visible:ring-2"
        style={{ width, height: "0.95em" }}
      >
        {/* Textura de tinta: la barra no es un rectángulo plano perfecto */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[1px] opacity-30 mix-blend-screen"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, transparent 0 3px, rgba(255,255,255,0.5) 3px 4px)",
          }}
        />
      </button>

      {label ? (
        <span className="font-mono text-2xs uppercase tracking-mono text-ink-faint">
          {label}
        </span>
      ) : null}

      {open ? (
        <span className="block w-full pt-1 font-mono text-2xs leading-relaxed text-ink-muted">
          {reason}
        </span>
      ) : null}
    </span>
  );
}
