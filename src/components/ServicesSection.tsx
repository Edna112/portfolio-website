import { scrollToSection } from '../lib/scroll'

const services = [
  {
    title: 'Backend & APIs',
    desc: 'Node.js, TypeScript, Express, Laravel—REST APIs, JWT auth with RBAC, Redis caching, PostgreSQL & MongoDB, and integrations (payments, Zoom, analytics).',
    image:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80&auto=format&fit=crop',
  },
  {
    title: 'Full-stack delivery',
    desc: 'React frontends with secure, scalable backends—dashboards, real-time features, and data sync across client platforms.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop',
  },
  {
    title: 'Performance & quality',
    desc: 'Query tuning, caching strategies, Dockerized workflows, and automated tests (Jest)—fewer incidents and faster releases.',
    image:
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=80&auto=format&fit=crop',
  },
] as const

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 py-16 md:scroll-mt-28 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 md:mb-14">
          <span className="mb-4 inline-block rounded bg-[#0084ff] px-3 py-1 text-[10px] font-bold tracking-widest text-white">
            SERVICES
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            ENGINEERING <span className="text-[#0084ff]">SERVICES</span> I PROVIDE
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a1228] transition hover:border-[#0084ff]/30"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={s.image}
                  alt=""
                  className="size-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-white/50">{s.desc}</p>
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="mt-4 self-start text-sm font-semibold text-[#0084ff] transition hover:text-[#4db2ff]"
                >
                  Discuss a project →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
