// Derivasi kasus per sila dari KASUS_DETAIL (data/kasusDetail.js) — satu-satunya
// sumber fakta. Tidak ada fakta baru di file ini; hanya penggabungan, pengurutan,
// dan pemilihan untuk blok "Kasus Kunci" & daftar sumber di tiap SilaBlock.
import { KASUS_DETAIL } from './kasusDetail'

const WILAYAH_LABEL = {
  barat: 'Barat',
  utara: 'Utara',
  timur: 'Timur',
  selatan: 'Selatan',
  pusat: 'Pusat',
}

/**
 * Semua kasus (lintas kawasan) yang field `sila`-nya memuat nomor `n`,
 * dilengkapi label wilayah dan `pos` = posisi `n` di array sila kasus itu
 * (0 = sila utama kasus tersebut) sebagai dasar pengurutan representatif.
 */
export function kasusUntukSila(n) {
  const all = []
  for (const [id, d] of Object.entries(KASUS_DETAIL)) {
    for (const k of d.kasus) {
      const pos = k.sila?.indexOf(n) ?? -1
      if (pos >= 0) all.push({ ...k, wilayahId: id, wilayah: WILAYAH_LABEL[id], pos })
    }
  }
  all.sort((a, b) => a.pos - b.pos) // sila-utama dulu; sort stabil menjaga urutan data
  return all
}

/**
 * Maksimal `max` kasus paling representatif untuk sila `n`: kasus yang
 * menempatkan sila ini sebagai sila utamanya didahulukan, lalu pemilihan
 * mengutamakan sebaran lintas kawasan agar tiap wilayah terwakili.
 * Mengembalikan { kunci, total } — `total` = seluruh kasus terkait sila itu.
 */
export function kasusKunci(n, max = 6) {
  const all = kasusUntukSila(n)
  const picked = []
  const seen = new Set()
  for (const k of all) {
    if (picked.length >= max) break
    if (!seen.has(k.wilayahId)) {
      picked.push(k)
      seen.add(k.wilayahId)
    }
  }
  for (const k of all) {
    if (picked.length >= max) break
    if (!picked.includes(k)) picked.push(k)
  }
  picked.sort((a, b) => a.pos - b.pos)
  return { kunci: picked, total: all.length }
}

/**
 * Daftar sumber unik (gaya footnote) dari seluruh kasus sila `n`,
 * dideduplikasi berdasarkan URL (atau nama bila URL kosong).
 */
export function sumberUntukSila(n) {
  const out = []
  const seen = new Set()
  for (const k of kasusUntukSila(n)) {
    for (const s of k.sumber ?? []) {
      const key = s.url || s.nama
      if (!seen.has(key)) {
        seen.add(key)
        out.push(s)
      }
    }
  }
  return out
}
