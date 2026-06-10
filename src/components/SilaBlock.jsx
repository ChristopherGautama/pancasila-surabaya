import { motion, useReducedMotion } from 'framer-motion'
import { AlertTriangle, Sprout, Lightbulb, Check } from 'lucide-react'
import { IMG } from '../data/assets'
import { SILA_SYMBOLS } from './sila-symbols'

const ORDINAL = ['Pertama', 'Kedua', 'Ketiga', 'Keempat', 'Kelima']

/**
 * Reusable block that renders one sila: an animated gold symbol medallion,
 * its name & meaning, then three columns — Masalah, Akar Persoalan, Solusi.
 * Adapts to a dark theme when `sila.dark` is true (Sila 1) and a light theme
 * otherwise, so it can be reused for all five sila in later phases.
 */
export default function SilaBlock({ sila }) {
  const reduced = useReducedMotion()
  const Symbol = SILA_SYMBOLS[sila.nomor]
  const dark = sila.dark

  const fade = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      }

  const t = dark
    ? {
        sub: 'text-krem/65',
        heading: 'text-putih',
        body: 'text-krem/80',
        card: 'glass',
        cardBody: 'text-krem/85',
      }
    : {
        sub: 'text-teks-gelap/60',
        heading: 'text-teks-gelap',
        body: 'text-teks-gelap/75',
        card: 'glass-light',
        cardBody: 'text-teks-gelap/80',
      }

  const KOLOM = [
    {
      key: 'masalah',
      label: 'Masalah',
      icon: AlertTriangle,
      iconColor: '#CE1126',
      marker: 'dot',
      items: sila.masalah,
    },
    {
      key: 'akar',
      label: 'Akar Persoalan',
      icon: Sprout,
      iconColor: '#D4A017',
      marker: 'dot',
      items: sila.akar,
    },
    {
      key: 'solusi',
      label: 'Solusi',
      icon: Lightbulb,
      iconColor: '#E9C46A',
      marker: 'check',
      items: sila.solusi,
    },
  ]

  return (
    <article
      className={`section-shell ${
        dark
          ? 'bg-gradient-to-b from-gelap via-merah-tua/25 to-gelap'
          : 'bg-krem'
      } py-20 sm:py-24`}
    >
      {dark && (
        <div
          className="batik-overlay"
          style={{ backgroundImage: `url(${IMG.batikGold})` }}
        />
      )}

      <div className="relative mx-auto max-w-6xl px-6">
        {/* ===== Header: medallion + identity ===== */}
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:gap-12 lg:text-left">
          {/* Animated gold symbol medallion */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="shrink-0"
          >
            <div
              className="relative flex h-40 w-40 items-center justify-center rounded-full ring-2 ring-emas/40 sm:h-48 sm:w-48"
              style={{
                background: dark
                  ? 'radial-gradient(circle at 50% 40%, rgba(212,160,23,0.18), rgba(20,8,10,0) 70%)'
                  : 'radial-gradient(circle at 50% 40%, rgba(212,160,23,0.16), rgba(251,247,240,0) 70%)',
              }}
            >
              <Symbol
                className="h-24 w-24 sm:h-28 sm:w-28 drop-shadow-[0_2px_10px_rgba(212,160,23,0.4)]"
                strokeWidth={3.2}
              />
              {/* Official coloured emblem badge */}
              <img
                src={sila.gambar}
                alt={`Lambang ${sila.nama}`}
                className="drag-none absolute -bottom-1 -right-1 h-14 w-14 rounded-full bg-putih/90 object-contain p-1.5 shadow-lg ring-1 ring-emas/30 sm:h-16 sm:w-16"
              />
            </div>
          </motion.div>

          {/* Identity */}
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="flex items-center justify-center gap-3 lg:justify-start">
              <span
                className="font-display text-5xl font-extrabold leading-none sm:text-6xl"
                style={{ color: dark ? '#E9C46A' : sila.accent }}
              >
                {String(sila.nomor).padStart(2, '0')}
              </span>
              <span className={`text-xs font-semibold uppercase tracking-[0.28em] ${t.sub}`}>
                Sila {ORDINAL[sila.nomor - 1]}
              </span>
            </div>

            <h3 className={`mt-3 font-display text-2xl font-extrabold leading-tight sm:text-3xl ${t.heading}`}>
              {sila.nama}
            </h3>

            {sila.namaPanjang !== sila.nama && (
              <p className={`pull-quote mt-1.5 text-base ${t.sub}`}>
                &ldquo;{sila.namaPanjang}&rdquo;
              </p>
            )}

            <p className={`mt-4 max-w-xl text-base leading-relaxed ${t.body}`}>
              {sila.makna}
            </p>
          </motion.div>
        </div>

        {/* ===== Masalah · Akar · Solusi ===== */}
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {KOLOM.map((kol, i) => {
            const Icon = kol.icon
            return (
              <motion.div
                key={kol.key}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: reduced ? 0 : i * 0.12 }}
                className={`${t.card} rounded-2xl p-6`}
              >
                <div className="mb-4 flex items-center gap-2.5">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${kol.iconColor}1A`, color: kol.iconColor }}
                  >
                    <Icon size={18} strokeWidth={2.3} />
                  </span>
                  <h4 className={`text-sm font-bold uppercase tracking-[0.16em] ${t.heading}`}>
                    {kol.label}
                  </h4>
                  <span className={`ml-auto text-xs font-semibold ${t.sub}`}>
                    {kol.items.length}
                  </span>
                </div>

                <motion.ul
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: reduced ? 0 : 0.08 } },
                  }}
                  className="space-y-2.5"
                >
                  {kol.items.map((item) => (
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
                      <span className="mt-1 shrink-0" style={{ color: kol.iconColor }}>
                        {kol.marker === 'check' ? (
                          <Check size={15} strokeWidth={2.6} />
                        ) : (
                          <span
                            className="block h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: kol.iconColor }}
                          />
                        )}
                      </span>
                      <span className={`text-sm leading-snug ${t.cardBody}`}>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </article>
  )
}
