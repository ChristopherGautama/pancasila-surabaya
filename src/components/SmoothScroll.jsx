import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react'
import Lenis from 'lenis'

const ScrollContext = createContext({
  progress: 0,
  scrollTo: () => {},
  lenis: null,
})

export const usePageScroll = () => useContext(ScrollContext)

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Sets up global Lenis smooth scroll (unless the user prefers reduced motion)
 * and exposes overall page scroll progress (0..1) plus a scrollTo helper to the
 * whole app via context.
 */
export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const reduced = prefersReducedMotion()

    const computeProgress = (scroll) => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight || 1
      const y = scroll ?? window.scrollY
      setProgress(Math.min(1, Math.max(0, y / max)))
    }

    if (reduced) {
      // No smooth scroll – just track native scroll for the UI indicators.
      const onScroll = () => computeProgress()
      window.addEventListener('scroll', onScroll, { passive: true })
      computeProgress()
      return () => window.removeEventListener('scroll', onScroll)
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    })
    lenisRef.current = lenis

    lenis.on('scroll', ({ scroll }) => computeProgress(scroll))

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)
    computeProgress(0)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  const scrollTo = useCallback((target, options = {}) => {
    const opts = { offset: -1, duration: 1.2, ...options }
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, opts)
      return
    }
    // Reduced-motion / fallback path
    const el =
      typeof target === 'string' ? document.querySelector(target) : target
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ behavior: 'auto', block: 'start' })
    } else if (typeof target === 'number') {
      window.scrollTo(0, target)
    }
  }, [])

  return (
    <ScrollContext.Provider
      value={{ progress, scrollTo, lenis: lenisRef.current }}
    >
      {children}
    </ScrollContext.Provider>
  )
}
