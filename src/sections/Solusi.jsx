import { motion, useReducedMotion } from 'framer-motion'
import { Check, Handshake, Flower2, MessagesSquare, Droplets } from 'lucide-react'
import { IMG } from '../data/assets'
import { SILAS } from '../data/silas'
import { SILA_SYMBOLS } from '../components/sila-symbols'

// Proven good-practice highlights.
const PRAKTIK = [
  {
    icon: Handshake,
    judul: 'Kampung Pancasila',
    sub: 'Sambikerep & Pakal · 2025',
    desc: 'Ruang kerukunan warga lintas latar belakang.',
  },
  {
    icon: Flower2,
    judul: 'Moroseneng → Kampung Anggrek Sememi',
    sub: 'Eks lokalisasi',
    desc: 'Diubah menjadi ekonomi mandiri lewat pelatihan & Omah Sinau.',
  },
  {
    icon: MessagesSquare,
    judul: 'Mediasi oleh Wali Kota',
    sub: 'Musyawarah',
    desc: 'Sengketa antarwarga diselesaikan lewat dialog.',
  },
  {
    icon: Droplets,
    judul: 'Akses Air Perumda Surya Sembada',
    sub: 'Pemerataan',
    desc: 'Air bersih bagi warga berpenghasilan rendah.',
  },
]

export default function Solusi() {
  const reduced = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.1 } },
  }
  const item = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
      }

  return (
    <section
      id="solusi"
      className="section-shell bg-cover bg-center py-24 text-teks-gelap sm:py-32"
      style={{ backgroundImage: `url(${IMG.solusiBg})` }}
    >
      {/* Soft bright overlay so the page lifts from dark → hopeful and text stays legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-krem/88 to-white/94" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p
            variants={item}
            className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-merah-tua"
          >
            <span className="h-px w-8 bg-emas" />
            Solusi
            <span className="h-px w-8 bg-emas" />
          </motion.p>
          <motion.h2
            variants={item}
            className="font-display text-3xl font-extrabold leading-tight text-teks-gelap sm:text-4xl lg:text-5xl"
          >
            Pancasila yang <span className="text-gold-gradient">Membumi</span>
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-5 text-base leading-relaxed text-teks-gelap/75 sm:text-lg"
          >
            Dari masalah menuju jalan keluar — solusi yang membumi sudah terbukti di
            Surabaya.
          </motion.p>
        </motion.div>

        {/* (a) Solusi per sila */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {SILAS.map((s) => {
            const Sym = SILA_SYMBOLS[s.nomor]
            return (
              <motion.article
                key={s.id}
                variants={item}
                whileHover={reduced ? undefined : { y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="relative overflow-hidden rounded-2xl border border-emas/40 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-emas-glow"
              >
                <Sym
                  className="pointer-events-none absolute -right-3 -top-3 h-16 w-16 opacity-20"
                  strokeWidth={3}
                />
                <span
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: s.accent === '#E9C46A' ? '#B8860B' : s.accent }}
                >
                  Sila {s.nomor}
                </span>
                <h3 className="mt-1 font-display text-base font-extrabold leading-tight text-teks-gelap">
                  {s.nama}
                </h3>
                <ul className="mt-3 space-y-2">
                  {s.solusi.slice(0, 2).map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emas text-gelap">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span className="text-[13px] leading-snug text-teks-gelap/80">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            )
          })}
        </motion.div>

        {/* (b) Praktik baik */}
        <div className="mt-20">
          <motion.h3
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center font-display text-2xl font-extrabold text-teks-gelap sm:text-3xl"
          >
            Praktik Baik yang Sudah Terbukti
          </motion.h3>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          >
            {PRAKTIK.map((p) => {
              const Icon = p.icon
              return (
                <motion.div
                  key={p.judul}
                  variants={item}
                  whileHover={reduced ? undefined : { y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="rounded-2xl bg-white/85 p-5 ring-1 ring-emas/30 backdrop-blur-sm transition-shadow duration-300 hover:shadow-emas-glow"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emas-shine bg-[length:200%_auto] text-gelap shadow-emas-glow">
                    <Icon size={24} strokeWidth={2.2} />
                  </span>
                  <h4 className="mt-4 font-display text-base font-extrabold leading-tight text-teks-gelap">
                    {p.judul}
                  </h4>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wide text-merah-tua/80">
                    {p.sub}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-teks-gelap/75">{p.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* (c) Optimistic close */}
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="pull-quote mx-auto mt-16 max-w-3xl text-center text-xl leading-relaxed text-teks-gelap sm:text-2xl"
        >
          Pelanggaran bukan satu-satunya wajah kota — Pancasila bisa hidup bila{' '}
          <span className="text-merah-tua">ditegakkan secara kontekstual</span>.
        </motion.p>
      </div>
    </section>
  )
}
