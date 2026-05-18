import { forwardRef } from "react";

/**
 * AV Button — sistema único de botones.
 *
 * Variantes:
 *   primary   — acento sólido (CTA principal)
 *   secondary — outline neutro
 *   ghost     — fondo transparente con hover sutil
 *   link      — texto subrayado
 *   accent    — acento outline
 *   danger    — destructivo
 *
 * Sizes: xs | sm | md | lg
 *
 * Reemplaza los ~30 botones inline con clases mezcladas que había en el proyecto.
 */

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium tracking-snug " +
  "select-none whitespace-nowrap relative " +
  "transition-colors duration-base ease-standard " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 " +
  "focus-visible:ring-accent focus-visible:ring-offset-surface-0 " +
  "disabled:opacity-50 disabled:cursor-not-allowed " +
  "active:scale-[0.98] active:transition-transform active:duration-fast";

const sizeClasses = {
  xs: "h-7 px-2.5 text-xs rounded-md",
  sm: "h-8 px-3 text-sm rounded-md",
  md: "h-10 px-4 text-sm rounded-lg",
  lg: "h-12 px-6 text-base rounded-lg",
};

const variantClasses = {
  primary:
    "bg-ink-primary text-surface-0 hover:bg-ink-secondary " +
    "shadow-soft",
  accent:
    "bg-accent text-accent-ink hover:bg-accent-soft " +
    "shadow-soft",
  secondary:
    "bg-transparent text-ink-primary " +
    "border border-line-DEFAULT hover:border-line-strong hover:bg-surface-1",
  ghost:
    "bg-transparent text-ink-secondary hover:text-ink-primary hover:bg-surface-1",
  link:
    "bg-transparent text-ink-primary underline underline-offset-4 " +
    "decoration-line-strong hover:decoration-accent decoration-1 px-0 h-auto",
  danger:
    "bg-signal-danger text-white hover:bg-red-700 shadow-soft",
};

const Button = forwardRef(function Button(
  {
    as: Component = "button",
    variant = "secondary",
    size = "md",
    className = "",
    leadingIcon: LeadingIcon,
    trailingIcon: TrailingIcon,
    children,
    type,
    ...rest
  },
  ref
) {
  const finalType = Component === "button" ? type ?? "button" : type;

  return (
    <Component
      ref={ref}
      type={finalType}
      className={[
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {LeadingIcon ? (
        <LeadingIcon className="shrink-0" aria-hidden />
      ) : null}
      {children}
      {TrailingIcon ? (
        <TrailingIcon className="shrink-0" aria-hidden />
      ) : null}
    </Component>
  );
});

export default Button;
