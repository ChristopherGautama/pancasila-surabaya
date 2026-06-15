// ============================================================
// landasan.js — Data "Landasan Pancasila" untuk section baru
// (filosofi, ideologi, sistem filsafat, tokoh teladan, Lima Sikap Anti).
// Dikaitkan ke temuan proyek Surabaya agar menyatu dengan website.
// Catatan: kerangka "Lima Sikap Anti" adalah sintesis analitis kelompok
// atas temuan di Surabaya, bukan satu program resmi nasional bernama tunggal.
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
    ahli: "Ir. Soekarno — Pidato BPUPKI, 1 Juni 1945",
    isi: "Istilah philosophische grondslag (Weltanschauung) diperkenalkan Ir. Soekarno dalam pidato sidang BPUPKI 1 Juni 1945 sebagai 'fundamen, filsafat, pikiran yang sedalam-dalamnya' yang di atasnya didirikan Indonesia merdeka. Pancasila digali dari nilai luhur bangsa sendiri, bukan ideologi asing — inilah dasar falsafah negara.",
    relevansi:
      "Dalam proyek ini: setiap kasus pelanggaran di Surabaya pada hakikatnya adalah jarak antara nilai filosofis yang dicita-citakan dengan praktik nyata di lapangan.",
    sumber: [
      { nama: "Kompas — Isi Pidato Soekarno 1 Juni 1945", url: "https://www.kompas.com/stori/read/2023/06/28/190000079/isi-pidato-soekarno-1-juni-1945-cikal-bakal-lahirnya-pancasila-" },
      { nama: "Yudi Latif — Reaktualisasi Pancasila (Pusdik MK)", url: "https://pusdik.mkri.id/materi/materi_197_Reaktualisasi%20Pancasila%20(Yudi%20Latif).pdf" },
    ],
  },
  {
    id: "ideologi",
    label: "Ideologi",
    judul: "Pancasila sebagai Ideologi Terbuka",
    ikon: "Compass",
    ringkas:
      "Pancasila adalah ideologi terbuka: nilai dasarnya tetap, namun penerapannya dapat berkembang sesuai tuntutan zaman tanpa kehilangan jati diri.",
    ahli: "Konsep ideologi terbuka — Dr. Alfian; pembinaan resmi oleh BPIP",
    isi: "Menurut Dr. Alfian, kekuatan Pancasila sebagai ideologi terbuka terletak pada tiga dimensi: realita (berakar pada budaya bangsa), idealisme (memberi cita-cita dan harapan), dan fleksibilitas (terbuka pada pemikiran baru tanpa mengubah nilai dasar). Karena itu Pancasila tetap relevan lintas zaman sebagai ideologi negara.",
    relevansi:
      "Dalam proyek ini: justru karena terbuka, penguatan Pancasila tidak bisa seragam — tiap kawasan Surabaya membutuhkan penerapan yang kontekstual.",
    sumber: [
      { nama: "Kompas — Dimensi Pancasila sebagai Ideologi Terbuka", url: "https://nasional.kompas.com/read/2022/11/26/01000011/dimensi-pancasila-sebagai-ideologi-terbuka" },
      { nama: "Tirto — 3 Dimensi Pancasila sebagai Ideologi Terbuka", url: "https://tirto.id/makna-pancasila-sebagai-ideologi-terbuka-yang-memiliki-3-dimensi-gh84" },
    ],
  },
  {
    id: "filsafat",
    label: "Sistem Filsafat",
    judul: "Pancasila sebagai Sistem Filsafat",
    ikon: "Layers",
    ringkas:
      "Kelima sila bukan daftar yang terpisah, melainkan satu kesatuan yang hierarkis-piramidal dan saling mengisi (majemuk tunggal).",
    ahli: "Prof. Notonagoro (buku 'Pancasila Dasar Filsafat Negara RI', 1962); dielaborasi Kaelan (2013)",
    isi: "Notonagoro menempatkan Pancasila sebagai sistem filsafat: kelima sila adalah satu kesatuan organis yang tak terpisahkan, tersusun hierarkis-piramidal — Ketuhanan sebagai basis yang menjiwai sila-sila di bawahnya hingga Keadilan Sosial. Pancasila memenuhi kajian ontologis, epistemologis, dan aksiologis layaknya sistem filsafat.",
    relevansi:
      "Dalam proyek ini: temuan kami membuktikannya — Sila ke-2 dan ke-5 hampir selalu muncul beriringan, persis seperti sifat sistemik filsafat Pancasila.",
    sumber: [
      { nama: "RRI — Konsep Hierarkis Piramidal (Notonagoro 1962)", url: "https://www.rri.co.id/hukum/53028/membaca-pancasila-dengan-konsep-hierarkis-piramida-dan-thawaf" },
      { nama: "FIP UPGRIS — Pancasila sebagai Sistem Filsafat", url: "https://fip.upgris.ac.id/index.php/2020/08/05/pancasila-sebagai-sistem-filsafat/" },
    ],
  },
  {
    id: "tokoh",
    label: "Tokoh Teladan",
    judul: "Tokoh Teladan — Ir. Soekarno",
    ikon: "Users",
    ringkas:
      "Mempersatukan kemajemukan menjadi satu fondasi bersama.",
    isi: "Sebagai penggali dan perumus Pancasila, Soekarno meramu nilai asli bangsa menjadi dasar yang mempersatukan beragam suku, agama, dan golongan. Yang dapat diteladani: mendahulukan persatuan di atas kepentingan golongan, merangkul kemajemukan (Bhinneka Tunggal Ika), dan menjadikan gotong royong — kerja bersama untuk kepentingan bersama — sebagai inti laku Pancasila. Pelajaran ini relevan untuk meredam perpecahan, intoleransi, dan main hakim sendiri.",
    relevansi:
      "Keteladanan ini hidup di akar rumput Surabaya — penggerak Kampung Pancasila Sambikerep–Pakal dan upaya mediasi yang memilih musyawarah di atas kekerasan.",
    sumber: [
      { nama: "Kompas — Isi Pidato Soekarno 1 Juni 1945", url: "https://www.kompas.com/stori/read/2023/06/28/190000079/isi-pidato-soekarno-1-juni-1945-cikal-bakal-lahirnya-pancasila-" },
      { nama: "BPIP RI", url: "https://bpip.go.id/" },
    ],
  },
  {
    id: "aplikasi",
    label: "Lima Sikap Anti",
    judul: "Aplikasi Pancasila: Lima Sikap Anti",
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
