import { motion } from 'framer-motion'
import { DRAW, useDrawSvgProps, SYMBOL_STROKE } from './drawShared'

// Cotton bolls (kapas) — small circles at the tips of the right stalk.
const BOLLS = [
  { cx: 61, cy: 22, r: 4 },
  { cx: 66, cy: 37, r: 3.5 },
  { cx: 55, cy: 52, r: 3.5 },
]

/** Sila 5 — padi & kapas bersilang (crossed rice & cotton), gold line-art. */
export default function PadiKapasSymbol({
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
      {/* Padi (rice) — left stalk */}
      <motion.path variants={DRAW} d="M50 80 C45 62 41 44 39 25" />
      {/* Padi grains */}
      <motion.path
        variants={DRAW}
        d="M39 25 Q34 22 36 17 M40 32 Q34 31 33 25 M41 40 Q35 39 34 33 M43 49 Q37 48 36 42 M45 58 Q39 57 38 51"
      />
      {/* Kapas (cotton) — right stalk */}
      <motion.path variants={DRAW} d="M50 80 C55 62 59 44 61 25" />
      {/* Kapas leaves */}
      <motion.path variants={DRAW} d="M59 33 Q66 30 68 24 M57 47 Q64 45 66 39" />
      {/* Cotton bolls */}
      {BOLLS.map((b, i) => (
        <motion.circle key={i} variants={DRAW} cx={b.cx} cy={b.cy} r={b.r} />
      ))}
      {/* Tie at the crossing */}
      <motion.path variants={DRAW} d="M45 79 Q50 85 55 79" />
    </motion.svg>
  )
}
