import { useRef } from 'react'
import { motion, useReducedMotion, useInView } from 'framer-motion'
// react-countup is CommonJS (module.exports = { default, useCountUp }, __esModule:true).
// Depending on the bundler's CJS interop, the default import can arrive as the
// module namespace object instead of the component — guard so CountUp is always
// the component function.
import CountUpImport from 'react-countup'
const CountUp = CountUpImport?.default ?? CountUpImport
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts'
import GoldParticles from '../components/GoldParticles'
import { STATS, NARKOBA_TREND, PELANGGARAN_PER_SILA } from '../data/stats'

// Format a stat value the same way react-countup would (Indonesian separators),
// used for the reduced-motion (no animation) fallback.
function formatNumber(value, { decimals = 0, separator = '', decimal = '.' }) {
  const fixed = value.toFixed(decimals)
  const [intPart, frac] = fixed.split('.')
  const grouped = separator
    ? intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    : intPart
  return frac ? `${grouped}${decimal}${frac}` : grouped
}

// Shared dark tooltip for both charts.
function DarkTooltip({ active, payload, label, suffix = '' }) {
  if (!active || !payload?.length) return null
  const p = payload[0]
  return (
    <div className="rounded-lg border border-emas/30 bg-gelap/95 px-3 py-2 text-xs shadow-xl backdrop-blur-sm">
      {label !== undefined && (
        <p className="mb-0.5 font-semibold text-emas-terang">{label}</p>
      )}
      <p className="text-krem">
        {p.name}:{' '}
        <span className="font-bold text-putih">
          {p.value}
          {suffix}
        </span>
      </p>
    </div>
  )
}

// Mount the chart only once it scrolls into view so its built-in animation
// plays on screen (not before). Reserves height to avoid layout shift.
function ChartReveal({ height, children }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  return (
    <div ref={ref} style={{ height }}>
      {inView ? children : null}
    </div>
  )
}

function ChartCard({ title, note, children }) {
  return (
    <div className="glass rounded-2xl p-5 sm:p-6">
      <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-emas-terang">
        {title}
      </h3>
      {note && <p className="mt-1 text-xs text-krem/55">{note}</p>}
      <div className="mt-4">{children}</div>
    </div>
  )
}

function StatCounter({ stat, reduced, variants }) {
  return (
    <motion.div
      variants={variants}
      className="glass rounded-2xl p-6 text-center"
    >
      <div className="font-display text-4xl font-extrabold leading-none sm:text-5xl">
        <span className="text-gold-gradient">
          {reduced ? (
            `${stat.prefix || ''}${formatNumber(stat.value, stat)}${stat.suffix || ''}`
          ) : (
            <CountUp
              end={stat.value}
              duration={2.2}
              decimals={stat.decimals || 0}
              separator={stat.separator || ''}
              decimal={stat.decimal || '.'}
              prefix={stat.prefix || ''}
              suffix={stat.suffix || ''}
              enableScrollSpy
              scrollSpyOnce
              scrollSpyDelay={120}
            />
          )}
        </span>
        {stat.unit && (
          <span className="ml-1.5 text-lg font-bold text-emas-terang/80">
            {stat.unit}
          </span>
        )}
      </div>
      <p className="mt-3 text-sm font-semibold text-putih">{stat.label}</p>
      <p className="mt-1 text-xs leading-relaxed text-krem/60">{stat.ket}</p>
    </motion.div>
  )
}

// Light pie segments need dark labels for contrast; dark ones need light labels.
const LIGHT_SEGMENTS = new Set(['#E9C46A', '#D4A017'])
const renderPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, payload }) => {
  const RAD = Math.PI / 180
  const r = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + r * Math.cos(-midAngle * RAD)
  const y = cy + r * Math.sin(-midAngle * RAD)
  return (
    <text
      x={x}
      y={y}
      fill={LIGHT_SEGMENTS.has(payload.color) ? '#14080A' : '#FBF7F0'}
      fontSize={12}
      fontWeight={800}
      textAnchor="middle"
      dominantBaseline="central"
    >
      {payload.nilai}%
    </text>
  )
}

