import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: delay / 1000 },
})

function PhoneMockup({ children, style }) {
  return (
    <div
      style={{
        width: 220,
        height: 440,
        borderRadius: 36,
        background: 'var(--surface)',
        border: '1.5px solid var(--border)',
        overflow: 'hidden',
        position: 'relative',
        flexShrink: 0,
        ...style,
      }}
    >
      {/* Notch */}
      <div style={{
        position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)',
        width: 60, height: 8, borderRadius: 4, background: 'var(--surface-alt)',
        zIndex: 2,
      }} />
      <div style={{ padding: '36px 14px 14px', height: '100%' }}>
        {children}
      </div>
    </div>
  )
}

function HomeScreen() {
  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 4 }}>Active journey</div>
        <div style={{
          background: 'var(--surface-alt)', borderRadius: 12, padding: '12px 14px',
          border: '1px solid var(--border)',
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>Learn to code</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
            <div style={{ height: 4, flex: 1, borderRadius: 2, background: 'var(--border)' }}>
              <div style={{ height: '100%', width: '60%', borderRadius: 2, background: 'var(--accent)' }} />
            </div>
            <span style={{ fontSize: 10, color: 'var(--text-secondary)' }}>60%</span>
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {[...Array(7)].map((_, i) => (
              <div key={i} style={{
                width: 20, height: 20, borderRadius: 4,
                background: i < 5 ? 'var(--accent)' : 'var(--border)',
                opacity: i < 5 ? 1 : 0.4,
              }} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 6 }}>Group (3 members)</div>
        {['T', 'A', 'E'].map((initial, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8,
          }}>
            <div style={{
              width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
              background: ['#3ECFAA22', '#E8A83822', '#6366f122'][i],
              border: `1px solid ${['#3ECFAA', '#E8A838', '#6366f1'][i]}44`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 11, fontWeight: 700,
              color: ['#3ECFAA', '#E8A838', '#a5b4fc'][i],
            }}>
              {initial}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ height: 4, borderRadius: 2, background: 'var(--border)', marginBottom: 3 }}>
                <div style={{ height: '100%', borderRadius: 2, width: ['100%', '86%', '71%'][i], background: ['#3ECFAA', '#E8A838', '#6366f1'][i] }} />
              </div>
              <div style={{ fontSize: 9, color: 'var(--text-muted)' }}>{['14 day streak', '12 day streak', '10 day streak'][i]}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function DiscoverScreen() {
  const cards = [
    { title: 'Run 5km daily', cat: 'Fitness', days: 30 },
    { title: 'Read 20 pages', cat: 'Habit', days: 21 },
    { title: 'Ship a project', cat: 'Career', days: 60 },
  ]
  return (
    <>
      <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 12 }}>Discover journeys</div>
      {cards.map((c, i) => (
        <div key={i} style={{
          background: 'var(--surface-alt)', borderRadius: 10, padding: '10px 12px',
          marginBottom: 8, border: '1px solid var(--border)',
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 3 }}>{c.title}</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{
              fontSize: 9, padding: '2px 6px', borderRadius: 4,
              background: 'var(--accent-dim, rgba(232,168,56,0.12))', color: 'var(--accent)',
            }}>{c.cat}</span>
            <span style={{ fontSize: 9, color: 'var(--text-secondary)' }}>{c.days}d</span>
          </div>
        </div>
      ))}
    </>
  )
}

