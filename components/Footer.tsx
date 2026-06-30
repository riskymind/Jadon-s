'use client'
import Link from 'next/link'

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 21s-7.5-4.6-10-9.2C.2 8.3 1.9 4.5 5.5 4.5c2 0 3.4 1.1 4.3 2.4l.1.2.1-.2c.9-1.3 2.3-2.4 4.3-2.4 3.6 0 5.3 3.8 3.5 7.3C19.5 16.4 12 21 12 21z" fill="#fff" />
  </svg>
)

const footerLinkStyle: React.CSSProperties = {
  fontSize: 14.5,
  color: 'rgba(255,255,255,.6)',
  textDecoration: 'none',
  transition: 'color .2s ease',
}

export default function Footer() {
  return (
    <footer style={{ background: '#24323D', color: '#fff', padding: 'clamp(56px,7vw,80px) clamp(18px,5vw,56px) 32px' }}>
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))',
          gap: 40,
          marginBottom: 48,
        }}
      >
        {/* Brand */}
        <div style={{ maxWidth: 300 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 16 }}>
            <span
              style={{
                width: 38,
                height: 38,
                borderRadius: 12,
                background: 'linear-gradient(140deg,#2E8B57,#A8D5BA)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <HeartIcon />
            </span>
            <span style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 800, fontSize: 18 }}>Ukaegbu Charles</span>
          </div>
          <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'rgba(255,255,255,.6)', margin: 0 }}>
            Compassionate, professional in-home care for the people you love.
          </p>
        </div>

        {/* Explore */}
        <div>
          <div style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 700, fontSize: 15, marginBottom: 16 }}>
            Explore
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            {[
              { href: '#about', label: 'About' },
              { href: '#services', label: 'Services' },
              { href: '#testimonials', label: 'Reviews' },
              { href: '#faq', label: 'FAQ' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={footerLinkStyle}
                onMouseOver={(e) => (e.currentTarget.style.color = '#A8D5BA')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,.6)')}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 700, fontSize: 15, marginBottom: 16 }}>
            Contact
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
            <a
              href="mailto:charles@gmail.com"
              style={footerLinkStyle}
              onMouseOver={(e) => (e.currentTarget.style.color = '#A8D5BA')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,.6)')}
            >
              charles@gmail.com
            </a>
            <a
              href="tel:+447564684472"
              style={footerLinkStyle}
              onMouseOver={(e) => (e.currentTarget.style.color = '#A8D5BA')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,.6)')}
            >
              +44 (756) 684-4472
            </a>
            <a
              href="https://wa.me/447564684472"
              target="_blank"
              rel="noopener noreferrer"
              style={footerLinkStyle}
              onMouseOver={(e) => (e.currentTarget.style.color = '#A8D5BA')}
              onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,.6)')}
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* CTA */}
        <div>
          <div style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 700, fontSize: 15, marginBottom: 16 }}>
            Ready to start?
          </div>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.6)', lineHeight: 1.6, margin: '0 0 16px' }}>
            Book a free consultation — no commitment required.
          </p>
          <Link
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: '#2E8B57',
              color: '#fff',
              fontWeight: 600,
              fontSize: 14,
              textDecoration: 'none',
              padding: '11px 20px',
              borderRadius: 999,
              boxShadow: '0 8px 22px rgba(46,139,87,.28)',
            }}
          >
            Get in touch
          </Link>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,.08)',
          paddingTop: 24,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.4)', margin: 0 }}>
          © 2026 Ukaegbu Charles. All rights reserved.
        </p>
        <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.4)', margin: 0 }}>
          Serving families with care &amp; dignity.
        </p>
      </div>
    </footer>
  )
}
