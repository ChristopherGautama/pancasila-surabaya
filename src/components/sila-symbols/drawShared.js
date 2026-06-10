import { useReducedMotion } from 'framer-motion'

// Shared variants for the "draw-on" effect. Apply to every stroke element
// (motion.path / motion.circle / motion.rect / motion.line) inside a symbol;
// Framer Motion animates `pathLength` from 0 → 1 to trace the line art.
export const DRAW = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.1, ease: 'easeInOut' },
      opacity: { duration: 0.25 },
    },
  },
}

/**
 * Returns the motion props for a symbol's root <motion.svg>. By default the
 * symbol draws itself when scrolled into view (once) and staggers its strokes.
 * Respects prefers-reduced-motion (renders fully drawn, no animation).
 * Any `extra` props (e.g. consumer overrides of initial/animate) win.
 */
export function useDrawSvgProps(extra = {}) {
  const reduced = useReducedMotion()
  if (reduced) {
    return { initial: 'visible', animate: 'visible', ...extra }
  }
  return {
    initial: 'hidden',
    whileInView: 'visible',
    viewport: { once: true, amount: 0.5 },
    transition: { staggerChildren: 0.18 },
    ...extra,
  }
}

// Default gold line-art styling shared by all five symbols.
export const SYMBOL_STROKE = '#D4A017'
