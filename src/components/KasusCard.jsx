import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, MapPin, ChevronDown, ExternalLink } from 'lucide-react'
import { SILA_NAMES } from '../data/wilayah'

/**
 * One expandable case card, shared by the map info panel and the per-sila
 * "Kasus Kunci" block. Collapsed: title + chips (year, location, optional
 * related-sila gold badges, optional region chip). Expanded (smooth
 * height-auto): full summary and the "Sumber:" list — linked when a URL
 * exists, plain text otherwise.
 *
 * Variants: `gold` = positive/praktik-baik styling; `dark` = dark-theme
 * styling for the Sila 1 block; `wilayah` adds a small region chip;
 * `showSila` hides the sila badges where they would be redundant.
 */
export default function KasusCard({
  kasus,
  open,
  onToggle,
  reduced,
  gold = false,
  dark = false,
  wilayah = null,
  showSila = true,
}) {
  const shell = gold
    ? `border border-emas/60 bg-gradient-to-br from-[#FFF8EA] to-[#FBECCB] ${
        open ? 'shadow-emas-glow' : 'shadow-sm'
      }`
    : dark
      ? `bg-white/[0.05] ring-1 ${open ? 'ring-emas/45' : 'ring-white/10'}`
      : `bg-white/75 ring-1 ${open ? 'ring-emas/50 shadow-md' : 'ring-black/5 shadow-sm'}`

  const title = dark ? 'text-putih' : 'text-teks-gelap'
  const chips = dark ? 'text-krem/55' : 'text-teks-gelap/60'
  const chipIcon = dark ? 'text-emas-terang/70' : 'text-merah-tua/70'
  const divider = gold ? 'border-emas/40' : dark ? 'border-white/10' : 'border-black/5'
  const ringkasan = dark ? 'text-krem/80' : 'text-teks-gelap/80'
  const sumberLabel = dark ? 'text-krem/45' : 'text-teks-gelap/45'
  const link = dark
    ? 'text-emas-terang hover:text-[#F3DCA0]'
    : 'text-emas hover:text-[#8A5A00]'
  const plain = dark ? 'text-krem/55' : 'text-teks-gelap/60'

  return (
    <div className={`overflow-hidden rounded-xl transition-shadow duration-300 ${shell}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left outline-none focus-visible:ring-2 focus-visible:ring-emas"
      >
        <div className="min-w-0 grow">
          <p className={`text-sm font-semibold leading-snug ${title}`}>{kasus.judul}</p>
          <div
            className={`mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium ${chips}`}
          >
            <span className="inline-flex shrink-0 items-center gap-1">
              <Calendar size={12} className={chipIcon} />
              {kasus.tahun}
            </span>
            <span className="inline-flex min-w-0 items-center gap-1">
              <MapPin size={12} className={`shrink-0 ${chipIcon}`} />
              <span className="truncate">{kasus.lokasi}</span>
            </span>
            {wilayah && (
              <span
                className={`inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                  dark ? 'bg-emas/15 text-emas-terang' : 'bg-merah-tua/10 text-merah-tua'
                }`}
              >
                {wilayah}
              </span>
            )}
            {showSila && kasus.sila?.length > 0 && (
              <span
                className="inline-flex shrink-0 items-center gap-1"
                aria-label={`Sila terkait: ${kasus.sila.join(', ')}`}
              >
                {kasus.sila.map((n) => (
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
        </div>
        <motion.span
          aria-hidden="true"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: reduced ? 0 : 0.25 }}
          className="mt-0.5 shrink-0 text-emas"
        >
          <ChevronDown size={18} strokeWidth={2.4} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduced ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className={`border-t px-4 pb-4 pt-3 ${divider}`}>
              <p className={`text-sm leading-relaxed ${ringkasan}`}>{kasus.ringkasan}</p>
              {kasus.sumber?.length > 0 && (
                <div className="mt-3">
                  <p
                    className={`text-[10px] font-bold uppercase tracking-[0.18em] ${sumberLabel}`}
                  >
                    Sumber:
                  </p>
                  <ul className="mt-1.5 space-y-1.5">
                    {kasus.sumber.map((s) => (
                      <li key={s.nama}>
                        {s.url ? (
                          <a
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-start gap-1.5 text-xs font-semibold transition-colors hover:underline ${link}`}
                          >
                            <ExternalLink size={12} className="mt-0.5 shrink-0" />
                            <span>{s.nama}</span>
                          </a>
                        ) : (
                          <span
                            className={`inline-flex items-start gap-1.5 text-xs font-medium ${plain}`}
                          >
                            <span
                              className={`mt-1.5 block h-1 w-1 shrink-0 rounded-full ${
                                dark ? 'bg-krem/40' : 'bg-teks-gelap/40'
                              }`}
                            />
                            {s.nama}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
