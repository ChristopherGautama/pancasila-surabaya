import { motion, useReducedMotion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, Flame } from 'lucide-react'
import SectionDivider from '../components/SectionDivider'
import { PERSEKUSI_INTRO, PERSEKUSI_WILAYAH } from '../data/persekusi'
import { SILA_NAMES } from '../data/wilayah'
import { IMG } from '../data/assets'

// Badge styling per intensitas — gradasi paling pekat (emas/merah) untuk
// "Tertinggi", menurun ke arah "Sedang".
const INTENSITY = {
  Tertinggi: {
    badge:
      'bg-gradient-to-r from-merah via-[#B5311E] to-emas text-gelap shadow-emas-glow',
    flames: 3,
  },
  Tinggi: {
    badge: 'bg-gradient-to-r from-merah-tua to-emas text-putih',
    flames: 2,
  },
  'Sedang–Tinggi': {
    badge: 'bg-emas/90 text-gelap',
    flames: 2,
  },
  Sedang: {
    badge: 'border border-emas/45 bg-emas/15 text-emas-terang',
    flames: 1,
  },
}

// Pill nomor sila bergaya konsisten dengan chip sila lain di situs.
function SilaChip({ n, light = false }) {
  return (
    <span
      title={`Sila ${n} — ${SILA_NAMES[n]}`}
      className={`inline-flex items-center gap-1.5 rounded-full py-1 pl-1 pr-3 text-[11px] font-semibold ${
        light
          ? 'bg-emas/15 text-emas-terang ring-1 ring-emas/25'
          : 'bg-white/5 text-krem/85 ring-1 ring-emas/20'
      }`}
    >
      <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-emas text-[11px] font-bold leading-none text-gelap">
        {n}
      </span>
      Sila {n}
    </span>
  )
}

