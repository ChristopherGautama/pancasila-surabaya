import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { IMG, GARUDA } from '../data/assets'
import { usePageScroll } from '../components/SmoothScroll'
import GoldParticles from '../components/GoldParticles'

const TITLE_WORDS = ['Pancasila', 'di', 'Nadi', 'Surabaya']

const wordContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.35 },
  },
}
const wordItem = {
  hidden: { opacity: 0, y: 40, rotateX: -40 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: 'spring', stiffness: 160, damping: 18 },
  },
}

export default function Hero() {
  const heroRef = useRef(null)
  const { scrollTo } = usePageScroll()

  // Scroll-linked parallax as the hero leaves the viewport.
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const garudaY = useTransform(scrollYProgress, [0, 1], [0, -140])
  const garudaScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="section-shell relative flex min-h-[100svh] items-center justify-center"
    >
      {/* Background image (parallax) */}
      <motion.div
        style={{ y: bgY, backgroundImage: `url(${IMG.heroBg})` }}
        className="absolute inset-0 -z-30 scale-110 bg-cover bg-center bg-no-repeat"
      />
      {/* Dark gradient overlay for legibility */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-gelap/75 via-merah-tua/55 to-gelap/95" />
      <div className="absolute inset-0 -z-20 bg-gelap/30" />
      {/* Thin gold batik overlay */}
      <div
        className="batik-overlay -z-10"
        style={{ backgroundImage: `url(${IMG.batikGold})` }}
      />
      {/* Floating gold particles */}
      <GoldParticles count={28} />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-24 text-center"
      >
        {/* Garuda emblem – gentle float loop + scroll parallax */}
        <motion.div style={{ y: garudaY, scale: garudaScale }}>
          <motion.img
            src={GARUDA}
            alt="Lambang Garuda Pancasila"
            className="drag-none mb-8 h-28 w-auto sm:h-36 lg:h-44 drop-shadow-[0_8px_30px_rgba(212,160,23,0.45)]"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-4 inline-block rounded-full border border-emas/30 bg-gelap/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-emas-terang backdrop-blur-sm"
        >
          Jurnal Kewarganegaraan
        </motion.p>

        {/* Title – per-word stagger */}
        <motion.h1
          variants={wordContainer}
          initial="hidden"
          animate="show"
          style={{ perspective: 800 }}
          className="text-shadow-strong flex flex-wrap justify-center gap-x-4 gap-y-1 text-4xl font-extrabold text-putih sm:text-6xl lg:text-7xl"
        >
          {TITLE_WORDS.map((w, i) => (
            <motion.span
              key={w + i}
              variants={wordItem}
              className={
                w === 'Nadi' || w === 'Surabaya' ? 'text-gold-gradient' : ''
              }
            >
              {w}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="text-shadow-soft mt-6 max-w-2xl text-base text-krem/90 sm:text-lg"
        >
          Studi Kasus Lima Kawasan &middot; Periode 1945&ndash;Sekarang
        </motion.p>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="glass mt-9 max-w-xl rounded-2xl px-6 py-4"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emas-terang/80">
            Disusun oleh
          </p>
          <p className="mt-1.5 text-sm font-medium text-putih sm:text-base">
            Edrick Owen &middot; Christopher Gilbert Gautama Yusuf &middot; Sydnei
            Brilliant Hausyah
          </p>
          <p className="mt-1 text-xs text-krem/70">
            Kelas I1 &middot; Universitas Kristen Petra &middot; 2026
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll-down indicator */}
      <motion.button
        onClick={() => scrollTo(window.innerHeight, { offset: 0 })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        aria-label="Gulir ke bawah"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-emas-terang/90"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
          Gulir
        </span>
        <ChevronDown className="animate-bob-down" size={26} />
      </motion.button>
    </section>
  )
}
