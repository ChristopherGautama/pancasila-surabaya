// ============================================================
// persekusi.js — Data "Sorotan: Persekusi & Main Hakim Sendiri"
// Tambahan riset (Revisi 1 dari dosen) untuk website
// "Pancasila di Nadi Surabaya".
//
// Semua sumber adalah TAUTAN BERITA LANGSUNG yang dapat diklik.
// Fenomena ini bersifat LINTAS WILAYAH; data di bawah memetakan
// sebaran & konsentrasinya per kawasan + kaitan ke sila.
// ============================================================

// 1) INTRO + ANALISIS (untuk header section)
export const PERSEKUSI_INTRO = {
  judul: "Persekusi & Main Hakim Sendiri",
  definisi:
    "Persekusi (persecution) adalah tindakan memburu dan menghakimi seseorang tanpa proses hukum yang sah — dalam hukum pidana disebut main hakim sendiri (eigenrechting). Di Surabaya, pemicunya hampir selalu sama: pelaku curanmor yang tertangkap tangan langsung dihakimi massa.",
  // Temuan utama: di mana paling banyak
  sebaran:
    "Berbeda dari kasus lain yang khas per wilayah, persekusi muncul di KELIMA kawasan. Konsentrasi tertinggi di Surabaya Barat (Pakal, Sambikerep/Lakarsantri, Tandes) dan Surabaya Timur (Sukolilo, Tambaksari, Gubeng), diikuti Pusat (Sawahan, Tegalsari), Selatan (koridor Wonokromo), dan Utara (Simokerto, Krembangan).",
  // Kaitan Pancasila
  silaTerkait: [2, 4],
  analisisPancasila:
    "Main hakim sendiri melanggar Sila ke-2 (menghakimi tanpa proses hukum mengingkari martabat manusia dan asas praduga tak bersalah; pada kasus ekstrem bahkan mengancam nyawa) sekaligus Sila ke-4 (dalam negara hukum, hanya aparat berwenang yang boleh mengadili dan menghukum).",
  // Akar & ironi (deep analysis)
  akar:
    "Menurut kajian hukum Universitas 17 Agustus 1945 (UNTAG) Surabaya, persekusi berakar pada lemahnya efek jera dan rendahnya kepercayaan publik terhadap penegakan hukum — residivis kerap cepat bebas lalu kembali beraksi — sehingga warga memandang main hakim sendiri sebagai 'solusi paling terjangkau'.",
  ironi:
    "Inilah lingkaran setan persoalan kota: korban dari lemahnya keadilan (warga) berubah menjadi pelaku pelanggaran Sila ke-2 yang baru. Persekusi adalah cermin gelap dari tingginya angka curanmor yang telah dipetakan dalam riset ini.",
  sumberKonsep: [
    {
      nama: "Pujayanti & Soeskandi (2018), 'Pelaku Persekusi dan Tindakan Main Hakim Sendiri', Mimbar Keadilan — Universitas 17 Agustus 1945 Surabaya",
      url: "https://jurnal.untag-sby.ac.id/index.php/mimbarkeadilan/article/view/1784",
    },
  ],
};

