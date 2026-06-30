'use client'
import Reveal from './Reveal'

const timeline = [
  {
    title: 'Lead Caregiver',
    org: 'Sunrise Senior Living',
    period: '2025 — Present',
    desc: 'Coordinate daily care for a community of residents, mentor junior aides, and lead personalized care planning alongside families and nursing staff.',
    color: '#2E8B57',
    ringColor: '#A8D5BA',
    delay: 0,
  },
  {
    title: 'Live-in Caregiver',
    org: 'Private Family Care',
    period: '2023 — 2025',
    desc: 'Provided round-the-clock support for an elderly couple, managing medications, mobility, meals, and meaningful daily companionship.',
    color: '#D6B86A',
    ringColor: '#F6ECD3',
    delay: 0.06,
  },
  {
    title: 'Care Companion',
    org: "St. Mary's Hospital",
    period: '2021 — 2023',
    desc: 'Supported patients through recovery and discharge, accompanying them to procedures and easing the transition back home.',
    color: '#2E8B57',
    ringColor: '#A8D5BA',
    delay: 0.12,
  },
  // {
  //   title: 'Childcare Aide',
  //   org: 'Bright Beginnings',
  //   period: '2013 — 2015',
  //   desc: 'Cared for young children including those with additional needs, building nurturing routines that supported growth and confidence.',
  //   color: '#D6B86A',
  //   ringColor: '#F6ECD3',
  //   delay: 0.18,
  // },
]

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: 'clamp(72px,9vw,130px) clamp(18px,5vw,56px)', background: '#FFFFFF' }}
    >
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#2E8B57', marginBottom: 16 }}>
              My journey
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
              A dedicated care
            </h2>
          </div>
        </Reveal>

        <div style={{ position: 'relative', paddingLeft: 'clamp(28px,6vw,56px)' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: 'clamp(10px,2.5vw,20px)',
              top: 6,
              bottom: 6,
              width: 2,
              background: 'linear-gradient(#A8D5BA,#D6B86A)',
            }}
          />

          {timeline.map((item) => (
            <Reveal key={item.title} delay={item.delay}>
              <div style={{ position: 'relative', marginBottom: 30 }}>
                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: 'calc(-1*clamp(28px,6vw,56px) + clamp(2px,1.4vw,12px))',
                    top: 24,
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    background: item.color,
                    border: '4px solid #fff',
                    boxShadow: `0 0 0 2px ${item.ringColor}`,
                  }}
                />
                <div
                  style={{
                    background: '#FBF8F3',
                    border: '1px solid rgba(36,50,61,.06)',
                    borderRadius: 20,
                    padding: '26px 28px',
                    transition: 'transform .3s ease, box-shadow .3s ease',
                  }}
                  onMouseOver={(e) => {
                    const el = e.currentTarget
                    el.style.transform = 'translateX(6px)'
                    el.style.boxShadow = '0 16px 36px -22px rgba(36,50,61,.3)'
                  }}
                  onMouseOut={(e) => {
                    const el = e.currentTarget
                    el.style.transform = 'none'
                    el.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 14px', alignItems: 'center', marginBottom: 8 }}>
                    <h3 style={{ fontFamily: 'var(--font-jakarta)', fontWeight: 700, fontSize: 20, margin: 0, color: '#24323D' }}>
                      {item.title}
                    </h3>
                    <span
                      style={{
                        fontSize: 12.5,
                        fontWeight: 600,
                        color: '#2E8B57',
                        background: '#E4F2EA',
                        padding: '4px 11px',
                        borderRadius: 999,
                      }}
                    >
                      {item.period}
                    </span>
                  </div>
                  <div style={{ fontSize: 14.5, fontWeight: 600, color: '#2E8B57', marginBottom: 10 }}>{item.org}</div>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: '#5C6B73', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
