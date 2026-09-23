'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

const links = [
  { href: '/products', label: 'Products' },
  { href: '/projects', label: 'Projects' },
  { href: '/timber-guide', label: 'Timber Guide' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [showLinks, setShowLinks] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)

  // Stagger overlay links in after open
  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => setShowLinks(true), 50)
      return () => clearTimeout(t)
    } else {
      setShowLinks(false)
    }
  }, [isOpen])

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [isOpen])

  // Close on route change
  useEffect(() => { setIsOpen(false) }, [pathname])

  // Lock body scroll when overlay open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <nav id="nav" ref={navRef}>
        <Link href="/" className="nav-logo">
          <div className="nav-logo-icon">🪵</div>
          <div className="nav-logo-text">MY <span>WOOD</span></div>
        </Link>

        <ul className="nav-links">
          {links.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? 'active' : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <Link href="/contact" className="nav-phone">Get a Quote</Link>
          <Link href="/contact" className="nav-cta">Contact Us →</Link>
          <button
            className={`nav-toggle${isOpen ? ' is-open' : ''}`}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsOpen(prev => !prev)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="nav-overlay" onClick={() => setIsOpen(false)}>
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-overlay-link${showLinks ? ' show' : ''}`}
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`nav-overlay-cta${showLinks ? ' show' : ''}`}
            style={{ transitionDelay: `${links.length * 60}ms` }}
            onClick={() => setIsOpen(false)}
          >
            Get a Free Quote →
          </Link>
        </div>
      )}
    </>
  )
}
