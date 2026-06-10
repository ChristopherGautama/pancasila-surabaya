import { usePageScroll } from './scroll-context'

/**
 * A thin vertical gold "thread" pinned to the left edge of the viewport whose
 * filled length follows the page scroll progress — the connecting thread of the
 * narrative. Hidden on small screens to avoid crowding.
 */
export default function ScrollThread() {
  const { progress } = usePageScroll()

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-3 top-0 z-40 hidden h-screen w-[3px] md:block lg:left-5"
    >
      {/* faint full-height track */}
      <div className="absolute inset-0 rounded-full bg-emas/10" />
      {/* filled progress thread */}
      <div
        className="absolute left-0 top-0 w-full rounded-full bg-gradient-to-b from-emas-terang via-emas to-merah shadow-emas-glow"
        style={{ height: `${progress * 100}%` }}
      >
        {/* glowing head bead */}
        <span className="absolute -bottom-1 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-emas-terang shadow-emas-glow" />
      </div>
    </div>
  )
}
