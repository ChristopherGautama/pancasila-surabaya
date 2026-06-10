import { Fragment } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { IMG } from '../data/assets'
import FourWOneH from '../components/FourWOneH'

// Three analysis stages shown as an animated flow beneath the diagram.
const TAHAP = ['Reduksi Data', 'Penyajian Data', 'Penarikan Kesimpulan']

export default function Metode() {
  const reduced = useReducedMotion()

  const fadeItem = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      }
  const stepItem = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 14, scale: 0.94 },
        show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: 'easeOut' } },
      }

  return (
    <section
      id="metode"
      className="section-shell bg-krem py-24 text-teks-gelap sm:py-32"
    >
      {/* Batik ornament accents in opposite corners */}
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
          variants={{ hidden: {}, show: { transition: { staggerChildren: reduced ? 0 : 0.15 } } }}
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
            Metode Penelitian
            <span className="h-px w-8 bg-emas" />
          </motion.p>
          <motion.h2
            variants={fadeItem}
            className="font-display text-3xl font-extrabold leading-tight text-teks-gelap sm:text-4xl lg:text-5xl"
          >
            Membaca kota lewat{' '}
            <span className="text-merah-tua">4W&nbsp;+&nbsp;1H</span>
          </motion.h2>
          <motion.p
            variants={fadeItem}
            className="mt-5 text-base leading-relaxed text-teks-gelap/75 sm:text-lg"
          >
            Pendekatan{' '}
            <strong className="font-semibold text-teks-gelap">
              kualitatif deskriptif
            </strong>{' '}
            berbasis studi kepustakaan dan analisis dokumen&mdash;berita kredibel,
            jurnal ilmiah, dan data BPS Kota Surabaya&mdash;dengan mengkaji sekitar{' '}
            <strong className="font-semibold text-teks-gelap">80 kasus</strong>{' '}
            dari lima wilayah.
          </motion.p>
        </motion.div>

        {/* 4W + 1H diagram */}
        <div className="mt-16">
          <FourWOneH />
        </div>

        {/* Three analysis stages */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: reduced ? 0 : 0.18, delayChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-20"
        >
          <motion.p
            variants={stepItem}
            className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.28em] text-merah-tua"
          >
            Tiga Tahap Analisis
          </motion.p>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            {TAHAP.map((t, i) => (
              <Fragment key={t}>
                <motion.span
                  variants={stepItem}
                  className="glass-light flex items-center justify-center gap-3 rounded-full px-6 py-3 text-center text-sm font-semibold text-teks-gelap"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emas-shine bg-[length:200%_auto] text-xs font-bold text-gelap">
                    {i + 1}
                  </span>
                  {t}
                </motion.span>
                {i < TAHAP.length - 1 && (
                  <motion.span variants={stepItem} className="flex justify-center">
                    <ArrowRight
                      aria-hidden="true"
                      className="shrink-0 rotate-90 text-emas sm:rotate-0"
                      size={22}
                      strokeWidth={2.4}
                    />
                  </motion.span>
                )}
              </Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
