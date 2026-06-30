'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 21s-7.5-4.6-10-9.2C.2 8.3 1.9 4.5 5.5 4.5c2 0 3.4 1.1 4.3 2.4l.1.2.1-.2c.9-1.3 2.3-2.4 4.3-2.4 3.6 0 5.3 3.8 3.5 7.3C19.5 16.4 12 21 12 21z" fill="#fff" />
  </svg>
)

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
]

export default function Nav() {
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    const onScroll = () => {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 24px rgba(36,50,61,.1)'
        header.style.background = 'rgba(255,255,255,.92)'
      } else {
        header.style.boxShadow = 'none'
        header.style.background = 'rgba(255,255,255,.6)'
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        background: 'rgba(255,255,255,.6)',
        borderBottom: '1px solid rgba(36,50,61,.06)',
        transition: 'box-shadow .4s ease, background .4s ease',
      }}
    >
      <nav
        style={{
          maxWidth: 1220,
          margin: '0 auto',
          padding: '16px clamp(18px,5vw,56px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 20,
        }}
      >
        <Link
          href="#home"
          style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none', color: '#24323D' }}
        >
          <span
            style={{
              width: 38,
              height: 38,
              borderRadius: 12,
              background: 'linear-gradient(140deg,#2E8B57,#A8D5BA)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 16px rgba(46,139,87,.25)',
              flexShrink: 0,
            }}
          >
            <HeartIcon />
          </span>
          <span style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 800, fontSize: 18, letterSpacing: '-.01em' }}>
            Ukaegbu Charles
          </span>
        </Link>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: 14.5,
                fontWeight: 500,
                color: '#5C6B73',
                textDecoration: 'none',
                padding: '9px 13px',
                borderRadius: 9,
                whiteSpace: 'nowrap',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          style={{
            flexShrink: 0,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: '#2E8B57',
            color: '#fff',
            fontWeight: 600,
            fontSize: 14.5,
            textDecoration: 'none',
            padding: '11px 20px',
            borderRadius: 999,
            boxShadow: '0 8px 22px rgba(46,139,87,.28)',
            transition: 'transform .25s ease, box-shadow .25s ease',
          }}
          onMouseOver={(e) => {
            const el = e.currentTarget
            el.style.transform = 'translateY(-2px)'
            el.style.boxShadow = '0 12px 28px rgba(46,139,87,.36)'
          }}
          onMouseOut={(e) => {
            const el = e.currentTarget
            el.style.transform = 'none'
            el.style.boxShadow = '0 8px 22px rgba(46,139,87,.28)'
          }}
        >
          Contact Me
        </Link>
      </nav>
    </header>
  )
}
