// Angka & data grafik untuk section "Data Berbicara".
// Sumber: BPS Kota Surabaya & data nasional. Untuk perbandingan antarwilayah,
// section "Perbandingan" memakai kembali src/data/wilayah.js (single source).

// (a) Empat stat counter besar. `decimal`/`separator` mengikuti format Indonesia.
export const STATS = [
  {
    id: 'miskin',
    value: 105090,
    separator: '.',
    unit: 'jiwa',
    label: 'Penduduk miskin Surabaya (3,56%)',
    ket: 'Per Maret 2025 · garis kemiskinan Rp775.597/kapita/bulan; turun dari 5,82% pada 2015.',
  },
  {
    id: 'pengangguran',
    value: 4.91,
    decimals: 2,
    decimal: ',',
    suffix: '%',
    label: 'Tingkat pengangguran terbuka 2024',
    ket: '± 79.767 orang.',
  },
  {
    id: 'kriminal',
    value: 5181,
    separator: '.',
    label: 'Kasus kriminal sepanjang 2024',
    ket: 'Didominasi pencurian kendaraan bermotor (curanmor).',
  },
  {
    id: 'narkoba',
    value: 688,
    label: 'Pengguna narkoba (Agustus 2025)',
    ket: 'Melonjak dari 73 orang (2023).',
  },
]

// (b) Tren pengguna narkoba — LineChart.
export const NARKOBA_TREND = [
  { tahun: '2023', pengguna: 73 },
  { tahun: '2024', pengguna: 423 },
  { tahun: 'Agu 2025', pengguna: 688 },
]

// (c) Perkiraan proporsi pelanggaran per sila — Pie/Donut.
// Catatan: angka mencerminkan ketersediaan data, bukan sensus.
// Urutan & proporsi mencerminkan temuan (Sila 2 terbesar, Sila 5 kedua).
export const PELANGGARAN_PER_SILA = [
  { sila: 2, label: 'Sila 2', nilai: 32, color: '#CE1126' },
  { sila: 5, label: 'Sila 5', nilai: 26, color: '#D4A017' },
  { sila: 3, label: 'Sila 3', nilai: 20, color: '#E9C46A' },
  { sila: 1, label: 'Sila 1', nilai: 12, color: '#7A0C18' },
  { sila: 4, label: 'Sila 4', nilai: 10, color: '#A8101F' },
]

// Section 8 — Temuan Utama.
export const TEMUAN = [
  {
    nomor: '01',
    teks: 'Sila ke-2 (Kemanusiaan) paling sering dilanggar di seluruh wilayah, diikuti sangat erat oleh Sila ke-5 (Keadilan Sosial); keduanya hampir selalu muncul beriringan.',
  },
  {
    nomor: '02',
    teks: 'Pelanggaran Sila ke-1 paling jarang terjadi, tetapi paling berat dampaknya (terorisme & intoleransi yang langsung mengancam kerukunan dan keamanan kota).',
  },
  {
    nomor: '03',
    teks: 'Pelanggaran Sila ke-4 paling sedikit terdokumentasi, namun sebagian besar konflik sesungguhnya berakar pada kegagalan musyawarah — lebih sering tersembunyi daripada absen.',
  },
  {
    nomor: '04',
    teks: 'Tiap wilayah memiliki corak khas sesuai karakter geografis-demografisnya, meski akar strukturalnya sama: kemiskinan, urbanisasi, lemahnya pengawasan sosial, dan rendahnya internalisasi nilai Pancasila.',
  },
  {
    nomor: '05',
    teks: 'Ada pula praktik baik sebagai pembanding (Kampung Pancasila, transformasi eks lokalisasi Moroseneng → Kampung Anggrek Sememi, mediasi Wali Kota, akses air Perumda Surya Sembada) — pelanggaran bukan satu-satunya wajah kota.',
  },
]
