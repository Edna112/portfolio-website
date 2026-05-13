const tech = ['Node.js', 'TypeScript', 'Laravel', 'React', 'PostgreSQL', 'Docker']

export function PartnersBar() {
  return (
    <section className="border-y border-white/5 bg-[#0a1228] py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 md:justify-between md:px-6">
        {tech.map((name) => (
          <span
            key={name}
            className="text-sm font-semibold tracking-wide text-white/35 md:text-base"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
