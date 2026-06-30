'use client'
import Reveal from './Reveal'

const CheckBadge = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="11" fill="#E4F2EA" />
    <path d="m7.5 12.2 3 3 6-6.4" stroke="#2E8B57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const certs = [
  { id: 1, title: 'Certified Nursing Assistant', org: 'State Board of Nursing · 2019', delay: 0 },
  { id: 2, title: 'CPR & First Aid', org: 'American Red Cross · 2024', delay: 0.06 },
  { id: 3, title: 'Dementia Care Specialist', org: "Alzheimer's Association · 2022", delay: 0.12 },
  { id: 4, title: 'Home Health Aide', org: 'National Care Council · 2017', delay: 0.18 },
]

export default function Certifications() {
  return (
    <section
      id="certifications"
      style={{ padding: 'clamp(72px,9vw,130px) clamp(18px,5vw,56px)', background: '#FFFFFF' }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 56px' }}>
            <div style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#2E8B57', marginBottom: 16 }}>
              Credentials
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
              Certified &amp; verified
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.65, color: '#5C6B73', margin: 0 }}>
              Every credential is current and verifiable — your peace of mind comes first.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 22 }}>
          {certs.map((cert) => (
            <Reveal key={cert.id} delay={cert.delay}>
              <div
                style={{
                  background: '#fff',
                  border: '1px solid rgba(36,50,61,.08)',
                  borderRadius: 22,
                  overflow: 'hidden',
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
                {/* Certificate image placeholder */}
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '4/3',
                    background: 'linear-gradient(135deg,#E4F2EA,#FBF8F3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" opacity={0.4}>
                    <circle cx="12" cy="8" r="4" stroke="#2E8B57" strokeWidth="1.5" />
                    <path d="M8 21v-1a4 4 0 0 1 8 0v1" stroke="#2E8B57" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="m9 13 1.5 5L12 16l1.5 2L15 13" stroke="#D6B86A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{ padding: 22 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 10 }}>
                    <CheckBadge />
                    <span style={{ fontSize: 12, fontWeight: 600, color: '#2E8B57' }}>Verified</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-jakarta)',
                      fontWeight: 700,
                      fontSize: 18,
                      margin: '0 0 6px',
                      color: '#24323D',
                    }}
                  >
                    {cert.title}
                  </h3>
                  <div style={{ fontSize: 14, color: '#5C6B73' }}>{cert.org}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
