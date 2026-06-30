'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 21s-7.5-4.6-10-9.2C.2 8.3 1.9 4.5 5.5 4.5c2 0 3.4 1.1 4.3 2.4l.1.2.1-.2c.9-1.3 2.3-2.4 4.3-2.4 3.6 0 5.3 3.8 3.5 7.3C19.5 16.4 12 21 12 21z" fill="#fff" />
  </svg>
)

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M3 6h18M3 12h18M3 18h18" stroke="#24323D" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M18 6 6 18M6 6l12 12" stroke="#24323D" strokeWidth="2" strokeLinecap="round" />
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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    const onScroll = () => {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 24px rgba(36,50,61,.1)'
        header.style.background = 'rgba(255,255,255,.96)'
      } else {
        header.style.boxShadow = 'none'
        header.style.background = 'rgba(255,255,255,.6)'
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMenu = () => setMenuOpen(false)

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
      {/* Top bar */}
      <nav
        style={{
          maxWidth: 1220,
          margin: '0 auto',
          padding: '14px clamp(18px,5vw,56px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        {/* Logo */}
        <Link
          href="#home"
          onClick={closeMenu}
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', color: '#24323D', flexShrink: 0 }}
        >
          <span
            style={{
              width: 36,
              height: 36,
              borderRadius: 11,
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
          <span style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 800, fontSize: 17, letterSpacing: '-.01em' }}>
            Ukaegbu Charles
          </span>
        </Link>

        {/* Desktop: nav links — hidden on mobile, flex on md+ */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 4, flex: 1, justifyContent: 'center' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: 14.5,
                fontWeight: 500,
                color: '#5C6B73',
                textDecoration: 'none',
                padding: '9px 12px',
                borderRadius: 9,
                whiteSpace: 'nowrap',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop: CTA button — hidden on mobile, inline-flex on md+ */}
        <Link
          href="#contact"
          className="hidden md:inline-flex"
          style={{
            flexShrink: 0,
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
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(46,139,87,.36)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'none'
            e.currentTarget.style.boxShadow = '0 8px 22px rgba(46,139,87,.28)'
          }}
        >
          Contact Me
        </Link>

        {/* Mobile: compact CTA + hamburger — flex on mobile, hidden on md+ */}
        <div className="flex md:hidden" style={{ alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <Link
            href="#contact"
            onClick={closeMenu}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: '#2E8B57',
              color: '#fff',
              fontWeight: 600,
              fontSize: 13,
              textDecoration: 'none',
              padding: '9px 14px',
              borderRadius: 999,
              boxShadow: '0 6px 16px rgba(46,139,87,.28)',
              whiteSpace: 'nowrap',
            }}
          >
            Contact Me
          </Link>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            style={{
              background: 'none',
              border: '1px solid rgba(36,50,61,.14)',
              borderRadius: 10,
              padding: 8,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown — slides down when open */}
      <div
        style={{
          overflow: 'hidden',
          maxHeight: menuOpen ? 360 : 0,
          transition: 'max-height 0.35s ease',
          background: '#fff',
          borderTop: menuOpen ? '1px solid rgba(36,50,61,.07)' : 'none',
        }}
      >
        <div style={{ padding: '4px clamp(18px,5vw,40px) 16px', display: 'flex', flexDirection: 'column' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: '#24323D',
                textDecoration: 'none',
                padding: '14px 4px',
                borderBottom: '1px solid rgba(36,50,61,.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              {link.label}
              <span style={{ color: '#A8D5BA', fontSize: 18 }}>›</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
