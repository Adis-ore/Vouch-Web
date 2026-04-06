import FadeInSection from './shared/FadeInSection'
import AnimatedCounter from './shared/AnimatedCounter'

const stats = [
  { target: 12000, suffix: '+', label: 'journeys started' },
  { target: 78, suffix: '%', label: 'completion rate with a partner' },
  { target: 4200000, prefix: '₦', label: 'stakes returned' },
  { target: 4.8, suffix: '', label: 'average rating' },
]

export default function Stats() {
  return (
    <section style={{ padding: '80px 0', background: 'var(--surface)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 0,
          maxWidth: 900,
          margin: '0 auto',
        }}>
          {stats.map((s, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div style={{
                textAlign: 'center',
                padding: '0 24px',
                borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
              }}>
                <div style={{
                  fontFamily: 'Fraunces, serif', fontWeight: 700,
                  fontSize: 'clamp(36px, 4vw, 52px)',
                  color: 'var(--accent)',
                  lineHeight: 1.1,
                  marginBottom: 8,
                }}>
                  <AnimatedCounter
                    target={s.target}
                    prefix={s.prefix || ''}
                    suffix={s.suffix}
                    duration={1500}
                  />
                </div>
                <div style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 14,
                  color: 'var(--text-secondary)', lineHeight: 1.4,
                }}>
                  {s.label}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
