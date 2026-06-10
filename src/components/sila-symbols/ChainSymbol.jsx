import { motion } from 'framer-motion'
import { DRAW, useDrawSvgProps, SYMBOL_STROKE } from './drawShared'

// Six links arranged in a ring, alternating round (manusia) and square
// (perempuan), echoing the Pancasila chain. Positions on a circle r≈24.
const LINKS = [
  { type: 'round', cx: 50, cy: 26 },
  { type: 'square', cx: 70.8, cy: 38 },
  { type: 'round', cx: 70.8, cy: 62 },
  { type: 'square', cx: 50, cy: 74 },
  { type: 'round', cx: 29.2, cy: 62 },
  { type: 'square', cx: 29.2, cy: 38 },
]

/** Sila 2 — rantai bulat-persegi berselang, gold line-art. */
export default function ChainSymbol({
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
      {LINKS.map((l, i) =>
        l.type === 'round' ? (
          <motion.circle key={i} variants={DRAW} cx={l.cx} cy={l.cy} r={10} />
        ) : (
          <motion.rect
            key={i}
            variants={DRAW}
            x={l.cx - 10}
            y={l.cy - 10}
            width={20}
            height={20}
            rx={4}
          />
        ),
      )}
    </motion.svg>
  )
}
