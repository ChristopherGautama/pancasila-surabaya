import { motion, useReducedMotion } from 'framer-motion'
import { IMG } from '../data/assets'
import SurabayaMap from '../components/SurabayaMap'

export default function Peta() {
  const reduced = useReducedMotion()

  const fadeItem = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      }

  return (
    <section
      id="peta"
      className="section-shell bg-putih py-24 text-teks-gelap sm:py-32"
    >
      {/* Very faint map background — kept low-opacity so it never competes with content */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.05]"
        style={{ backgroundImage: `url(${IMG.petaBg})` }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
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
            Lima Kawasan
            <span className="h-px w-8 bg-emas" />
          </motion.p>
          <motion.h2
            variants={fadeItem}
            className="font-display text-3xl font-extrabold leading-tight text-teks-gelap sm:text-4xl lg:text-5xl"
          >
            Peta Lima Kawasan{' '}
            <span className="text-merah-tua">Surabaya</span>
          </motion.h2>
          <motion.p
            variants={fadeItem}
            className="mt-5 text-base leading-relaxed text-teks-gelap/75 sm:text-lg"
          >
            Klik tiap kawasan untuk melihat karakter dan kasus pelanggaran nilai
            Pancasila yang menonjol.
          </motion.p>
        </motion.div>

        {/* Interactive map */}
        <div className="mt-14">
          <SurabayaMap />
        </div>

        {/* Closing insight */}
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="pull-quote mx-auto mt-16 max-w-2xl text-center text-xl leading-relaxed text-teks-gelap sm:text-2xl"
        >
          <span aria-hidden="true" className="mr-1 text-emas">
            &ldquo;
          </span>
          Akar persoalannya serupa, tetapi corak pemicunya{' '}
          <span className="text-merah-tua">khas pada tiap kawasan</span>.
          <span aria-hidden="true" className="ml-1 text-emas">
            &rdquo;
          </span>
        </motion.p>
      </div>
    </section>
  )
}
