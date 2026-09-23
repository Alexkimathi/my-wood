'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollRevealInit() {
  const pathname = usePathname()

  useEffect(() => {
    const timer = setTimeout(() => {
      const rvEls = document.querySelectorAll('.rv')
      const obs = new IntersectionObserver(
        entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('show')
              obs.unobserve(e.target)
            }
          })
        },
        { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
      )
      rvEls.forEach(el => obs.observe(el))
      return () => obs.disconnect()
    }, 50)
    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
