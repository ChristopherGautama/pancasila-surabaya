import { useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import {
  AlertTriangle,
  Network,
  Sparkles,
  Check,
  Newspaper,
  ChevronDown,
  ExternalLink,
} from 'lucide-react'
import { IMG, asset } from '../data/assets'
import { kasusKunci, sumberUntukSila } from '../data/silaKasus'
import GoldParticles from './GoldParticles'
import KasusCard from './KasusCard'

const ORDINAL = ['Pertama', 'Kedua', 'Ketiga', 'Keempat', 'Kelima']

// Nama lambang tiap sila untuk teks alt yang deskriptif.
const LAMBANG = {
  1: 'Bintang',
  2: 'Rantai Emas',
  3: 'Pohon Beringin',
  4: 'Kepala Banteng',
  5: 'Padi dan Kapas',
}

/**
 * One immersive sila panel, reused for all five sila.
 *  - Header: the official sila emblem in a round gold badge + big number,
 *    name, full reading, and the meaning (Fraunces italic).
 *  - Body (2-col on lg, alternating side per `reverse`): the official emblem
 *    illustration with a gentle scroll parallax, and the stacked lenses —
 *    Masalah, Kasus Kunci (sourced cases derived from kasusDetail.js),
 *    Akar Persoalan, the climactic gold Solusi card, and a collapsible
 *    footnote-style source list.
 *  - `sila.dark` (Sila 1) switches to a dark #14080A theme with gold particles.
 */
export default function SilaBlock({ sila, reverse = false }) {
  const reduced = useReducedMotion()
  const dark = sila.dark

  // Kasus kunci & daftar sumber sila ini — diderivasi dari kasusDetail.js
  // (single source of truth), bukan ditulis manual.
  const { kunci, total } = kasusKunci(sila.nomor)
  const sumber = sumberUntukSila(sila.nomor)

  // Gentle parallax for the illustration as the block scrolls past.
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const illoY = useTransform(scrollYProgress, [0, 1], [34, -34])

  const numColor = dark ? '#E9C46A' : sila.accent
  const dotActive = dark ? '#E9C46A' : sila.accent
  const dotIdle = dark ? 'rgba(233,196,106,0.25)' : 'rgba(26,26,26,0.14)'

  const headFade = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 26 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      }

  return (
    <article
      ref={ref}
      id={sila.id}
      className={`section-shell scroll-mt-24 py-24 sm:py-32 ${
        dark ? 'bg-gelap text-krem' : 'bg-krem text-teks-gelap'
      }`}
    >
      {/* Ambience */}
      {dark ? (
        <>
          <div
            className="batik-overlay"
            style={{ backgroundImage: `url(${IMG.batikGold})` }}
          />
          <GoldParticles count={18} />
        </>
      ) : (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full blur-3xl"
          style={{ backgroundColor: `${sila.accent}14` }}
        />
      )}

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ===== Header ===== */}
        <motion.header
          variants={headFade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:gap-9 sm:text-left"
        >
          {/* Lambang asli sila — badge bundar emas */}
          <div className="shrink-0">
            <motion.div
              initial={reduced ? false : { opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: reduced ? 0 : 0.1 }}
              className="relative h-40 w-40 overflow-hidden rounded-full ring-4 ring-emas shadow-[0_10px_34px_rgba(122,12,24,0.28)] sm:h-44 sm:w-44"
            >
              <img
                src={asset(sila.logo)}
                alt={`Lambang Sila ke-${sila.nomor}: ${LAMBANG[sila.nomor]}`}
                loading="lazy"
                className="drag-none h-full w-full object-cover"
              />
            </motion.div>
          </div>

          {/* Identity */}
          <div className="min-w-0">
            {/* Progress dots */}
            <div className="mb-3 flex items-center justify-center gap-1.5 sm:justify-start">
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className="block h-1.5 rounded-full transition-all"
                  style={{
                    width: n === sila.nomor ? 22 : 6,
                    backgroundColor: n === sila.nomor ? dotActive : dotIdle,
                  }}
                />
              ))}
              <span
                className={`ml-2 text-xs font-semibold uppercase tracking-[0.2em] ${
                  dark ? 'text-krem/55' : 'text-teks-gelap/55'
                }`}
              >
                Sila {sila.nomor} dari 5
              </span>
            </div>

            <div className="flex items-center justify-center gap-4 sm:justify-start">
              <span
                className="font-display text-6xl font-extrabold leading-none sm:text-7xl"
                style={{ color: numColor }}
              >
                {String(sila.nomor).padStart(2, '0')}
              </span>
              <div className="text-left">
                <h3
                  className={`font-display text-2xl font-extrabold leading-tight sm:text-3xl ${
                    dark ? 'text-putih' : 'text-teks-gelap'
                  }`}
                >
                  {sila.nama}
                </h3>
                <p
                  className={`mt-0.5 text-xs font-semibold uppercase tracking-[0.22em] ${
                    dark ? 'text-emas-terang/80' : 'text-merah-tua/80'
                  }`}
                >
                  Sila {ORDINAL[sila.nomor - 1]}
                </p>
              </div>
            </div>

            {sila.namaPanjang !== sila.nama && (
              <p
                className={`mt-2 text-sm ${dark ? 'text-krem/60' : 'text-teks-gelap/55'}`}
              >
                {sila.namaPanjang}
              </p>
            )}

            <p
              className={`pull-quote mx-auto mt-4 max-w-xl text-lg leading-relaxed sm:mx-0 ${
                dark ? 'text-krem/85' : 'text-teks-gelap/80'
              }`}
            >
              {sila.makna}
            </p>
          </div>
        </motion.header>

        {/* ===== Body ===== */}
        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Illustration (parallax, alternating side, sticky on lg) */}
          <div
            className={`relative flex items-center justify-center self-start lg:sticky lg:top-28 ${
              reverse ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute h-3/4 w-3/4 rounded-full bg-emas/10 blur-3xl"
            />
            <motion.img
              src={sila.gambar}
              alt={`Ilustrasi Sila ${sila.nomor}: ${sila.nama}`}
              style={reduced ? undefined : { y: illoY }}
              className="drag-none relative w-3/4 max-w-xs object-contain drop-shadow-[0_22px_50px_rgba(0,0,0,0.35)] sm:max-w-sm"
            />
          </div>

          {/* Lenses */}
          <div
            className={`space-y-6 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <LensPanel
              dark={dark}
              reduced={reduced}
              label="Masalah"
              Icon={AlertTriangle}
              color="#CE1126"
              items={sila.masalah}
            />
            <KasusKunciPanel dark={dark} reduced={reduced} items={kunci} total={total} />
            <LensPanel
              dark={dark}
              reduced={reduced}
              label="Akar Persoalan"
              Icon={Network}
              color="#D4A017"
              items={sila.akar}
            />
            <SolusiCard dark={dark} reduced={reduced} items={sila.solusi} />
            <SumberList dark={dark} reduced={reduced} sumber={sumber} />
          </div>
        </div>
      </div>
    </article>
  )
}

