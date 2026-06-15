// ============================================================
// PetaLimaKawasanFoto.jsx  (v2 — peta besar horizontal + detail di bawah)
//
// • Peta foto Surabaya BESAR & horizontal di atas, full-width.
// • Lima gambar wilayah (kanvas SAMA, transparan) ditumpuk; klik/hover
//   dideteksi dari transparansi (alpha) gambar — tanpa koordinat manual.
// • Rasio kanvas DIUKUR OTOMATIS dari gambar pertama (tak perlu set manual).
// • Wilayah terpilih "terangkat" + bercahaya emas (pseudo-3D); lainnya meredup.
// • Penjelasan (Profil Wilayah + daftar kasus) ada DI BAWAH peta, full-width,
//   dengan kartu ber-ikon yang rapi.
//
// SIAPKAN GAMBAR di public/img/peta/ (ukuran sama, transparan):
//   surabaya-utara.png, surabaya-barat.png, surabaya-pusat.png,
//   surabaya-timur.png, surabaya-selatan.png
//
// Letakkan di: src/components/PetaLimaKawasanFoto.jsx
// Sesuaikan path import data bila struktur foldermu beda.
// ============================================================

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MapPin, TrendingUp, Flame, Zap, Users, Scale } from "lucide-react";
import KASUS_DETAIL from "../data/kasusDetail";
import RINGKASAN_WILAYAH from "../data/ringkasanWilayah";

const C = {
  merah: "#CE1126",
  marun: "#7A0C18",
  gelap: "#14080A",
  emas: "#D4A017",
  krem: "#FBF7F0",
};

const ZONA = [
  { id: "utara", arah: "UTARA" },
  { id: "barat", arah: "BARAT" },
  { id: "pusat", arah: "PUSAT" },
  { id: "timur", arah: "TIMUR" },
  { id: "selatan", arah: "SELATAN" },
];

const SILA_SINGKAT = {
  1: "Sila 1 · Ketuhanan",
  2: "Sila 2 · Kemanusiaan",
  3: "Sila 3 · Persatuan",
  4: "Sila 4 · Kerakyatan",
  5: "Sila 5 · Keadilan Sosial",
};

