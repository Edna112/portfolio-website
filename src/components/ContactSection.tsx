import { type FormEvent, useState } from 'react'
import { profile } from '../data/profile'

export function ContactSection() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || 'visitor'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${profile.phoneDisplay}\nLocation: ${profile.location}\n\n${message}\n`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    window.setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="scroll-mt-24 py-16 md:scroll-mt-28 md:pb-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 rounded-2xl border border-white/10 bg-[#0a1228] p-6 md:grid-cols-2 md:gap-12 md:p-10">
          <div>
            <span className="mb-4 inline-block rounded bg-[#0084ff] px-3 py-1 text-[10px] font-bold tracking-widest text-white">
              CONTACT
            </span>
            <h2 className="mb-4 text-2xl font-extrabold text-white md:text-3xl">
              Let&apos;s build something great
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-white/55 md:text-base">
              Based in {profile.location}. Reach out for backend, full-stack, or product engineering
              work—I typically respond within a few business days.
            </p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                Email:{' '}
                <a
                  className="font-semibold text-[#0084ff] underline-offset-4 hover:underline"
                  href={`mailto:${profile.email}`}
                >
                  {profile.email}
                </a>
              </li>
              <li>
                Phone:{' '}
                <a
                  className="font-semibold text-[#0084ff] underline-offset-4 hover:underline"
                  href={`tel:${profile.phoneTel}`}
                >
                  {profile.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold tracking-wide text-white/70">
                Name
              </span>
              <input
                name="name"
                required
                autoComplete="name"
                className="w-full rounded-xl border border-white/15 bg-[#050a18] px-4 py-3 text-sm text-white outline-none ring-[#0084ff]/0 transition focus:border-[#0084ff]/50 focus:ring-4 focus:ring-[#0084ff]/20"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold tracking-wide text-white/70">
                Email
              </span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-xl border border-white/15 bg-[#050a18] px-4 py-3 text-sm text-white outline-none transition focus:border-[#0084ff]/50 focus:ring-4 focus:ring-[#0084ff]/20"
                placeholder="you@example.com"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold tracking-wide text-white/70">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full resize-y rounded-xl border border-white/15 bg-[#050a18] px-4 py-3 text-sm text-white outline-none transition focus:border-[#0084ff]/50 focus:ring-4 focus:ring-[#0084ff]/20"
                placeholder="Project details, stack, timeline, links…"
              />
            </label>
            <button
              type="submit"
              className="mt-2 rounded-full bg-[#0084ff] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0084ff]/25 transition hover:bg-[#0070d6]"
            >
              SEND MESSAGE
            </button>
            {sent ? (
              <p className="text-center text-sm text-[#4db2ff]" role="status">
                Opening your email app…
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}
