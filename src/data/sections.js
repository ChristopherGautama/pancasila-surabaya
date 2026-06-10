// Single source of truth for the page sections. Drives the navbar menu,
// active-section highlighting and keyboard navigation. The order here is the
// scroll order of the page. As later phases add sections, extend this list.
export const SECTIONS = [
  { id: 'hero', label: 'Beranda' },
  { id: 'pendahuluan', label: 'Pendahuluan' },
  { id: 'metode', label: 'Metode' },
  { id: 'peta', label: 'Lima Kawasan' },
  { id: 'sila', label: 'Lima Sila' },
  { id: 'data', label: 'Data' },
  { id: 'perbandingan', label: 'Perbandingan' },
  { id: 'temuan', label: 'Temuan' },
  // Phase 6+ sections will be appended here, e.g.:
  // { id: 'kesimpulan', label: 'Kesimpulan' },
]
