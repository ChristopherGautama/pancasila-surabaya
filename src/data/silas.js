// Data lima sila — sumber tunggal untuk section "Lima Sila: Masalah & Solusi".
// `gambar` memakai IMG (assets.js) agar path patuh import.meta.env.BASE_URL.
// `dark: true` hanya untuk Sila 1 (blok bertema gelap). `accent` = warna aksen
// dari keluarga merah-emas proyek.
import { IMG } from './assets'

export const SILAS = [
  {
    id: 'sila-1',
    nomor: 1,
    nama: 'Ketuhanan Yang Maha Esa',
    namaPanjang: 'Ketuhanan Yang Maha Esa',
    makna: 'Menjamin kebebasan beragama, toleransi, dan penghormatan antarumat.',
    gambar: IMG.sila1,
    accent: '#E9C46A',
    dark: true,
    masalah: [
      'Pengeboman GKI Diponegoro, Tegalsari (terorisme satu keluarga, 2018) — paling jarang namun paling berat dampaknya',
      'Intoleransi permukiman di Tambak Osowilangon akibat segregasi sosial pendatang–warga asli',
      'Hambatan perizinan rumah ibadah di Rungkut & gesekan pengajian di Gunung Anyar',
    ],
    akar: [
      'Radikalisme dan paham kekerasan',
      'Segregasi sosial & lemahnya pengelolaan keberagaman',
      'Birokrasi perizinan yang tidak berpihak pada minoritas',
    ],
    solusi: [
      'Deradikalisasi soft+hard: sinergi kepolisian–BNPT + pendidikan moderasi beragama di sekolah & kampus',
      'Aktivasi Forum Kerukunan Umat Beragama (FKUB) tingkat kecamatan/kelurahan sebagai ruang dialog tetap',
      'Replikasi model Kampung Pancasila (terbukti di Sambikerep & Pakal) ke kawasan rawan',
      'Reformasi & transparansi izin rumah ibadah + pendampingan administratif nondiskriminatif',
      'Penataan ruang inklusif dengan ruang publik bersama yang mencegah segregasi',
    ],
  },
  {
    id: 'sila-2',
    nomor: 2,
    nama: 'Kemanusiaan yang Adil dan Beradab',
    namaPanjang: 'Kemanusiaan yang Adil dan Beradab',
    makna: 'Mengakui hak hidup, perlakuan beradab, dan perlindungan pihak rentan.',
    gambar: IMG.sila2,
    accent: '#CE1126',
    dark: false,
    masalah: [
      'Kekerasan gangster, carok, dan begal yang menghilangkan nyawa',
      'Pelecehan seksual, perundungan & kekerasan di sekolah, pencabulan anak didik',
      'Peredaran narkoba yang merusak martabat',
      'Penipuan UMKM modus pinjol & penyekapan lansia',
    ],
    akar: [
      'Lemahnya pendidikan karakter & pengendalian emosi',
      'Pengaruh lingkungan & kelompok gangster',
      'Tekanan ekonomi',
      'Pengawasan sosial yang kendur di kawasan padat & banyak kos',
    ],
    solusi: [
      'Pendidikan karakter & anti-bullying + pelatihan guru tanpa kekerasan + kanal pelaporan aman bagi korban',
      'Patroli terpadu Bhabinkamtibmas–Babinsa–warga + rehabilitasi pengguna narkoba (bukan semata pemenjaraan) di kelurahan rawan IKRN',
      'Penguatan layanan UPTD Perlindungan Perempuan & Anak + bantuan hukum gratis',
      'Literasi digital & edukasi antipenipuan bersama Dinas Koperasi + verifikasi resmi petugas pemerintah',
    ],
  },
  {
    id: 'sila-3',
    nomor: 3,
    nama: 'Persatuan Indonesia',
    namaPanjang: 'Persatuan Indonesia',
    makna: 'Mengutamakan persatuan, kerukunan, dan penghargaan atas perbedaan.',
    gambar: IMG.sila3,
    accent: '#D4A017',
    dark: false,
    masalah: [
      'Tawuran pelajar/remaja & bentrokan oknum suporter',
      'Stereotip dan ketegangan antaretnis terhadap warga Madura dan Papua',
      'Kerusuhan Agustus 2025: pembakaran Polsek Tegalsari & Gedung Grahadi',
    ],
    akar: [
      'Provokasi melalui media sosial',
      'Prasangka antaretnis yang diwariskan',
      'Segregasi sosial & lemahnya mediasi dini',
    ],
    solusi: [
      'Manajemen konflik & mediasi dini tingkat RT/RW/kelurahan',
      'Literasi media untuk melawan provokasi & hoaks pemicu kerusuhan',
      'Program pembauran & dialog antaretnis + kegiatan budaya bersama (menata juru parkir liar, bukan menstigmatisasi)',
      'Menjaga ruang demokrasi sehat: aspirasi damai difasilitasi, penindakan diarahkan hanya pada perusak',
    ],
  },
  {
    id: 'sila-4',
    nomor: 4,
    nama: 'Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan',
    namaPanjang:
      'Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan',
    makna: 'Mengutamakan musyawarah, partisipasi, dan keputusan yang bijak.',
    gambar: IMG.sila4,
    accent: '#7A0C18',
    dark: false,
    masalah: [
      'Banjir kiriman berulang Pakal–Sambikerep >10 tahun — aspirasi warga diabaikan',
      'Manipulasi dokumen tanah oleh oknum kelurahan',
      'Sengketa tembok & proyek tanpa pelibatan warga (lapangan padel Keputih)',
      'Anarkisme menggantikan musyawarah',
    ],
    akar: [
      'Saluran partisipasi yang lemah',
      'Rendahnya transparansi birokrasi',
      'Budaya menyelesaikan masalah secara sepihak',
    ],
    solusi: [
      'Revitalisasi Musrenbang kelurahan & forum warga',
      'Konsultasi publik wajib untuk proyek berdampak (bukan formalitas)',
      'Digitalisasi & transparansi layanan pertanahan untuk memutus mafia tanah + sanksi oknum',
      'SOP respons cepat atas aspirasi berulang + meneruskan praktik baik mediasi proaktif Wali Kota',
    ],
  },
  {
    id: 'sila-5',
    nomor: 5,
    nama: 'Keadilan Sosial bagi Seluruh Rakyat Indonesia',
    namaPanjang: 'Keadilan Sosial bagi Seluruh Rakyat Indonesia',
    makna: 'Mewujudkan pemerataan, kepastian hukum, dan perlindungan warga rentan.',
    gambar: IMG.sila5,
    accent: '#B11324',
    dark: false,
    masalah: [
      'Konflik agraria Waduk Sepat & sengketa tanah BUMN (groundkaart)',
      'Kriminalitas properti masif (residivis & jaringan penadah)',
      'Gizi buruk di Sidotopo & banjir rob pesisir',
      'Perundungan menghilangkan rasa aman & hak belajar yang setara',
    ],
    akar: [
      'Kemiskinan struktural',
      'Ketimpangan penguasaan lahan',
      'Urbanisasi tanpa penyediaan fasilitas',
      'Penegakan hukum yang belum berpihak',
    ],
    solusi: [
      'Pemberdayaan ekonomi & lapangan kerja — meneruskan model Moroseneng → Kampung Wisata Anggrek Sememi & Omah Sinau',
      'Kepastian hukum atas tanah: penyelesaian sengketa groundkaart adil + percepatan sertifikasi + lindungi ruang resapan (Waduk Sepat)',
      'Penegakan hukum berkeadilan: vonis proporsional bagi residivis + berantas jaringan penadah + CCTV',
      'Pemerataan akses dasar: air bersih Perumda Surya Sembada, gizi/stunting Sidotopo, kendali banjir rob, pendidikan inklusif; rehabilitasi narkoba berbasis pemberdayaan',
    ],
  },
]
