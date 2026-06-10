import { motion, useReducedMotion } from 'framer-motion'
import { GARUDA } from '../data/assets'

const TIM = [
  { nama: 'Edrick Owen', nrp: 'D11250047' },
  { nama: 'Christopher Gilbert Gautama Yusuf', nrp: 'D11250068' },
  { nama: 'Sydnei Brilliant Hausyah', nrp: 'D11250027' },
]

const initials = (nama) =>
  nama
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

export default function Tim() {
  const reduced = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.12 } },
  }
  const item = reduced
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
      }

  return (
    <footer id="tim" className="section-shell bg-gelap py-20 text-krem sm:py-24">
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Emblem + thanks */}
          <motion.img
            variants={item}
            src={GARUDA}
            alt="Lambang Garuda Pancasila"
            className="drag-none mx-auto h-14 w-auto drop-shadow-[0_4px_18px_rgba(212,160,23,0.4)]"
          />
          <motion.h2
            variants={item}
            className="mt-5 font-display text-3xl font-extrabold sm:text-4xl"
          >
            <span className="text-gold-gradient">Terima Kasih</span>
          </motion.h2>

          {/* Team cards */}
          <motion.ul
            variants={item}
            className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3"
          >
            {TIM.map((t) => (
              <li
                key={t.nrp}
                className="glass rounded-2xl px-5 py-6 text-center"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emas-shine bg-[length:200%_auto] font-display text-lg font-extrabold text-gelap shadow-emas-glow">
                  {initials(t.nama)}
                </span>
                <p className="mt-3 text-sm font-bold leading-snug text-putih">{t.nama}</p>
                <p className="mt-1 text-xs font-medium tracking-wide text-emas-terang/80">
                  {t.nrp}
                </p>
              </li>
            ))}
          </motion.ul>

          {/* Institution */}
          <motion.p
            variants={item}
            className="mx-auto mt-10 max-w-2xl text-sm font-semibold text-krem/85"
          >
            Mata Kuliah Pancasila &middot; Departemen Mata Kuliah Umum &middot; Universitas
            Kristen Petra &middot; 2026
          </motion.p>

          {/* Source note */}
          <motion.p
            variants={item}
            className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-krem/55"
          >
            Disusun dari Jurnal Proyek Pancasila Surabaya (analisis lima kawasan, kerangka
            4W+1H, data BPS Kota Surabaya). Daftar pustaka lengkap tersedia pada naskah
            jurnal.
          </motion.p>
        </motion.div>

        {/* Copyright */}
        <div className="mt-12 border-t border-emas/15 pt-6">
          <p className="text-[11px] text-krem/45">
            &copy; 2026 Pancasila di Nadi Surabaya &middot; Kelompok I1, Universitas Kristen
            Petra. Dibuat untuk tujuan edukasi.
          </p>
        </div>
      </div>
    </footer>
  )
}
