import FadeInSection from './shared/FadeInSection'

const testimonials = [
  {
    quote: "I'd been trying to learn web development for 2 years. With a group partner, I finished in 30 days. The daily check-in felt like a meeting I couldn't cancel.",
    name: 'Tunde A.',
    journey: 'Learning journey',
    initials: 'TA',
    color: '#3ECFAA',
  },
  {
    quote: "We both staked ₦1,000. Knowing I'd lose it if I quit made me get up and run on days I genuinely did not want to.",
    name: 'Chiamaka N.',
    journey: 'Fitness journey',
    initials: 'CN',
    color: '#E8A838',
  },
  {
    quote: "My group and I never met in person. But we talked every day for 60 days. Three of us got job offers we were all preparing for.",
    name: 'Emeka O.',
    journey: 'Career journey',
    initials: 'EO',
    color: '#a5b4fc',
  },
]

export default function Testimonials() {
  return (
    <section style={{ padding: '100px 0', background: 'var(--bg)' }}>
      <div className="container">
        <FadeInSection>
          <h2 style={{
            fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 44px)',
            textAlign: 'center', marginBottom: 64, lineHeight: 1.15,
          }}>
            From people who showed up.
          </h2>
        </FadeInSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          maxWidth: 1000,
          margin: '0 auto',
        }}>
          {testimonials.map((t, i) => (
            <FadeInSection key={i} delay={i * 100}>
              <div style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}>
                {/* Decorative quote mark */}
                <div style={{
                  fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontWeight: 400,
                  fontSize: 60, color: 'var(--accent)', opacity: 0.5,
                  lineHeight: 0.8, marginBottom: 12,
                }}>
                  "
                </div>

                <p style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 15,
                  color: 'var(--text-primary)', lineHeight: 1.8,
                  fontStyle: 'italic', flex: 1, marginBottom: 24,
                }}>
                  {t.quote}
                </p>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    {/* Avatar */}
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%',
                      background: t.color + '22',
                      border: `1px solid ${t.color}44`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 13,
                      color: t.color, flexShrink: 0,
                    }}>
                      {t.initials}
                    </div>
                    <div>
                      <div style={{
                        fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 14,
                        color: 'var(--text-primary)', marginBottom: 4,
                      }}>
                        {t.name}
                      </div>
                      <span style={{
                        display: 'inline-block',
                        fontFamily: 'DM Sans, sans-serif', fontSize: 12,
                        padding: '2px 8px', borderRadius: 4,
                        background: 'rgba(232,168,56,0.12)', color: 'var(--accent)',
                      }}>
                        {t.journey}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
