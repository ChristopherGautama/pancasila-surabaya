import { useRef } from 'react'
import { motion, useReducedMotion, useInView } from 'framer-motion'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  LabelList,
} from 'recharts'
import { Zap, HeartHandshake } from 'lucide-react'
import { WILAYAH, SILA_NAMES } from '../data/wilayah'

// Display order requested for the comparison (W→E→S→N→Center reads naturally).
const ORDER = ['barat', 'timur', 'selatan', 'utara', 'pusat']
// Distinct red-family accent per kawasan (cross-references chart ↔ cards).
const WARNA = {
  barat: '#B11324',
  timur: '#CE1126',
  selatan: '#9E1220',
  utara: '#A8101F',
  pusat: '#7A0C18',
}

const byId = (id) => WILAYAH.find((w) => w.id === id)
const shortNama = (w) => w.nama.replace('Surabaya ', '')
// Reuse wilayah.js as the single source (itself derived from kasusDetail.js) —
// parse the leading number off jumlahKasus ("±8 kasus" → 8) for the bar chart.
const jumlahNum = (w) => Number(String(w.jumlahKasus).replace(/[^\d]/g, '')) || 0

function LightTooltip({ active, payload, label, suffix = '' }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-merah/20 bg-white px-3 py-2 text-xs shadow-lg">
      <p className="font-semibold text-merah-tua">{label}</p>
      <p className="text-teks-gelap">
        <span className="font-bold">{payload[0].value}</span>
        {suffix}
      </p>
    </div>
  )
}

function ChartReveal({ height, children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  return (
    <div ref={ref} style={{ height }}>
      {inView ? children : null}
    </div>
  )
}

export default function Perbandingan() {
  const reduced = useReducedMotion()

  const barData = ORDER.map((id) => {
    const w = byId(id)
    return { id, nama: shortNama(w), kasus: jumlahNum(w), color: WARNA[id] }
  })

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.1 } },
  }
  const item = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 26 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      }

  return (
    <section id="perbandingan" className="section-shell bg-krem py-24 text-teks-gelap sm:py-32">
      <div className="relative mx-auto max-w-6xl px-6">
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
            Perbandingan
            <span className="h-px w-8 bg-emas" />
          </motion.p>
          <motion.h2
            variants={item}
            className="font-display text-3xl font-extrabold leading-tight text-teks-gelap sm:text-4xl lg:text-5xl"
          >
            Perbandingan <span className="text-merah-tua">Antarwilayah</span>
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-5 text-base leading-relaxed text-teks-gelap/75 sm:text-lg"
          >
            Akar persoalan serupa, corak pemicunya khas tiap kawasan.
          </motion.p>
        </motion.div>

        {/* Overview bar chart */}
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto mt-14 max-w-3xl rounded-2xl bg-white/70 p-5 ring-1 ring-black/5 sm:p-6"
        >
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-merah-tua">
            Perkiraan jumlah kasus terhimpun per kawasan
          </h3>
          <ChartReveal height={240}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} layout="vertical" margin={{ left: 4, right: 34, top: 4, bottom: 4 }}>
                <CartesianGrid horizontal={false} stroke="rgba(0,0,0,0.06)" />
                <XAxis
                  type="number"
                  tick={{ fill: '#1A1A1A', fontSize: 12 }}
                  stroke="rgba(0,0,0,0.25)"
                  tickLine={false}
                />
                <YAxis
                  type="category"
                  dataKey="nama"
                  tick={{ fill: '#1A1A1A', fontSize: 12, fontWeight: 600 }}
                  stroke="rgba(0,0,0,0.25)"
                  tickLine={false}
                  width={70}
                />
                <Tooltip content={<LightTooltip suffix=" kasus (perkiraan)" />} cursor={{ fill: 'rgba(206,17,38,0.06)' }} />
                <Bar dataKey="kasus" radius={[0, 6, 6, 0]} isAnimationActive={!reduced} animationDuration={1200}>
                  {barData.map((d) => (
                    <Cell key={d.id} fill={d.color} />
                  ))}
                  <LabelList dataKey="kasus" position="right" fill="#1A1A1A" fontSize={12} fontWeight={700} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartReveal>
        </motion.div>

        {/* Comparative cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {ORDER.map((id) => {
            const w = byId(id)
            return (
              <motion.article
                key={id}
                variants={item}
                whileHover={reduced ? undefined : { y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                className="glass-light relative overflow-hidden rounded-2xl p-5 transition-shadow duration-300 hover:shadow-emas-glow"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ backgroundColor: WARNA[id] }}
                />
                <h3 className="mt-1.5 font-display text-lg font-extrabold text-teks-gelap">
                  {shortNama(w)}
                </h3>
                <p className="text-xs font-semibold text-teks-gelap/55">{w.jumlahKasus}</p>

                {/* Sila menonjol */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {w.silaMenonjol.map((n) => (
                    <span
                      key={n}
                      title={`Sila ${n} — ${SILA_NAMES[n]}`}
                      className="inline-flex items-center gap-1 rounded-full bg-emas-shine bg-[length:200%_auto] px-2.5 py-0.5 text-xs font-bold text-gelap"
                    >
                      <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-gelap/85 text-[9px] text-emas-terang">
                        {n}
                      </span>
                      Sila {n}
                    </span>
                  ))}
                </div>

                <div className="mt-4 space-y-2.5 border-t border-black/5 pt-3">
                  <div>
                    <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-merah-tua/80">
                      <Zap size={12} /> Pemicu utama
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-teks-gelap">{w.pemicu}</p>
                  </div>
                  <div>
                    <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-merah-tua/80">
                      <HeartHandshake size={12} /> Kelompok rentan
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-teks-gelap">{w.rentan}</p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Closing insight */}
        <motion.blockquote
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="pull-quote mx-auto mt-16 max-w-3xl text-center text-2xl leading-snug text-teks-gelap sm:text-3xl"
        >
          <span aria-hidden="true" className="text-emas">&ldquo;</span>
          Penguatan Pancasila tidak bisa seragam — tiap kawasan butuh{' '}
          <span className="text-merah-tua">penekanan yang berbeda</span>.
          <span aria-hidden="true" className="text-emas">&rdquo;</span>
        </motion.blockquote>
      </div>
    </section>
  )
}
