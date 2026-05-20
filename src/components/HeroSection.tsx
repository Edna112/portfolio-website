import { profile } from '../data/profile'
import { DecorRings } from './DecorRings'
import { FloatingOrbs } from './FloatingOrbs'
import { PortraitImage } from './PortraitImage'
import { PrimaryCta } from './PrimaryCta'
import { SocialRow } from './SocialRow'
import { TypingLine } from './TypingLine'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden pt-28 pb-16 md:scroll-mt-28 md:pt-32 md:pb-24"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:gap-8 md:px-6">
        <div className="relative z-10 order-2 md:order-1">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-[#0084ff]/90">
            {profile.fullName.toUpperCase()}
          </p>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            HI! I&apos;M {profile.fullName.split(' ')[0].toUpperCase()}
          </h1>
          <div className="mb-6">
            <TypingLine />
          </div>
          <p className="mb-4 max-w-lg text-sm leading-relaxed text-white/55 md:text-base">
            {profile.summary}
          </p>
          <p className="mb-8 text-sm text-white/45">
            {profile.location} ·{' '}
            <a className="text-[#0084ff] hover:underline" href={`tel:${profile.phoneTel}`}>
              {profile.phoneDisplay}
            </a>{' '}
            ·{' '}
            <a className="text-[#0084ff] hover:underline" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <PrimaryCta>GET IN TOUCH</PrimaryCta>
            <SocialRow />
          </div>
        </div>

        <div className="relative order-1 flex min-h-[280px] items-center justify-center md:order-2 md:min-h-[420px]">
          <DecorRings className="-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:scale-110" />
          <FloatingOrbs />
          <div className="relative z-10 flex items-center justify-center">
            <PortraitImage size="lg" />
          </div>
        </div>
      </div>
    </section>
  )
}
