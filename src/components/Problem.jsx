import { FileText, RefreshCw, DollarSign } from 'lucide-react'
import FadeInSection from './shared/FadeInSection'

const problems = [
  {
    Icon: FileText,
    iconColor: '#E8A838',
    title: 'Plans without partners',
    description: 'You start strong, then life happens and nobody\'s watching.',
  },
  {
    Icon: RefreshCw,
    iconColor: '#3ECFAA',
    title: 'Habit trackers don\'t care',
    description: 'An app can\'t be disappointed in you. A person can.',
  },
  {
    Icon: DollarSign,
    iconColor: '#a5b4fc',
    title: 'Accountability costs money',
    description: 'Coaches are expensive. Most people can\'t afford real support.',
  },
]

export default function Problem() {
  return (
    <section style={{ padding: '100px 0', background: 'var(--bg)' }}>
      <div className="container">
        <FadeInSection>
          <h2 style={{
            fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 44px)',
            textAlign: 'center', marginBottom: 64, lineHeight: 1.15,
          }}>
            Most goals die alone.
          </h2>
        </FadeInSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
          maxWidth: 1000,
          margin: '0 auto 48px',
        }}>
          {problems.map(({ Icon, iconColor, title, description }, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                padding: 32,
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: iconColor + '1a',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 20,
                }}>
                  <Icon size={22} color={iconColor} strokeWidth={1.8} />
                </div>
                <h3 style={{
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 18,
                  marginBottom: 10, color: 'var(--text-primary)',
                }}>
                  {title}
                </h3>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 15,
                  color: 'var(--text-secondary)', lineHeight: 1.6,
                }}>
                  {description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={300}>
          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: 'var(--text-secondary)',
            textAlign: 'center', maxWidth: 500, margin: '0 auto', lineHeight: 1.7,
          }}>
            That's why we built a platform where the accountability is free, and the partnership is real.
          </p>
        </FadeInSection>
      </div>
    </section>
  )
}
