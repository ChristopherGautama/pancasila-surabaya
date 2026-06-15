// ============================================================
// ringkasanWilayah.js
// Profil singkat tiap kawasan untuk panel "Peta Lima Kawasan".
// Karakter & ekonomi wilayah disusun dari konteks Surabaya +
// data BPS yang dipakai proyek; "silaDominan" dan "fokusKasus"
// sejalan dengan tabulasi nyata pada kasusDetail.js.
// Letakkan di: src/data/ringkasanWilayah.js
// ============================================================

export const RINGKASAN_WILAYAH = {
  utara: {
    karakter:
      "Kawasan pesisir dan pelabuhan (Tanjung Perak) yang padat penduduk, dengan sejumlah kantong kemiskinan seperti Semampir, Sidotopo, dan Kenjeran.",
    ekonomi: "Cenderung tertinggal — daya ekonomi paling rentan dibanding kawasan lain.",
    narasi:
      "Sebagai pintu maritim Surabaya, kawasan utara menanggung tekanan kepadatan dan kemiskinan yang tinggi. Kombinasi itu menyuburkan kriminalitas ekonomi dan kekerasan antarwarga, sekaligus menyisakan persoalan kesejahteraan dasar seperti gizi buruk.",
    fokusKasus:
      "Kekerasan antarwarga dan kriminalitas ekonomi — peredaran narkoba, curanmor/begal, hingga gizi buruk.",
    silaDominan: [2, 5],
    pemicu:
      "Kemiskinan dan kepadatan, tekanan ekonomi, serta lemahnya akses terhadap layanan dasar dan rasa aman.",
    kelompokRentan:
      "Warga miskin pesisir, perempuan, balita dan anak, serta kelompok etnis (warga Madura).",
  },

  barat: {
    karakter:
      "Kawasan yang tumbuh pesat: berdampingan antara hunian kelas menengah-atas (Citraland, Pakuwon) dan kampung pinggiran agraris yang rawan banjir (Pakal, Benowo, Sambikerep).",
    ekonomi: "Maju namun timpang — pembangunan cepat tetapi tidak merata.",
    narasi:
      "Surabaya Barat adalah wajah pembangunan kota yang melaju kencang. Di balik kawasan elite, warga kampung lama menghadapi alih fungsi lahan, sengketa tanah, dan banjir kiriman menahun — gesekan khas antara pertumbuhan dan keadilan ruang.",
    fokusKasus:
      "Sengketa tanah dan agraria, alih fungsi lahan, dan banjir; ditambah narkoba serta penipuan di kawasan pinggiran.",
    silaDominan: [5],
    pemicu:
      "Tekanan alih fungsi lahan dan pembangunan cepat, ketimpangan, serta sengketa kepemilikan tanah.",
    kelompokRentan:
      "Warga kampung lama dan petani yang tergusur, lansia, korban banjir, dan korban penipuan.",
  },

  pusat: {
    karakter:
      "Jantung kota — pusat ekonomi, pemerintahan, dan perdagangan (Tunjungan, Genteng, Bubutan, Tegalsari).",
    ekonomi: "Paling mapan / maju.",
    narasi:
      "Sebagai pusat kekuasaan dan ekonomi, kawasan pusat menjadi titik kumpul massa dan simbol negara. Akibatnya wilayah ini paling rawan kerusuhan, demonstrasi anarkis, aksi terorisme, dan gesekan SARA yang mengancam persatuan.",
    fokusKasus:
      "Kekerasan dan kerusuhan publik (kerusuhan massa, pembakaran fasilitas negara, terorisme) serta intoleransi.",
    silaDominan: [2, 3],
    pemicu:
      "Konsentrasi aktivitas politik-ekonomi dan kepadatan, provokasi media sosial, serta polarisasi dan radikalisme.",
    kelompokRentan:
      "Minoritas agama (jemaat rumah ibadah), aparat dan fasilitas publik, anak didik, dan pedagang kaki lima.",
  },

  timur: {
    karakter:
      "Kawasan pendidikan dan permukiman menengah yang berkembang (kampus ITS dan Unair; Mulyorejo, Sukolilo, Rungkut), dengan banyak pendatang dan hunian kos.",
    ekonomi: "Menengah dan berkembang.",
    narasi:
      "Sebagai kawasan kampus dan hunian baru, Surabaya Timur ramai pendatang dan kos-kosan. Mobilitas tinggi ini diiringi maraknya kejahatan harta benda, sementara ekspansi pembangunan dan prasangka terhadap pendatang memunculkan konflik ruang dan diskriminasi.",
    fokusKasus:
      "Kejahatan harta benda (curanmor, pembobolan kos, penipuan) plus konflik lingkungan-pembangunan dan diskriminasi.",
    silaDominan: [5],
    pemicu:
      "Kepadatan pendatang dan kos, urbanisasi, tekanan pembangunan atas ruang hidup warga, serta prasangka terhadap pendatang.",
    kelompokRentan:
      "Mahasiswa dan pendatang penghuni kos, nelayan dan petani tambak, serta kelompok minoritas (mahasiswa Papua).",
  },

  selatan: {
    karakter:
      "Kawasan padat campuran komersial dan permukiman (Wonokromo, Wonocolo, Gayungan, Jambangan) yang dilalui banyak pelajar dan memiliki pusat keramaian.",
    ekonomi: "Menengah.",
    narasi:
      "Surabaya Selatan adalah simpul lalu-lalang pelajar dan keramaian kota. Karakter ini membuat kekerasan dan kenakalan remaja menonjol — dari tawuran dan miras hingga fanatisme suporter — berdampingan dengan kekerasan terhadap anak dan perempuan.",
    fokusKasus:
      "Kekerasan dan kenakalan remaja (tawuran, miras, suporter) serta kekerasan terhadap anak dan perempuan (bullying, pelecehan).",
    silaDominan: [2],
    pemicu:
      "Kenakalan remaja, pengaruh alkohol/miras, fanatisme kelompok (suporter), dan lemahnya pengawasan.",
    kelompokRentan:
      "Pelajar dan remaja, perempuan, anak, serta siswa berkebutuhan khusus.",
  },
};

export default RINGKASAN_WILAYAH;
