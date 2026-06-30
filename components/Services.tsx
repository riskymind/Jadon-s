'use client'
import Link from 'next/link'
import Reveal from './Reveal'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 21s-7.5-4.6-10-9.2C.2 8.3 1.9 4.5 5.5 4.5c2 0 3.4 1.1 4.3 2.4l.1.2.1-.2c.9-1.3 2.3-2.4 4.3-2.4 3.6 0 5.3 3.8 3.5 7.3C19.5 16.4 12 21 12 21z" stroke="#2E8B57" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    iconBg: 'linear-gradient(140deg,#E4F2EA,#A8D5BA)',
    title: 'Elderly Care',
    desc: 'Daily living support, companionship, and gentle assistance that helps seniors stay independent at home.',
    delay: 0,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 13a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8Z" stroke="#9c7c2e" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="12" cy="7" r="4" stroke="#9c7c2e" strokeWidth="1.8" />
        <circle cx="10" cy="6.5" r=".9" fill="#9c7c2e" />
        <circle cx="14" cy="6.5" r=".9" fill="#9c7c2e" />
      </svg>
    ),
    iconBg: 'linear-gradient(140deg,#F6ECD3,#D6B86A)',
    title: 'Child Care',
    desc: 'Attentive, nurturing care for children — including those with additional needs — in a safe, playful environment.',
    delay: 0.06,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 11 12 4l9 7" stroke="#2E8B57" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10v9h14v-9" stroke="#2E8B57" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 19v-5h4v5" stroke="#2E8B57" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
    iconBg: 'linear-gradient(140deg,#E4F2EA,#A8D5BA)',
    title: 'Home Assistance',
    desc: 'Meal prep, light housekeeping, errands, and the everyday help that keeps a household running smoothly.',
    delay: 0.12,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="14" rx="2" stroke="#9c7c2e" strokeWidth="1.8" />
        <path d="M12 10v6M9 13h6" stroke="#9c7c2e" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 6V4h8v2" stroke="#9c7c2e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    iconBg: 'linear-gradient(140deg,#F6ECD3,#D6B86A)',
    title: 'Hospital Companion',
    desc: 'A reassuring presence for appointments, procedures, and recovery — advocating for comfort and clarity.',
    delay: 0,
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="#2E8B57" strokeWidth="1.8" />
        <path d="M9 12a3 3 0 0 1 6 0c0 1.5-1.5 2-1.5 3.2M12 17.5h.01" stroke="#2E8B57" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    iconBg: 'linear-gradient(140deg,#E4F2EA,#A8D5BA)',
    title: 'Dementia Care',
    desc: 'Specialized, patient support that brings structure, safety, and calm to those living with memory loss.',
    delay: 0.06,
  },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{ padding: 'clamp(72px,9vw,130px) clamp(18px,5vw,56px)', background: '#FBF8F3' }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
            <div style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#2E8B57', marginBottom: 16 }}>
              What I offer
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
              Care tailored to your family
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: '#5C6B73', margin: 0 }}>
              Personalized support across every stage of life, delivered with skill and a gentle touch.
            </p>
          </div>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: 24,
          }}
        >
          {services.map((svc) => (
            <Reveal key={svc.title} delay={svc.delay}>
              <ServiceCard {...svc} />
            </Reveal>
          ))}

          {/* CTA card */}
          <Reveal delay={0.12}>
            <div
              style={{
                background: 'linear-gradient(150deg,#2E8B57,#246F47)',
                borderRadius: 22,
                padding: 32,
                boxShadow: '0 18px 40px -20px rgba(46,139,87,.6)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <h3
                style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 700, fontSize: 21, margin: '0 0 10px', color: '#fff' }}
              >
                Not sure what you need?
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,.85)', margin: '0 0 20px' }}>
                Let&apos;s talk through your family&apos;s situation and build a care plan together.
              </p>
              <Link
                href="#contact"
                style={{
                  alignSelf: 'flex-start',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: '#fff',
                  color: '#2E8B57',
                  fontWeight: 600,
                  fontSize: 15,
                  textDecoration: 'none',
                  padding: '12px 22px',
                  borderRadius: 999,
                }}
              >
                Start a conversation <span style={{ fontSize: 18 }}>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({
  icon,
  iconBg,
  title,
  desc,
}: {
  icon: React.ReactNode
  iconBg: string
  title: string
  desc: string
}) {
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid rgba(36,50,61,.06)',
        borderRadius: 22,
        padding: 32,
        boxShadow: '0 10px 30px -18px rgba(36,50,61,.2)',
        transition: 'transform .3s ease, box-shadow .3s ease',
        height: '100%',
      }}
      onMouseOver={(e) => {
        const el = e.currentTarget
        el.style.transform = 'translateY(-8px)'
        el.style.boxShadow = '0 26px 50px -24px rgba(46,139,87,.4)'
      }}
      onMouseOut={(e) => {
        const el = e.currentTarget
        el.style.transform = 'none'
        el.style.boxShadow = '0 10px 30px -18px rgba(36,50,61,.2)'
      }}
    >
      <div
        style={{
          width: 60,
          height: 60,
          borderRadius: 18,
          background: iconBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 22,
        }}
      >
        {icon}
      </div>
      <h3
        style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 700, fontSize: 21, margin: '0 0 10px', color: '#24323D' }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 15, lineHeight: 1.6, color: '#5C6B73', margin: 0 }}>{desc}</p>
    </div>
  )
}
