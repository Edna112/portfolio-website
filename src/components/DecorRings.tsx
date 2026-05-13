export function DecorRings({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute select-none ${className}`}
      aria-hidden
    >
      <svg className="text-white/10" width="420" height="420" viewBox="0 0 420 420">
        <circle cx="210" cy="210" r="200" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="210" cy="210" r="160" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="210" cy="210" r="120" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="210" cy="210" r="80" fill="none" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>
  )
}
