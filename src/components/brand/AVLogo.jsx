/**
 * AVLogo — official mark of the AV brand.
 *
 * variants:
 *  - "monogram"   → just the AV mark, uses currentColor (inherits text color)
 *  - "horizontal" → mark + name + role (for navbar, headers)
 *  - "icon"       → cyan square with the dark mark inside (for badges)
 *
 * Brand spec: see /public/brand/README.md
 */
function AVLogo({
  variant = "monogram",
  className = "",
  title = "AV — Agustin Velazquez",
  showRole = true,
}) {
  if (variant === "icon") {
    return (
      <svg
        viewBox="0 0 64 64"
        className={className}
        role="img"
        aria-label={title}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="64" rx="14" fill="#22D3EE" />
        <g transform="translate(8, 18)">
          <path
            d="M0 28 L12 0 L24 28 M24 0 L36 28 L48 0"
            stroke="#0A0A0A"
            strokeWidth="5"
            strokeLinejoin="miter"
            strokeLinecap="square"
          />
        </g>
      </svg>
    );
  }

  if (variant === "horizontal") {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <svg
          viewBox="0 0 120 80"
          className="h-8 w-auto text-cyan-400"
          role="img"
          aria-label={title}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 75 L32 5 L59 75 M61 5 L88 75 L115 5"
            stroke="currentColor"
            strokeWidth="11"
            strokeLinejoin="miter"
            strokeLinecap="square"
          />
        </svg>
        <div className="flex flex-col leading-none">
          <span className="font-display font-semibold text-base tracking-tight text-neutral-900 dark:text-white">
            Agustin Velazquez
          </span>
          {showRole && (
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400 mt-1">
              Full-Stack Engineer
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 120 80"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 75 L32 5 L59 75 M61 5 L88 75 L115 5"
        stroke="currentColor"
        strokeWidth="11"
        strokeLinejoin="miter"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default AVLogo;
