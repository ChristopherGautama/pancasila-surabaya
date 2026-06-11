import { Fragment } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { AlertTriangle, Network, Sparkles } from 'lucide-react'
import SectionDivider from '../components/SectionDivider'
import SilaBlock from '../components/SilaBlock'
import { SILAS } from '../data/silas'
import { IMG } from '../data/assets'

const LENS = [
  { label: 'Masalah', icon: AlertTriangle, color: '#CE1126' },
  { label: 'Akar', icon: Network, color: '#D4A017' },
  { label: 'Solusi', icon: Sparkles, color: '#E9C46A' },
]

export default function Sila() {
  const reduced = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.14 } },
  }
  const fadeItem = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      }

  return (
    <>
      {/* Wave: white Peta → dark Sila intro */}
      <SectionDivider color="#14080A" className="bg-putih" />

      <section id="sila" className="section-shell bg-gelap">
        {/* Intro (dark) */}
        <div className="relative overflow-hidden pb-6 pt-24 sm:pt-28">
          <div
            className="batik-overlay"
            style={{ backgroundImage: `url(${IMG.batikGold})` }}
          />

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="relative mx-auto max-w-3xl px-6 text-center"
          >
            <motion.p
              variants={fadeItem}
              className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-emas-terang"
            >
              <span className="h-px w-8 bg-emas" />
              Lima Sila
              <span className="h-px w-8 bg-emas" />
            </motion.p>

            <motion.h2
              variants={fadeItem}
              className="font-display text-3xl font-extrabold leading-tight text-putih sm:text-4xl lg:text-5xl"
            >
              Lima Sila: <span className="text-gold-gradient">Masalah &amp; Solusi</span>
            </motion.h2>

            <motion.p
              variants={fadeItem}
              className="mt-5 text-base leading-relaxed text-krem/80 sm:text-lg"
            >
              Setiap sila kami urai berlapis &mdash; dari{' '}
              <strong className="font-semibold text-putih">masalah</strong> yang tampak di
              lapangan, <strong className="font-semibold text-putih">akar persoalan</strong>{' '}
              di baliknya, hingga{' '}
              <strong className="font-semibold text-putih">solusi rasional</strong> yang
              dapat dijalankan.
            </motion.p>

            <motion.p
              variants={fadeItem}
              className="mt-4 text-xs leading-relaxed text-krem/55"
            >
              Setiap analisis dirujuk dari pemberitaan media kredibel, jurnal ilmiah, dan
              data BPS Kota Surabaya &mdash; daftar sumber tersedia pada tiap sila dan
              naskah jurnal.
            </motion.p>

            {/* Lens legend */}
            <motion.div
              variants={fadeItem}
              className="mt-7 flex flex-wrap items-center justify-center gap-3"
            >
              {LENS.map((l) => {
                const Icon = l.icon
                return (
                  <span
                    key={l.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-emas/20 bg-gelap/40 px-3.5 py-1.5 text-xs font-semibold text-krem/85"
                  >
                    <Icon size={14} style={{ color: l.color }} />
                    {l.label}
                  </span>
                )
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* The five sila. A subtle wave transitions between consecutive blocks;
            the illustration side alternates (even-numbered sila are reversed). */}
        {SILAS.map((sila, i) => (
          <Fragment key={sila.id}>
            {i > 0 && (
              <SectionDivider
                color={sila.dark ? '#14080A' : '#FBF7F0'}
                className={SILAS[i - 1].dark ? 'bg-gelap' : 'bg-krem'}
              />
            )}
            <SilaBlock sila={sila} reverse={sila.nomor % 2 === 0} />
          </Fragment>
        ))}
      </section>

      {/* Wave: last sila (krem) → dark "bersambung" teaser */}
      <SectionDivider color="#14080A" className="bg-krem" />
    </>
  )
}
