// ============================================================
// kasusDetail.js — Data kasus rinci per kawasan Surabaya
// Sumber: Jurnal Proyek Pancasila Surabaya & dokumen Kelas I1
// (Barat, Utara, Timur, Selatan, Pusat). JANGAN mengubah fakta,
// tahun, lokasi, maupun URL sumber di file ini.
// Struktur: { wilayahId: { kasus: [...], praktikBaik: [...] } }
// ============================================================

export const KASUS_DETAIL = {
  barat: {
    kasus: [
      {
        judul: "Konflik Agraria & Alih Fungsi Lahan Waduk Sepat",
        tahun: "2011; 2016–2020",
        lokasi: "Kel. Lidah Kulon, Kec. Lakarsantri",
        sila: [5],
        ringkasan:
          "Sengketa antara warga Lidah Kulon dengan Pemkot Surabaya dan pengembang swasta setelah kebijakan tukar guling 2011. Alih fungsi waduk (resapan air & ruang publik bersejarah) menjadi perumahan elit ditolak warga melalui demonstrasi, advokasi WALHI, hingga jalur pengadilan.",
        sumber: [
          { nama: "Garuda Kemdiktisaintek", url: "https://garuda.kemdiktisaintek.go.id/documents/detail/2005540?hl=en-US" },
        ],
      },
      {
        judul: "Banjir Kiriman Berulang Pakal–Sambikerep >10 Tahun",
        tahun: "2013–2024",
        lokasi: "Jl. Pakal Madya (Kec. Pakal) & Jl. Tengger Raya (Kec. Sambikerep)",
        sila: [4, 5],
        ringkasan:
          "Banjir kiriman dari Gresik melanda lebih dari 10 tahun tanpa penanganan tuntas; banjir parah kembali terjadi Februari & Juni 2024. Wali Kota Eri Cahyadi meminta maaf dan baru memulai pembangunan tanggul pertengahan 2024 (target rampung Sept–Okt 2024).",
        sumber: [
          { nama: "Surya/Tribunnews", url: "https://surabaya.tribunnews.com/2024/02/18/belasan-tahun-pakal-sambikerep-dapat-banjir-kiriman-wali-kota-surabaya-eri-cahyadi-minta-maaf" },
          { nama: "Surabaya.go.id", url: "https://www.surabaya.go.id/id/berita/9762/aksi-cepat-wali-kota-eri-atasi-banjir-kiriman-di-surabaya-barat-pembangunan-tanggul-da" },
        ],
      },
      {
        judul: "Pengusiran Paksa Lansia & Perusakan Rumah (Nenek Elina)",
        tahun: "2024–2026 (proses hukum berjalan)",
        lokasi: "Tandes / Dukuh Kuwukan, Sambikerep",
        sila: [2, 4, 5],
        ringkasan:
          "Nenek Elina Widjajanti (±79–80 tahun) diduga mengalami pengusiran paksa, kekerasan fisik, intimidasi, dan pembongkaran rumah tanpa proses hukum yang jelas. Polda Jatim mengamankan empat tersangka; kasus menjadi sorotan karena melibatkan lansia dan dugaan main hakim sendiri.",
        sumber: [
          { nama: "Radar Surabaya (Jawa Pos)", url: "https://radarsurabaya.jawapos.com/surabaya/777022700/tambah-satu-lagi-total-empat-tersangka-diamankan-polda-jatim-terkait-kasus-kekerasan-dan-perusakan-rumah-di-surabaya" },
        ],
      },
      {
        judul: "Pembunuhan Pemuda Manukan oleh Gangster",
        tahun: "26 Januari 2025",
        lokasi: "Jl. Sukomanunggal IV (perbatasan Tandes/Sukomanunggal)",
        sila: [2, 3],
        ringkasan:
          "Siswa SMK kelas XII berinisial MDA (19), warga Manukan, tewas dianiaya gangster saat pulang melayat. Korban dihadang enam orang di perempatan Jl. Sukomanunggal; kasus viral dan dikaitkan maraknya gangster di Surabaya Barat. Kekerasan gangster berulang: Juli 2025 tiga pemuda Balongsari Tama juga menjadi korban hingga patah tulang.",
        sumber: [
          { nama: "Tribunnews", url: "https://www.tribunnews.com/regional/2025/01/28/sempat-dikira-kecelakaan-tunggal-siswa-smk-di-surabaya-tewas-dianiaya-geng-motor" },
          { nama: "Buser Media Investigasi", url: "https://www.busermediainvestigasi.id/2025/07/teror-gangster-kembali-menghantui.html" },
        ],
      },
      {
        judul: "Penipuan UMKM Modus Pinjol (Mengaku Utusan Pemkot)",
        tahun: "Okt 2024 – Feb 2025",
        lokasi: "Kel. Sememi (Benowo) & Kec. Pakal",
        sila: [2, 5],
        ringkasan:
          "26 pelaku UMKM (14 di Sememi, 12 di Pakal) tertipu Bramasta Afrizal Riyadi yang mengaku utusan resmi Pemkot, bermula dari sosialisasi di Kantor Kelurahan Sememi 24 Okt 2024 dengan modus pinjaman tanpa bunga via Kredivo/Shopee. Total kerugian ±Rp200 juta; Wali Kota Eri turun langsung menemui korban.",
        sumber: [
          { nama: "Kompas.com", url: "https://surabaya.kompas.com/read/2025/02/04/182833778/14-umkm-di-surabaya-ditipu-orang-yang-ngaku-pns-pemkot-rugi-ratusan-juta" },
        ],
      },
      {
        judul: "Manipulasi Dokumen Tanah oleh Oknum Kelurahan",
        tahun: "2022",
        lokasi: "Kel. Tambak Osowilangon, Kec. Benowo",
        sila: [4, 5],
        ringkasan:
          "Wawalkot Armuji marah setelah warga mengeluh pengurusan keterangan kepemilikan tanah dalam buku 'kretek' dipersulit oknum kelurahan, sehingga warga tak memperoleh kejelasan hukum atas tanah yang ditempati bertahun-tahun; terkait dugaan mafia tanah.",
        sumber: [
          { nama: "Detik News", url: "https://news.detik.com/berita/d-6445511/wawalkot-surabaya-murka-ingatkan-lurah-jangan-jadi-beking-mafia-tanah" },
        ],
      },
      {
        judul: "Sengketa Tanah Warga vs Klaim BUMN (Groundkaart)",
        tahun: "2022–2025",
        lokasi: "Surabaya Barat (termasuk Benowo)",
        sila: [5, 2, 4],
        ringkasan:
          "Warga terancam kehilangan tanah akibat klaim BUMN (PT KAI, Pertamina) berdasar peta era kolonial (groundkaart); 209 sertifikat warga tak bisa diproses balik nama di BPN karena terindikasi aset PT KAI. Komisi II DPR RI turun tangan November 2025.",
        sumber: [
          { nama: "Surabaya.go.id", url: "https://www.surabaya.go.id/id/berita/24481/komisi-ii-dpr-ri-cari-solusi-pemblokiran-tanah-surabaya-wali-kota-eri-kawal-hingga-tu" },
        ],
      },
      {
        judul: "Kawasan Rawan Narkoba: Benowo & Balongsari (IKRN BNN)",
        tahun: "2023–2025",
        lokasi: "Kel. Benowo (Kec. Benowo) & Kel. Balongsari (Kec. Tandes)",
        sila: [5, 2],
        ringkasan:
          "BNN Kota Surabaya menetapkan Benowo sebagai kelurahan rawan narkoba berdasar IKRN 2024 (dirilis awal 2025). Pengguna narkoba Surabaya melonjak dari 73 (2023) → 423 (2024) → 688 (Agustus 2025). Program pemberantasan 2025 diarahkan ke Benowo & Balongsari.",
        sumber: [
          { nama: "Suara Surabaya", url: "https://www.suarasurabaya.net/kelanakota/2025/pengguna-narkoba-di-surabaya-terus-naik-pemkot-ajak-stakeholder-kolaborasi-penanganan" },
          { nama: "Espos.id", url: "https://regional.espos.id/dua-kelurahan-di-surabaya-masuk-kategori-rawan-narkoba2135015" },
        ],
      },
    ],
    praktikBaik: [
      {
        judul: "Peresmian Kampung Pancasila RW 06 Pakal",
        tahun: "18 Agustus 2025",
        lokasi: "RW 06, Kel. Pakal, Kec. Pakal",
        ringkasan:
          "Peresmian Kampung Pancasila & Gedung Serbaguna 'Dharma Bakti Pancasila' sebagai penguatan nilai kebangsaan dan toleransi, dihadiri Babinsa Koramil 0830/06 Benowo.",
        sumber: [
          { nama: "Kodam V Brawijaya", url: "https://kodam5brawijaya.tni-ad.mil.id/kampung-pancasila-dan-gedung-dharma-bakti-pancasila-di-surabaya-diresmikan-babinsa-hadir-b" },
        ],
      },
    ],
  },

  utara: {
    kasus: [
      {
        judul: "Peredaran Narkoba Skala Besar di Semampir",
        tahun: "2024–2025",
        lokasi: "Kec. Semampir",
        sila: [2, 5],
        ringkasan:
          "Peredaran sabu dengan barang bukti mencapai 42.924 gram terungkap di kawasan Semampir — salah satu kantong kemiskinan pesisir — merusak martabat manusia dan masa depan kelompok ekonomi lemah.",
        sumber: [{ nama: "Dokumen Kelas I1 Surabaya Utara (kompilasi pemberitaan)", url: "" }],
      },
      {
        judul: "Pembunuhan/Carok Kuli Bangunan di Wonokusumo",
        tahun: "2025",
        lokasi: "Wonokusumo, Kec. Semampir",
        sila: [2],
        ringkasan:
          "Pembunuhan terhadap kuli bangunan; satu pelaku tertangkap di Madura sementara tiga lainnya buron — menghilangkan nyawa dan merampas rasa aman warga.",
        sumber: [
          { nama: "BeritaJatim", url: "https://beritajatim.com/satu-pelaku-pembunuhan-di-surabaya-utara-tertangkap-di-madura-tiga-lainnya-buron" },
        ],
      },
      {
        judul: "Pelecehan Seksual terhadap Pengendara Perempuan",
        tahun: "Mei 2026",
        lokasi: "Kenjeran (dilaporkan ke SPKT Polres Pelabuhan Tanjung Perak)",
        sila: [2],
        ringkasan:
          "Pengendara perempuan menjadi korban pelecehan seksual di ruang publik; bagian dari rentetan pelecehan seksual di Kota Surabaya yang menjadi sorotan masyarakat dan merendahkan martabat perempuan.",
        sumber: [{ nama: "Tribun Jatim (Mei 2026)", url: "" }],
      },
      {
        judul: "Tingginya Kriminalitas Harta Benda (Curat, Curas, Curanmor)",
        tahun: "2021–2022 (berulang)",
        lokasi: "Wilayah hukum Polres Pelabuhan Tanjung Perak",
        sila: [5],
        ringkasan:
          "Data Polres Pelabuhan Tanjung Perak mencatat kenaikan curat, curas, dan curanmor pada 2022 dibanding 2021. Pemkot merespons dengan memasang 1.344 dari 1.944 CCTV di titik strategis; tingginya kejahatan harta benda mencerminkan kesenjangan ekonomi.",
        sumber: [{ nama: "Detik.com (2022); Polrestabes Surabaya", url: "" }],
      },
      {
        judul: "Begal Disertai Kekerasan & Percobaan Curanmor Dihajar Massa",
        tahun: "2024–2025",
        lokasi: "Krembangan; Kedinding Lor (Kec. Kenjeran)",
        sila: [2, 5],
        ringkasan:
          "Begal disertai kekerasan terjadi di Krembangan; di Kedinding Lor pelaku percobaan curanmor gagal dan dihajar massa sebelum diamankan — aksi main hakim sendiri juga menyalahi prinsip keadilan karena proses hukum seharusnya di tangan aparat.",
        sumber: [
          { nama: "BeritaJatim", url: "https://beritajatim.com/gagal-curi-motor-bandit-surabaya-utara-dihajar-massa-di-kedinding-lor" },
        ],
      },
      {
        judul: "Stereotip Etnis terhadap Warga Madura",
        tahun: "Penelitian 2018; protes FSMI 2025",
        lokasi: "Semampir, Kenjeran, Krembangan",
        sila: [2, 3],
        ringkasan:
          "Studi komunikasi lintas budaya (jurnal Representamen, 2 Juli 2018) memetakan stereotip etnis Tionghoa terhadap etnis Madura di Surabaya; stigma terhadap juru parkir liar memicu protes Forum Solidaritas Madura Indonesia pada 2025 — prasangka yang merusak kohesi sosial.",
        sumber: [
          { nama: "Jurnal Representamen UNTAG Surabaya", url: "https://jurnal.untag-sby.ac.id/index.php/representamen/article/view/1436/1200" },
        ],
      },
      {
        judul: "Kejahatan Kelompok Terorganisir Kawasan Pelabuhan (Historis)",
        tahun: "1995–sekarang (pola berulang)",
        lokasi: "Jl. Romokalisari, Jl. Gresik, Morokrembangan",
        sila: [3, 5],
        ringkasan:
          "Penelitian Jurnal AVATARA UNESA (2016) mencatat kawasan ini menjadi titik rawan kejahatan terorganisir sejak penghujung Orde Baru (1995–1998); saat polisi beroperasi di satu titik, kelompok kriminal berpindah — pola yang berlanjut hingga era modern.",
        sumber: [{ nama: "AVATARA – e-Journal UNESA, Vol. 4 No. 2, 2016", url: "" }],
      },
      {
        judul: "Balita Gizi Buruk di Sidotopo & Banjir Rob Pesisir",
        tahun: "Berulang (data terkini 2024–2025)",
        lokasi: "Sidotopo (Kec. Semampir) & kawasan pesisir utara",
        sila: [5],
        ringkasan:
          "Kemiskinan kantong pesisir memunculkan kasus balita bergizi buruk di Sidotopo, sementara banjir rob berulang menggerus permukiman — ketimpangan akses terhadap kesehatan dan lingkungan yang aman.",
        sumber: [{ nama: "Dokumen Kelas I1 Surabaya Utara (kompilasi pemberitaan)", url: "" }],
      },
    ],
    praktikBaik: [],
  },

  timur: {
    kasus: [
      {
        judul: "Curanmor Marak: Residivis & 5–7 Laporan per Hari",
        tahun: "2018–2026 (puncak terdata Mei 2026)",
        lokasi: "Rungkut, Sukolilo, Gunung Anyar, Merr, Tambak Segaran",
        sila: [2, 5],
        ringkasan:
          "Radio Suara Surabaya menerima 5–7 laporan motor hilang per hari pada Mei 2026. Dua residivis (Romli & Alfan) kembali beraksi setelah bebas sejak 2018; pelaku lain (TR) ditangkap lima kali oleh polsek berbeda. Pelaku mengaku hanya butuh satu menit merusak rumah kunci.",
        sumber: [
          { nama: "Suara Surabaya", url: "https://www.suarasurabaya.net/kelanakota/2026/radio-ss-terima-laporan-enam-kasus-motor-hilang-di-surabaya-raya-pada-hari-ini/" },
          { nama: "Suara Surabaya (residivis)", url: "http://suarasurabaya.net/kelanakota/2023/dua-residivis-pelaku-curanmor-dibekuk-polsek-sukolilo-surabaya/" },
          { nama: "Memorandum", url: "https://memorandum.disway.id/hukum-kriminal/read/132247/curi-motor-di-dekat-mapolsek-gunung-anyar-kapolsek-keamanan-bukan-hanya-tanggung-jawab-polisi" },
        ],
      },
      {
        judul: "Pembobolan Kos Karyawan di Rungkut",
        tahun: "November 2022",
        lokasi: "Kec. Rungkut",
        sila: [5],
        ringkasan:
          "Tim Anti Bandit Polsek Rungkut membongkar sepak terjang pembobol kos karyawan; kepadatan kos karyawan industri dan akses jalan lingkar timur memudahkan pelarian pelaku.",
        sumber: [
          { nama: "Surya/Tribunnews", url: "https://surabaya.tribunnews.com/2022/11/27/tim-anti-bandit-polsek-rungkut-bongkar-sepak-terjang-pembobol-kos-karyawan-di-surabaya" },
        ],
      },
      {
        judul: "Penarikan Paksa Mobil Lexus Rp1,3 M oleh Debt Collector",
        tahun: "2026",
        lokasi: "Kawasan Merr / Surabaya Timur",
        sila: [5],
        ringkasan:
          "Mobil Lexus senilai Rp1,3 miliar ditarik paksa debt collector BFI Finance; kuasa hukum menegaskan tidak ada pihak yang berhak mengeksekusi kendaraan tanpa perintah pengadilan — pelanggaran prosedur hukum oleh lembaga keuangan.",
        sumber: [
          { nama: "Detik Jatim", url: "https://www.detik.com/jatim/hukum-dan-kriminal/d-8474782/7-fakta-terbaru-kasus-lexus-rp-1-3-m-ditarik-paksa-dc-bfi-finance" },
        ],
      },
      {
        judul: "Pencurian Modus Aplikasi Kencan",
        tahun: "25 Agustus 2025",
        lokasi: "Kec. Tenggilis Mejoyo",
        sila: [2],
        ringkasan:
          "OF ditangkap Polsek Tenggilis Mejoyo karena menipu dua mahasiswi yang dikenal lewat aplikasi kencan: mengajak bertemu di hotel, lalu memanfaatkan kelengahan korban untuk mencuri sepeda motor, STNK, dan ponsel.",
        sumber: [{ nama: "Dokumen Kelas I1 Surabaya Timur (kompilasi pemberitaan Polsek Tenggilis Mejoyo)", url: "" }],
      },
      {
        judul: "Pencurian Kabel Telkom — Atensi Wali Kota",
        tahun: "11 Januari 2026",
        lokasi: "Surabaya Timur",
        sila: [5],
        ringkasan:
          "Fenomena pencurian kabel Telkom yang mengkhawatirkan mendapat atensi Wali Kota Surabaya; penegakan hukum dinilai belum tegas, sementara kerugian infrastruktur publik ditanggung masyarakat.",
        sumber: [{ nama: "Dokumen Kelas I1 Surabaya Timur (kompilasi pemberitaan)", url: "" }],
      },
      {
        judul: "Nelayan & Petani Tambak Tolak Proyek Lapangan Padel Keputih",
        tahun: "25 Mei 2026",
        lokasi: "Kel. Keputih, Kec. Sukolilo",
        sila: [4],
        ringkasan:
          "Warga menolak proyek lapangan padel karena diduga menutup sempadan sungai dan mengganggu akses; warga khawatir banjir, kerusakan lingkungan, dan terancamnya mata pencaharian — proyek berjalan tanpa pelibatan warga yang memadai.",
        sumber: [{ nama: "Dokumen Kelas I1 Surabaya Timur (kompilasi pemberitaan)", url: "" }],
      },
      {
        judul: "Diskriminasi Masyarakat Papua & Hambatan Izin Rumah Ibadah",
        tahun: "Terdokumentasi riset (rentang 2018–2025)",
        lokasi: "Tambaksari & kawasan Purimas (Gunung Anyar)",
        sila: [1, 3],
        ringkasan:
          "Kajian akademik mendokumentasikan diskriminasi terhadap masyarakat Papua di Surabaya Timur; selain itu tercatat gesekan pada pengajian kawasan Purimas dan kesulitan pengurusan izin pendirian rumah ibadah — jumlahnya sedikit namun dampaknya dinilai paling berat.",
        sumber: [
          { nama: "Google Scholar (studi diskriminasi Papua)", url: "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=kasus+pancasila+di+surabaya+timur&btnG=#d=gs_qabs&t=1779941877342&u=%23p%3DSoUIaAxvbFQJ" },
        ],
      },
    ],
    praktikBaik: [],
  },

  selatan: {
    kasus: [
      {
        judul: "Siswa ABK (Helen) Korban Bullying Berujung Penganiayaan",
        tahun: "2025–2026",
        lokasi: "Lingkungan sekolah, Surabaya Selatan",
        sila: [2, 5],
        ringkasan:
          "Siswa berkebutuhan khusus menjadi korban perundungan dan penganiayaan di sekolah hingga mengalami kekerasan fisik, mental, dan trauma — setiap anak berhak atas rasa aman dan perlindungan setara di lingkungan pendidikan.",
        sumber: [
          { nama: "IDN Times Jatim", url: "https://jatim.idntimes.com/news/jawa-timur/siswa-abk-di-surabaya-jadi-korban-bullying-berujung-penganiayaan-00-w15v1-ch3dn4" },
        ],
      },
      {
        judul: "Kekerasan Guru terhadap Siswa",
        tahun: "Terdokumentasi riset",
        lokasi: "Sekolah di Surabaya (kajian kawasan Selatan)",
        sila: [2, 5],
        ringkasan:
          "Riset mendokumentasikan kekerasan verbal, psikologis, dan fisik guru terhadap siswa dalam proses belajar mengajar — lingkungan pendidikan yang seharusnya aman justru menjadi ruang kekerasan.",
        sumber: [
          { nama: "Journal UNESA", url: "https://journal.unesa.ac.id/index.php/jp/article/view/918" },
        ],
      },
      {
        judul: "Perekaman Mahasiswi Saat Mandi di Kos Siwalankerto",
        tahun: "2025–2026 (kasus di-SP3, disorot IPW)",
        lokasi: "Jl. Siwalankerto, Kec. Wonocolo",
        sila: [2, 5],
        ringkasan:
          "Mahasiswi berinisial MV menjadi korban dugaan perekaman saat mandi di kos; kasus ditangani Polrestabes Surabaya namun dihentikan (SP3) — IPW menduga ada 'main mata', menyorot lemahnya perlindungan korban.",
        sumber: [
          { nama: "Memorandum", url: "https://memorandum.disway.id/polrestabes-surabaya/read/140110/polisi-sp3-kasus-perekaman-mahasiswi-mandi-di-kosan-siwalankerto-ipw-ada-dugaan-main-mata" },
        ],
      },
      {
        judul: "Tawuran Pelajar di Wonokromo — 17 Pelajar Diamankan",
        tahun: "2025",
        lokasi: "Jl. Upa Jiwa, Wonokromo",
        sila: [2, 3],
        ringkasan:
          "Polisi mengamankan 17 pelajar yang terlibat tawuran di Jalan Upa Jiwa — konflik horizontal antar kelompok pelajar yang merusak persatuan dan keselamatan generasi muda.",
        sumber: [
          { nama: "Radar Surabaya (Jawa Pos)", url: "https://radarsurabaya.jawapos.com/surabaya/77982896/tawuran-di-jalan-upa-jiwa-17-pelajar-diamankan-polisi" },
        ],
      },
      {
        judul: "Pesta Arak Berujung Pembacokan di Wonokromo",
        tahun: "2025",
        lokasi: "Wonokromo",
        sila: [1, 2],
        ringkasan:
          "Pesta minuman keras berakhir ricuh hingga pembacokan; dua pria bersimbah darah dan pelaku ditangkap polisi — perilaku mabuk dan kekerasan bertentangan dengan nilai moral-keagamaan dan kemanusiaan.",
        sumber: [
          { nama: "Suara Merdeka Surabaya", url: "https://surabaya.suaramerdeka.com/hukum-kriminal/106116743534/pesta-arak-berujung-pembacokan-di-wonokromo-dua-pria-bersimbah-darah" },
        ],
      },
      {
        judul: "Bentrokan Oknum Suporter Bonek",
        tahun: "2024–2025",
        lokasi: "Surabaya Selatan",
        sila: [3],
        ringkasan:
          "Bentrokan antar oknum suporter menyebabkan korban luka; Wakil Wali Kota Surabaya menjenguk korban dan mengimbau masyarakat menjaga perdamaian — konflik antarkelompok merusak persatuan.",
        sumber: [
          { nama: "Antara Jatim", url: "https://jatim.antaranews.com/berita/73970/wawali-surabaya-jenguk-korban-bentrokan-oknum-bonek" },
        ],
      },
      {
        judul: "Percobaan Pembunuhan karena Cemburu di Wonokromo",
        tahun: "3 Maret 2026",
        lokasi: "Wonokromo",
        sila: [4],
        ringkasan:
          "Seorang pria mencoba membunuh teman mantan pacarnya karena cemburu — memilih kekerasan alih-alih menyelesaikan masalah dengan kepala dingin, musyawarah, dan jalur hukum.",
        sumber: [
          { nama: "Newstizen", url: "https://newstizen.co.id/2026/03/03/cemburu-membabi-buta-pria-di-wonokromo-surabaya-coba-bunuh-teman-mantan/" },
        ],
      },
    ],
    praktikBaik: [
      {
        judul: "Diskon Pemasangan Sambungan Air Perumda Surya Sembada",
        tahun: "2025–2026",
        lokasi: "Kota Surabaya",
        ringkasan:
          "Program diskon pemasangan sambungan air rumah agar warga lebih mudah mendapat akses air bersih dengan biaya terjangkau — penerapan nyata kepedulian terhadap kebutuhan dasar (Sila ke-2 & ke-5).",
        sumber: [
          { nama: "Zona Peristiwa", url: "https://zonaperistiwa.com/news-26110-gebyar-diskon-pemasangan-sambungan-rumah-perumda-air-minum-surya-sembada-kota-surabaya" },
        ],
      },
    ],
  },

  pusat: {
    kasus: [
      {
        judul: "Pengeboman GKI Diponegoro (Terorisme Satu Keluarga)",
        tahun: "13 Mei 2018",
        lokasi: "Jl. Diponegoro No.146, DR. Soetomo, Kec. Tegalsari",
        sila: [1, 2],
        ringkasan:
          "Bom bunuh diri oleh Puji Kuswati bersama dua anak perempuannya FS (12) dan PR (9), dengan tiga bom terpasang di pinggang, meledak di halaman gereja. Tidak ada korban jiwa di luar pelaku, namun puluhan orang luka ringan hingga berat — bagian rangkaian serangan rumah ibadah Surabaya 2018.",
        sumber: [
          { nama: "Detik News", url: "https://news.detik.com/berita/d-4018006/saksi-bom-gki-surabaya-pelaku-peluk-satpam-dan-meledak" },
          { nama: "Katadata", url: "https://katadata.co.id/berita/daerah/5e9a55f6db62a/terduga-pelaku-bom-surabaya-suami-istri-dengan-4-anak-pendukung-isis" },
        ],
      },
      {
        judul: "Pembakaran Gedung Negara Grahadi oleh Massa",
        tahun: "30 Agustus 2025",
        lokasi: "Jl. Gubernur Suryo, Embong Kaliasin, Kec. Genteng",
        sila: [3, 2, 4],
        ringkasan:
          "Gedung Negara Grahadi dibakar massa; 315 orang diamankan, total 35 ditetapkan tersangka. Pelaku menggunakan molotov rakitan; sebagian massa juga menjarah dan merusak bangunan. Aksi diduga dipicu provokator padahal tuntutan demonstran telah dipenuhi gubernur — kasus telah memasuki persidangan.",
        sumber: [
          { nama: "Detik Jatim", url: "https://www.detik.com/jatim/berita/d-8094804/kronologi-gedung-grahadi-dibakar-pria-misterius-hanya-20-detik-saja" },
          { nama: "Suara Surabaya", url: "https://www.suarasurabaya.net/kelanakota/2025/polisi-tetapkan-dua-tersangka-baru-pembakar-grahadi-total-ada-35-pelaku/" },
        ],
      },
      {
        judul: "Polsek Tegalsari Ludes Dibakar Perusuh",
        tahun: "29–30 Agustus 2025",
        lokasi: "Jl. Basuki Rahmat, Kec. Tegalsari",
        sila: [3],
        ringkasan:
          "Massa perusuh dari kawasan Grahadi merangsek dan membakar Polsek Tegalsari pada Sabtu malam 30/8/2025 — setelah polsek yang sama menjadi sasaran amuk massa pada Jumat malam 29/8. Perusakan fasilitas negara merusak ketertiban dan stabilitas keamanan.",
        sumber: [
          { nama: "Detik Jatim", url: "https://www.detik.com/jatim/berita/d-8088455/polsek-tegalsari-surabaya-ludes-dibakar-perusuh" },
        ],
      },
      {
        judul: "Guru Agama Cabuli Anak Didik",
        tahun: "2025",
        lokasi: "Surabaya Pusat",
        sila: [2],
        ringkasan:
          "Seorang guru agama dilaporkan mencabuli anak didiknya sendiri; korban diduga mencapai ±20 siswa, dengan tujuh siswa telah melapor — pengkhianatan kepercayaan oleh figur pendidik terhadap anak.",
        sumber: [{ nama: "Dokumen Kelas I1 Surabaya Pusat (kompilasi pemberitaan)", url: "" }],
      },
      {
        judul: "Tawuran di Sekitar PGS Menewaskan Remaja — Provokasi Medsos",
        tahun: "2020",
        lokasi: "Jl. Tembaan, Kec. Bubutan (sekitar Pusat Grosir Surabaya)",
        sila: [3, 2],
        ringkasan:
          "Tawuran antar kelompok pemuda menewaskan satu remaja; lima tersangka ditangkap, salah satunya admin media sosial kelompok yang melakukan provokasi — dijerat UU Perlindungan Anak dan KUHP.",
        sumber: [
          { nama: "Detik News", url: "https://news.detik.com/berita-jawa-timur/d-5278558/polisi-tangkap-5-orang-soal-tawuran-yang-tewaskan-remaja-di-surabaya" },
        ],
      },
      {
        judul: "Carok Antartetangga di Bubutan",
        tahun: "2025",
        lokasi: "Jl. Carikan III, Kel. Alun-Alun Contong, Kec. Bubutan",
        sila: [2],
        ringkasan:
          "Pertikaian senjata tajam (carok) bermula dari cekcok antartetangga sekitar pukul 14.30 WIB; korban bersimbah darah sampai menghentikan mobil di jalan raya untuk minta tolong. Pelaku S; dua korban H dan anaknya SD.",
        sumber: [{ nama: "Detik (Polrestabes Surabaya)", url: "" }],
      },
      {
        judul: "Penertiban PKL Pasar Keputran — Pendekatan Humanis",
        tahun: "2024 (kajian terbit)",
        lokasi: "Pasar Keputran: Jl. Kayoon, Jl. Urip Sumoharjo, Jl. Pandegiling",
        sila: [5],
        ringkasan:
          "PKL tanpa izin memakai trotoar & bahu jalan hingga macet parah dan merampas hak pejalan kaki. Satpol PP Kec. Tegalsari bersama PD Pasar Surya dan TNI/POLRI menata secara persuasif-humanis melalui Tim Pasopati & Tim Arimbi — benturan hak yang diselesaikan tanpa kekerasan.",
        sumber: [
          { nama: "Jurnal (DOI)", url: "https://doi.org/10.55885/jmap.v4i3.397" },
        ],
      },
    ],
    praktikBaik: [],
  },
};

export default KASUS_DETAIL;
