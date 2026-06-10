import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { AlertTriangle, Network, Sparkles, Check } from 'lucide-react'
import { IMG } from '../data/assets'
import GoldParticles from './GoldParticles'
import { SILA_SYMBOLS } from './sila-symbols'

const ORDINAL = ['Pertama', 'Kedua', 'Ketiga', 'Keempat', 'Kelima']

/**
 * One immersive sila panel, reused for all five sila.
 *  - Header: large gold symbol that draws itself (pathLength) + big number,
 *    name, full reading, and the meaning (Fraunces italic).
 *  - Body (2-col on lg, alternating side per `reverse`): the official emblem
 *    illustration with a gentle scroll parallax, and three stacked lenses —
 *    Masalah, Akar Persoalan, and the climactic gold Solusi card.
 *  - `sila.dark` (Sila 1) switches to a dark #14080A theme with gold particles.
 */
export default function SilaBlock({ sila, reverse = false }) {
  const reduced = useReducedMotion()
  const Symbol = SILA_SYMBOLS[sila.nomor]
  const dark = sila.dark

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
          {/* Drawing gold symbol */}
          <div className="shrink-0">
            <div
              className="relative flex h-40 w-40 items-center justify-center rounded-full ring-2 ring-emas/40 sm:h-44 sm:w-44"
              style={{
                background: dark
                  ? 'radial-gradient(circle at 50% 40%, rgba(212,160,23,0.20), rgba(20,8,10,0) 70%)'
                  : 'radial-gradient(circle at 50% 40%, rgba(212,160,23,0.16), rgba(251,247,240,0) 70%)',
              }}
            >
              <Symbol
                className="h-24 w-24 drop-shadow-[0_2px_12px_rgba(212,160,23,0.45)] sm:h-28 sm:w-28"
                strokeWidth={3.2}
              />
            </div>
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
            <LensPanel
              dark={dark}
              reduced={reduced}
              label="Akar Persoalan"
              Icon={Network}
              color="#D4A017"
              items={sila.akar}
            />
            <SolusiCard dark={dark} reduced={reduced} items={sila.solusi} />
          </div>
        </div>
      </div>
    </article>
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
