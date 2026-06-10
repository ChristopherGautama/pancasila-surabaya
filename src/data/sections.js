// Single source of truth for the page sections. Drives the navbar menu,
// active-section highlighting and keyboard navigation. The order here is the
// scroll order of the page. As later phases add sections, extend this list.
export const SECTIONS = [
  { id: 'hero', label: 'Beranda' },
  { id: 'pendahuluan', label: 'Pendahuluan' },
  { id: 'metode', label: 'Metode' },
  { id: 'peta', label: 'Lima Kawasan' },
  { id: 'sila', label: 'Lima Sila' },
  // Phase 2+ sections will be appended here, e.g.:
  // { id: 'data', label: 'Data' },
  // { id: 'solusi', label: 'Solusi' },
  // { id: 'kesimpulan', label: 'Kesimpulan' },
]