// Daftar sumber sebagai link yang WAJIB bisa diklik (target _blank).
function SumberLinks({ sumber, label = 'Sumber' }) {
  if (!sumber?.length) return null
  return (
    <div className="mt-3">
      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-krem/45">
        {label}:
      </p>
      <ul className="mt-1.5 space-y-1.5">
        {sumber.map((s) => (
          <li key={s.url}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-1.5 text-xs font-semibold text-emas-terang transition-colors hover:text-[#F3DCA0] hover:underline"
            >
              <ExternalLink size={12} className="mt-0.5 shrink-0" />
              <span>{s.nama}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Persekusi() {
  const reduced = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.12 } },
  }
  const fadeItem = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
      }

  return (
    <>
      {/* Wave: dark Peta → dark Persekusi (gold accent line bridges them) */}
      <SectionDivider color="#14080A" className="bg-gelap" />

      <section id="persekusi" className="section-shell bg-gelap py-24 sm:py-28">
        <div
          className="batik-overlay"
          style={{ backgroundImage: `url(${IMG.batikGold})` }}
        />
        {/* aksen merah samar di pojok agar terasa "berat" */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-merah/20 blur-[120px]"
        />

        <div className="relative mx-auto max-w-6xl px-6">
          {/* ====== BAGIAN A — HEADER ANALITIS ====== */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.p
              variants={fadeItem}
              className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-merah"
            >
              <span className="h-px w-8 bg-emas" />
              Sorotan
              <span className="h-px w-8 bg-emas" />
            </motion.p>

            <motion.h2
              variants={fadeItem}
              className="font-serif text-3xl font-semibold italic leading-tight text-putih sm:text-4xl lg:text-5xl"
            >
              {PERSEKUSI_INTRO.judul}
            </motion.h2>

            <motion.p
              variants={fadeItem}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-krem/80 sm:text-lg"
            >
              {PERSEKUSI_INTRO.definisi}
            </motion.p>

            {/* Chip sila terkait */}
            <motion.div
              variants={fadeItem}
              className="mt-7 flex flex-wrap items-center justify-center gap-2.5"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-krem/45">
                Sila terkait
              </span>
              {PERSEKUSI_INTRO.silaTerkait.map((n) => (
                <SilaChip key={n} n={n} light />
              ))}
            </motion.div>
          </motion.div>

          {/* Dua callout berdampingan */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-12 grid gap-5 sm:grid-cols-2"
          >
            <motion.div
              variants={fadeItem}
              className="rounded-2xl border border-emas/20 bg-white/[0.04] p-6"
            >
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-emas-terang">
                <Flame size={14} className="text-merah" />
                Di mana paling banyak?
              </p>
              <p className="mt-3 text-sm leading-relaxed text-krem/80">
                {PERSEKUSI_INTRO.sebaran}
              </p>
            </motion.div>

            <motion.div
              variants={fadeItem}
              className="rounded-2xl border border-emas/20 bg-white/[0.04] p-6"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emas-terang">
                Kaitan Pancasila
              </p>
              <p className="mt-3 text-sm leading-relaxed text-krem/80">
                {PERSEKUSI_INTRO.analisisPancasila}
              </p>
            </motion.div>
          </motion.div>

          {/* Blok analisis: akar + ironi (pull-quote) */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto mt-10 max-w-3xl"
          >
            <motion.p
              variants={fadeItem}
              className="text-sm leading-relaxed text-krem/70 sm:text-base"
            >
              {PERSEKUSI_INTRO.akar}
            </motion.p>

            <motion.blockquote
              variants={fadeItem}
              className="pull-quote mt-8 border-l-2 border-emas pl-5 text-lg leading-relaxed text-emas-terang sm:text-xl"
            >
              <span aria-hidden="true" className="mr-1 text-emas">
                &ldquo;
              </span>
              {PERSEKUSI_INTRO.ironi}
              <span aria-hidden="true" className="ml-1 text-emas">
                &rdquo;
              </span>
            </motion.blockquote>

            {/* Sumber konsep */}
            <motion.div variants={fadeItem}>
              <SumberLinks
                sumber={PERSEKUSI_INTRO.sumberKonsep}
                label="Sumber konsep"
              />
            </motion.div>
          </motion.div>

          {/* ====== BAGIAN B — SEBARAN PER WILAYAH ====== */}
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-20 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-emas-terang"
          >
            <span className="h-px w-8 bg-emas" />
            Sebaran per Wilayah
            <span className="h-px w-8 bg-emas" />
          </motion.p>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-10 grid gap-6 lg:grid-cols-2"
          >
            {PERSEKUSI_WILAYAH.map((w) => {
              const tone = INTENSITY[w.intensitas] ?? INTENSITY.Sedang
              return (
                <motion.div
                  key={w.wilayah}
                  variants={fadeItem}
                  className="flex flex-col rounded-2xl border border-emas/15 bg-white/[0.03] p-6"
                >
                  {/* Header wilayah */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-display text-xl font-extrabold text-putih">
                      Surabaya {w.wilayah}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${tone.badge}`}
                    >
                      <span className="flex items-center" aria-hidden="true">
                        {Array.from({ length: tone.flames }).map((_, i) => (
                          <Flame key={i} size={12} className="-ml-0.5 first:ml-0" />
                        ))}
                      </span>
                      {w.intensitas}
                    </span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-krem/50">
                    {w.catatan}
                  </p>

                  {/* Daftar kasus */}
                  <div className="mt-5 space-y-3">
                    {w.kasus.map((k) => (
                      <div
                        key={k.judul}
                        className="rounded-xl bg-white/[0.04] p-4 ring-1 ring-white/10"
                      >
                        <p className="text-sm font-semibold leading-snug text-putih">
                          {k.judul}
                        </p>
                        <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] font-medium text-krem/55">
                          <span className="inline-flex shrink-0 items-center gap-1">
                            <Calendar size={12} className="text-emas-terang/70" />
                            {k.tahun}
                          </span>
                          <span className="inline-flex min-w-0 items-center gap-1">
                            <MapPin
                              size={12}
                              className="shrink-0 text-emas-terang/70"
                            />
                            <span className="truncate">{k.lokasi}</span>
                          </span>
                          {k.sila?.length > 0 && (
                            <span
                              className="inline-flex shrink-0 items-center gap-1"
                              aria-label={`Sila terkait: ${k.sila.join(', ')}`}
                            >
                              {k.sila.map((n) => (
                                <span
                                  key={n}
                                  title={`Sila ${n} — ${SILA_NAMES[n]}`}
                                  className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-emas text-[10px] font-bold leading-none text-gelap"
                                >
                                  {n}
                                </span>
                              ))}
                            </span>
                          )}
                        </div>
                        <p className="mt-2.5 text-sm leading-relaxed text-krem/75">
                          {k.ringkas}
                        </p>
                        <SumberLinks sumber={k.sumber} />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </>
  )
}