export default function Data() {
  const reduced = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.12 } },
  }
  const item = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
      }

  return (
    <section id="data" className="section-shell bg-gelap py-24 text-krem sm:py-32">
      <GoldParticles count={22} />

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
            className="mb-5 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-emas-terang"
          >
            <span className="h-px w-8 bg-emas" />
            Data Berbicara
            <span className="h-px w-8 bg-emas" />
          </motion.p>
          <motion.h2
            variants={item}
            className="font-display text-3xl font-extrabold leading-tight text-putih sm:text-4xl lg:text-5xl"
          >
            Data <span className="text-gold-gradient">Berbicara</span>
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-5 text-base leading-relaxed text-krem/80 sm:text-lg"
          >
            Angka di balik pelanggaran nilai Pancasila di Surabaya (BPS Kota Surabaya
            &amp; nasional).
          </motion.p>
        </motion.div>

        {/* (a) Stat counters */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <StatCounter key={stat.id} stat={stat} reduced={reduced} variants={item} />
          ))}
        </motion.div>

        {/* (b) + (c) Charts */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <ChartCard title="Lonjakan Pengguna Narkoba 2023–2025">
            <ChartReveal height={300}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={NARKOBA_TREND}
                  margin={{ top: 10, right: 24, bottom: 0, left: -8 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(233,196,106,0.12)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="tahun"
                    tick={{ fill: '#FBF7F0', fontSize: 12 }}
                    stroke="rgba(251,247,240,0.3)"
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: '#FBF7F0', fontSize: 12 }}
                    stroke="rgba(251,247,240,0.3)"
                    tickLine={false}
                    axisLine={false}
                    width={40}
                  />
                  <Tooltip
                    content={<DarkTooltip suffix=" orang" />}
                    cursor={{ stroke: '#D4A017', strokeWidth: 1, strokeDasharray: '4 4' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="pengguna"
                    name="Pengguna narkoba"
                    stroke="#D4A017"
                    strokeWidth={3}
                    dot={{ r: 5, fill: '#E9C46A', stroke: '#14080A', strokeWidth: 2 }}
                    activeDot={{ r: 7, fill: '#E9C46A' }}
                    isAnimationActive={!reduced}
                    animationDuration={1400}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartReveal>
          </ChartCard>

          <ChartCard
            title="Perkiraan Proporsi Pelanggaran per Sila"
            note="Angka mencerminkan ketersediaan data, bukan sensus."
          >
            <ChartReveal height={300}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={PELANGGARAN_PER_SILA}
                    dataKey="nilai"
                    nameKey="label"
                    cx="50%"
                    cy="50%"
                    innerRadius={58}
                    outerRadius={92}
                    paddingAngle={2}
                    stroke="#14080A"
                    strokeWidth={2}
                    label={renderPieLabel}
                    labelLine={false}
                    isAnimationActive={!reduced}
                    animationDuration={1100}
                  >
                    {PELANGGARAN_PER_SILA.map((d) => (
                      <Cell key={d.sila} fill={d.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<DarkTooltip suffix="%" />} />
                  <Legend
                    verticalAlign="bottom"
                    height={32}
                    formatter={(value) => (
                      <span style={{ color: '#FBF7F0', fontSize: 12 }}>{value}</span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </ChartReveal>
          </ChartCard>
        </div>

        {/* (d) Insight */}
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto mt-12 max-w-3xl rounded-2xl border-l-2 border-emas/60 bg-white/[0.03] px-6 py-5 text-base leading-relaxed text-krem/85 sm:text-lg"
        >
          <strong className="font-semibold text-emas-terang">Paradoks Surabaya:</strong>{' '}
          kemiskinan menyentuh titik terendah satu dekade, tetapi kejahatan jalanan tetap
          marak — akar persoalan tidak semata ekonomi, melainkan juga lemahnya efek jera dan
          pengawasan komunitas.
        </motion.p>
      </div>
    </section>
  )
}
