import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import {
  Layers,
  Zap,
  HeartHandshake,
  X,
  MousePointerClick,
  Pill,
  Waves,
  Baby,
  Flame,
  Car,
  Lock,
  HeartCrack,
  Users,
  Swords,
  Sprout,
  Banknote,
  Scale,
  GraduationCap,
  AlertTriangle,
} from 'lucide-react'
import { WILAYAH, SILA_NAMES } from '../data/wilayah'

/**
 * Stylised SVG map of Surabaya split into five clickable regions, arranged by
 * real compass bearing: Utara (north, coastal) on top, Pusat in the middle,
 * Timur on the right, Selatan at the bottom, Barat on the left.
 *
 * Geometry lives here (presentation); the textual data lives in data/wilayah.js.
 * Each region carries its SVG `path`, the centre point for its label, a short
 * label, and a red→maroon gradient pair.
 */
const GEO = {
  utara: {
    short: 'Utara',
    path: 'M36 156 L36 82 Q36 66 52 66 C110 50 150 82 210 66 C270 50 320 82 392 66 Q444 60 444 82 L444 156 Z',
    label: { x: 240, y: 116 },
    from: '#D6202E',
    to: '#A8101C',
  },
  barat: {
    short: 'Barat',
    path: 'M50 168 L154 168 Q168 168 168 182 L168 286 Q168 300 154 300 L50 300 Q36 300 36 286 L36 182 Q36 168 50 168 Z',
    label: { x: 102, y: 238 },
    from: '#C2182A',
    to: '#8E0F1C',
  },
  pusat: {
    short: 'Pusat',
    path: 'M194 168 L286 168 Q300 168 300 182 L300 286 Q300 300 286 300 L194 300 Q180 300 180 286 L180 182 Q180 168 194 168 Z',
    label: { x: 240, y: 238 },
    from: '#7C0D18',
    to: '#52060F',
  },
  timur: {
    short: 'Timur',
    path: 'M326 168 L430 168 Q444 168 444 182 L444 286 Q444 300 430 300 L326 300 Q312 300 312 286 L312 182 Q312 168 326 168 Z',
    label: { x: 378, y: 238 },
    from: '#B01522',
    to: '#7E0C18',
  },
  selatan: {
    short: 'Selatan',
    path: 'M36 312 L444 312 L444 406 Q444 430 420 430 L60 430 Q36 430 36 406 Z',
    label: { x: 240, y: 374 },
    from: '#9E1220',
    to: '#6E0A15',
  },
}

// Render order — Utara (top), then the middle row, then Selatan.
const ORDER = ['utara', 'barat', 'pusat', 'timur', 'selatan']

const byId = (id) => WILAYAH.find((w) => w.id === id)

// Pick a small lucide icon that fits each "kasus" by keyword.
function iconForKasus(text) {
  const t = text.toLowerCase()
  if (/narkoba|sabu/.test(t)) return Pill
  if (/banjir|rob/.test(t)) return Waves
  if (/gizi|balita/.test(t)) return Baby
  if (/terror|\bbom|ngebom|pengebom|pembakaran|bakar/.test(t)) return Flame
  if (/pelecehan|pencabulan|perundungan/.test(t)) return HeartCrack
  if (/penyekapan|sekap/.test(t)) return Lock
  if (/curanmor|properti|pencurian|pembobolan|kabel|begal/.test(t)) return Car
  if (/tawuran|bentrok|suporter|gangster/.test(t)) return Users
  if (/pembunuhan|carok|penganiayaan|kekerasan/.test(t)) return Swords
  if (/agraria|lahan|waduk|sempadan|alih fungsi|padel/.test(t)) return Sprout
  if (/penipuan|pinjol|umkm/.test(t)) return Banknote
  if (/intoleransi|rumah ibadah|pengajian|diskriminasi|stereotip|etnis|papua/.test(t))
    return Scale
  if (/guru|siswa|sekolah|pelajar|didik/.test(t)) return GraduationCap
  return AlertTriangle
}

