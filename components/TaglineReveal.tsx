'use client'
import { useEffect, useRef } from 'react'

const lines = [
  'Quality timber, on time.',
  'No substitutions, no delays, no excuses.',
]

export default function TaglineReveal() {
  const containerRef = useRef<HTMLDivElement>(null)
  const activated = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !activated.current) {
          activated.current = true
          const words = container.querySelectorAll<HTMLSpanElement>('[data-word]')
          words.forEach((word, index) => {
            setTimeout(() => {
              word.classList.add('active')
            }, index * 55)
          })
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="tagline-reveal-section">
      <div className="tagline-reveal" ref={containerRef}>
        {lines.map((line, lineIndex) => (
          <span key={lineIndex} className="tagline-line">
            {line.split(' ').map((word, wordIndex, arr) => {
              const isLast = wordIndex === arr.length - 1
              return (
                <span
                  key={wordIndex}
                  data-word
                  className="tagline-word"
                >
                  {word}{isLast ? '' : ' '}
                </span>
              )
            })}
          </span>
        ))}
      </div>
    </section>
  )
}
