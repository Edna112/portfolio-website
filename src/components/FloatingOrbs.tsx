export function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute top-[12%] right-[8%] size-16 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-[1px] ring-1 ring-white/10" />
      <div className="absolute top-[40%] right-[4%] size-10 rounded-full bg-gradient-to-br from-[#0084ff]/40 to-transparent blur-[0.5px] ring-1 ring-[#0084ff]/30" />
      <div className="absolute bottom-[18%] right-[20%] size-12 rounded-full bg-gradient-to-br from-white/15 to-transparent blur-[1px] ring-1 ring-white/10" />
    </div>
  )
}
