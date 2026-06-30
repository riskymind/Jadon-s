'use client'
import { useState, FormEvent } from 'react'
import Image from 'next/image'
import Reveal from './Reveal'

const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
    <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.2c.2-.2.5-.3.6-.3h.5c.2 0 .4 0 .5.4l.7 1.7c.1.1.1.3 0 .5l-.3.4-.3.3c-.1.1-.3.3-.1.5.1.3.6 1 1.3 1.6.9.8 1.6 1 1.9 1.2.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.3.1.1.1.5-.1 1Z" />
  </svg>
)

const EmailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="5" width="18" height="14" rx="2" stroke="#2E8B57" strokeWidth="1.8" />
    <path d="m4 7 8 6 8-6" stroke="#2E8B57" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <path d="M6 3h3l2 5-2.5 1.5a11 11 0 0 0 5 5L21 12l-1 5a2 2 0 0 1-2 2A15 15 0 0 1 3 4a2 2 0 0 1 2-1Z" stroke="#2E8B57" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
)

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: 14,
  border: '1px solid rgba(36,50,61,.14)',
  fontFamily: 'inherit',
  fontSize: 15,
  color: '#24323D',
  background: '#FBF8F3',
  outline: 'none',
  transition: 'border-color .25s ease, background .25s ease',
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 13.5,
  fontWeight: 600,
  color: '#24323D',
  marginBottom: 7,
}

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1000)
  }

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: 'clamp(72px,9vw,130px) clamp(18px,5vw,56px)',
        background: 'linear-gradient(180deg,#FFFFFF,#FBF8F3)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 40,
          right: -60,
          width: 340,
          height: 340,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168,213,186,.4), rgba(168,213,186,0))',
          filter: 'blur(10px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          maxWidth: 1120,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 'clamp(32px,5vw,64px)',
          alignItems: 'start',
          position: 'relative',
        }}
      >
        {/* Left */}
        <Reveal>
          <div style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#2E8B57', marginBottom: 16 }}>
            Get in touch
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-jakarta)',
              fontWeight: 800,
              fontSize: 'clamp(30px,3.6vw,44px)',
              lineHeight: 1.1,
              letterSpacing: '-.02em',
              margin: '0 0 16px',
              color: '#24323D',
            }}
          >
            Let&apos;s talk about your family&apos;s care
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: '#5C6B73', margin: '0 0 28px' }}>
            Reach out for a free, no-pressure consultation. I usually respond within a few hours.
          </p>
          <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 24px 60px -34px rgba(36,50,61,.4)', marginBottom: 24 }}>
            <Image
              src=""
              alt="Ukaegbu Charles"
              width={900}
              height={562}
              style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '16/10', objectFit: 'cover' }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              {
                href: 'https://wa.me/447564684472',
                icon: <WhatsAppIcon />,
                iconBg: '#E7F9EE',
                hoverBorder: '#25D366',
                label: 'WhatsApp',
                sub: 'Message me directly',
                external: true,
              },
              {
                href: 'mailto:charles@gmail.com',
                icon: <EmailIcon />,
                iconBg: '#E4F2EA',
                hoverBorder: '#2E8B57',
                label: 'Email',
                sub: 'charles@gmail.com',
                external: false,
              },
              {
                href: 'tel:+447564684472',
                icon: <PhoneIcon />,
                iconBg: '#E4F2EA',
                hoverBorder: '#2E8B57',
                label: 'Call',
                sub: '+44 (756) 468-4472',
                external: false,
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  background: '#fff',
                  border: '1px solid rgba(36,50,61,.08)',
                  borderRadius: 16,
                  padding: '16px 18px',
                  textDecoration: 'none',
                  transition: 'transform .25s ease, border-color .25s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.borderColor = item.hoverBorder
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'none'
                  e.currentTarget.style.borderColor = 'rgba(36,50,61,.08)'
                }}
              >
                <span
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: item.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </span>
                <span>
                  <span style={{ display: 'block', fontFamily: 'var(--font-jakarta)', fontWeight: 600, fontSize: 15, color: '#24323D' }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: 13.5, color: '#5C6B73' }}>{item.sub}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Right: Form */}
        <Reveal delay={0.1}>
          <div
            style={{
              background: '#fff',
              border: '1px solid rgba(36,50,61,.07)',
              borderRadius: 26,
              padding: 'clamp(26px,3.5vw,40px)',
              boxShadow: '0 30px 70px -40px rgba(36,50,61,.5)',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#E4F2EA',
                padding: '8px 14px',
                borderRadius: 999,
                marginBottom: 24,
              }}
            >
              <span className="animate-pulse-ring" style={{ width: 9, height: 9, borderRadius: '50%', background: '#2E8B57', display: 'block' }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#2E8B57' }}>Available for new clients</span>
            </div>

            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>💚</div>
                <h3 style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 700, fontSize: 22, color: '#24323D', margin: '0 0 10px' }}>
                  Message sent!
                </h3>
                <p style={{ fontSize: 15, color: '#5C6B73', margin: 0 }}>
                  Thank you for reaching out. I&apos;ll be in touch within a few hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div>
                    <label style={labelStyle}>Your name</label>
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#2E8B57'; e.target.style.background = '#fff' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(36,50,61,.14)'; e.target.style.background = '#FBF8F3' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email</label>
                    <input
                      required
                      type="email"
                      placeholder="jane@email.com"
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = '#2E8B57'; e.target.style.background = '#fff' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(36,50,61,.14)'; e.target.style.background = '#FBF8F3' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>How can I help?</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me a little about who needs care and what kind of support you're looking for…"
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={(e) => { e.target.style.borderColor = '#2E8B57'; e.target.style.background = '#fff' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(36,50,61,.14)'; e.target.style.background = '#FBF8F3' }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: '100%',
                      padding: '16px 24px',
                      borderRadius: 14,
                      border: 'none',
                      background: '#2E8B57',
                      color: '#fff',
                      fontFamily: 'var(--font-jakarta)',
                      fontWeight: 700,
                      fontSize: 16,
                      cursor: loading ? 'not-allowed' : 'pointer',
                      opacity: loading ? 0.7 : 1,
                      transition: 'transform .25s ease, box-shadow .25s ease',
                      boxShadow: '0 12px 28px rgba(46,139,87,.3)',
                    }}
                    onMouseOver={(e) => {
                      if (!loading) {
                        e.currentTarget.style.transform = 'translateY(-2px)'
                        e.currentTarget.style.boxShadow = '0 18px 36px rgba(46,139,87,.4)'
                      }
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'none'
                      e.currentTarget.style.boxShadow = '0 12px 28px rgba(46,139,87,.3)'
                    }}
                  >
                    {loading ? 'Sending…' : 'Send message'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
