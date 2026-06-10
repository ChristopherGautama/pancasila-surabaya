import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { usePageScroll } from './SmoothScroll'
import { SECTIONS } from '../data/sections'
import { GARUDA } from '../data/assets'

export default function Navbar() {
  const { progress, scrollTo } = usePageScroll()
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState(SECTIONS[0]?.id ?? 'hero')
  const [menuOpen, setMenuOpen] = useState(false)

  // Shrink the navbar once the user scrolls a little.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track which section is currently in view for the active highlight.
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean,
    )
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const goTo = useCallback(
    (id) => {
      const el = document.getElementById(id)
      if (el) scrollTo(el, { offset: id === 'hero' ? 0 : -64 })
      setMenuOpen(false)
    },
    [scrollTo],
  )

  // Keyboard navigation: ArrowDown/Up → next/prev section, Home → hero.
  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName
      if (
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        tag === 'INPUT' ||
        tag === 'TEXTAREA' ||
        tag === 'SELECT' ||
        document.activeElement?.isContentEditable
      ) {
        return
      }

      const idx = Math.max(
        0,
        SECTIONS.findIndex((s) => s.id === activeId),
      )

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        goTo(SECTIONS[Math.min(SECTIONS.length - 1, idx + 1)].id)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        goTo(SECTIONS[Math.max(0, idx - 1)].id)
      } else if (e.key === 'Home') {
        e.preventDefault()
        goTo(SECTIONS[0].id)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [activeId, goTo])

  return (
    <>
      {/* Top scroll-progress bar */}
      <div className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-transparent">
        <div
          className="h-full origin-left bg-gradient-to-r from-emas via-emas-terang to-merah"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <motion.header
        initial={false}
        animate={{
          paddingTop: scrolled ? 8 : 18,
          paddingBottom: scrolled ? 8 : 18,
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? 'glass-dark border-b border-emas/15'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* Brand */}
          <button
            onClick={() => goTo('hero')}
            className="group flex items-center gap-3 outline-none"
            aria-label="Ke beranda"
          >
            <motion.img
              src={GARUDA}
              alt=""
              animate={{ height: scrolled ? 32 : 40 }}
              transition={{ duration: 0.3 }}
              className="w-auto drop-shadow-[0_2px_8px_rgba(212,160,23,0.4)]"
            />
            <span className="flex flex-col text-left leading-tight">
              <span className="font-display text-sm font-extrabold tracking-tight text-putih sm:text-base">
                Pancasila di Nadi Surabaya
              </span>
              <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-emas-terang/80 sm:block">
                UK Petra 2026
              </span>
            </span>
          </button>

          {/* Desktop menu */}
          {SECTIONS.length > 1 && (
            <ul className="hidden items-center gap-1 md:flex">
              {SECTIONS.map((s) => {
                const active = activeId === s.id
                return (
                  <li key={s.id}>
                    <button
                      onClick={() => goTo(s.id)}
                      className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        active
                          ? 'text-gelap'
                          : 'text-putih/80 hover:text-emas-terang'
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-emas-shine bg-[length:200%_auto]"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      {s.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          )}

          {/* Mobile menu toggle */}
          {SECTIONS.length > 1 && (
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="rounded-full p-2 text-emas-terang md:hidden"
              aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </nav>

        {/* Mobile dropdown */}
        {menuOpen && SECTIONS.length > 1 && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-dark mx-4 mt-2 overflow-hidden rounded-2xl border border-emas/15 md:hidden"
          >
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => goTo(s.id)}
                  className={`block w-full px-6 py-3 text-left text-sm font-medium transition-colors ${
                    activeId === s.id
                      ? 'text-emas-terang'
                      : 'text-putih/80 hover:text-emas-terang'
                  }`}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </motion.header>
    </>
  )
}
