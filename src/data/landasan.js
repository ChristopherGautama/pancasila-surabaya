// ============================================================
// landasan.js — Data "Landasan Pancasila" untuk section baru
// (filosofi, ideologi, sistem filsafat, tokoh teladan, 5 ANTI).
// Dikaitkan ke temuan proyek Surabaya agar menyatu dengan website.
// Catatan: "5 ANTI" mengikuti rumusan umum mata kuliah Pancasila;
// sesuaikan teks bila dosen memakai rumusan berbeda.
// ============================================================

// 1) LIMA KONSEP PANCASILA (kartu/tab)
export const KONSEP_PANCASILA = [
  {
    id: "filosofi",
    label: "Filosofi",
    judul: "Pancasila sebagai Filosofi Bangsa",
    ikon: "BookOpen", // lucide
    ringkas:
      "Pancasila adalah hasil perenungan mendalam (philosophische grondslag) atas nilai-nilai yang sudah hidup dalam budaya bangsa Indonesia — bukan diciptakan, melainkan digali.",
    isi: "Sebagai filosofi, Pancasila menjadi cara pandang bangsa terhadap Tuhan, manusia, persatuan, demokrasi, dan keadilan. Ia merangkum kebijaksanaan lokal (gotong royong, musyawarah, toleransi) menjadi satu pandangan hidup yang utuh dan menjadi sumber dari segala sumber nilai.",
    relevansi:
      "Dalam proyek ini: setiap kasus pelanggaran di Surabaya pada hakikatnya adalah jarak antara nilai filosofis yang dicita-citakan dengan praktik nyata di lapangan.",
  },
  {
    id: "ideologi",
    label: "Ideologi",
    judul: "Pancasila sebagai Ideologi Terbuka",
    ikon: "Compass",
    ringkas:
      "Pancasila adalah ideologi terbuka: nilai dasarnya tetap, namun penerapannya dapat berkembang sesuai tuntutan zaman tanpa kehilangan jati diri.",
    isi: "Berbeda dari ideologi tertutup yang kaku, Pancasila memberi ruang tafsir kontekstual. Nilai dasar (ketuhanan, kemanusiaan, persatuan, kerakyatan, keadilan) bersifat tetap; nilai instrumental dan praksisnya menyesuaikan kebutuhan masyarakat yang terus berubah.",
    relevansi:
      "Dalam proyek ini: justru karena terbuka, penguatan Pancasila tidak bisa seragam — tiap kawasan Surabaya membutuhkan penerapan yang kontekstual.",
  },
  {
    id: "filsafat",
    label: "Sistem Filsafat",
    judul: "Pancasila sebagai Sistem Filsafat",
    ikon: "Layers",
    ringkas:
      "Kelima sila bukan daftar yang terpisah, melainkan satu kesatuan yang hierarkis-piramidal dan saling mengisi (majemuk tunggal).",
    isi: "Sila ke-1 menjiwai sila-sila berikutnya; sila ke-5 menjadi muara dari semuanya. Karena itu, melanggar satu sila kerap menyeret pelanggaran sila lain — tindak kekerasan (Sila 2) sekaligus merusak persatuan (Sila 3) dan keadilan (Sila 5).",
    relevansi:
      "Dalam proyek ini: temuan kami membuktikannya — Sila ke-2 dan ke-5 hampir selalu muncul beriringan, persis seperti sifat sistemik filsafat Pancasila.",
  },
  {
    id: "tokoh",
    label: "Tokoh Teladan",
    judul: "Tokoh-Tokoh Teladan Pancasila",
    ikon: "Users",
    ringkas:
      "Nilai Pancasila hidup melalui keteladanan tokoh — perumus bangsa hingga warga biasa yang menggerakkan perubahan di komunitasnya.",
    isi: "Para perumus (Soekarno, Mohammad Hatta, dan tokoh BPUPKI) meletakkan dasar nilai. Namun keteladanan juga tampak pada tingkat akar rumput: penggerak Kampung Pancasila, pendamping transformasi eks-lokalisasi, dan aparat yang memilih mediasi di atas kekerasan.",
    relevansi:
      "Dalam proyek ini: praktik baik di Surabaya (Kampung Pancasila Sambikerep–Pakal, Moroseneng→Kampung Anggrek Sememi, mediasi Wali Kota) adalah wujud nyata keteladanan Pancasila masa kini.",
  },
  {
    id: "aplikasi",
    label: "Aplikasi 5 ANTI",
    judul: "Aplikasi Pancasila: Gerakan 5 ANTI",
    ikon: "ShieldCheck",
    ringkas:
      "Pancasila diterapkan bukan hanya sebagai gagasan, tetapi sebagai sikap aktif menolak lima hal yang merusak nilai kemanusiaan dan keadilan.",
    isi: "Lima ANTI menjadi jembatan dari nilai ke tindakan: ia mengubah Pancasila dari hafalan menjadi komitmen perilaku sehari-hari, baik oleh warga maupun penyelenggara negara.",
    relevansi:
      "Dalam proyek ini: kelima ANTI memetakan langsung ke kasus-kasus yang kami temukan di lima kawasan Surabaya (lihat rincian di bawah).",
  },
];

