import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { FileText, MapPin, Users, HelpCircle, Wrench, FileSearch } from 'lucide-react'

/**
 * 4W + 1H method diagram.
 *
 * Desktop: a central "KASUS" node ringed by five aspect nodes. The connectors
 * from the centre to each node draw themselves (Framer Motion `pathLength`) when
 * the diagram scrolls into view; nodes pop in staggered. Hovering / focusing a
 * node reveals its short description in a tooltip.
 *
 * Mobile: the ring collapses into a clean vertical timeline with simple
 * connectors and the descriptions shown inline (no hover available).
 *
 * `cx`/`cy` are positions in the 0–100 SVG viewBox, reused as % for the HTML
 * node layer so the lines and the nodes line up exactly.
 */
const ASPECTS = [
  {
    key: 'what',
    label: 'What',
    icon: FileText,
    title: 'Apa peristiwanya',
    desc: 'Apa peristiwanya — jenis kasus yang terjadi.',
    cx: 50,
    cy: 12,
  },
  {
    key: 'where',
    label: 'Where',
    icon: MapPin,
    title: 'Di mana lokasinya',
    desc: 'Di mana lokasinya & konteks wilayahnya.',
    cx: 86.1,
    cy: 38.3,
  },
  {
    key: 'who',
    label: 'Who',
    icon: Users,
    title: 'Siapa yang terlibat',
    desc: 'Siapa pelaku dan korban yang terlibat.',
    cx: 72.3,
    cy: 80.7,
  },
  {
    key: 'why',
    label: 'Why',
    icon: HelpCircle,
    title: 'Mengapa terjadi',
    desc: 'Mengapa terjadi & sila mana yang dilanggar.',
    cx: 27.7,
    cy: 80.7,
  },
  {
    key: 'how',
    label: 'How',
    icon: Wrench,
    title: 'Bagaimana dampaknya',
    desc: 'Bagaimana dampaknya & upaya penyelesaiannya.',
    cx: 13.9,
    cy: 38.3,
  },
]

