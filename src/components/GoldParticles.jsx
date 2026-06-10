import { useMemo } from 'react'
import { motion } from 'framer-motion'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Lightweight floating gold particles rendered as absolutely positioned divs.
 * Deterministic layout (seeded by index) so it stays stable across renders.
 * Disabled when the user prefers reduced motion.
 */
export default function GoldParticles({ count = 26 }) {
  const reduced = prefersReducedMotion()

  const particles = useMemo(() => {
    // Simple deterministic pseudo-random so we avoid Math.random hydration drift.
    const rand = (n) => {
      const x = Math.sin(n * 99.13) * 43758.5453
      return x - Math.floor(x)
    }
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: rand(i + 1) * 100,
      top: rand(i + 7) * 100,
      size: 2 + rand(i + 3) * 5,
      delay: rand(i + 5) * 6,
      duration: 7 + rand(i + 11) * 8,
      drift: (rand(i + 13) - 0.5) * 40,
      opacity: 0.25 + rand(i + 17) * 0.5,
    }))
  }, [count])

  if (reduced) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-emas-terang"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            boxShadow: '0 0 8px rgba(233, 196, 106, 0.8)',
          }}
          initial={{ opacity: 0 }}
          animate={{
            y: [0, -28, 0],
            x: [0, p.drift, 0],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