export default function PetaLimaKawasanFoto() {
  const [selected, setSelected] = useState("utara");
  const [hovered, setHovered] = useState(null);
  const [aspect, setAspect] = useState("4 / 3");
  const reduce = useReducedMotion();

  const containerRef = useRef(null);
  const hitRef = useRef({}); // { id: { data, w, h } }
  const rafRef = useRef(0);
  const aspectSet = useRef(false);

  const buildHit = useCallback((id, imgEl) => {
    try {
      const maxDim = 520;
      const nw = imgEl.naturalWidth || 1;
      const nh = imgEl.naturalHeight || 1;
      const scale = Math.min(1, maxDim / Math.max(nw, nh));
      const w = Math.max(1, Math.round(nw * scale));
      const h = Math.max(1, Math.round(nh * scale));
      const cv = document.createElement("canvas");
      cv.width = w;
      cv.height = h;
      const ctx = cv.getContext("2d", { willReadFrequently: true });
      ctx.drawImage(imgEl, 0, 0, w, h);
      hitRef.current[id] = { data: ctx.getImageData(0, 0, w, h).data, w, h };
    } catch (e) {
      /* CORS dsb → fallback tombol legenda */
    }
  }, []);

  const onImgLoad = useCallback((id, e) => {
    const im = e.currentTarget;
    buildHit(id, im);
    if (!aspectSet.current && im.naturalWidth && im.naturalHeight) {
      setAspect(`${im.naturalWidth} / ${im.naturalHeight}`);
      aspectSet.current = true;
    }
  }, [buildHit]);

  const getRegionAt = useCallback((clientX, clientY) => {
    const el = containerRef.current;
    if (!el) return null;
    const r = el.getBoundingClientRect();
    const nx = (clientX - r.left) / r.width;
    const ny = (clientY - r.top) / r.height;
    if (nx < 0 || nx > 1 || ny < 0 || ny > 1) return null;
    for (const z of ZONA) {
      const hd = hitRef.current[z.id];
      if (!hd) continue;
      const px = Math.min(hd.w - 1, Math.max(0, Math.floor(nx * hd.w)));
      const py = Math.min(hd.h - 1, Math.max(0, Math.floor(ny * hd.h)));
      if (hd.data[(py * hd.w + px) * 4 + 3] > 24) return z.id;
    }
    return null;
  }, []);

  const onMove = useCallback((e) => {
    const x = e.clientX;
    const y = e.clientY;
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      setHovered(getRegionAt(x, y));
    });
  }, [getRegionAt]);

  const onClick = useCallback((e) => {
    const r = getRegionAt(e.clientX, e.clientY);
    if (r) setSelected(r);
  }, [getRegionAt]);

  const data = KASUS_DETAIL[selected] || { kasus: [], praktikBaik: [] };
  const profil = RINGKASAN_WILAYAH[selected];
  const zonaAktif = ZONA.find((z) => z.id === selected);
  const namaWilayah = zonaAktif
    ? zonaAktif.arah.charAt(0) + zonaAktif.arah.slice(1).toLowerCase()
    : "";

  const statItems = profil
    ? [
        { Icon: MapPin, label: "Karakter & kondisi", val: profil.karakter },
        { Icon: TrendingUp, label: "Status ekonomi", val: profil.ekonomi },
        { Icon: Flame, label: "Fokus kasus terbanyak", val: profil.fokusKasus },
        { Icon: Zap, label: "Pemicu utama", val: profil.pemicu },
        { Icon: Users, label: "Kelompok rentan", val: profil.kelompokRentan },
      ]
    : [];

  return (
    <section
      id="peta"
      aria-labelledby="peta-judul"
      style={{ background: C.gelap, color: C.krem }}
      className="w-full px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 text-center sm:mb-10">
          <p style={{ color: C.emas, letterSpacing: "0.25em" }}
             className="mb-3 text-xs font-semibold uppercase">
            Peta Lima Kawasan
          </p>
          <h2 id="peta-judul"
              style={{ fontFamily: "'Fraunces', serif", color: C.krem }}
              className="text-3xl font-semibold sm:text-4xl">
            Pancasila di Lima Wajah Surabaya
          </h2>
          <p style={{ color: "rgba(251,247,240,0.72)" }}
             className="mx-auto mt-4 max-w-2xl text-sm sm:text-base">
            Ketuk salah satu wilayah pada peta untuk melihat profil, kasus, dan
            praktik baik yang tercatat di kawasan tersebut.
          </p>
        </header>

        {/* ————— PETA BESAR (HORIZONTAL) ————— */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-5xl"
        >
          <div
            ref={containerRef}
            onPointerMove={onMove}
            onPointerLeave={() => setHovered(null)}
            onClick={onClick}
            role="application"
            aria-label="Peta lima kawasan Surabaya"
            className="relative w-full cursor-pointer select-none"
            style={{ aspectRatio: aspect }}
          >
            {ZONA.map((z) => {
              const active = selected === z.id;
              const hover = hovered === z.id;
              const someSel = Boolean(selected);
              let transform = "none";
              let filter = "none";
              let opacity = 1;
              let zi = 1;
              if (active) {
                transform = "translateY(-2%) scale(1.04)";
                filter = "drop-shadow(0 18px 30px rgba(212,160,23,0.55)) brightness(1.15)";
                zi = 5;
              } else if (hover) {
                filter = "drop-shadow(0 10px 20px rgba(212,160,23,0.45)) brightness(1.12)";
                zi = 4;
              } else if (someSel) {
                filter = "brightness(0.5) saturate(0.85)";
                opacity = 0.8;
              }
              return (
                <img
                  key={z.id}
                  src={`${import.meta.env.BASE_URL}img/peta/surabaya-${z.id}.png`}
                  alt={`Peta Surabaya ${z.arah}`}
                  draggable={false}
                  onLoad={(e) => onImgLoad(z.id, e)}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    pointerEvents: "none",
                    transform,
                    filter,
                    opacity,
                    zIndex: zi,
                    transition: reduce
                      ? "none"
                      : "transform .35s ease, filter .35s ease, opacity .35s ease",
                  }}
                />
              );
            })}
          </div>

          {/* — Legenda / pilih cepat (andal, keyboard & mobile) — */}
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {ZONA.map((z) => {
              const n = (KASUS_DETAIL[z.id]?.kasus || []).length;
              const active = selected === z.id;
              return (
                <button
                  key={z.id}
                  onClick={() => setSelected(z.id)}
                  onMouseEnter={() => setHovered(z.id)}
                  onMouseLeave={() => setHovered(null)}
                  aria-pressed={active}
                  style={{
                    background: active
                      ? "linear-gradient(180deg,#CE1126,#7A0C18)"
                      : "rgba(251,247,240,0.06)",
                    border: `1px solid ${active ? C.emas : "rgba(212,160,23,0.35)"}`,
                    color: active ? C.krem : "rgba(251,247,240,0.85)",
                  }}
                  className="rounded-full px-4 py-1.5 text-sm font-semibold transition hover:brightness-110"
                >
                  {z.arah} · {n}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ————— DETAIL DI BAWAH (FULL-WIDTH) ————— */}
        <div className="mx-auto mt-12 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? {} : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <div className="mb-5 flex items-baseline justify-between gap-3">
                <h3 style={{ fontFamily: "'Fraunces', serif", color: C.emas }}
                    className="text-2xl font-semibold sm:text-3xl">
                  Surabaya {namaWilayah}
                </h3>
                <span style={{
                         background: "rgba(212,160,23,0.14)",
                         color: C.emas,
                         border: "1px solid rgba(212,160,23,0.4)",
                       }}
                       className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  {data.kasus.length} kasus
                </span>
              </div>

              {/* — PROFIL WILAYAH (desain baru) — */}
              {profil && (
                <div
                  style={{
                    background:
                      "radial-gradient(120% 140% at 0% 0%, rgba(212,160,23,0.14), rgba(122,12,24,0.30) 45%, rgba(20,8,10,0.30))",
                    border: "1px solid rgba(212,160,23,0.35)",
                  }}
                  className="mb-10 overflow-hidden rounded-3xl p-6 sm:p-8"
                >
                  <p style={{ color: C.emas, letterSpacing: "0.22em" }}
                     className="mb-3 text-[11px] font-bold uppercase">
                    Profil Wilayah
                  </p>
                  <p
                    style={{ color: C.krem, borderColor: C.emas }}
                    className="border-l-2 pl-4 text-base leading-relaxed sm:text-lg"
                  >
                    {profil.narasi}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {statItems.map(({ Icon, label, val }) => (
                      <div
                        key={label}
                        style={{
                          background: "rgba(251,247,240,0.045)",
                          border: "1px solid rgba(212,160,23,0.22)",
                        }}
                        className="rounded-2xl p-4"
                      >
                        <div className="mb-2 flex items-center gap-2">
                          <span
                            style={{ background: "rgba(212,160,23,0.16)" }}
                            className="flex h-7 w-7 items-center justify-center rounded-lg"
                          >
                            <Icon size={15} color={C.emas} strokeWidth={2.2} />
                          </span>
                          <span style={{ color: C.emas }}
                                className="text-[11px] font-bold uppercase tracking-wide">
                            {label}
                          </span>
                        </div>
                        <p style={{ color: "rgba(251,247,240,0.9)" }}
                           className="text-sm leading-snug">
                          {val}
                        </p>
                      </div>
                    ))}

                    {/* Kartu Sila */}
                    <div
                      style={{
                        background: "rgba(251,247,240,0.045)",
                        border: "1px solid rgba(212,160,23,0.22)",
                      }}
                      className="rounded-2xl p-4"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <span style={{ background: "rgba(212,160,23,0.16)" }}
                              className="flex h-7 w-7 items-center justify-center rounded-lg">
                          <Scale size={15} color={C.emas} strokeWidth={2.2} />
                        </span>
                        <span style={{ color: C.emas }}
                              className="text-[11px] font-bold uppercase tracking-wide">
                          Sila paling tersangkut
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {(profil.silaDominan || []).map((s) => (
                          <span
                            key={s}
                            style={{
                              background: "rgba(206,17,38,0.22)",
                              color: C.krem,
                              border: "1px solid rgba(212,160,23,0.5)",
                            }}
                            className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold"
                          >
                            {SILA_SINGKAT[s] || `Sila ${s}`}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* — DAFTAR KASUS (2 kolom) — */}
              <p style={{ color: C.emas, letterSpacing: "0.2em" }}
                 className="mb-4 text-[11px] font-bold uppercase">
                Kasus Tercatat
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {data.kasus.map((k, idx) => (
                  <article
                    key={idx}
                    style={{
                      background: "rgba(122,12,24,0.30)",
                      border: "1px solid rgba(212,160,23,0.28)",
                    }}
                    className="flex flex-col rounded-2xl p-5"
                  >
                    <h4 style={{ fontFamily: "'Fraunces', serif", color: C.krem }}
                        className="text-lg font-semibold leading-snug">
                      {k.judul}
                    </h4>
                    <p style={{ color: "rgba(251,247,240,0.6)" }}
                       className="mt-1 text-xs">
                      {k.tahun}{k.lokasi ? ` · ${k.lokasi}` : ""}
                    </p>
                    {Array.isArray(k.sila) && k.sila.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {k.sila.map((s) => (
                          <span key={s}
                                style={{
                                  background: "rgba(212,160,23,0.16)",
                                  color: C.emas,
                                  border: "1px solid rgba(212,160,23,0.4)",
                                }}
                                className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold">
                            {SILA_SINGKAT[s] || `Sila ${s}`}
                          </span>
                        ))}
                      </div>
                    )}
                    <p style={{ color: "rgba(251,247,240,0.85)" }}
                       className="mt-3 text-sm leading-relaxed">
                      {k.ringkasan}
                    </p>
                    {Array.isArray(k.sumber) && k.sumber.some((s) => s.url) && (
                      <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-3">
                        {k.sumber.filter((s) => s.url).map((s, si) => (
                          <a key={si} href={s.url} target="_blank" rel="noopener noreferrer"
                             style={{ color: C.emas }}
                             className="text-xs font-semibold underline underline-offset-2 hover:opacity-80">
                            {s.nama} ↗
                          </a>
                        ))}
                      </div>
                    )}
                  </article>
                ))}
              </div>

              {/* — PRAKTIK BAIK — */}
              {Array.isArray(data.praktikBaik) && data.praktikBaik.length > 0 && (
                <div className="mt-8">
                  <p style={{ color: C.emas, letterSpacing: "0.2em" }}
                     className="mb-4 text-[11px] font-bold uppercase">
                    Praktik Baik
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {data.praktikBaik.map((p, idx) => (
                      <article
                        key={idx}
                        style={{
                          background: "rgba(212,160,23,0.10)",
                          border: "1px solid rgba(212,160,23,0.38)",
                        }}
                        className="flex flex-col rounded-2xl p-5"
                      >
                        <h4 style={{ fontFamily: "'Fraunces', serif", color: C.krem }}
                            className="text-lg font-semibold leading-snug">
                          {p.judul}
                        </h4>
                        <p style={{ color: "rgba(251,247,240,0.6)" }}
                           className="mt-1 text-xs">
                          {p.tahun}{p.lokasi ? ` · ${p.lokasi}` : ""}
                        </p>
                        <p style={{ color: "rgba(251,247,240,0.85)" }}
                           className="mt-3 text-sm leading-relaxed">
                          {p.ringkasan}
                        </p>
                        {Array.isArray(p.sumber) && p.sumber.some((s) => s.url) && (
                          <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-3">
                            {p.sumber.filter((s) => s.url).map((s, si) => (
                              <a key={si} href={s.url} target="_blank" rel="noopener noreferrer"
                                 style={{ color: C.emas }}
                                 className="text-xs font-semibold underline underline-offset-2 hover:opacity-80">
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
