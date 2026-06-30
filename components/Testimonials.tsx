'use client'
import { useState } from 'react'
import Image from 'next/image'
import Reveal from './Reveal'

const QuoteIcon = () => (
  <svg width="46" height="46" viewBox="0 0 24 24" fill="#A8D5BA" style={{ margin: '0 auto 18px', display: 'block' }}>
    <path d="M9.5 6C6.5 7 5 9.5 5 13v5h6v-6H8c0-2 .8-3.4 2.5-4L9.5 6Zm9 0c-3 1-4.5 3.5-4.5 7v5h6v-6h-3c0-2 .8-3.4 2.5-4L18.5 6Z" />
  </svg>
)

const StarRow = () => (
  <div style={{ display: 'flex', gap: 3, justifyContent: 'center', marginBottom: 18 }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#D6B86A">
        <path d="m12 2 3 6.5 7 .9-5 4.9 1.2 7L12 18l-6.4 3.3L7 14.3l-5-4.9 7-.9L12 2z" />
      </svg>
    ))}
  </div>
)

const testimonials = [
  {
    quote:
      "Charles cared for my father through his final years with a tenderness I'll never forget. He didn't just look after him — he made him feel seen and loved every single day.",
    name: 'Grace M.',
    role: 'Daughter of client',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'After my surgery I was anxious about managing alone. Charles was reliable, gentle, and genuinely kind. My recovery was smoother because he was there.',
    name: 'David R.',
    role: 'Post-surgery client',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    quote:
      'Our son has additional needs and trusting someone is hard. Charles earned that trust within a week. Patient, warm, and endlessly capable.',
    name: 'Lena & Tom P.',
    role: 'Parents',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
  },
]

const ChevronLeft = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="m14 6-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const ChevronRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="m10 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((a) => (a + 1) % testimonials.length)
  const t = testimonials[active]

  return (
    <section
      id="testimonials"
      style={{ padding: 'clamp(72px,9vw,130px) clamp(18px,5vw,56px)', background: '#FBF8F3' }}
    >
      <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
        <Reveal>
          <div style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#2E8B57', marginBottom: 16 }}>
            Kind words
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-jakarta)',
              fontWeight: 800,
              fontSize: 'clamp(30px,3.6vw,44px)',
              lineHeight: 1.1,
              letterSpacing: '-.02em',
              margin: '0 0 48px',
              color: '#24323D',
            }}
          >
            What families say
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          {/* Slide */}
          <div
            style={{
              background: '#fff',
              border: '1px solid rgba(36,50,61,.06)',
              borderRadius: 28,
              padding: 'clamp(30px,4vw,52px)',
              boxShadow: '0 24px 60px -34px rgba(36,50,61,.4)',
              marginBottom: 32,
              transition: 'opacity .4s ease',
            }}
          >
            <QuoteIcon />
            <p
              style={{
                fontFamily: 'var(--font-jakarta)',
                fontWeight: 500,
                fontSize: 'clamp(19px,2.2vw,26px)',
                lineHeight: 1.5,
                color: '#24323D',
                margin: '0 0 28px',
                letterSpacing: '-.01em',
              }}
            >
              {t.quote}
            </p>
            <StarRow />
            <div style={{ display: 'flex', alignItems: 'center', gap: 13, justifyContent: 'center' }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={52}
                  height={52}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 700, fontSize: 16, color: '#24323D' }}>
                  {t.name}
                </div>
                <div style={{ fontSize: 13.5, color: '#5C6B73' }}>{t.role}</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18 }}>
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              style={{
                width: 46,
                height: 46,
                borderRadius: '50%',
                border: '1px solid rgba(36,50,61,.14)',
                background: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#24323D',
                transition: 'background .25s ease, color .25s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#2E8B57'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#fff'
                e.currentTarget.style.color = '#24323D'
              }}
            >
              <ChevronLeft />
            </button>

            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  style={{
                    width: i === active ? 26 : 9,
                    height: 9,
                    borderRadius: 999,
                    background: i === active ? '#2E8B57' : '#CBD6CE',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all .3s ease',
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              style={{
                width: 46,
                height: 46,
                borderRadius: '50%',
                border: '1px solid rgba(36,50,61,.14)',
                background: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#24323D',
                transition: 'background .25s ease, color .25s ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = '#2E8B57'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = '#fff'
                e.currentTarget.style.color = '#24323D'
              }}
            >
              <ChevronRight />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
