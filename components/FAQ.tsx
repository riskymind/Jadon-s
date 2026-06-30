'use client'
import { useState } from 'react'
import Reveal from './Reveal'

const faqs = [
  {
    q: 'What areas do you serve?',
    a: "I provide in-home care throughout the greater metro area and surrounding suburbs. If you're unsure whether your location is covered, just reach out — I'm happy to check.",
  },
  {
    q: 'Are you insured and background-checked?',
    a: "Yes. I'm fully insured, and I've cleared a comprehensive background check. I'm glad to provide documentation and references before we begin.",
  },
  {
    q: 'What are your rates?',
    a: "Rates depend on the type and frequency of care. After a short conversation about your needs, I'll share clear, transparent pricing with no surprises.",
  },
  {
    q: 'Do you offer live-in care?',
    a: "I do. I offer hourly, overnight, and full live-in arrangements depending on your family's situation, and we can adjust as needs change.",
  },
  {
    q: 'Can you assist with medications?',
    a: "Yes — I'm trained in medication reminders and management, and I coordinate closely with your family and healthcare providers to keep everything on schedule.",
  },
  {
    q: 'How do we get started?',
    a: "Just send me a message or fill out the form below or WhatsApp. We'll schedule a free consultation to discuss your needs and build a care plan that fits.",
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid rgba(36,50,61,.07)',
        borderRadius: 18,
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          textAlign: 'left',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '22px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          fontFamily: 'var(--font-jakarta)',
          fontWeight: 600,
          fontSize: 17,
          color: '#24323D',
        }}
        aria-expanded={open}
      >
        {q}
        <span
          style={{
            flexShrink: 0,
            color: '#2E8B57',
            fontSize: 24,
            lineHeight: 1,
            transition: 'transform .3s ease',
            transform: open ? 'rotate(45deg)' : 'none',
            display: 'block',
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? 300 : 0,
          opacity: open ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height .4s ease, opacity .4s ease',
        }}
      >
        <p style={{ fontSize: 15.5, lineHeight: 1.65, color: '#5C6B73', margin: 0, padding: '0 24px 24px' }}>{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section
      id="faq"
      style={{ padding: 'clamp(72px,9vw,130px) clamp(18px,5vw,56px)', background: '#FBF8F3' }}
    >
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#2E8B57', marginBottom: 16 }}>
              Questions
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-jakarta)',
                fontWeight: 800,
                fontSize: 'clamp(30px,3.6vw,44px)',
                lineHeight: 1.1,
                letterSpacing: '-.02em',
                margin: 0,
                color: '#24323D',
              }}
            >
              Frequently asked
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {faqs.map((item) => (
              <FAQItem key={item.q} {...item} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
