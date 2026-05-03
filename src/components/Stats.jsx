import FadeInSection from './shared/FadeInSection'
import AnimatedCounter from './shared/AnimatedCounter'

const stats = [
  { target: 47, suffix: '+', label: 'journeys started in early access' },
  { target: 61, suffix: '%', label: 'completion rate with a partner' },
  { target: 4.8, suffix: '', label: 'rating from early users' },
]

export default function Stats() {
  return (
    <section style={{ padding: '80px 0', background: 'var(--surface)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          maxWidth: 1100,
          margin: '0 auto',
        }}>
          {stats.map((s, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div style={{
                textAlign: 'center',
                padding: '0 20px',
                borderRight: i < stats.length - 1 ? '1px solid var(--border)' : 'none',
                overflow: 'hidden',
              }}>
                <div style={{
                  fontFamily: 'Fraunces, serif', fontWeight: 700,
                  fontSize: 'clamp(22px, 2.2vw, 34px)',
                  color: 'var(--accent)',
                  lineHeight: 1.1,
                  marginBottom: 10,
                  wordBreak: 'break-all',
                }}>
                  <AnimatedCounter
                    target={s.target}
                    prefix={s.prefix || ''}
                    suffix={s.suffix}
                    duration={1500}
                  />
                </div>
                <div style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 13,
                  color: 'var(--text-secondary)', lineHeight: 1.4,
                  maxWidth: 120, margin: '0 auto',
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
