import FadeInSection from './shared/FadeInSection'

const steps = [
  {
    number: 1,
    title: 'Create your journey',
    description: 'Set your goal, timeline, and weekly milestones. Any goal — learning, fitness, habits, career, faith.',
    preview: (
      <div style={{ background: 'var(--surface-alt)', borderRadius: 10, padding: '12px 14px' }}>
        <div style={{ fontSize: 10, color: 'var(--text-muted)', marginBottom: 8 }}>New journey</div>
        {['Goal: Learn React', 'Duration: 30 days', '4 milestones'].map((line, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
            <span style={{ fontSize: 10, color: 'var(--text-secondary)', fontFamily: 'DM Sans, sans-serif' }}>{line}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: 2,
    title: 'Get matched',
    description: 'Post your journey publicly. Anyone can join up to your max group size. Or invite people you already know.',
    preview: (
      <div>
        {[['A', '#3ECFAA'], ['T', '#E8A838'], ['E', '#a5b4fc']].map(([init, color], i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8,
            background: 'var(--surface-alt)', borderRadius: 8, padding: '8px 10px',
          }}>
            <div style={{
              width: 24, height: 24, borderRadius: '50%', background: color + '22',
              border: `1px solid ${color}44`, display: 'flex', alignItems: 'center',
              justifyContent: 'center', fontSize: 10, fontWeight: 700, color, flexShrink: 0,
            }}>{init}</div>
            <div style={{ flex: 1 }}>
              <div style={{ height: 3, borderRadius: 2, background: 'var(--border)', marginBottom: 2 }}>
                <div style={{ height: '100%', borderRadius: 2, width: ['100%','80%','60%'][i], background: color }} />
              </div>
              <div style={{ fontSize: 8, color: 'var(--text-muted)' }}>joined today</div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    number: 3,
    title: 'Show up daily',
    description: 'Check in each day with what you did. Share proof. Your whole group sees everyone\'s progress in real time.',
    preview: (
      <div>
        {['Today — wrote 200 lines', 'Yesterday — finished lesson 3', '2 days ago — built first app'].map((line, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8,
          }}>
            <div style={{
              width: 16, height: 16, borderRadius: 4, background: i === 0 ? 'var(--accent)' : 'var(--surface-alt)',
              border: `1px solid ${i === 0 ? 'var(--accent)' : 'var(--border)'}`,
              flexShrink: 0, marginTop: 1,
            }} />
            <span style={{ fontSize: 10, color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.4 }}>{line}</span>
          </div>
        ))}
      </div>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(to bottom, var(--bg), var(--surface))',
      }}
    >
      <div className="container">
        <FadeInSection>
          <h2 style={{
            fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 44px)',
            textAlign: 'center', marginBottom: 64, lineHeight: 1.15,
          }}>
            Three steps. One group. Real results.
          </h2>
        </FadeInSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 32,
          maxWidth: 1000,
          margin: '0 auto',
          position: 'relative',
        }}>
          {/* Connector line — desktop only */}
          <div className="hidden md:block" style={{
            position: 'absolute',
            top: 36,
            left: '16.66%',
            right: '16.66%',
            height: 1,
            background: 'linear-gradient(to right, transparent, var(--border), transparent)',
            pointerEvents: 'none',
          }} />

          {steps.map((step, i) => (
            <FadeInSection key={i} delay={i * 120}>
              <div style={{ textAlign: 'center' }}>
                {/* Step number circle */}
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'rgba(232,168,56,0.12)',
                  border: '1px solid var(--accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 20, color: 'var(--accent)',
                }}>
                  {step.number}
                </div>

                <h3 style={{
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 20,
                  marginBottom: 10, color: 'var(--text-primary)',
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--text-secondary)',
                  maxWidth: 280, margin: '0 auto 20px', lineHeight: 1.6,
                }}>
                  {step.description}
                </p>

                {/* Preview card */}
                <div style={{
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: 12, padding: '14px 16px',
                  maxWidth: 220, margin: '0 auto',
                  textAlign: 'left',
                }}>
                  {step.preview}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
