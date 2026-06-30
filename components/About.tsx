'use client'
import Image from 'next/image'
import Reveal from './Reveal'

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="#E4F2EA" />
    <path d="m7.5 12.2 3 3 6-6.4" stroke="#2E8B57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const values = [
  { title: 'Compassion', desc: 'Leading every visit with kindness.' },
  { title: 'Reliability', desc: 'On time, every time, fully present.' },
  { title: 'Respect', desc: 'Honoring dignity and independence.' },
  { title: 'Patience', desc: 'Calm in every difficult moment.' },
]

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: 'clamp(72px,9vw,130px) clamp(18px,5vw,56px)', background: '#FFFFFF' }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
          gap: 'clamp(40px,6vw,84px)',
          alignItems: 'center',
        }}
      >
        {/* Portrait */}
        <Reveal>
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: -18,
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #A8D5BA, #D6B86A, #2E8B57, #A8D5BA)',
                opacity: 0.18,
                filter: 'blur(8px)',
              }}
            />
            <div
              style={{
                position: 'relative',
                width: 'min(100%,420px)',
                margin: '0 auto',
                aspectRatio: '1',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '8px solid #fff',
                boxShadow: '0 30px 70px -24px rgba(36,50,61,.3)',
              }}
            >
              <Image
                src=""
                alt="Ukaegbu Charles"
                width={420}
                height={420}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '8%',
                right: '4%',
                background: '#fff',
                borderRadius: 16,
                padding: '12px 16px',
                boxShadow: '0 16px 36px rgba(36,50,61,.16)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <CheckIcon />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#24323D' }}>Background-checked</span>
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <Reveal delay={0.1}>
          <div style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#2E8B57', marginBottom: 16 }}>
            About me
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-jakarta)',
              fontWeight: 800,
              fontSize: 'clamp(30px,3.6vw,44px)',
              lineHeight: 1.1,
              letterSpacing: '-.02em',
              margin: '0 0 22px',
              color: '#24323D',
            }}
          >
            Care that feels like family
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.72, color: '#5C6B73', margin: '0 0 18px' }}>
            For over five years, I&apos;ve had the privilege of caring for people in the place they feel safest —
            home. My approach is simple: treat every client like family, listen closely, and bring calm, capable hands
            to the hardest days.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.72, color: '#5C6B73', margin: '0 0 30px' }}>
            Whether it&apos;s supporting an elderly parent, a child with additional needs, or a loved one recovering from
            surgery, I&apos;m there with patience and genuine warmth.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
              gap: 14,
            }}
          >
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  background: '#FBF8F3',
                  border: '1px solid rgba(36,50,61,.06)',
                  borderRadius: 16,
                  padding: 18,
                }}
              >
                <div style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 700, fontSize: 16, color: '#24323D', marginBottom: 5 }}>
                  {v.title}
                </div>
                <div style={{ fontSize: 13.5, color: '#5C6B73', lineHeight: 1.5 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
