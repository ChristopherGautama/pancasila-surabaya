// Centralised asset resolver. EVERY file living in /public must be referenced
// through here so paths stay correct under the GitHub Pages base path
// (/pancasila-surabaya/). Never hard-code "/img/...".
const BASE = import.meta.env.BASE_URL

/**
 * Build a public-asset URL that respects Vite's base path.
 * @param {string} path e.g. "img/hero-bg.png" or "garuda.svg"
 */
export const asset = (path) => `${BASE}${path.replace(/^\/+/, '')}`

// Convenience constants for the assets used across the site.
export const IMG = {
  heroBg: asset('img/hero-bg.png'),
  batikGold: asset('img/batik-gold.png'),
  batikOrnament: asset('img/batik-ornament.png'),
  petaBg: asset('img/peta-bg.png'),
  solusiBg: asset('img/solusi-bg.png'),
  kesimpulanBg: asset('img/kesimpulan-bg.png'),
  ogImage: asset('img/og-image.png'),
  sila1: asset('img/sila1.png'),
  sila2: asset('img/sila2.png'),
  sila3: asset('img/sila3.png'),
  sila4: asset('img/sila4.png'),
  sila5: asset('img/sila5.png'),
}

export const GARUDA = asset('garuda.svg')
