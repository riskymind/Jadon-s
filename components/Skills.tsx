'use client'
import Reveal from './Reveal'

const skills = [
  'Medication Management',
  'Mobility Assistance',
  'Meal Preparation',
  'First Aid & CPR',
  'Companionship',
  'Personal Hygiene',
  'Vital Signs Monitoring',
  'Dementia Support',
  'Light Housekeeping',
  'Emotional Support',
  'Post-Op Care',
  'Safe Transfers',
]

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: 'clamp(64px,8vw,110px) clamp(18px,5vw,56px)', background: '#FBF8F3' }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <Reveal>
          <div style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: '.12em', textTransform: 'uppercase', color: '#2E8B57', marginBottom: 16 }}>
            Capabilities
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-jakarta)',
              fontWeight: 800,
              fontSize: 'clamp(30px,3.6vw,44px)',
              lineHeight: 1.1,
              letterSpacing: '-.02em',
              margin: '0 0 36px',
              color: '#24323D',
            }}
          >
            Skills &amp; specialties
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {skills.map((skill) => (
              <span
                key={skill}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(36,50,61,.08)',
                  color: '#24323D',
                  fontWeight: 500,
                  fontSize: 15,
                  padding: '11px 20px',
                  borderRadius: 999,
                  boxShadow: '0 4px 14px -8px rgba(36,50,61,.3)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'transform .25s ease, border-color .25s ease',
                  cursor: 'default',
                }}
                onMouseOver={(e) => {
                  const el = e.currentTarget
                  el.style.transform = 'translateY(-3px)'
                  el.style.borderColor = '#2E8B57'
                }}
                onMouseOut={(e) => {
                  const el = e.currentTarget
                  el.style.transform = 'none'
                  el.style.borderColor = 'rgba(36,50,61,.08)'
                }}
              >
                <span style={{ color: '#2E8B57' }}>✦</span>
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
