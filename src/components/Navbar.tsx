import { useState } from 'react'
import { profile } from '../data/profile'
import { scrollToSection } from '../lib/scroll'
import { PortraitImage } from './PortraitImage'

const links = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT ME' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'services', label: 'SERVICES' },
  { id: 'contact', label: 'CONTACT' },
] as const

export function Navbar() {
  const [open, setOpen] = useState(false)

  const go = (id: string) => {
    scrollToSection(id)
    setOpen(false)
  }

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-[#050a18]/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <button
          type="button"
          onClick={() => go('home')}
          className="flex shrink-0 items-center gap-2 text-left font-bold tracking-tight text-white transition hover:text-[#0084ff]"
          aria-label="Go to home"
        >
          <PortraitImage size="xs" ring={false} className="shadow-md ring-1 ring-white/20" />
          <span className="text-lg">{profile.shortName}</span>
        </button>

        <ul className="hidden items-center gap-8 text-xs font-semibold tracking-widest text-white/90 md:flex">
          {links.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => go(id)}
                className="transition hover:text-[#0084ff]"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => go('contact')}
            className="hidden rounded-full bg-[#0084ff] px-5 py-2.5 text-xs font-bold tracking-wide text-white shadow-lg shadow-[#0084ff]/25 transition hover:bg-[#0070d6] md:inline-block"
          >
            LET&apos;S TALK
          </button>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-[#050a18] px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3 text-sm font-semibold tracking-widest text-white/90">
            {links.map(({ id, label }) => (
              <li key={id}>
                <button type="button" className="w-full py-2 text-left" onClick={() => go(id)}>
                  {label}
                </button>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => go('contact')}
                className="mt-2 w-full rounded-full bg-[#0084ff] py-3 text-center text-xs font-bold text-white"
              >
                LET&apos;S TALK
              </button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  )
}
