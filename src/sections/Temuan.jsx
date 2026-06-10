import { motion, useReducedMotion } from 'framer-motion'
import { IMG } from '../data/assets'
import { TEMUAN } from '../data/stats'

export default function Temuan() {
  const reduced = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.16 } },
  }
  const item = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      }
  const headItem = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      }

  return (
    <section id="temuan" className="section-shell bg-krem py-24 text-teks-gelap sm:py-32">
      {/* Thin gold batik ornament in opposite corners */}
      <img
        src={IMG.batikOrnament}
        alt=""
        aria-hidden="true"
        className="drag-none pointer-events-none absolute -right-16 -top-16 w-64 rotate-12 opacity-[0.07] mix-blend-multiply sm:w-80"
      />
      <img
        src={IMG.batikOrnament}
        alt=""
        aria-hidden="true"
        className="drag-none pointer-events-none absolute -bottom-20 -left-16 w-64 -rotate-12 opacity-[0.07] mix-blend-multiply sm:w-80"
      />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="text-center"
        >
          <motion.p
            variants={headItem}
            className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-merah-tua"
          >
            <span className="h-px w-8 bg-emas" />
            Temuan Utama
            <span className="h-px w-8 bg-emas" />
          </motion.p>
          <motion.h2
            variants={headItem}
            className="font-display text-3xl font-extrabold leading-tight text-teks-gelap sm:text-4xl lg:text-5xl"
          >
            Temuan <span className="text-merah-tua">Utama</span>
          </motion.h2>
        </motion.div>

        {/* Findings */}
        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 space-y-0"
        >
          {TEMUAN.map((t, i) => (
            <motion.li
              key={t.nomor}
              variants={item}
              className={`flex flex-col gap-4 py-7 sm:flex-row sm:gap-8 ${
                i > 0 ? 'border-t border-black/10' : ''
              }`}
            >
              <span
                aria-hidden="true"
                className="font-display text-5xl font-extrabold leading-none text-gold-gradient sm:text-6xl sm:w-28 sm:shrink-0"
              >
                {t.nomor}
              </span>
              <p className="text-base leading-relaxed text-teks-gelap/85 sm:pt-1 sm:text-lg">
                {t.teks}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  )
}
