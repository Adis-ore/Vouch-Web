import { Target, Flame, Camera, Users, Gem, RefreshCw } from 'lucide-react'
import FadeInSection from './shared/FadeInSection'

const features = [
  {
    Icon: Target,
    iconBg: 'rgba(59,130,246,0.15)',
    iconColor: '#60a5fa',
    title: 'Milestone gates',
    description: 'Weekly reflections unlock the next phase. You can\'t skip ahead.',
  },
  {
    Icon: Flame,
    iconBg: 'rgba(232,168,56,0.15)',
    iconColor: '#E8A838',
    title: 'Streak tracking',
    description: 'Your streak is your identity on this platform. Break it and feel it.',
  },
  {
    Icon: Camera,
    iconBg: 'rgba(168,85,247,0.15)',
    iconColor: '#c084fc',
    title: 'Proof-based check-ins',
    description: 'Text, photo, or voice note. Faking is more work than actually doing the thing.',
  },
  {
    Icon: Users,
    iconBg: 'rgba(62,207,170,0.15)',
    iconColor: '#3ECFAA',
    title: 'Group journeys',
    description: 'From 2 to 20 people in one journey. The more who show up, the more you feel accountable.',
  },
  {
    Icon: Gem,
    iconBg: 'rgba(168,85,247,0.15)',
    iconColor: '#a855f7',
    title: 'Pro journeys',
    description: 'Create private groups for you and your people. Invite only — what happens in the group stays in the group.',
  },
  {
    Icon: RefreshCw,
    iconBg: 'rgba(20,184,166,0.15)',
    iconColor: '#2dd4bf',
    title: 'Auto-rematch',
    description: 'Partner ghosts? You\'re never stuck. The platform finds you a replacement.',
  },
]

export default function Features() {
  return (
    <section id="features" style={{ padding: '100px 0', background: 'var(--bg)' }}>
      <div className="container">
        <FadeInSection>
          <h2 style={{
            fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 44px)',
            textAlign: 'center', marginBottom: 64, lineHeight: 1.15,
          }}>
            Built for people who are serious.
          </h2>
        </FadeInSection>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {features.map(({ Icon, iconBg, iconColor, title, description }, i) => (
            <FadeInSection key={i} delay={i * 60}>
              <div
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  padding: 28,
                  transition: 'box-shadow 0.25s ease, transform 0.25s ease',
                  cursor: 'default',
                  height: '100%',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: iconBg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <Icon size={20} color={iconColor} strokeWidth={1.8} />
                </div>
                <h3 style={{
                  fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 16,
                  marginBottom: 8, color: 'var(--text-primary)',
                }}>
                  {title}
                </h3>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: 14,
                  color: 'var(--text-secondary)', lineHeight: 1.6,
                }}>
                  {description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
