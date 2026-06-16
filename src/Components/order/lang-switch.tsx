'use client'

import type { Lang } from '@/lib/catalog'

export function LangSwitch({
  lang,
  onChange,
}: {
  lang: Lang
  onChange: (l: Lang) => void
}) {
  const opts: { id: Lang; label: string }[] = [
    { id: 'pt', label: 'PT' },
    { id: 'en', label: 'EN' },
  ]
  return (
    <div className="mt-3.5 flex justify-center gap-2">
      {opts.map((o) => {
        const active = o.id === lang
        return (
          <button
            key={o.id}
            type="button"
            onClick={() => onChange(o.id)}
            aria-pressed={active}
            className={`rounded-full border px-3.5 py-1.5 text-[11px] tracking-[1px] transition-colors ${
              active
                ? 'border-peach bg-peach font-bold text-plum'
                : 'border-cream/30 bg-transparent text-cream/60 hover:text-cream'
            }`}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}
