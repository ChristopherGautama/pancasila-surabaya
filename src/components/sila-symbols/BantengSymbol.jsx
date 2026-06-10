import { motion } from 'framer-motion'
import { DRAW, useDrawSvgProps, SYMBOL_STROKE } from './drawShared'

/** Sila 4 — kepala banteng (bull's head) front view, gold line-art. */
export default function BantengSymbol({
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
      {/* Face */}
      <motion.path
        variants={DRAW}
        d="M50 32 C38 30 31 42 33 55 C35 71 44 80 50 80 C56 80 65 71 67 55 C69 42 62 30 50 32 Z"
      />
      {/* Horns */}
      <motion.path
        variants={DRAW}
        d="M35 35 C24 28 13 31 9 21 M65 35 C76 28 87 31 91 21"
      />
      {/* Eyes */}
      <motion.path
        variants={DRAW}
        d="M40 50 Q43 47 46 50 M54 50 Q57 47 60 50"
      />
      {/* Muzzle + nostrils */}
      <motion.path
        variants={DRAW}
        d="M44 67 Q50 71 56 67 M47 63 L47 66 M53 63 L53 66"
      />
    </motion.svg>
  )
}
