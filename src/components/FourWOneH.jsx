import { motion, useReducedMotion } from 'framer-motion'
import { FileText, MapPin, Users, HelpCircle, Wrench, FileSearch } from 'lucide-react'

/**
 * 4W + 1H method diagram — a central "KASUS" node ringed by five aspect nodes
 * on a perfect pentagon.
 *
 * --- Geometry (single source of truth) ---------------------------------------
 * Everything lives in one 0..VB square coordinate system. The container is
 * `aspect-square`, so mapping a coordinate to a percentage (v / VB * 100) lands
 * on the SAME point for both layers: the SVG line layer (viewBox 0 0 VB VB) and
 * the absolutely-positioned HTML node layer. Angles start at -90° (What at the
 * top) and step 72° clockwise.
 *
 * Positioning vs animation are kept on SEPARATE elements on purpose: the
 * wrapper div owns `left/top + translate(-50%,-50%)` (never animated), the
 * inner motion.div only animates opacity/scale. Framer Motion writes an inline
 * `transform`, which would otherwise override the centering translate and push
 * every node half a diameter off its point.
 */
const VB = 800 // square coordinate space
const CX = VB / 2 // centre x
const CY = VB / 2 // centre y
const R_ORBIT = 270 // centre → satellite-centre distance
const R_CENTER = 118 // central node radius   (Ø 236 → 29.5% of container ≈ 190px @640px)
const R_BADGE = 40 // satellite badge radius (Ø 80  → 10%   of container ≈  64px @640px)
const GAP = 8 // breathing room so line caps stop just short of each circle

// Five aspects on the pentagon: angle_i = -90° + i*72°, p = centre + R*(cos,sin).
const NODES = [
  { key: 'what', label: 'What', icon: FileText, sub: 'Apa peristiwanya' },
  { key: 'where', label: 'Where', icon: MapPin, sub: 'Di mana & konteks wilayahnya' },
  { key: 'who', label: 'Who', icon: Users, sub: 'Siapa pelaku & korban' },
  { key: 'why', label: 'Why', icon: HelpCircle, sub: 'Mengapa & sila yang dilanggar' },
  { key: 'how', label: 'How', icon: Wrench, sub: 'Bagaimana dampak & penyelesaian' },
].map((n, i) => {
  const a = ((-90 + i * 72) * Math.PI) / 180
  const ux = Math.cos(a)
  const uy = Math.sin(a)
  return {
    ...n,
    x: CX + R_ORBIT * ux,
    y: CY + R_ORBIT * uy,
    // Line runs edge-to-edge along the radius: it leaves the central circle
    // and stops at the badge rim, so caps never pierce either circle.
    x1: CX + ux * (R_CENTER + GAP),
    y1: CY + uy * (R_CENTER + GAP),
    x2: CX + ux * (R_ORBIT - R_BADGE - GAP),
    y2: CY + uy * (R_ORBIT - R_BADGE - GAP),
    // Text sits on the side of the badge that faces AWAY from the centre
    // (top-half nodes → above, bottom-half → below) so it never crosses a line.
    textAbove: uy < 0,
  }
})

const pct = (v) => `${(v / VB) * 100}%`
const sizePct = (r) => `${((2 * r) / VB) * 100}%`

export default function FourWOneH() {
  const reduced = useReducedMotion()

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[640px]">
      {/* Layer 1 — connector lines, drawn in the shared viewBox */}
      <svg
        viewBox={`0 0 ${VB} ${VB}`}
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {NODES.map((n, i) => (
          <motion.line
            key={n.key}
            x1={n.x1}
            y1={n.y1}
            x2={n.x2}
            y2={n.y2}
            stroke="#D4A017"
            strokeWidth={2.5}
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={reduced ? { pathLength: 1, opacity: 0.65 } : { pathLength: 0, opacity: 0 }}
            whileInView={reduced ? undefined : { pathLength: 1, opacity: 0.65 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              pathLength: { duration: 0.7, delay: 0.25 + i * 0.12, ease: 'easeInOut' },
              opacity: { duration: 0.25, delay: 0.25 + i * 0.12 },
            }}
          />
        ))}
      </svg>

      {/* Layer 2 — central KASUS node, dead-centre of the square */}
      <div
        className="absolute z-30"
        style={{
          left: '50%',
          top: '50%',
          width: sizePct(R_CENTER),
          transform: 'translate(-50%,-50%)',
        }}
      >
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          className="flex aspect-square w-full flex-col items-center justify-center rounded-full bg-gradient-to-br from-merah to-merah-tua text-center text-putih shadow-[0_10px_30px_rgba(122,12,24,0.45)] ring-4 ring-emas/40"
        >
          <FileSearch
            strokeWidth={2.1}
            className="mb-1 h-[18%] w-[18%] text-emas-terang"
          />
          <span className="text-[clamp(0.7rem,2.4vw,1rem)] font-extrabold uppercase tracking-[0.18em]">
            Kasus
          </span>
          <span className="text-[clamp(0.55rem,1.7vw,0.7rem)] font-medium text-krem/70">
            ±80 kasus
          </span>
        </motion.div>
      </div>

      {/* Layer 2 — five aspect nodes, centred on their pentagon points */}
      {NODES.map((n, i) => {
        const Icon = n.icon
        return (
          <div
            key={n.key}
            className="absolute z-20"
            style={{
              left: pct(n.x),
              top: pct(n.y),
              width: sizePct(R_BADGE),
              transform: 'translate(-50%,-50%)',
            }}
          >
            <motion.div
              initial={reduced ? false : { opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: 'spring',
                stiffness: 240,
                damping: 18,
                delay: reduced ? 0 : 0.55 + i * 0.12,
              }}
              className="relative"
            >
              {/* Gold badge — its centre IS the pentagon point */}
              <div className="flex aspect-square w-full items-center justify-center rounded-full bg-emas-shine bg-[length:200%_auto] text-gelap shadow-emas-glow ring-2 ring-putih/70">
                <Icon strokeWidth={2.2} className="h-1/2 w-1/2" />
              </div>

              {/* Label + sub, on the outward side of the badge */}
              <div
                className={`absolute left-1/2 w-28 -translate-x-1/2 text-center sm:w-40 ${
                  n.textAbove
                    ? 'bottom-[calc(100%+0.45rem)]'
                    : 'top-[calc(100%+0.45rem)]'
                }`}
              >
                <p className="text-[clamp(0.72rem,2vw,0.95rem)] font-bold leading-tight text-merah-tua">
                  {n.label}
                </p>
                <p className="mt-0.5 text-[clamp(0.6rem,1.7vw,0.78rem)] leading-snug text-teks-gelap/65">
                  {n.sub}
                </p>
              </div>
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}