// Track the lg breakpoint so the panel can slide from the right on desktop
// and from below on smaller screens.
function useIsDesktop() {
  const [desktop, setDesktop] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => setDesktop(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return desktop
}

export default function SurabayaMap() {
  const reduced = useReducedMotion()
  const isDesktop = useIsDesktop()
  const [selectedId, setSelectedId] = useState('pusat') // default: Pusat
  const [hoveredId, setHoveredId] = useState(null)

  const selected = selectedId ? byId(selectedId) : null
  const anySelected = selectedId != null

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">
      {/* ===== Map ===== */}
      <div className="lg:w-[55%]">
        <motion.svg
          viewBox="0 0 480 460"
          className="h-auto w-full"
          role="img"
          aria-label="Peta stilasi lima kawasan Kota Surabaya"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <defs>
            {ORDER.map((id) => (
              <linearGradient key={id} id={`grad-${id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={GEO[id].from} />
                <stop offset="100%" stopColor={GEO[id].to} />
              </linearGradient>
            ))}
          </defs>

          {/* Selected region drawn last so its glow/pulse sits on top. */}
          {[...ORDER]
            .sort((a, b) => (a === selectedId ? 1 : 0) - (b === selectedId ? 1 : 0))
            .map((id) => {
              const g = GEO[id]
              const w = byId(id)
              const i = ORDER.indexOf(id)
              const isSel = selectedId === id
              const isHover = hoveredId === id
              const active = isSel || isHover

              const select = () => setSelectedId(id)

              return (
                <motion.g
                  key={id}
                  initial={reduced ? false : { opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: reduced ? 0 : 0.15 + i * 0.08 }}
                >
                  <motion.g
                    role="button"
                    tabIndex={0}
                    aria-pressed={isSel}
                    aria-label={`${w.nama}, ${w.jumlahKasus}. Klik untuk detail.`}
                    onClick={select}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault()
                        select()
                      }
                    }}
                    onMouseEnter={() => setHoveredId(id)}
                    onMouseLeave={() => setHoveredId((c) => (c === id ? null : c))}
                    onFocus={() => setHoveredId(id)}
                    onBlur={() => setHoveredId((c) => (c === id ? null : c))}
                    style={{
                      cursor: 'pointer',
                      outline: 'none',
                      transformBox: 'view-box',
                      transformOrigin: `${g.label.x}px ${g.label.y}px`,
                    }}
                    animate={{
                      scale: reduced ? 1 : isSel ? 1.05 : isHover ? 1.03 : 1,
                      opacity: anySelected && !isSel ? 0.55 : 1,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  >
                    {/* Pulsing gold ring while selected */}
                    {isSel && !reduced && (
                      <motion.path
                        d={g.path}
                        fill="none"
                        stroke="#E9C46A"
                        strokeWidth={2.5}
                        style={{
                          transformBox: 'view-box',
                          transformOrigin: `${g.label.x}px ${g.label.y}px`,
                        }}
                        initial={{ opacity: 0.55, scale: 1 }}
                        animate={{ opacity: [0.55, 0], scale: [1, 1.12] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
                      />
                    )}

                    {/* Region fill */}
                    <path
                      d={g.path}
                      fill={`url(#grad-${id})`}
                      stroke={active ? '#E9C46A' : 'rgba(212,160,23,0.25)'}
                      strokeWidth={active ? 3 : 1.5}
                      style={{ transition: 'stroke 0.25s, stroke-width 0.25s' }}
                    />

                    {/* Brighten overlay on hover / select */}
                    <motion.path
                      d={g.path}
                      fill="#ffffff"
                      pointerEvents="none"
                      initial={false}
                      animate={{ opacity: active ? 0.16 : 0 }}
                      transition={{ duration: 0.25 }}
                    />

                    {/* Label */}
                    <text
                      x={g.label.x}
                      y={g.label.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      pointerEvents="none"
                      style={{
                        fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                        fontWeight: 800,
                        fontSize: 21,
                        letterSpacing: '0.04em',
                        fill: '#FBF7F0',
                        opacity: active ? 1 : 0.92,
                      }}
                    >
                      {g.short}
                    </text>
                  </motion.g>
                </motion.g>
              )
            })}
        </motion.svg>

        {/* Hint below the map */}
        <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs font-medium text-teks-gelap/55">
          <MousePointerClick size={15} className="text-emas" />
          Klik atau ketuk sebuah kawasan untuk melihat detailnya.
        </p>
      </div>

      {/* ===== Info panel ===== */}
      <div className="lg:w-[45%]">
        <AnimatePresence mode="wait">
          {selected ? (
            <InfoPanel
              key={selected.id}
              region={selected}
              color={GEO[selected.id].from}
              reduced={reduced}
              isDesktop={isDesktop}
              onClose={() => setSelectedId(null)}
            />
          ) : (
            <motion.div
              key="hint"
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="glass-light flex h-full min-h-[280px] flex-col items-center justify-center rounded-2xl p-8 text-center"
            >
              <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emas-shine bg-[length:200%_auto] text-gelap">
                <MousePointerClick size={26} />
              </span>
              <p className="text-lg font-bold text-teks-gelap">
                Pilih sebuah kawasan
              </p>
              <p className="mt-2 max-w-xs text-sm text-teks-gelap/65">
                Klik salah satu dari lima kawasan pada peta untuk melihat karakter
                dan kasus pelanggaran nilai Pancasila yang menonjol.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

function InfoPanel({ region, color, reduced, isDesktop, onClose }) {
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduced ? 0 : 0.07, delayChildren: reduced ? 0 : 0.05 },
    },
  }
  const item = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
      }

  return (
    <motion.div
      initial={
        reduced
          ? { opacity: 0 }
          : { opacity: 0, x: isDesktop ? 56 : 0, y: isDesktop ? 0 : 28 }
      }
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={
        reduced
          ? { opacity: 0 }
          : { opacity: 0, x: isDesktop ? 40 : 0, y: isDesktop ? 0 : 20 }
      }
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="glass-light relative h-full overflow-hidden rounded-2xl"
    >
      {/* Color accent bar */}
      <div className="h-1.5 w-full" style={{ backgroundColor: color }} />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="p-6"
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Tutup panel"
          className="absolute right-3 top-4 rounded-full p-1.5 text-teks-gelap/40 transition-colors hover:bg-merah/10 hover:text-merah"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <motion.div variants={item} className="pr-8">
          <h3 className="font-display text-2xl font-extrabold leading-tight text-teks-gelap">
            {region.nama}
          </h3>
          <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-merah-tua/10 px-3 py-1 text-xs font-bold text-merah-tua">
            <Layers size={13} />
            {region.jumlahKasus} terhimpun
          </span>
        </motion.div>

        {/* Karakter */}
        <motion.p
          variants={item}
          className="mt-4 text-sm leading-relaxed text-teks-gelap/75"
        >
          {region.karakter}
        </motion.p>

        {/* Sila menonjol */}
        <motion.div variants={item} className="mt-5">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-merah-tua">
            Sila menonjol
          </p>
          <div className="flex flex-wrap gap-2">
            {region.silaMenonjol.map((n) => (
              <span
                key={n}
                title={`Sila ${n} — ${SILA_NAMES[n]}`}
                className="inline-flex items-center gap-1.5 rounded-full bg-emas-shine bg-[length:200%_auto] px-3 py-1 text-xs font-bold text-gelap shadow-sm"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gelap/85 text-[10px] font-bold text-emas-terang">
                  {n}
                </span>
                Sila {n}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Pemicu + Rentan */}
        <motion.div variants={item} className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-krem px-3 py-2.5">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-merah-tua/80">
              <Zap size={13} /> Pemicu utama
            </p>
            <p className="mt-1 text-sm font-semibold text-teks-gelap">
              {region.pemicu}
            </p>
          </div>
          <div className="rounded-xl bg-krem px-3 py-2.5">
            <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-merah-tua/80">
              <HeartHandshake size={13} /> Kelompok rentan
            </p>
            <p className="mt-1 text-sm font-semibold text-teks-gelap">
              {region.rentan}
            </p>
          </div>
        </motion.div>

        {/* Kasus khas */}
        <motion.div variants={item} className="mt-5">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-merah-tua">
            Kasus khas
          </p>
          <motion.ul
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: reduced ? 0 : 0.06 } },
            }}
            className="space-y-2"
          >
            {region.kasus.map((k) => {
              const Icon = iconForKasus(k)
              return (
                <motion.li key={k} variants={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-merah-tua/10 text-merah-tua">
                    <Icon size={14} strokeWidth={2.2} />
                  </span>
                  <span className="text-sm leading-snug text-teks-gelap/80">{k}</span>
                </motion.li>
              )
            })}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