export default function FourWOneH() {
  const reduced = useReducedMotion()
  const [active, setActive] = useState(null)

  return (
    <div className="mx-auto w-full max-w-2xl">
      {/* ===== Desktop: radial diagram ===== */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[560px] md:block">
        {/* Connector lines (drawn behind the nodes) */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="fwoh-thread" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D4A017" />
              <stop offset="100%" stopColor="#E9C46A" />
            </linearGradient>
          </defs>
          {ASPECTS.map((a, i) => {
            const isActive = active === a.key
            return (
              <motion.line
                key={a.key}
                x1="50"
                y1="50"
                x2={a.cx}
                y2={a.cy}
                stroke="url(#fwoh-thread)"
                strokeWidth={isActive ? 1.3 : 0.7}
                strokeLinecap="round"
                initial={reduced ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
                whileInView={reduced ? undefined : { pathLength: 1, opacity: isActive ? 1 : 0.7 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  pathLength: { duration: 0.8, delay: 0.2 + i * 0.15, ease: 'easeInOut' },
                  opacity: { duration: 0.3 },
                }}
              />
            )
          })}
        </svg>

        {/* Centre node */}
        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: 'spring', stiffness: 200, damping: 16, delay: 0.1 }}
          className="absolute left-1/2 top-1/2 z-20 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gradient-to-br from-merah to-merah-tua text-center text-putih shadow-[0_10px_30px_rgba(122,12,24,0.45)] ring-4 ring-emas/40"
        >
          <FileSearch size={26} strokeWidth={2.1} className="mb-1 text-emas-terang" />
          <span className="text-sm font-extrabold uppercase tracking-[0.18em]">
            Kasus
          </span>
          <span className="text-[10px] font-medium text-krem/70">±80 kasus</span>
        </motion.div>

        {/* Aspect nodes */}
        {ASPECTS.map((a, i) => {
          const Icon = a.icon
          const isActive = active === a.key
          const tooltipAbove = a.cy > 50
          return (
            <div
              key={a.key}
              className="absolute"
              style={{
                left: `${a.cx}%`,
                top: `${a.cy}%`,
                zIndex: isActive ? 40 : 25,
              }}
            >
              <motion.button
                type="button"
                onMouseEnter={() => setActive(a.key)}
                onMouseLeave={() => setActive((c) => (c === a.key ? null : c))}
                onFocus={() => setActive(a.key)}
                onBlur={() => setActive((c) => (c === a.key ? null : c))}
                aria-label={`${a.label} — ${a.desc}`}
                initial={reduced ? false : { opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={reduced ? undefined : { scale: 1.08 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  type: 'spring',
                  stiffness: 240,
                  damping: 18,
                  delay: 0.5 + i * 0.15,
                }}
                className={`glass-light flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full text-center outline-none transition-shadow duration-300 focus-visible:ring-2 focus-visible:ring-emas ${
                  isActive ? 'shadow-emas-glow' : ''
                }`}
              >
                <span className="mb-1 flex h-9 w-9 items-center justify-center rounded-full bg-emas-shine bg-[length:200%_auto] text-gelap">
                  <Icon size={18} strokeWidth={2.2} />
                </span>
                <span className="text-sm font-bold text-merah-tua">{a.label}</span>
              </motion.button>

              {/* Hover / focus tooltip */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    role="tooltip"
                    initial={reduced ? { opacity: 1 } : { opacity: 0, y: tooltipAbove ? 6 : -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduced ? { opacity: 0 } : { opacity: 0, y: tooltipAbove ? 6 : -6 }}
                    transition={{ duration: 0.22 }}
                    className={`pointer-events-none absolute left-1/2 z-50 w-52 -translate-x-1/2 rounded-xl bg-gelap/95 px-4 py-3 text-center shadow-xl ring-1 ring-emas/30 backdrop-blur-sm ${
                      tooltipAbove ? 'bottom-[calc(50%+3.25rem)]' : 'top-[calc(50%+3.25rem)]'
                    }`}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-emas-terang">
                      {a.label}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-krem/90">{a.desc}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>

      {/* ===== Mobile: vertical timeline ===== */}
      <div className="md:hidden">
        {/* Centre node */}
        <div className="mb-5 flex justify-center">
          <div className="flex items-center gap-2 rounded-full bg-gradient-to-br from-merah to-merah-tua px-5 py-2.5 text-putih shadow-[0_8px_24px_rgba(122,12,24,0.4)] ring-2 ring-emas/40">
            <FileSearch size={18} className="text-emas-terang" />
            <span className="text-sm font-extrabold uppercase tracking-[0.18em]">
              Kasus
            </span>
            <span className="text-[11px] font-medium text-krem/70">±80 kasus</span>
          </div>
        </div>

        <motion.ul
          variants={{ hidden: {}, show: { transition: { staggerChildren: reduced ? 0 : 0.12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="relative space-y-3"
        >
          {/* simple vertical connector running through the icon column */}
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[2.4rem] top-6 w-[2px] -translate-x-1/2 bg-gradient-to-b from-emas/60 via-emas/30 to-emas/10"
          />
          {ASPECTS.map((a) => {
            const Icon = a.icon
            return (
              <motion.li
                key={a.key}
                variants={
                  reduced
                    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
                    : {
                        hidden: { opacity: 0, y: 18 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                      }
                }
                className="glass-light relative flex items-start gap-4 rounded-2xl p-4"
              >
                <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emas-shine bg-[length:200%_auto] text-gelap ring-4 ring-krem">
                  <Icon size={20} strokeWidth={2.2} />
                </span>
                <div>
                  <p className="text-sm font-bold text-merah-tua">{a.label}</p>
                  <p className="text-sm leading-snug text-teks-gelap/75">{a.desc}</p>
                </div>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </div>
  )
}
