/**
 * Decorative SVG wave divider to place between sections (merah → putih theme).
 *
 * Props:
 *  - color:   fill of the wave (the colour of the section BELOW). Default putih.
 *  - flip:    mirror vertically (wave dips instead of rises).
 *  - className: extra classes (e.g. negative margins) for placement.
 */
export default function SectionDivider({
  color = '#FBF7F0',
  flip = false,
  className = '',
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative z-10 w-full leading-[0] ${className}`}
      style={{ transform: flip ? 'rotate(180deg)' : 'none' }}
    >
      <svg
        className="block h-[60px] w-full sm:h-[90px] lg:h-[120px]"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* thin gold accent line riding the crest */}
        <path
          d="M0,64 C240,112 480,16 720,40 C960,64 1200,112 1440,56 L1440,60 C1200,116 960,68 720,44 C480,20 240,116 0,68 Z"
          fill="#D4A017"
          opacity="0.55"
        />
        {/* main wave */}
        <path
          d="M0,64 C240,112 480,16 720,40 C960,64 1200,112 1440,56 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}