export default function Hero() {
  return (
    <section
      style={{ minHeight: '100vh', paddingTop: 64, display: 'flex', alignItems: 'center', overflow: 'hidden' }}
    >
      <div className="container" style={{ width: '100%', paddingTop: 48, paddingBottom: 48 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 64,
          alignItems: 'center',
        }}>
          {/* Left: content */}
          <div style={{ maxWidth: 540 }}>
            <motion.div {...fadeUp(0)}>
              <span style={{
                display: 'inline-block',
                padding: '5px 14px',
                borderRadius: 99,
                border: '1px solid var(--accent)',
                background: 'rgba(232,168,56,0.12)',
                color: 'var(--accent)',
                fontSize: 13,
                fontFamily: 'DM Sans, sans-serif',
                marginBottom: 24,
              }}>
                Accountability. Reimagined.
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(100)}
              style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: 20 }}
            >
              The person who needs<br />
              <span style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--text-secondary)' }}>to see you show up.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(200)}
              style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: 16, color: 'var(--text-secondary)',
                lineHeight: 1.7, maxWidth: 440, marginBottom: 36,
              }}
            >
              Pair with accountability partners, set real milestones, and actually finish what you start. No more going it alone.
            </motion.p>

            <motion.blockquote
              {...fadeUp(250)}
              style={{
                margin: '0 0 28px 0',
                padding: '12px 16px',
                borderLeft: '2px solid var(--accent)',
                fontFamily: 'Fraunces, serif',
                fontStyle: 'italic',
                fontSize: 15,
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
              }}
            >
              "Accountability is the glue that ties commitment to results."
              <footer style={{ marginTop: 6, fontSize: 12, fontStyle: 'normal', color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}>— Bob Proctor</footer>
            </motion.blockquote>

            <motion.div
              {...fadeUp(300)}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 28 }}
            >
              {/* App Store */}
              <a href="#" style={{
                display: 'flex', alignItems: 'center', gap: 10,
                width: 160, height: 52, padding: '0 16px',
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 10, textDecoration: 'none', flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--text-primary)">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <div style={{ fontSize: 9, color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1 }}>Download on the</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.3 }}>App Store</div>
                </div>
              </a>

              {/* Google Play */}
              <a href="#" style={{
                display: 'flex', alignItems: 'center', gap: 10,
                width: 160, height: 52, padding: '0 16px',
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 10, textDecoration: 'none', flexShrink: 0,
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M3.18 23.76c.37.21.8.2 1.18-.01l11.34-6.54-2.58-2.58-9.94 9.13z" fill="#EA4335"/>
                  <path d="M21.54 10.09l-2.86-1.65-2.9 2.9 2.9 2.9 2.88-1.66c.82-.47.82-1.62-.02-2.49z" fill="#FBBC04"/>
                  <path d="M3.18.24C2.8.03 2.37.02 2 .24L13.58 11.82l2.58-2.58L3.18.24z" fill="#4285F4"/>
                  <path d="M2 .24C1.62.46 1.38.9 1.38 1.5v21c0 .6.24 1.04.62 1.26l12.32-11.32L2 .24z" fill="#34A853"/>
                </svg>
                <div>
                  <div style={{ fontSize: 9, color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1 }}>Get it on</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.3 }}>Google Play</div>
                </div>
              </a>
            </motion.div>

            <motion.p
              {...fadeUp(400)}
              style={{ fontSize: 13, color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}
            >
              4.8 rating · 12,000+ journeys started · Built in Nigeria
            </motion.p>
          </div>

          {/* Right: phone mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              minHeight: 480,
            }}
          >
            {/* Glow */}
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400, height: 400,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(232,168,56,0.15) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 0,
            }} />

            {/* Phone 2 — behind/right */}
            <div style={{ position: 'relative', zIndex: 1, marginLeft: -60, marginBottom: 0 }}>
              <PhoneMockup style={{ transform: 'rotate(4deg)', opacity: 0.85 }}>
                <DiscoverScreen />
              </PhoneMockup>
              {/* Badge */}
              <div style={{
                position: 'absolute', bottom: 60, left: -24,
                background: 'var(--surface-alt)', border: '1px solid var(--border)',
                borderRadius: 99, padding: '5px 12px',
                fontSize: 11, fontFamily: 'DM Sans, sans-serif',
                color: 'var(--success)', whiteSpace: 'nowrap',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              }}>
                Tunde just checked in
              </div>
            </div>

            {/* Phone 1 — front/left */}
            <div style={{ position: 'relative', zIndex: 2, marginRight: -60, marginBottom: 24 }}>
              <PhoneMockup style={{ transform: 'rotate(-3deg)' }}>
                <HomeScreen />
              </PhoneMockup>
              {/* Badge */}
              <div style={{
                position: 'absolute', top: 24, right: -28,
                background: 'var(--surface-alt)', border: '1px solid var(--border)',
                borderRadius: 99, padding: '5px 12px',
                fontSize: 11, fontFamily: 'DM Sans, sans-serif',
                color: 'var(--accent)', whiteSpace: 'nowrap',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
              }}>
                14-day streak
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
