/**
 * AV Motion System — 3 easings × 3 durations.
 * Inspirado en Material 3 y Linear: predecible, calibrado, sin springs salvajes.
 *
 * Uso con framer-motion:
 *   <motion.div initial="hidden" animate="visible" variants={fadeUp}>
 *   <motion.div transition={transitions.standard}>
 */

// ---- Easings (alineados con CSS vars en tokens.css) ----
export const easing = {
  emphasized: [0.2, 0, 0, 1],
  standard: [0.4, 0, 0.2, 1],
  decel: [0, 0, 0.2, 1],
};

// ---- Durations en segundos (framer-motion) ----
export const duration = {
  fast: 0.12,
  base: 0.18,
  slow: 0.28,
};

// ---- Transitions canónicas ----
export const transitions = {
  fast: { duration: duration.fast, ease: easing.standard },
  standard: { duration: duration.base, ease: easing.standard },
  slow: { duration: duration.slow, ease: easing.emphasized },
  enter: { duration: duration.slow, ease: easing.decel },
  exit: { duration: duration.fast, ease: easing.standard },
};

// ---- Variants reutilizables ----
export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: transitions.enter },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.standard },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: transitions.enter },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: transitions.enter },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: transitions.enter },
};

// Stagger container helper
export const stagger = (childrenDelay = 0.06) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: childrenDelay, delayChildren: 0.04 },
  },
});

// Viewport común para whileInView (consistente en toda la app)
export const viewport = { once: true, margin: "-80px" };

// Hover/tap subtle (sin spring salvaje)
export const hoverLift = {
  whileHover: { y: -2, transition: transitions.fast },
  whileTap: { y: 0, scale: 0.99, transition: transitions.fast },
};
