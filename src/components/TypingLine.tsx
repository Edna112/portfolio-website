import { useEffect, useState } from 'react'

const WORDS = ['SOFTWARE ENGINEER', 'BACKEND DEVELOPER', 'FULL-STACK BUILDER']

export function TypingLine() {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  const word = WORDS[wordIndex % WORDS.length]

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>

    if (!deleting) {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), 95)
      } else {
        t = setTimeout(() => setDeleting(true), 1400)
      }
    } else if (text.length > 0) {
      t = setTimeout(() => setText(word.slice(0, text.length - 1)), 48)
    } else {
      t = setTimeout(() => {
        setDeleting(false)
        setWordIndex((i) => i + 1)
      }, 120)
    }

    return () => clearTimeout(t)
  }, [text, deleting, word, word.length, wordIndex])

  return (
    <p className="text-xl font-semibold text-white md:text-2xl">
      I&apos;M A{' '}
      <span className="text-[#0084ff]">
        {text}
        <span className="ml-0.5 inline-block min-h-[1em] w-0.5 translate-y-0.5 animate-pulse bg-[#0084ff] align-middle" />
      </span>
    </p>
  )
}
