import { motion, useReducedMotion } from 'framer-motion'
import { GARUDA } from '../data/assets'

// The closing pull-quote, split into lines so it can reveal elegantly.
const QUOTE = [
  { t: 'Sila ke-2 dan ke-5 adalah inti persoalan kota;' },
  { t: 'Sila ke-3 menjadi jembatan dari ketimpangan menuju kekerasan.' },
  {
    t: 'Pelanggaran Sila ke-1 paling jarang namun paling merusak, dan Sila ke-4 paling tersembunyi karena bersifat prosedural.',
  },
  {
    t: 'Pancasila harus dipahami dan ditegakkan secara kontekstual — bukan seragam.',
    accent: true,
  },
]

export default function Kesimpulan() {
  const reduced = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.18, delayChildren: 0.05 } },
  }
  const line = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
      }

  return (
    <section
      id="kesimpulan"
      className="section-shell bg-gradient-to-b from-merah to-merah-tua py-28 text-putih sm:py-36"
    >
      {/* Faint Garuda watermark */}
      <img
        src={GARUDA}
        alt=""
        aria-hidden="true"
        className="drag-none pointer-events-none absolute left-1/2 top-1/2 w-[min(82vw,560px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.32em] text-emas-terang"
        >
          <span className="h-px w-8 bg-emas-terang/60" />
          Kesimpulan
          <span className="h-px w-8 bg-emas-terang/60" />
        </motion.p>

        <motion.blockquote
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="pull-quote space-y-3 text-2xl leading-snug sm:text-3xl lg:text-[2.5rem] lg:leading-[1.25]"
        >
          <span aria-hidden="true" className="mb-2 block text-5xl leading-none text-emas-terang/70">
            &ldquo;
          </span>
          {QUOTE.map((l, i) => (
            <motion.span
              key={i}
              variants={line}
              className={`block ${l.accent ? 'text-gold-gradient font-semibold' : 'text-putih'}`}
            >
              {l.t}
            </motion.span>
          ))}
        </motion.blockquote>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: reduced ? 0 : 0.3, ease: 'easeOut' }}
          className="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-krem/85 sm:text-lg"
        >
          Memperluas kajian dari satu kawasan menjadi lima kawasan memperlihatkan pola yang
          sebelumnya tak terbaca.
        </motion.p>
      </div>
    </section>
  )
}
