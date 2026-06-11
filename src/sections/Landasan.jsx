import { useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import {
  BookOpen,
  ChevronDown,
  Coins,
  Compass,
  Gavel,
  HeartHandshake,
  Layers,
  Leaf,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { usePageScroll } from '../components/scroll-context'
import { KONSEP_PANCASILA, LIMA_ANTI } from '../data/landasan'
import { SILA_NAMES } from '../data/wilayah'
import { IMG } from '../data/assets'

// Lucide components keyed by the "ikon" string stored in landasan.js.
const ICONS = {
  BookOpen,
  Coins,
  Compass,
  Gavel,
  HeartHandshake,
  Layers,
  Leaf,
  Scale,
  ShieldCheck,
  Users,
}

// The relevansi strings open with "Dalam proyek ini:" — the callout label
// already says it, so drop the prefix when rendering to avoid duplication.
const relevansiText = (t) => t.replace(/^Dalam proyek ini:\s*/i, '')

const pad2 = (n) => String(n).padStart(2, '0')

/* ---------- Bagian A: shared pieces ---------- */

// Gold callout used inside every konsep panel/accordion body.
function RelevansiCallout({ text }) {
  return (
    <div className="mt-6 rounded-r-xl border-l-[3px] border-emas bg-emas/[0.08] px-4 py-3.5 sm:px-5 sm:py-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-merah-tua">
        Dalam proyek ini
      </p>
      <p className="mt-1.5 text-sm leading-relaxed text-teks-gelap/80">
        {relevansiText(text)}
      </p>
    </div>
  )
}

// Body of one konsep — reused by the desktop tab panel and mobile accordion.
function KonsepBody({ konsep, reduced, onGoToAnti }) {
  return (
    <>
      <p className="pull-quote text-lg leading-snug text-teks-gelap sm:text-xl lg:text-2xl">
        {konsep.ringkas}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-teks-gelap/75 sm:text-base">
        {konsep.isi}
      </p>
      <RelevansiCallout text={konsep.relevansi} />

      {/* Konsep ke-5 menjembatani ke Bagian B */}
      {konsep.id === 'aplikasi' && (
        <button
          type="button"
          onClick={onGoToAnti}
          className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-merah-tua outline-none transition-colors hover:text-emas focus-visible:ring-2 focus-visible:ring-emas"
        >
          Selengkapnya di bawah
          <ChevronDown
            size={16}
            strokeWidth={2.6}
            className={reduced ? '' : 'animate-bob-down'}
          />
        </button>
      )}
    </>
  )
}

/* ---------- Bagian B: chip sila (gaya KasusCard) ---------- */

function SilaChips({ nums }) {
  return (
    <span
      className="inline-flex items-center gap-1"
      aria-label={`Sila terkait: ${nums.join(', ')}`}
    >
      {nums.map((n) => (
        <span
          key={n}
          title={`Sila ${n} — ${SILA_NAMES[n]}`}
          className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emas text-[10px] font-bold leading-none text-gelap"
        >
          {n}
        </span>
      ))}
    </span>
  )
}

export default function Landasan() {
  const reduced = useReducedMotion()
  const { scrollTo } = usePageScroll()

  // One state drives both layouts: tabs (md+) and accordion (mobile).
  // The accordion may collapse everything (null); tabs fall back to the first.
  const [active, setActive] = useState(KONSEP_PANCASILA[0].id)
  const tabActive = active ?? KONSEP_PANCASILA[0].id
  const konsepAktif =
    KONSEP_PANCASILA.find((k) => k.id === tabActive) ?? KONSEP_PANCASILA[0]
  const tabRefs = useRef({})

  const goToAnti = () => {
    const el = document.getElementById('lima-anti')
    if (el) scrollTo(el, { offset: -88 })
  }

  // Roving focus untuk tablist: panah kiri/kanan berpindah antar konsep.
  // stopPropagation agar tidak bentrok dengan navigasi section di Navbar.
  const onTabKeyDown = (e) => {
    const idx = KONSEP_PANCASILA.findIndex((k) => k.id === tabActive)
    let next = null
    if (e.key === 'ArrowRight') next = (idx + 1) % KONSEP_PANCASILA.length
    else if (e.key === 'ArrowLeft')
      next = (idx - 1 + KONSEP_PANCASILA.length) % KONSEP_PANCASILA.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = KONSEP_PANCASILA.length - 1
    if (next === null) return
    e.preventDefault()
    e.stopPropagation()
    const id = KONSEP_PANCASILA[next].id
    setActive(id)
    tabRefs.current[id]?.focus()
  }

  const fadeContainer = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.12 } },
  }
  const fadeItem = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      }

  return (
    <section
      id="landasan"
      className="section-shell bg-putih py-24 text-teks-gelap sm:py-32"
    >
      {/* Batik ornament accents, konsisten dengan Metode */}
      <img
        src={IMG.batikOrnament}
        alt=""
        aria-hidden="true"
        className="drag-none pointer-events-none absolute -left-16 -top-16 w-64 -rotate-12 opacity-[0.06] mix-blend-multiply sm:w-80"
      />
      <img
        src={IMG.batikOrnament}
        alt=""
        aria-hidden="true"
        className="drag-none pointer-events-none absolute -bottom-20 -right-16 w-64 rotate-12 opacity-[0.06] mix-blend-multiply sm:w-80"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* ===== Header section ===== */}
        <motion.div
          variants={fadeContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={fadeItem}
            className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-merah-tua"
          >
            <span className="h-px w-8 bg-emas" />
            Landasan Pancasila
            <span className="h-px w-8 bg-emas" />
          </motion.p>
          <motion.h2
            variants={fadeItem}
            className="font-display text-3xl font-extrabold leading-tight text-teks-gelap sm:text-4xl lg:text-5xl"
          >
            Lima Cara Memandang{' '}
            <span className="text-merah-tua">Pancasila</span>
          </motion.h2>
          <motion.p
            variants={fadeItem}
            className="mt-5 text-base leading-relaxed text-teks-gelap/75 sm:text-lg"
          >
            Sebelum turun membaca kota, kami menegaskan pijakan konsep yang
            kami usung&mdash;dari filosofi hingga penerapannya sebagai gerakan.
          </motion.p>
        </motion.div>

        {/* ===== Bagian A — Tabs (md ke atas) ===== */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-14 hidden md:block"
        >
          <div
            role="tablist"
            aria-label="Lima cara memandang Pancasila"
            onKeyDown={onTabKeyDown}
            className="glass-light flex items-center justify-between gap-1 rounded-full p-1.5"
          >
            {KONSEP_PANCASILA.map((k) => {
              const Icon = ICONS[k.ikon] ?? BookOpen
              const isActive = tabActive === k.id
              return (
                <button
                  key={k.id}
                  ref={(el) => (tabRefs.current[k.id] = el)}
                  role="tab"
                  id={`tab-${k.id}`}
                  aria-selected={isActive}
                  aria-controls="panel-konsep"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActive(k.id)}
                  className={`relative flex grow items-center justify-center gap-2 rounded-full px-3 py-2.5 text-[13px] font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-emas ${
                    isActive
                      ? 'text-gelap'
                      : 'text-teks-gelap/60 hover:text-merah-tua'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="landasan-tab-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-emas-shine bg-[length:200%_auto] shadow-emas-glow"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon size={15} strokeWidth={2.4} className="shrink-0" />
                  {k.label}
                </button>
              )
            })}
          </div>

          {/* Panel konten */}
          <div className="relative mt-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={konsepAktif.id}
                role="tabpanel"
                id="panel-konsep"
                aria-labelledby={`tab-${konsepAktif.id}`}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
                transition={{ duration: reduced ? 0.1 : 0.3, ease: 'easeOut' }}
                className="glass-light rounded-2xl p-7 lg:p-9"
              >
                <div className="flex items-start gap-5">
                  {(() => {
                    const Icon = ICONS[konsepAktif.ikon] ?? BookOpen
                    return (
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emas-shine bg-[length:200%_auto] text-gelap shadow-emas-glow">
                        <Icon size={26} strokeWidth={2.2} />
                      </div>
                    )
                  })()}
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-extrabold leading-snug text-teks-gelap sm:text-2xl">
                      {konsepAktif.judul}
                    </h3>
                    <span className="mt-2.5 block h-0.5 w-12 rounded-full bg-emas" />
                  </div>
                </div>
                <div className="mt-6">
                  <KonsepBody
                    konsep={konsepAktif}
                    reduced={reduced}
                    onGoToAnti={goToAnti}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ===== Bagian A — Accordion (mobile) ===== */}
        <motion.div
          variants={fadeContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 space-y-3 md:hidden"
        >
          {KONSEP_PANCASILA.map((k) => {
            const Icon = ICONS[k.ikon] ?? BookOpen
            const open = active === k.id
            return (
              <motion.div
                key={k.id}
                variants={fadeItem}
                className={`glass-light overflow-hidden rounded-2xl transition-shadow duration-300 ${
                  open ? 'shadow-emas-glow' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(open ? null : k.id)}
                  aria-expanded={open}
                  className="flex w-full items-center gap-3 px-4 py-3.5 text-left outline-none focus-visible:ring-2 focus-visible:ring-emas"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emas-shine bg-[length:200%_auto] text-gelap">
                    <Icon size={18} strokeWidth={2.2} />
                  </span>
                  <span className="min-w-0 grow">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-merah-tua/80">
                      {k.label}
                    </span>
                    <span className="block text-sm font-bold leading-snug text-teks-gelap">
                      {k.judul}
                    </span>
                  </span>
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: reduced ? 0 : 0.25 }}
                    className="shrink-0 text-emas"
                  >
                    <ChevronDown size={18} strokeWidth={2.4} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      key="body"
                      initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={
                        reduced ? { opacity: 1 } : { height: 'auto', opacity: 1 }
                      }
                      exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-emas/20 px-4 pb-5 pt-4">
                        <KonsepBody
                          konsep={k}
                          reduced={reduced}
                          onGoToAnti={goToAnti}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        {/* ===== Bagian B — Gerakan 5 ANTI ===== */}
        <div id="lima-anti" className="mt-24 scroll-mt-24 sm:mt-28">
          <motion.div
            variants={fadeContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.p
              variants={fadeItem}
              className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-merah-tua"
            >
              <span className="h-px w-8 bg-emas" />
              Dari Nilai ke Tindakan
              <span className="h-px w-8 bg-emas" />
            </motion.p>
            <motion.h3
              variants={fadeItem}
              className="font-display text-2xl font-extrabold leading-tight text-teks-gelap sm:text-3xl lg:text-4xl"
            >
              Pancasila dalam Tindakan:{' '}
              <span className="text-merah-tua">Gerakan 5 ANTI</span>
            </motion.h3>
            <motion.p
              variants={fadeItem}
              className="mt-4 text-base leading-relaxed text-teks-gelap/75 sm:text-lg"
            >
              Lima ANTI mengubah nilai Pancasila menjadi sikap aktif&mdash;dan
              masing-masing memetakan langsung ke kasus nyata yang kami temukan
              di Surabaya.
            </motion.p>
          </motion.div>

          <motion.ul
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: reduced ? 0 : 0.1 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          >
            {LIMA_ANTI.map((a) => {
              const Icon = ICONS[a.ikon] ?? ShieldCheck
              return (
                <motion.li
                  key={a.nomor}
                  variants={fadeItem}
                  whileHover={reduced ? undefined : { y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="glass-light flex h-full flex-col rounded-2xl p-5 transition-shadow duration-300 hover:shadow-emas-glow"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span
                      aria-hidden="true"
                      className="font-display text-4xl font-extrabold leading-none text-emas"
                    >
                      {pad2(a.nomor)}
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emas-shine bg-[length:200%_auto] text-gelap shadow-emas-glow">
                      <Icon size={18} strokeWidth={2.2} />
                    </span>
                  </div>

                  <h4 className="mt-4 text-base font-bold leading-snug text-teks-gelap">
                    {a.nama}
                  </h4>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-teks-gelap/50">
                      Sila terkait
                    </span>
                    <SilaChips nums={a.silaTerkait} />
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-teks-gelap/75">
                    {a.makna}
                  </p>

                  <div className="mt-auto pt-4">
                    <div className="rounded-r-lg border-l-2 border-emas bg-emas/[0.08] px-3 py-2.5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-merah-tua">
                        Bukti di Surabaya
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-teks-gelap/70">
                        {a.buktiSurabaya}
                      </p>
                    </div>
                  </div>
                </motion.li>
              )
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
