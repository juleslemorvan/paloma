'use client'

import { Minus, Plus, Check, ChevronDown } from 'lucide-react'
import type { Brand } from '@/lib/catalog'
import { key } from '@/lib/catalog'

function QtyControl({
  value,
  onChange,
}: {
  value: number
  onChange: (delta: number) => void
}) {
  return (
    <div className="flex items-center gap-2.5">
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(-1)}
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-plum/25 bg-white text-plum transition-colors hover:border-terracotta hover:bg-terracotta hover:text-cream"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span
        className={`min-w-[22px] text-center text-[15px] font-bold tabular-nums ${
          value > 0 ? 'text-terracotta opacity-100' : 'text-plum opacity-30'
        }`}
      >
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(1)}
        className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-plum/25 bg-white text-plum transition-colors hover:border-terracotta hover:bg-terracotta hover:text-cream"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  )
}

export function BrandSection({
  brand,
  open,
  onToggle,
  qty,
  onChange,
}: {
  brand: Brand
  open: boolean
  onToggle: () => void
  qty: Record<string, number>
  onChange: (k: string, delta: number) => void
}) {
  const count = brand.s.reduce(
    (acc, p) => acc + p.sz.reduce((a, s) => a + (qty[key(p.n, s.label)] || 0), 0),
    0,
  )

  return (
    <div className="mb-2">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className={`flex w-full items-center justify-between bg-plum px-3.5 py-2.5 transition-colors hover:bg-plum/90 ${
          open ? 'rounded-t-lg' : 'rounded-lg'
        }`}
      >
        <span className="text-[12px] font-bold uppercase tracking-[2px] text-cream">{brand.b}</span>
        <span className="flex items-center gap-2">
          {count > 0 && (
            <span className="flex items-center gap-1 text-[11px] font-bold text-peach">
              {count} <Check className="h-3 w-3" />
            </span>
          )}
          <ChevronDown
            className={`h-4 w-4 text-cream/40 transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </span>
      </button>

      {open && (
        <div className="overflow-hidden rounded-b-lg border border-t-0 border-plum/15">
          {brand.s.map((prod) => (
            <div key={prod.n} className="border-b border-plum/10 bg-cream p-3 last:border-b-0">
              <div className="text-[12px] font-bold uppercase tracking-[0.5px] text-plum">
                {prod.n}
              </div>
              <div className="mb-2 text-[10px] tracking-[1px] text-terracotta">{prod.a}</div>
              {prod.sz.map((s) => {
                const k = key(prod.n, s.label)
                return (
                  <div
                    key={s.label}
                    className="flex items-center justify-between border-t border-plum/10 py-1.5 first:border-t-0"
                  >
                    <span className="flex-1 text-[12px] tracking-[0.5px] text-plum/70">{s.label}</span>
                    <QtyControl value={qty[k] || 0} onChange={(d) => onChange(k, d)} />
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
