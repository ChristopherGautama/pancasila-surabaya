// ============================================================
// PetaLimaKawasanSVG.jsx
// Peta SVG skematik Surabaya (5 zona) yang interaktif.
// Klik salah satu zona -> panel detail menampilkan kasus
// wilayah tsb, dibaca LANGSUNG dari src/data/kasusDetail.js.
//
// Catatan: ini DIAGRAM skematik (posisi zona relatif benar:
// Utara atas, Selatan bawah, Pusat tengah, Barat kiri,
// Timur kanan) — bukan peta GPS presisi. "5 kawasan" memang
// bukan pembagian administratif resmi (Surabaya = 31 kecamatan),
// jadi zona di sini adalah pengelompokan tematik.
//
// Sesuaikan path import di bawah bila struktur foldermu beda.
// ============================================================

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import KASUS_DETAIL from "../data/kasusDetail";
import RINGKASAN_WILAYAH from "../data/ringkasanWilayah";

// — Token warna tema "Cahaya Pancasila" —
const C = {
  merah: "#CE1126",
  marun: "#7A0C18",
  gelap: "#14080A",
  emas: "#D4A017",
  krem: "#FBF7F0",
};

// — Definisi 5 zona (koordinat pada viewBox 560 x 605) —
// Tata letak panel: Utara (atas, lebar) · Barat (kiri) ·
// Pusat (tengah-atas) · Selatan (tengah-bawah) · Timur (kanan).
const ZONA = [
  { id: "utara",   arah: "UTARA",   x: 60,  y: 60,  w: 440, h: 135 },
  { id: "barat",   arah: "BARAT",   x: 60,  y: 210, w: 145, h: 335 },
  { id: "pusat",   arah: "PUSAT",   x: 220, y: 210, w: 120, h: 200 },
  { id: "selatan", arah: "SELATAN", x: 220, y: 425, w: 120, h: 120 },
  { id: "timur",   arah: "TIMUR",   x: 355, y: 210, w: 145, h: 335 },
];

const SILA_SINGKAT = {
  1: "Sila 1 · Ketuhanan",
  2: "Sila 2 · Kemanusiaan",
  3: "Sila 3 · Persatuan",
  4: "Sila 4 · Kerakyatan",
  5: "Sila 5 · Keadilan Sosial",
};

