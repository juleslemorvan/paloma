'use client'

import { CATALOG, key, type Lang, type Translation } from '@/lib/catalog'

export function OrderRecap({
  qty,
  t,
}: {
  qty: Record<string, number>
  lang: Lang
  t: Translation
}) {
  const total = Object.values(qty).reduce((a, b) => a + b, 0)
  if (total === 0) return null

  const brands = CATALOG.map((brand) => {
    const rows = brand.s.flatMap((prod) =>
      prod.sz
        .map((s) => ({ name: prod.n, sz: s.label, q: qty[key(prod.n, s.label)] || 0 }))
        .filter((r) => r.q > 0),
    )
    return { name: brand.b, rows }
  }).filter((b) => b.rows.length > 0)

  return (
    <div className="mx-3.5 mb-3 overflow-hidden rounded-[10px] border border-plum/15 bg-white">
      <div className="bg-plum px-4 py-3 text-[10px] font-bold uppercase tracking-[2px] text-peach">
        {t.recap}
      </div>
      {brands.map((brand) => (
        <div key={brand.name}>
          <div className="px-4 pb-1 pt-2.5 text-[10px] font-bold uppercase tracking-[1.5px] text-terracotta">
            {brand.name}
          </div>
          {brand.rows.map((r) => (
            <div
              key={r.name + r.sz}
              className="flex items-center justify-between border-t border-plum/5 px-4 py-1.5"
            >
              <span className="flex-1 text-[12px] text-plum">{r.name}</span>
              <span className="mx-2.5 text-[11px] text-plum/50">{r.sz}</span>
              <span className="min-w-[36px] rounded bg-terracotta/10 px-2 py-0.5 text-center text-[13px] font-bold text-terracotta">
                {r.q}x
              </span>
            </div>
          ))}
        </div>
      ))}
      <div className="flex items-center justify-between border-t border-plum/15 bg-cream px-4 py-3">
        <span className="text-[10px] font-bold uppercase tracking-[2px] text-plum">{t.total}</span>
        <span className="text-[14px] font-bold text-plum">{t.bottles(total)}</span>
      </div>
    </div>
  )
}
