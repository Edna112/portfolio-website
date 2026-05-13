import type { ReactNode } from 'react'
import { scrollToSection } from '../lib/scroll'

type Props = {
  children: ReactNode
  className?: string
}

export function PrimaryCta({ children, className = '' }: Props) {
  return (
    <button
      type="button"
      onClick={() => scrollToSection('contact')}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#0084ff] px-7 py-3.5 text-sm font-bold tracking-wide text-white shadow-lg shadow-[#0084ff]/30 transition hover:bg-[#0070d6] hover:shadow-[#0084ff]/40 ${className}`}
    >
      {children}
      <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </button>
  )
}
