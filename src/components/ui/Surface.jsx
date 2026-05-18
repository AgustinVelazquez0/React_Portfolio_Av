/**
 * AV Surface — card / container primitiva con hairline border.
 * Reemplaza los shadow-[0_0_15px_rgba(...)] con borde 1px limpio.
 */

const toneClasses = {
  base: "bg-surface-0",
  raised: "bg-surface-1",
  deep: "bg-surface-2",
  contrast: "bg-ink-primary text-surface-0",
  transparent: "bg-transparent",
};

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
  xl: "p-10",
};

const radiusClasses = {
  sm: "rounded-md",
  md: "rounded-lg",
  lg: "rounded-xl",
  xl: "rounded-2xl",
};

export default function Surface({
  as: Component = "div",
  tone = "base",
  padding = "md",
  radius = "lg",
  bordered = true,
  hoverable = false,
  className = "",
  children,
  ...rest
}) {
  return (
    <Component
      className={[
        toneClasses[tone],
        paddingClasses[padding],
        radiusClasses[radius],
        bordered ? "border border-line-DEFAULT" : "",
        hoverable
          ? "transition-all duration-base ease-standard hover:border-line-strong hover:-translate-y-0.5 hover:shadow-medium"
          : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {children}
    </Component>
  );
}