// 2) SEBARAN PER WILAYAH (kartu kasus + sumber klik)
export const PERSEKUSI_WILAYAH = [
  {
    wilayah: "Barat",
    intensitas: "Tertinggi",
    catatan:
      "Paling sering terjadi; beberapa kali polisi melakukan diskresi untuk mencegah massa menghakimi pelaku.",
    kasus: [
      {
        judul: "Maling Motor Dihajar Massa di Pondok Benowo Indah",
        tahun: "Nov 2025",
        lokasi: "Pondok Benowo Indah, Kec. Pakal",
        sila: [2, 4],
        ringkas:
          "Terduga pelaku curanmor (MI, 23) babak belur dihajar massa setelah tepergok mencuri motor di Perumahan Dreaming Land, Kec. Benowo–Pakal.",
        sumber: [
          { nama: "Suara Surabaya (13/11/2025)", url: "https://www.suarasurabaya.net/kelanakota/2025/maling-motor-di-surabaya-dihajar-massa-hingga-babak-belur/" },
        ],
      },
      {
        judul: "Curanmor Nyaris Dihakimi Massa di Sambikerep",
        tahun: "Des 2025",
        lokasi: "Jl. Kuwukan, Sambikerep (Kec. Lakarsantri)",
        sila: [2, 4],
        ringkas:
          "Pelaku (M. Safii, 32) nyaris dihakimi massa sebelum polisi tiba; petugas melakukan diskresi mencegah aksi main hakim sendiri dan mengevakuasi pelaku ke rumah sakit.",
        sumber: [
          { nama: "BangsaOnline (3/12/2025)", url: "https://bangsaonline.com/berita/155941/maling-motor-asal-madura-bonyok-dihajar-massa-di-sambikerep-surabaya" },
        ],
      },
      {
        judul: "Maling Bersenjata Tajam Dihajar Warga di Tandes",
        tahun: "Jul 2025",
        lokasi: "Manukan Kulon, Kec. Tandes",
        sila: [2, 4],
        ringkas:
          "Terduga maling motor bersenjata tajam babak belur dihajar warga di Jl. Raya Wonorejo, Manukan Kulon, sebelum diamankan polisi.",
        sumber: [
          { nama: "Tribun Jatim (21/7/2025)", url: "https://jatim.tribunnews.com/2025/07/21/maling-bersenjata-tajam-keok-dihajar-warga-kepergok-curi-motor-pns-samsat-surabaya" },
        ],
      },
    ],
  },
  {
    wilayah: "Timur",
    intensitas: "Tinggi",
    catatan:
      "Banyak terjadi di kawasan padat kos & kampus; satu kasus berujung ekstrem (pelaku terbakar saat hendak diamankan).",
    kasus: [
      {
        judul: "Curanmor Dihajar Massa di Kapasmadya Baru",
        tahun: "Jan 2026",
        lokasi: "Kapasmadya Baru, Kec. Tambaksari",
        sila: [2, 4],
        ringkas:
          "Terduga pelaku curanmor sempat menjadi sasaran amuk massa hingga mengalami luka di kepala sebelum diamankan ke Polsek Tambaksari.",
        sumber: [
          { nama: "Suara Surabaya (2/1/2026)", url: "https://www.suarasurabaya.net/kelanakota/2026/pria-diduga-pelaku-curanmor-dihajar-massa-di-kapasmadya-baru-surabaya/" },
        ],
      },
      {
        judul: "Maling Dihajar Massa di Klampis Ngasem",
        tahun: "Jun 2024",
        lokasi: "Klampis Ngasem, Kec. Sukolilo",
        sila: [2, 4],
        ringkas:
          "Dua terduga pencuri motor disergap warga di permukiman Klampis Ngasem; satu pelaku dihajar massa, satu lainnya sempat bersembunyi.",
        sumber: [
          { nama: "Kompas Surabaya (3/6/2024)", url: "https://surabaya.kompas.com/read/2024/06/03/233117478/detik-detik-maling-di-surabaya-babak-belur-dihajar-massa-hingga-bab-di" },
        ],
      },
      {
        judul: "Insiden Ekstrem: Pelaku Terbakar saat Diamankan di Gubeng",
        tahun: "Okt 2025",
        lokasi: "Jl. Jojoran III, Kec. Gubeng",
        sila: [2, 4],
        ringkas:
          "Setelah dihakimi massa, seorang terduga pelaku curanmor mengalami luka bakar serius dalam insiden saat hendak diamankan petugas — contoh paling nyata bahwa main hakim sendiri dapat mengancam nyawa.",
        sumber: [
          { nama: "Obor Rakyat (30/10/2025)", url: "https://oborrakyat.co.id/2025/10/30/maling-motor-di-surabaya-babak-belur-dihajar-massa-dan-terbakar-saat-diamankan-petugas/" },
        ],
      },
    ],
  },
  {
    wilayah: "Pusat",
    intensitas: "Sedang–Tinggi",
    catatan:
      "Terjadi di ruang publik ramai, kerap memanfaatkan momen keramaian/kepanikan.",
    kasus: [
      {
        judul: "Pencuri Kotak Amal Dihajar Massa di Petemon",
        tahun: "Apr 2025",
        lokasi: "Jl. Petemon, Kec. Sawahan",
        sila: [2, 4],
        ringkas:
          "Seorang pria (ZA, 31) babak belur dihakimi massa setelah diduga mencuri kotak amal; saat petugas tiba pelaku sudah tergeletak di jalan.",
        sumber: [
          { nama: "Suara Surabaya (25/4/2025)", url: "https://www.suarasurabaya.net/kelanakota/2025/pria-diduga-maling-kotak-amal-babak-belur-dihajar-massa-di-petemon-surabaya/" },
        ],
      },
      {
        judul: "Curanmor Dihajar Massa saat Kebakaran di Jl. Darmo",
        tahun: "Jun 2025",
        lokasi: "Jl. Darmo, Kec. Tegalsari",
        sila: [2, 4],
        ringkas:
          "Pelaku memanfaatkan keramaian kebakaran gerai Pizza Hut untuk mencuri motor, tetapi tepergok dan dihajar massa sebelum diamankan ke Polsek Tegalsari.",
        sumber: [
          { nama: "Radar Surabaya (12/6/2025)", url: "https://radarsurabaya.jawapos.com/surabaya/776135592/cari-kesempatan-pelaku-curanmor-dihajar-massa-saat-beraksi-di-lokasi-kebakaran-pizza-hut-jalan-darmo-surabaya-begini-kronologinya" },
        ],
      },
    ],
  },
  {
    wilayah: "Selatan",
    intensitas: "Sedang",
    catatan:
      "Berulang di koridor Wonokromo (Jl. Ahmad Yani–Ngagelrejo).",
    kasus: [
      {
        judul: "Curanmor Dihajar Massa di Depan RSAL dr Ramelan",
        tahun: "Mei 2025",
        lokasi: "Frontage Jl. Ahmad Yani (depan RSAL), Wonokromo",
        sila: [2, 4],
        ringkas:
          "Pelaku dikejar massa dari minimarket Jl. Ketintang hingga frontage Jl. Ahmad Yani, lalu dihajar sebelum diamankan ke Polsek Wonokromo.",
        sumber: [
          { nama: "Radar Surabaya (29/5/2025)", url: "https://radarsurabaya.jawapos.com/surabaya/776075805/diwarnai-kejar-kejaran-pelaku-curanmor-babak-belur-dihajar-massa-di-depan-rsal-jalan-ahmad-yani-surabaya" },
        ],
      },
      {
        judul: "Dua Pelaku Curanmor Dihajar Massa di Ngagelrejo",
        tahun: "Mar 2026",
        lokasi: "Jl. Ngagelrejo Kidul, Wonokromo",
        sila: [2, 4],
        ringkas:
          "Dua pelaku (warga Semolowaru & Bulak Kenjeran) babak belur dihajar massa yang geram setelah aksinya dipergoki korban.",
        sumber: [
          { nama: "Memorandum (23/3/2026)", url: "https://memorandum.disway.id/hukum-kriminal/read/154229/apes-gasak-motor-di-ngagelrejo-dua-bandit-curanmor-surabaya-babak-belur-dihajar-massa" },
        ],
      },
    ],
  },
  {
    wilayah: "Utara",
    intensitas: "Sedang",
    catatan:
      "Terjadi di kawasan pesisir/padat; melengkapi kasus begal yang sudah terdata.",
    kasus: [
      {
        judul: "Curanmor Dihajar Massa di Jl. Kenjeran",
        tahun: "Jan 2026",
        lokasi: "Jl. Kenjeran II, Kec. Simokerto",
        sila: [2, 4],
        ringkas:
          "Pelaku (RQ, 23, warga Bongkaran–Pabean Cantikan) babak belur dihajar massa setelah tepergok mencuri motor; video penangkapan viral di media sosial.",
        sumber: [
          { nama: "Radar Surabaya (11/1/2026)", url: "https://radarsurabaya.jawapos.com/surabaya/777055766/ini-identitas-pelaku-curanmor-yang-dihajar-massa-saat-beraksi-di-jalan-kenjeran-surabaya" },
        ],
      },
    ],
  },
];

export default { PERSEKUSI_INTRO, PERSEKUSI_WILAYAH };
