import { useState } from 'react'
import { projects } from '../data/profile'
import { scrollToSection } from '../lib/scroll'

export function ProjectsSection() {
  const [page, setPage] = useState(0)
  const pageSize = 3
  const list = [...projects]
  const totalPages = Math.ceil(list.length / pageSize) || 1
  const slice = list.slice(page * pageSize, page * pageSize + pageSize)

  return (
    <section id="projects" className="scroll-mt-24 py-16 md:scroll-mt-28 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 md:mb-14">
          <span className="mb-4 inline-block rounded bg-[#0084ff] px-3 py-1 text-[10px] font-bold tracking-widest text-white">
            MY WORK
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            RECENT PROJECTS
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {slice.map((p) => (
            <article
              key={p.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a1228] shadow-lg transition hover:-translate-y-1 hover:border-[#0084ff]/35 hover:shadow-xl hover:shadow-[#0084ff]/10"
            >
              <div className="aspect-[4/3] overflow-hidden bg-white/5">
                <img
                  src={p.image}
                  alt=""
                  className="size-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-bold text-white">{p.title}</h3>
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 text-xs font-semibold text-[#0084ff] hover:underline"
                    >
                      Live site
                    </a>
                  ) : null}
                </div>
                <p className="mt-1 text-sm text-white/45">{p.tags}</p>
                <p className="mt-3 line-clamp-3 flex-1 text-xs leading-relaxed text-white/40">
                  {p.description}
                </p>
                <div className="mt-4 flex items-end justify-end gap-2">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-[#0084ff]/50 hover:bg-white/5"
                      aria-label={`Open ${p.title} in new tab`}
                    >
                      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => scrollToSection('contact')}
                    className="flex size-11 items-center justify-center rounded-full bg-[#0084ff] text-white shadow-md transition hover:scale-105 hover:bg-[#0070d6]"
                    aria-label={`Discuss ${p.title}`}
                  >
                    <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              className={`size-2.5 rounded-full transition ${page === i ? 'bg-[#0084ff]' : 'bg-white/30 hover:bg-white/50'}`}
              aria-label={`Show project page ${i + 1}`}
              aria-current={page === i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