// 2) LIMA ANTI — masing-masing dikaitkan ke sila & temuan Surabaya
export const LIMA_ANTI = [
  {
    nomor: 1,
    nama: "Anti-Kekerasan",
    ikon: "HeartHandshake",
    silaTerkait: [2, 3],
    makna:
      "Menolak segala bentuk kekerasan fisik maupun verbal dan menjunjung martabat setiap manusia.",
    buktiSurabaya:
      "Kekerasan gangster yang merenggut nyawa siswa di Manukan, perundungan siswa ABK di sekolah, hingga carok antartetangga di Bubutan.",
  },
  {
    nomor: 2,
    nama: "Anti-Kemiskinan",
    ikon: "Coins",
    silaTerkait: [5],
    makna:
      "Mewujudkan keadilan sosial dan pemerataan kesejahteraan agar tidak ada warga yang tertinggal.",
    buktiSurabaya:
      "105.090 jiwa (3,56%) masih di bawah garis kemiskinan; gizi buruk balita di Sidotopo dan kriminalitas properti yang berakar pada tekanan ekonomi.",
  },
  {
    nomor: 3,
    nama: "Anti-Diskriminasi",
    ikon: "Scale",
    silaTerkait: [1, 3],
    makna:
      "Menghormati keberagaman agama dan etnis serta menjamin perlakuan setara bagi semua warga.",
    buktiSurabaya:
      "Intoleransi permukiman Tambak Osowilangon, hambatan izin rumah ibadah, dan stereotip etnis Madura yang memicu protes pada 2025.",
  },
  {
    nomor: 4,
    nama: "Anti-Korupsi",
    ikon: "Gavel",
    silaTerkait: [4, 5],
    makna:
      "Menolak penyalahgunaan wewenang dan menjunjung kejujuran, transparansi, serta musyawarah yang adil.",
    buktiSurabaya:
      "Manipulasi dokumen tanah oleh oknum kelurahan Tambak Osowilangon dan dugaan keterlibatan mafia tanah yang merampas kepastian hukum warga.",
  },
  {
    nomor: 5,
    nama: "Anti-Kerusakan Lingkungan",
    ikon: "Leaf",
    silaTerkait: [5],
    makna:
      "Menjaga kelestarian lingkungan sebagai bagian dari keadilan bagi generasi sekarang dan mendatang.",
    buktiSurabaya:
      "Alih fungsi Waduk Sepat (resapan air) menjadi perumahan elit dan banjir kiriman Pakal–Sambikerep yang dibiarkan lebih dari sepuluh tahun.",
  },
];

export default { KONSEP_PANCASILA, LIMA_ANTI };
