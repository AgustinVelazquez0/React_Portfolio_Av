import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa6";
import { useTranslation } from "../../hooks/useTranslation";

/**
 * DemoVideo — video bajo clic explícito.
 *
 * El archivo no se descarga hasta que alguien lo pide: preload="none" y el
 * <source> se monta recién al pulsar play. Sin autoplay y sin loop, que son
 * dos de los mecanismos que el dossier documenta como eliminación del punto
 * de salida natural.
 *
 * `nature` describe qué es la pieza. Un demo animado y una captura del
 * producto real no valen lo mismo, y la matriz de evidencia pierde sentido
 * si el video no se declara con el mismo criterio.
 */
export default function DemoVideo({ src, poster, label, nature, aspect = "1 / 1" }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const { language } = useTranslation();
  const es = language === "es";

  const start = () => {
    setPlaying(true);
    requestAnimationFrame(() => videoRef.current?.play());
  };

  return (
    <figure className="not-prose">
      <div
        className="relative overflow-hidden rounded-lg border border-line-DEFAULT bg-surface-2"
        style={{ aspectRatio: aspect }}
      >
        {playing ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            controls
            playsInline
            preload="none"
            className="h-full w-full object-contain"
          />
        ) : (
          <button
            type="button"
            onClick={start}
            aria-label={`${es ? "Reproducir" : "Play"}: ${label}`}
            className="group absolute inset-0 h-full w-full"
          >
            <img
              src={poster}
              alt=""
              loading="lazy"
              className="h-full w-full object-contain"
            />
            <span className="absolute inset-0 flex items-center justify-center bg-ink-primary/25 transition-colors group-hover:bg-ink-primary/10">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-black/45 text-white backdrop-blur-sm transition-transform group-hover:scale-105">
                <FaPlay className="ml-0.5" aria-hidden />
              </span>
            </span>
          </button>
        )}
      </div>

      <figcaption className="mt-2 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className="text-xs text-ink-muted">{label}</span>
        {/* Declarar la naturaleza de la pieza: evita que una animación se lea
            como si fuera una captura del producto en funcionamiento. */}
        <span className="font-mono text-2xs uppercase tracking-mono text-ink-faint">
          {nature}
        </span>
      </figcaption>
    </figure>
  );
}
