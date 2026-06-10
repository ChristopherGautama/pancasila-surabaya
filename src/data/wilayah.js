// Data lima kawasan Surabaya — sumber tunggal untuk peta interaktif & panel info.
// `id` dipakai untuk mencocokkan dengan geometri SVG di SurabayaMap.jsx.
// `silaMenonjol` berisi angka sila (1–5) yang paling sering dilanggar di kawasan itu.
export const WILAYAH = [
  {
    id: 'barat',
    nama: 'Surabaya Barat',
    jumlahKasus: '13 kasus',
    karakter:
      'Kawasan berkembang pesat (perumahan, pergudangan, industri); menonjol konflik lahan-lingkungan dan gesekan pendatang–warga asli.',
    silaMenonjol: [5, 2, 1],
    pemicu: 'Lahan & lingkungan',
    rentan: 'Warga tergusur & lansia',
    kasus: [
      'Konflik agraria alih fungsi Waduk Sepat, Lakarsantri',
      'Banjir kiriman berulang Pakal–Sambikerep',
      'Penganiayaan pemuda oleh gangster (Manukan, Balongsari Tama)',
      'Intoleransi permukiman Tambak Osowilangon',
      'Penipuan UMKM modus pinjol di Sememi & Pakal',
    ],
  },
  {
    id: 'utara',
    nama: 'Surabaya Utara',
    jumlahKasus: '±20 kasus',
    karakter:
      'Kawasan padat, pesisir, dan strategis (Pelabuhan Tanjung Perak); kuat pada narkoba, kekerasan, dan ketegangan antaretnis.',
    silaMenonjol: [2, 5, 3],
    pemicu: 'Kemiskinan pesisir',
    rentan: 'Perempuan & buruh',
    kasus: [
      'Peredaran narkoba (sabu 42,924 g) di Semampir',
      'Pembunuhan/carok kuli bangunan di Wonokusumo',
      'Pelecehan seksual pengendara perempuan di Kenjeran',
      'Begal disertai kekerasan di Krembangan',
      'Stereotip etnis Madura (umum & juru parkir liar)',
      'Balita gizi buruk di Sidotopo & banjir rob pesisir',
    ],
  },
  {
    id: 'timur',
    nama: 'Surabaya Timur',
    jumlahKasus: '±35 kasus',
    karakter:
      'Kepadatan tinggi dengan banyak kos, kampus, dan perdagangan; didominasi kriminalitas properti dan konflik sosial.',
    silaMenonjol: [2, 5, 3],
    pemicu: 'Ekonomi & kepadatan',
    rentan: 'Pemilik kendaraan',
    kasus: [
      'Kriminalitas properti (curanmor, pembobolan kos, pencurian kabel)',
      'Penyekapan lansia di apartemen Mulyorejo',
      'Penolakan proyek lapangan padel di Keputih (sempadan sungai)',
      'Diskriminasi terhadap masyarakat Papua di Tambaksari',
      'Hambatan izin rumah ibadah di Rungkut & intoleransi pengajian',
    ],
  },
  {
    id: 'selatan',
    nama: 'Surabaya Selatan',
    jumlahKasus: '10 kasus',
    karakter:
      'Konsentrasi persoalan di lingkungan pendidikan dan ruang sosial (Wonokromo, Siwalankerto, Wonocolo); berkutat pada pembentukan karakter generasi muda.',
    silaMenonjol: [2, 5],
    pemicu: 'Karakter & sekolah',
    rentan: 'Siswa & anak berkebutuhan khusus',
    kasus: [
      'Kekerasan guru terhadap siswa di sekolah',
      'Perundungan siswa berkebutuhan khusus hingga penganiayaan',
      'Tawuran pelajar di Jalan Upa Jiwa, Wonokromo',
      'Bentrokan oknum suporter Bonek',
    ],
  },
  {
    id: 'pusat',
    nama: 'Surabaya Pusat',
    jumlahKasus: '9 kasus',
    karakter:
      'Jantung kota dan pusat pemerintahan; rawan pelanggaran berskala publik dan simbolik yang berdampak luas.',
    silaMenonjol: [2, 3, 1],
    pemicu: 'Konflik publik',
    rentan: 'Anak & fasilitas publik',
    kasus: [
      'Pengeboman GKI Diponegoro, Tegalsari (terorisme, 2018)',
      'Pembakaran Polsek Tegalsari & Gedung Grahadi (2025)',
      'Pencabulan anak didik oleh guru agama di SD',
      'Carok antartetangga di Alun-Alun Contong, Bubutan',
      'Tawuran maut remaja di Jalan Tembaan',
    ],
  },
]

// Nama lengkap tiap sila — dipakai sebagai tooltip pada chip "Sila menonjol".
export const SILA_NAMES = {
  1: 'Ketuhanan Yang Maha Esa',
  2: 'Kemanusiaan yang Adil dan Beradab',
  3: 'Persatuan Indonesia',
  4: 'Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan',
  5: 'Keadilan Sosial bagi Seluruh Rakyat Indonesia',
}
