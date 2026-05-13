import heroImg from '../assets/hero.png'
import { profile } from '../data/profile'
import { DecorRings } from './DecorRings'
import { PrimaryCta } from './PrimaryCta'

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-16 md:scroll-mt-28 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <div className="relative flex justify-center">
          <DecorRings className="-translate-x-1/4 -translate-y-1/4 top-0 left-0 scale-90 opacity-80 md:scale-100" />
          <div className="relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-2 shadow-xl shadow-black/30">
            <img
              src={heroImg}
              alt={profile.fullName}
              className="aspect-[4/5] w-full rounded-xl object-cover"
              width={400}
              height={500}
            />
          </div>
        </div>

        <div>
          <span className="mb-4 inline-block rounded bg-[#0084ff] px-3 py-1 text-[10px] font-bold tracking-widest text-white">
            ABOUT ME
          </span>
          <h2 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-4xl">
            I BUILD{' '}
            <span className="text-[#0084ff]">{profile.aboutHighlight}</span> PRODUCTS
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-white/55 md:text-base">
            From Redis-backed caching and PostgreSQL query tuning to JWT auth with RBAC and
            dual-database architectures, I focus on measurable outcomes: lower latency, higher
            availability, and fewer production incidents—while partnering closely with frontend and
            product teams.
          </p>
          <p className="mb-10 text-sm text-white/40">
            M.Eng in Computer Engineering (2023–2024) and B.Eng (2019–2023), University of Bamenda.
          </p>

          <div className="mb-10 grid grid-cols-3 gap-4 border-y border-white/10 py-8 text-center md:gap-6 md:text-left">
            <div>
              <p className="text-2xl font-bold text-white md:text-3xl">4+</p>
              <p className="mt-1 text-xs text-white/45 md:text-sm">Years experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white md:text-3xl">99.9%</p>
              <p className="mt-1 text-xs text-white/45 md:text-sm">Data availability</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white md:text-3xl">40%</p>
              <p className="mt-1 text-xs text-white/45 md:text-sm">Latency reduction</p>
            </div>
          </div>

          <PrimaryCta>GET IN TOUCH</PrimaryCta>
        </div>
      </div>
    </section>
  )
}