export default function PetaLimaKawasanSVG() {
  const [selected, setSelected] = useState("utara");
  const reduce = useReducedMotion();

  const data = KASUS_DETAIL[selected] || { kasus: [], praktikBaik: [] };
  const zonaAktif = ZONA.find((z) => z.id === selected);

  return (
    <section
      id="peta"
      aria-labelledby="peta-judul"
      style={{ background: C.gelap, color: C.krem }}
      className="w-full px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 text-center sm:mb-12">
          <p
            style={{ color: C.emas, letterSpacing: "0.25em" }}
            className="mb-3 text-xs font-semibold uppercase"
          >
            Peta Lima Kawasan
          </p>
          <h2
            id="peta-judul"
            style={{ fontFamily: "'Fraunces', serif", color: C.krem }}
            className="text-3xl font-semibold sm:text-4xl"
          >
            Pancasila di Lima Wajah Surabaya
          </h2>
          <p
            style={{ color: "rgba(251,247,240,0.72)" }}
            className="mx-auto mt-4 max-w-2xl text-sm sm:text-base"
          >
            Ketuk salah satu wilayah pada peta untuk melihat kasus dan praktik
            baik yang tercatat di kawasan tersebut.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-12">
          {/* ————— PETA SVG ————— */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={reduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-[520px]"
          >
            <svg
              viewBox="0 0 560 605"
              role="group"
              aria-label="Peta skematik lima kawasan Surabaya"
              style={{ width: "100%", height: "auto", display: "block" }}
            >
              <defs>
                <linearGradient id="gradAktif" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={C.merah} />
                  <stop offset="100%" stopColor={C.marun} />
                </linearGradient>
                <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow
                    dx="0" dy="0" stdDeviation="9"
                    floodColor={C.emas} floodOpacity="0.55"
                  />
                </filter>
              </defs>

              {/* — Dekorasi: laut & garis pantai (di atas Utara) — */}
              <g pointerEvents="none" opacity="0.5">
                {[0, 1, 2].map((i) => (
                  <path
                    key={i}
                    d={`M70 ${30 + i * 11} q 55 -10 110 0 t 110 0 t 110 0 t 110 0`}
                    fill="none"
                    stroke={C.emas}
                    strokeOpacity={0.35 - i * 0.08}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ))}
              </g>

              {/* — Dekorasi: Kali Mas (sungai) membelah dari utara ke selatan — */}
              <path
                pointerEvents="none"
                d="M280 70 C 300 150, 250 200, 280 300 S 300 470, 280 560"
                fill="none"
                stroke={C.emas}
                strokeOpacity="0.18"
                strokeWidth="3"
                strokeDasharray="2 9"
                strokeLinecap="round"
              />

              {/* — Kompas — */}
              <g pointerEvents="none" transform="translate(508 56)">
                <circle r="20" fill="none" stroke={C.emas} strokeOpacity="0.5" />
                <path d="M0 -14 L5 4 L0 -1 L-5 4 Z" fill={C.emas} />
                <text
                  x="0" y="-24" textAnchor="middle"
                  fill={C.emas} fontSize="11" fontWeight="700"
                >U</text>
              </g>

              {/* — Zona interaktif — */}
              {ZONA.map((z, i) => {
                const aktif = z.id === selected;
                const cx = z.x + z.w / 2;
                const cy = z.y + z.h / 2;
                const jumlah = (KASUS_DETAIL[z.id]?.kasus || []).length;
                return (
                  <motion.g
                    key={z.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`Surabaya ${z.arah}, ${jumlah} kasus`}
                    aria-pressed={aktif}
                    onClick={() => setSelected(z.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelected(z.id);
                      }
                    }}
                    style={{
                      cursor: "pointer",
                      transformBox: "fill-box",
                      transformOrigin: "center",
                      outline: "none",
                    }}
                    initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                    whileInView={reduce ? {} : { opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: reduce ? 0 : i * 0.08 }}
                    whileHover={reduce ? {} : { scale: 1.04 }}
                    whileTap={reduce ? {} : { scale: 0.98 }}
                  >
                    <rect
                      x={z.x}
                      y={z.y}
                      width={z.w}
                      height={z.h}
                      rx="18"
                      fill={aktif ? "url(#gradAktif)" : "rgba(251,247,240,0.06)"}
                      stroke={aktif ? C.emas : "rgba(212,160,23,0.35)"}
                      strokeWidth={aktif ? 2.5 : 1.5}
                      filter={aktif ? "url(#glow)" : undefined}
                    />
                    <text
                      x={cx} y={cy - 6} textAnchor="middle"
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                      fontSize="20" fontWeight="800"
                      letterSpacing="0.08em"
                      fill={aktif ? C.krem : "rgba(251,247,240,0.85)"}
                    >
                      {z.arah}
                    </text>
                    <text
                      x={cx} y={cy + 16} textAnchor="middle"
                      fontFamily="'Plus Jakarta Sans', sans-serif"
                      fontSize="12" fontWeight="600"
                      fill={aktif ? C.emas : "rgba(212,160,23,0.85)"}
                    >
                      {jumlah} kasus
                    </text>
                  </motion.g>
                );
              })}
            </svg>
          </motion.div>

          {/* ————— PANEL DETAIL ————— */}
          <div className="min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? {} : { opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <div className="mb-5 flex items-baseline justify-between gap-3">
                  <h3
                    style={{ fontFamily: "'Fraunces', serif", color: C.emas }}
                    className="text-2xl font-semibold"
                  >
                    Surabaya {zonaAktif ? zonaAktif.arah.charAt(0) + zonaAktif.arah.slice(1).toLowerCase() : ""}
                  </h3>
                  <span
                    style={{ color: "rgba(251,247,240,0.6)" }}
                    className="text-xs font-semibold uppercase tracking-wider"
                  >
                    {data.kasus.length} kasus
                  </span>
                </div>

                {/* ——— PROFIL WILAYAH ——— */}
                {RINGKASAN_WILAYAH[selected] && (
                  <div
                    style={{
                      background: "linear-gradient(180deg, rgba(212,160,23,0.12), rgba(122,12,24,0.30))",
                      border: "1px solid rgba(212,160,23,0.45)",
                    }}
                    className="mb-6 rounded-2xl p-5"
                  >
                    <p style={{ color: C.emas, letterSpacing: "0.2em" }}
                       className="mb-2 text-[11px] font-semibold uppercase">
                      Profil Wilayah
                    </p>
                    <p style={{ color: "rgba(251,247,240,0.9)" }}
                       className="text-sm leading-relaxed">
                      {RINGKASAN_WILAYAH[selected].narasi}
                    </p>
                    <dl className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {[
                        ["Karakter & kondisi", RINGKASAN_WILAYAH[selected].karakter],
                        ["Status ekonomi", RINGKASAN_WILAYAH[selected].ekonomi],
                        ["Fokus kasus terbanyak", RINGKASAN_WILAYAH[selected].fokusKasus],
                        ["Pemicu utama", RINGKASAN_WILAYAH[selected].pemicu],
                        ["Kelompok rentan", RINGKASAN_WILAYAH[selected].kelompokRentan],
                      ].map(([label, val]) => (
                        <div key={label}>
                          <dt style={{ color: C.emas }}
                              className="text-[11px] font-semibold uppercase tracking-wide">{label}</dt>
                          <dd style={{ color: "rgba(251,247,240,0.85)" }}
                              className="mt-0.5 text-sm leading-snug">{val}</dd>
                        </div>
                      ))}
                      <div className="sm:col-span-2">
                        <dt style={{ color: C.emas }}
                            className="text-[11px] font-semibold uppercase tracking-wide">Sila paling tersangkut</dt>
                        <dd className="mt-1 flex flex-wrap gap-2">
                          {RINGKASAN_WILAYAH[selected].silaDominan.map((s) => (
                            <span key={s}
                              style={{ background: "rgba(212,160,23,0.16)", color: C.emas,
                                       border: "1px solid rgba(212,160,23,0.4)" }}
                              className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold">
                              {SILA_SINGKAT[s] || `Sila ${s}`}
                            </span>
                          ))}
                        </dd>
                      </div>
                    </dl>
                  </div>
                )}

                <div className="space-y-4">
                  {data.kasus.map((k, idx) => (
                    <article
                      key={idx}
                      style={{
                        background: "rgba(122,12,24,0.30)",
                        border: "1px solid rgba(212,160,23,0.28)",
                      }}
                      className="rounded-2xl p-5"
                    >
                      <h4
                        style={{ fontFamily: "'Fraunces', serif", color: C.krem }}
                        className="text-lg font-semibold leading-snug"
                      >
                        {k.judul}
                      </h4>
                      <p
                        style={{ color: "rgba(251,247,240,0.6)" }}
                        className="mt-1 text-xs"
                      >
                        {k.tahun}
                        {k.lokasi ? ` · ${k.lokasi}` : ""}
                      </p>

                      {Array.isArray(k.sila) && k.sila.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {k.sila.map((s) => (
                            <span
                              key={s}
                              style={{
                                background: "rgba(212,160,23,0.16)",
                                color: C.emas,
                                border: "1px solid rgba(212,160,23,0.4)",
                              }}
                              className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                            >
                              {SILA_SINGKAT[s] || `Sila ${s}`}
                            </span>
                          ))}
                        </div>
                      )}

                      <p
                        style={{ color: "rgba(251,247,240,0.85)" }}
                        className="mt-3 text-sm leading-relaxed"
                      >
                        {k.ringkasan}
                      </p>

                      {Array.isArray(k.sumber) && k.sumber.some((s) => s.url) && (
                        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                          {k.sumber
                            .filter((s) => s.url)
                            .map((s, si) => (
                              <a
                                key={si}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: C.emas }}
                                className="text-xs font-semibold underline underline-offset-2 hover:opacity-80"
                              >
                                {s.nama} ↗
                              </a>
                            ))}
                        </div>
                      )}
                    </article>
                  ))}

                  {/* — Praktik baik (jika ada) — */}
                  {Array.isArray(data.praktikBaik) && data.praktikBaik.length > 0 && (
                    <div className="pt-2">
                      <p
                        style={{ color: C.emas, letterSpacing: "0.2em" }}
                        className="mb-3 text-[11px] font-semibold uppercase"
                      >
                        Praktik Baik
                      </p>
                      <div className="space-y-4">
                        {data.praktikBaik.map((p, idx) => (
                          <article
                            key={idx}
                            style={{
                              background: "rgba(212,160,23,0.10)",
                              border: "1px solid rgba(212,160,23,0.38)",
                            }}
                            className="rounded-2xl p-5"
                          >
                            <h4
                              style={{ fontFamily: "'Fraunces', serif", color: C.krem }}
                              className="text-lg font-semibold leading-snug"
                            >
                              {p.judul}
                            </h4>
                            <p
                              style={{ color: "rgba(251,247,240,0.6)" }}
                              className="mt-1 text-xs"
                            >
                              {p.tahun}
                              {p.lokasi ? ` · ${p.lokasi}` : ""}
                            </p>
                            <p
                              style={{ color: "rgba(251,247,240,0.85)" }}
                              className="mt-3 text-sm leading-relaxed"
                            >
                              {p.ringkasan}
                            </p>
                            {Array.isArray(p.sumber) && p.sumber.some((s) => s.url) && (
                              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                                {p.sumber
                                  .filter((s) => s.url)
                                  .map((s, si) => (
                                    <a
                                      key={si}
                                      href={s.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{ color: C.emas }}
                                      className="text-xs font-semibold underline underline-offset-2 hover:opacity-80"
                                    >
                                      {s.nama} ↗
                                    </a>
                                  ))}
                              </div>
                            )}
                          </article>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
