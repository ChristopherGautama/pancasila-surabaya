import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { usePageScroll } from './scroll-context'

/**
 * Floating "back to top" button. Appears once the user scrolls past ~80% of the
 * first viewport, smooth-scrolls back to the hero. Respects reduced motion.
 */
export default function BackToTop() {
  const { scrollTo } = usePageScroll()
  const reduced = useReducedMotion()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          key="back-to-top"
          onClick={() => scrollTo(0, { offset: 0 })}
          aria-label="Kembali ke atas"
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: 18, scale: 0.8 }}
          whileHover={reduced ? undefined : { y: -3 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed bottom-6 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-emas-shine bg-[length:200%_auto] text-gelap shadow-emas-glow ring-1 ring-emas/40 transition-shadow hover:shadow-[0_0_30px_rgba(212,160,23,0.65)] sm:bottom-8 sm:right-8"
        >
          <ChevronUp size={24} strokeWidth={2.6} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
