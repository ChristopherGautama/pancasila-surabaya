// Data lima kawasan Surabaya — sumber tunggal untuk peta interaktif & panel info.
// `id` dipakai untuk mencocokkan dengan geometri SVG di SurabayaMap.jsx dan
// dengan KASUS_DETAIL (data/kasusDetail.js) yang memuat daftar kasus rinci.
// `jumlahKasus` TIDAK ditulis manual — dihitung otomatis dari KASUS_DETAIL
// agar angka selalu konsisten (single source of truth: kasusDetail.js).
// `silaMenonjol` berisi angka sila (1–5) yang paling sering dilanggar di kawasan itu.
import { KASUS_DETAIL } from './kasusDetail'

const KAWASAN = [
  {
    id: 'barat',
    nama: 'Surabaya Barat',
    karakter:
      'Kawasan berkembang pesat (perumahan, pergudangan, industri); menonjol konflik lahan-lingkungan dan gesekan pendatang–warga asli.',
    silaMenonjol: [5, 2, 1],
    pemicu: 'Lahan & lingkungan',
    rentan: 'Warga tergusur & lansia',
  },
  {
    id: 'utara',
    nama: 'Surabaya Utara',
    karakter:
      'Kawasan padat, pesisir, dan strategis (Pelabuhan Tanjung Perak); kuat pada narkoba, kekerasan, dan ketegangan antaretnis.',
    silaMenonjol: [2, 5, 3],
    pemicu: 'Kemiskinan pesisir',
    rentan: 'Perempuan & buruh',
  },
  {
    id: 'timur',
    nama: 'Surabaya Timur',
    karakter:
      'Kepadatan tinggi dengan banyak kos, kampus, dan perdagangan; didominasi kriminalitas properti dan konflik sosial.',
    silaMenonjol: [2, 5, 3],
    pemicu: 'Ekonomi & kepadatan',
    rentan: 'Pemilik kendaraan',
  },
  {
    id: 'selatan',
    nama: 'Surabaya Selatan',
    karakter:
      'Konsentrasi persoalan di lingkungan pendidikan dan ruang sosial (Wonokromo, Siwalankerto, Wonocolo); berkutat pada pembentukan karakter generasi muda.',
    silaMenonjol: [2, 5],
    pemicu: 'Karakter & sekolah',
    rentan: 'Siswa & anak berkebutuhan khusus',
  },
  {
    id: 'pusat',
    nama: 'Surabaya Pusat',
    karakter:
      'Jantung kota dan pusat pemerintahan; rawan pelanggaran berskala publik dan simbolik yang berdampak luas.',
    silaMenonjol: [2, 3, 1],
    pemicu: 'Konflik publik',
    rentan: 'Anak & fasilitas publik',
  },
]

export const WILAYAH = KAWASAN.map((w) => ({
  ...w,
  jumlahKasus: `±${KASUS_DETAIL[w.id]?.kasus.length ?? 0} kasus`,
}))

// Nama lengkap tiap sila — dipakai sebagai tooltip pada chip "Sila menonjol".
export const SILA_NAMES = {
  1: 'Ketuhanan Yang Maha Esa',
  2: 'Kemanusiaan yang Adil dan Beradab',
  3: 'Persatuan Indonesia',
  4: 'Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan',
  5: 'Keadilan Sosial bagi Seluruh Rakyat Indonesia',
}
