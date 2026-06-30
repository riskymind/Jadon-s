'use client'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from './Reveal'

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#D6B86A">
    <path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.4 3.3L7 14.3l-5-4.9 7-.9L12 2z" />
  </svg>
)

const EnvelopeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M4 6h16v12H4z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="m5 7 7 6 7-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="#25D366">
    <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.4-1.1-2.7s.7-1.9.9-2.2c.2-.2.5-.3.6-.3h.5c.2 0 .4 0 .5.4l.7 1.7c.1.1.1.3 0 .5l-.3.4-.3.3c-.1.1-.3.3-.1.5.1.3.6 1 1.3 1.6.9.8 1.6 1 1.9 1.2.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.5-.1l1.6.8c.2.1.4.2.4.3.1.1.1.5-.1 1Z" />
  </svg>
)

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        background: '#FBF8F3',
        padding: 'clamp(48px,8vw,96px) clamp(18px,5vw,56px) clamp(72px,9vw,120px)',
        overflow: 'hidden',
      }}
    >
      {/* Blob backgrounds */}
      <div
        className="animate-blob"
        style={{
          position: 'absolute',
          top: -120,
          right: -80,
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #A8D5BA, rgba(168,213,186,0))',
          filter: 'blur(8px)',
          pointerEvents: 'none',
        }}
      />
      <div
        className="animate-blob-slow"
        style={{
          position: 'absolute',
          bottom: -140,
          left: -100,
          width: 420,
          height: 420,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 40% 40%, rgba(214,184,106,.45), rgba(214,184,106,0))',
          filter: 'blur(10px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          maxWidth: 1220,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
          gap: 'clamp(36px,5vw,72px)',
          alignItems: 'center',
        }}
      >
        {/* Left: Text */}
        <Reveal>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 9,
              background: '#fff',
              border: '1px solid rgba(46,139,87,.18)',
              padding: '8px 15px',
              borderRadius: 999,
              boxShadow: '0 6px 18px rgba(36,50,61,.05)',
              marginBottom: 26,
            }}
          >
            <span
              className="animate-pulse-ring"
              style={{ width: 9, height: 9, borderRadius: '50%', background: '#2E8B57', display: 'block' }}
            />
            <span style={{ fontSize: 13.5, fontWeight: 600, color: '#2E8B57', letterSpacing: '.01em' }}>
              Available for new clients
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-jakarta)',
              fontWeight: 800,
              fontSize: 'clamp(40px,6vw,68px)',
              lineHeight: 1.04,
              letterSpacing: '-.025em',
              margin: '0 0 22px',
              color: '#24323D',
            }}
          >
            Compassionate care,
            <br />
            <span style={{ color: '#2E8B57' }}>delivered with dignity.</span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(17px,1.5vw,20px)',
              lineHeight: 1.6,
              color: '#5C6B73',
              maxWidth: 520,
              margin: '0 0 34px',
            }}
          >
            I&apos;m Charles — a certified professional caregiver helping families care for the people they love, with
            patience, skill, and a warm presence in the home.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            <Link
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                background: '#2E8B57',
                color: '#fff',
                fontWeight: 600,
                fontSize: 16,
                textDecoration: 'none',
                padding: '15px 28px',
                borderRadius: 999,
                boxShadow: '0 12px 28px rgba(46,139,87,.3)',
                transition: 'transform .25s ease, box-shadow .25s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 18px 36px rgba(46,139,87,.4)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(46,139,87,.3)'
              }}
            >
              <EnvelopeIcon />
              Contact Me
            </Link>
            <a
              href="https://wa.me/447564684472"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                background: '#fff',
                color: '#24323D',
                fontWeight: 600,
                fontSize: 16,
                textDecoration: 'none',
                padding: '15px 26px',
                borderRadius: 999,
                border: '1px solid rgba(36,50,61,.12)',
                boxShadow: '0 6px 18px rgba(36,50,61,.06)',
                transition: 'transform .25s ease, border-color .25s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.borderColor = '#2E8B57'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.borderColor = 'rgba(36,50,61,.12)'
              }}
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
        </Reveal>

        {/* Right: Portrait + floating cards */}
        <Reveal delay={0.12} className="relative">
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: 28,
                overflow: 'hidden',
                boxShadow: '0 40px 80px -28px rgba(36,50,61,.32)',
                border: '6px solid #fff',
              }}
            >
              <Image
                src=""
                alt="Ukaegbu Charles, professional caregiver"
                width={600}
                height={750}
                style={{ width: '100%', height: 'auto', display: 'block', aspectRatio: '4/5', objectFit: 'cover' }}
                priority
              />
            </div>

            {/* Floating card: Years experience */}
            <div
              className="animate-float-y"
              style={{
                position: 'absolute',
                top: 24,
                left: -22,
                background: 'rgba(255,255,255,.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,.7)',
                borderRadius: 18,
                padding: '14px 18px',
                boxShadow: '0 18px 40px rgba(36,50,61,.16)',
              }}
            >
              <div
                style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 800, fontSize: 26, color: '#2E8B57', lineHeight: 1 }}
              >
                5+
              </div>
              <div style={{ fontSize: 12.5, color: '#5C6B73', marginTop: 3 }}>Years experience</div>
            </div>

            {/* Floating card: Certifications */}
            <div
              className="animate-float-y-slow"
              style={{
                position: 'absolute',
                bottom: 60,
                right: -26,
                background: 'rgba(255,255,255,.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,.7)',
                borderRadius: 18,
                padding: '14px 18px',
                boxShadow: '0 18px 40px rgba(36,50,61,.16)',
              }}
            >
              <div
                style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 800, fontSize: 26, color: '#D6B86A', lineHeight: 1 }}
              >
                3
              </div>
              <div style={{ fontSize: 12.5, color: '#5C6B73', marginTop: 3 }}>Certifications</div>
            </div>

            {/* Floating card: Satisfaction */}
            <div
              className="animate-float-y-8"
              style={{
                position: 'absolute',
                bottom: -18,
                left: 30,
                background: 'rgba(255,255,255,.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,.7)',
                borderRadius: 18,
                padding: '13px 17px',
                boxShadow: '0 18px 40px rgba(36,50,61,.16)',
                display: 'flex',
                alignItems: 'center',
                gap: 11,
              }}
            >
              <div style={{ display: 'flex', gap: 1 }}>
                <StarIcon /><StarIcon /><StarIcon />
              </div>
              <div>
                <div
                  style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 800, fontSize: 17, color: '#24323D', lineHeight: 1 }}
                >
                  98%
                </div>
                <div style={{ fontSize: 11.5, color: '#5C6B73' }}>Satisfaction</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