/**
 * Kasus Kunci — accordion of concrete, sourced cases (max 6) for this sila,
 * derived from kasusDetail.js across all five regions. Sits between Masalah
 * and Akar Persoalan so every claim is anchored to a real, dated event.
 */
function KasusKunciPanel({ dark, reduced, items, total }) {
  const [openIdx, setOpenIdx] = useState(null)

  const panel = dark
    ? 'bg-white/[0.04] ring-1 ring-white/10'
    : 'bg-white/70 ring-1 ring-black/5'
  const heading = dark ? 'text-putih' : 'text-teks-gelap'
  const sub = dark ? 'text-krem/50' : 'text-teks-gelap/50'
  const accent = dark ? '#E9C46A' : '#7A0C18'

  const cardList = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.05 } },
  }
  const card = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
      }

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`rounded-2xl p-5 sm:p-6 ${panel}`}
    >
      <div className="mb-3 flex items-center gap-2.5">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${accent}1A`, color: accent }}
        >
          <Newspaper size={18} strokeWidth={2.3} />
        </span>
        <h4 className={`text-sm font-bold uppercase tracking-[0.16em] ${heading}`}>
          Kasus Kunci
        </h4>
        <span className={`ml-auto text-xs font-semibold ${sub}`}>
          {items.length}
          {total > items.length ? ` dari ${total}` : ''}
        </span>
      </div>

      <motion.div
        variants={cardList}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="space-y-2.5"
      >
        {items.map((k, i) => (
          <motion.div key={k.judul} variants={card}>
            <KasusCard
              kasus={k}
              dark={dark}
              wilayah={k.wilayah}
              showSila={false}
              reduced={reduced}
              open={openIdx === i}
              onToggle={() => setOpenIdx((c) => (c === i ? null : i))}
            />
          </motion.div>
        ))}
      </motion.div>

      {total > items.length && (
        <p className={`mt-3 text-[11px] leading-snug ${sub}`}>
          +{total - items.length} kasus terkait lainnya dapat dijelajahi pada Peta Lima
          Kawasan.
        </p>
      )}
    </motion.div>
  )
}

/**
 * "Lihat Sumber (n)" — collapsible, footnote-style numbered list of all unique
 * sources behind this sila's cases. Closed by default to keep the layout clean.
 */
function SumberList({ dark, reduced, sumber }) {
  const [open, setOpen] = useState(false)
  if (!sumber.length) return null

  const btn = dark
    ? 'text-krem/60 hover:text-emas-terang'
    : 'text-teks-gelap/55 hover:text-merah-tua'
  const num = dark ? 'text-krem/40' : 'text-teks-gelap/40'
  const link = dark
    ? 'text-emas-terang hover:text-[#F3DCA0]'
    : 'text-emas hover:text-[#8A5A00]'
  const plain = dark ? 'text-krem/55' : 'text-teks-gelap/60'

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={`inline-flex items-center gap-1.5 rounded-full text-xs font-semibold outline-none transition-colors focus-visible:ring-2 focus-visible:ring-emas ${btn}`}
      >
        <motion.span
          aria-hidden="true"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: reduced ? 0 : 0.25 }}
          className="text-emas"
        >
          <ChevronDown size={14} strokeWidth={2.4} />
        </motion.span>
        Lihat Sumber ({sumber.length})
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="list"
            initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduced ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <ol className="mt-3 space-y-1.5 pl-1">
              {sumber.map((s, i) => (
                <li
                  key={s.url || s.nama}
                  className="flex items-start gap-2 text-[11px] leading-relaxed"
                >
                  <span className={`shrink-0 font-semibold tabular-nums ${num}`}>
                    {i + 1}.
                  </span>
                  {s.url ? (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-start gap-1 font-medium transition-colors hover:underline ${link}`}
                    >
                      <span>{s.nama}</span>
                      <ExternalLink size={10} className="mt-[3px] shrink-0" />
                    </a>
                  ) : (
                    <span className={plain}>{s.nama}</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/** Masalah / Akar lens — a subtle panel with a staggered list. */
function LensPanel({ dark, reduced, label, Icon, color, items }) {
  const panel = dark
    ? 'bg-white/[0.04] ring-1 ring-white/10'
    : 'bg-white/70 ring-1 ring-black/5'
  const heading = dark ? 'text-putih' : 'text-teks-gelap'
  const body = dark ? 'text-krem/80' : 'text-teks-gelap/80'
  const sub = dark ? 'text-krem/50' : 'text-teks-gelap/50'

  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`rounded-2xl p-5 sm:p-6 ${panel}`}
    >
      <div className="mb-3 flex items-center gap-2.5">
        <span
          className="flex h-9 w-9 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${color}1A`, color }}
        >
          <Icon size={18} strokeWidth={2.3} />
        </span>
        <h4 className={`text-sm font-bold uppercase tracking-[0.16em] ${heading}`}>
          {label}
        </h4>
        <span className={`ml-auto text-xs font-semibold ${sub}`}>{items.length}</span>
      </div>

      <motion.ul
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: reduced ? 0 : 0.08 } },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-2.5"
      >
        {items.map((item) => (
          <motion.li
            key={item}
            variants={
              reduced
                ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
                : {
                    hidden: { opacity: 0, x: -10 },
                    show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                  }
            }
            className="flex items-start gap-2.5"
          >
            <span
              className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className={`text-sm leading-snug ${body}`}>{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

/** Solusi — the climactic gold accent card (appears later, glow + scale-in). */
function SolusiCard({ dark, reduced, items }) {
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 30, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: reduced ? 0 : 0.2, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-2xl border-2 border-emas/50 p-6 shadow-emas-glow"
      style={{
        background: dark
          ? 'linear-gradient(135deg, rgba(122,12,24,0.38), rgba(20,8,10,0.65))'
          : 'linear-gradient(135deg, #fff8ea, #fbeccb)',
      }}
    >
      {/* Glow accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emas/25 blur-3xl"
      />

      <div className="relative mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emas-shine bg-[length:200%_auto] text-gelap shadow-emas-glow">
          <Sparkles size={20} strokeWidth={2.3} />
        </span>
        <div>
          <h4
            className={`text-base font-extrabold uppercase tracking-[0.14em] ${
              dark ? 'text-gold-gradient' : ''
            }`}
            style={dark ? undefined : { color: '#8A5A00' }}
          >
            Solusi
          </h4>
          <p
            className={`text-[11px] font-medium ${
              dark ? 'text-krem/55' : 'text-teks-gelap/55'
            }`}
          >
            Langkah rasional yang dapat dijalankan
          </p>
        </div>
        <span
          className={`ml-auto text-xs font-bold ${
            dark ? 'text-emas-terang' : 'text-merah-tua'
          }`}
        >
          {items.length} langkah
        </span>
      </div>

      <motion.ul
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: reduced ? 0 : 0.1,
              delayChildren: reduced ? 0 : 0.15,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative space-y-3"
      >
        {items.map((item) => (
          <motion.li
            key={item}
            variants={
              reduced
                ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
                : {
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }
            }
            className="flex items-start gap-3"
          >
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emas text-gelap">
              <Check size={13} strokeWidth={3} />
            </span>
            <span
              className={`text-sm leading-snug ${
                dark ? 'text-krem/90' : 'text-teks-gelap/85'
              }`}
            >
              {item}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}
