import { motion, useReducedMotion } from 'framer-motion'
import { ShieldAlert, Map, Sprout } from 'lucide-react'

// The pull-quote headline, split into words so it can reveal word-by-word.
// `accent` words are tinted in deep red for emphasis on the krem background.
const HEADLINE = [
  { t: 'Pancasila' },
  { t: 'bukan' },
  { t: 'hafalan,' },
  { t: 'melainkan' },
  { t: 'diuji', accent: true },
  { t: 'pada', accent: true },
  { t: 'kehidupan', accent: true },
  { t: 'nyata.', accent: true },
]

// The three research questions ("Tiga Rumusan Masalah").
const RUMUSAN = [
  {
    no: '01',
    icon: ShieldAlert,
    q: 'Sila mana yang paling sering dilanggar?',
    a: 'Mengidentifikasi sila Pancasila yang paling sering dilanggar berdasarkan data dari kelima wilayah.',
  },
  {
    no: '02',
    icon: Map,
    q: 'Bagaimana beda antarwilayah?',
    a: 'Menelaah bagaimana karakteristik pelanggaran berbeda antara satu kawasan dengan kawasan lain.',
  },
  {
    no: '03',
    icon: Sprout,
    q: 'Apa akar & dampaknya?',
    a: 'Menganalisis faktor penyebab, dampak sosial, dan kaitannya dengan nilai-nilai Pancasila yang semestinya diterapkan.',
  },
]

export default function Pendahuluan() {
  const reduced = useReducedMotion()

  // Word-reveal variants for the Fraunces headline (mask slide-up).
  const headlineContainer = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.06, delayChildren: 0.05 } },
  }
  const headlineWord = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { y: '115%' },
        show: {
          y: '0%',
          transition: { type: 'spring', stiffness: 220, damping: 26 },
        },
      }

  // Generic fade-up used by the paragraphs and the card grid.
  const fadeContainer = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.15 } },
  }
  const fadeItem = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      }

  return (
    <section
      id="pendahuluan"
      className="section-shell bg-krem py-24 text-teks-gelap sm:py-32"
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* Eyebrow */}
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-merah-tua"
        >
          <span className="h-px w-10 bg-emas" />
          Pendahuluan
        </motion.p>

        {/* Pull-quote headline (Fraunces) with word-by-word reveal */}
        <motion.h2
          variants={headlineContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="pull-quote max-w-4xl text-3xl leading-[1.15] text-teks-gelap sm:text-4xl lg:text-5xl"
        >
          <span
            aria-hidden="true"
            className="mr-1 align-top text-5xl leading-none text-emas/60 sm:text-6xl"
          >
            &ldquo;
          </span>
          {HEADLINE.map((w, i) => (
            <span
              key={w.t + i}
              className="inline-flex overflow-hidden pb-[0.12em] align-bottom"
            >
              <motion.span
                variants={headlineWord}
                className={`inline-block ${w.accent ? 'text-merah-tua' : ''}`}
              >
                {w.t}
              </motion.span>
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </motion.h2>

        {/* Two narrative paragraphs */}
        <motion.div
          variants={fadeContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-6 text-base leading-relaxed text-teks-gelap/80 sm:text-lg md:grid-cols-2"
        >
          <motion.p variants={fadeItem}>
            Surabaya dipilih bukan tanpa alasan. Sebagai kota terbesar kedua di
            Indonesia dan pusat pertumbuhan Jawa Timur, kota ini menyimpan
            dinamika sosial, ekonomi, dan keagamaan yang tinggi&mdash;persoalan
            yang satu saling beririsan dengan yang lain, sehingga kaya untuk
            diuji dari sudut Pancasila. Wilayahnya terbagi ke dalam{' '}
            <strong className="font-semibold text-merah-tua">
              31 kecamatan
            </strong>{' '}
            yang dikelompokkan menjadi lima kawasan: Barat, Utara, Timur,
            Selatan, dan Pusat.
          </motion.p>
          <motion.p variants={fadeItem}>
            Penelitian awal hanya berfokus pada Surabaya Barat&mdash;banjir dan
            alih fungsi lahan. Namun fokus tunggal tak mampu memperlihatkan
            apakah pola pelanggaran bersifat khas satu wilayah atau justru gejala
            seluruh kota. Maka cakupan{' '}
            <strong className="font-semibold text-merah-tua">
              diperluas ke lima kawasan
            </strong>{' '}
            agar pola lintas wilayah terbaca dan perbandingan antarwilayah
            menjadi mungkin.
          </motion.p>
        </motion.div>

        {/* Tiga Rumusan Masalah */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="mt-20 mb-8 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-emas" />
          <h3 className="text-sm font-bold uppercase tracking-[0.28em] text-merah-tua">
            Tiga Rumusan Masalah
          </h3>
        </motion.div>

        <motion.ul
          variants={fadeContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {RUMUSAN.map((r) => {
            const Icon = r.icon
            return (
              <motion.li
                key={r.no}
                variants={fadeItem}
                whileHover={reduced ? undefined : { y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="glass-light group relative overflow-hidden rounded-2xl p-6 transition-shadow duration-300 hover:shadow-emas-glow"
              >
                {/* Decorative watermark number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-2 select-none font-display text-6xl font-extrabold text-emas/15"
                >
                  {r.no}
                </span>

                {/* Gold icon tile */}
                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emas-shine bg-[length:200%_auto] text-gelap shadow-emas-glow">
                  <Icon size={24} strokeWidth={2.2} />
                </div>

                <h4 className="relative text-lg font-bold leading-snug text-teks-gelap">
                  {r.q}
                </h4>
                {/* gold underline accent */}
                <span className="mt-3 mb-4 block h-0.5 w-10 rounded-full bg-emas transition-all duration-300 group-hover:w-16" />
                <p className="relative text-sm leading-relaxed text-teks-gelap/70">
                  {r.a}
                </p>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
