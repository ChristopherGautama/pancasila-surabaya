import { motion } from 'framer-motion'
import { DRAW, useDrawSvgProps, SYMBOL_STROKE } from './drawShared'

/** Sila 3 — pohon beringin (banyan tree) with canopy, trunk & aerial roots. */
export default function TreeSymbol({
  size = 96,
  className = '',
  stroke = SYMBOL_STROKE,
  strokeWidth = 3.5,
  ...rest
}) {
  const svgProps = useDrawSvgProps(rest)
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
      {...svgProps}
    >
      {/* Canopy */}
      <motion.path
        variants={DRAW}
        d="M22 46 C16 24 40 12 50 16 C60 12 84 24 78 46 Q72 44 68 48 Q62 44 56 48 Q50 44 44 48 Q38 44 32 48 Q28 44 22 46 Z"
      />
      {/* Trunk */}
      <motion.path variants={DRAW} d="M46 47 L46 78 M54 47 L54 78" />
      {/* Aerial roots hanging from the canopy */}
      <motion.path variants={DRAW} d="M34 47 L34 58 M50 47 L50 56 M66 47 L66 58" />
      {/* Root flare + ground line */}
      <motion.path variants={DRAW} d="M38 79 Q50 72 62 79 M30 83 L70 83" />
    </motion.svg>
  )
}
