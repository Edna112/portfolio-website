import { type FormEvent, useState } from 'react'
import { profile } from '../data/profile'
import { PortraitImage } from './PortraitImage'

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

export function ContactSection() {
  const [status, setStatus] = useState<SubmitStatus>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    setStatus('sending')

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(profile.email)}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            message,
            _subject: `Portfolio message from ${name}`,
            _replyto: email,
            _captcha: 'false',
            _template: 'table',
          }),
        },
      )

      const result = (await res.json()) as { success?: boolean }

      if (!res.ok || !result.success) {
        setStatus('error')
        return
      }

      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-16 md:scroll-mt-28 md:pb-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 rounded-2xl border border-white/10 bg-[#0a1228] p-6 md:grid-cols-2 md:gap-12 md:p-10">
          <div>
            <div className="mb-6 flex justify-center md:justify-start">
              <PortraitImage size="sm" />
            </div>
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
            <input
              type="text"
              name="_honey"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
            />

            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold tracking-wide text-white/70">
                Name
              </span>
              <input
                name="name"
                required
                autoComplete="name"
                disabled={status === 'sending'}
                className="w-full rounded-xl border border-white/15 bg-[#050a18] px-4 py-3 text-sm text-white outline-none transition focus:border-[#0084ff]/50 focus:ring-4 focus:ring-[#0084ff]/20 disabled:opacity-60"
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
                disabled={status === 'sending'}
                className="w-full rounded-xl border border-white/15 bg-[#050a18] px-4 py-3 text-sm text-white outline-none transition focus:border-[#0084ff]/50 focus:ring-4 focus:ring-[#0084ff]/20 disabled:opacity-60"
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
                disabled={status === 'sending'}
                className="w-full resize-y rounded-xl border border-white/15 bg-[#050a18] px-4 py-3 text-sm text-white outline-none transition focus:border-[#0084ff]/50 focus:ring-4 focus:ring-[#0084ff]/20 disabled:opacity-60"
                placeholder="Project details, stack, timeline, links…"
              />
            </label>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 rounded-full bg-[#0084ff] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0084ff]/25 transition hover:bg-[#0070d6] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'sending' ? 'SENDING…' : 'SEND MESSAGE'}
            </button>

            {status === 'success' ? (
              <p className="text-center text-sm text-[#4db2ff]" role="status">
                Message sent to {profile.email}. I&apos;ll reply soon!
              </p>
            ) : null}
            {status === 'error' ? (
              <p className="text-center text-sm text-red-400" role="alert">
                Could not send. Please email{' '}
                <a className="underline" href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>{' '}
                directly.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}
