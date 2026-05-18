/**
 * AV Tag — chip neutro tipo Linear/Vercel.
 * Reemplaza las badges con boxShadow glow del proyecto previo.
 */

const variantClasses = {
  neutral:
    "bg-surface-1 text-ink-secondary border border-line-DEFAULT",
  accent:
    "bg-accent/10 text-accent border border-accent/30",
  outline:
    "bg-transparent text-ink-secondary border border-line-strong",
  mono:
    "bg-transparent text-ink-muted border border-line-subtle font-mono",
  live:
    "bg-signal-success/10 text-signal-success border border-signal-success/30",
};

const sizeClasses = {
  xs: "h-5 px-1.5 text-[10px]",
  sm: "h-6 px-2 text-xs",
  md: "h-7 px-2.5 text-xs",
};

export default function Tag({
  children,
  variant = "neutral",
  size = "sm",
  dot = false,
  className = "",
  ...rest
}) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full font-medium tracking-snug",
        "transition-colors duration-fast ease-standard",
        sizeClasses[size],
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {dot ? (
        <span
          aria-hidden
          className={`w-1.5 h-1.5 rounded-full ${
            variant === "live"
              ? "bg-signal-success animate-pulse"
              : variant === "accent"
                ? "bg-accent"
                : "bg-ink-muted"
          }`}
        />
      ) : null}
      {children}
    </span>
  );
}
