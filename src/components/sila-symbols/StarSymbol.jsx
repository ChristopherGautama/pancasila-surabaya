import { motion } from 'framer-motion'
import { DRAW, useDrawSvgProps, SYMBOL_STROKE } from './drawShared'

/** Sila 1 — bintang berujung lima (five-pointed star), gold line-art. */
export default function StarSymbol({
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
      <motion.path
        variants={DRAW}
        d="M50 11 L59.4 37.6 L88 37.9 L65.1 54.9 L73.5 81.9 L50 65.5 L26.5 81.9 L34.9 54.9 L12 37.9 L40.6 37.6 Z"
      />
    </motion.svg>
  )
}
