import FadeInSection from './shared/FadeInSection'

function QRCode() {
  // Simulated QR grid pattern
  const cells = []
  const pattern = [
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
    [1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1],
    [0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0],
    [1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,1],
    [0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0],
    [1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
  ]

  return (
    <div style={{ display: 'inline-block', padding: 8, background: '#fff', borderRadius: 8 }}>
      {pattern.map((row, ri) => (
        <div key={ri} style={{ display: 'flex' }}>
          {row.map((cell, ci) => (
            <div key={ci} style={{
              width: 4, height: 4,
              background: cell ? '#0A0F1E' : '#ffffff',
            }} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default function Download() {
  return (
    <section id="download" style={{ padding: '120px 0', background: 'var(--bg)' }}>
      <div className="container">
        <FadeInSection>
          <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{
              fontFamily: 'Fraunces, serif', fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 52px)',
              lineHeight: 1.1, marginBottom: 16,
            }}>
              Start your first journey today.
            </h2>

            <p style={{
              fontFamily: 'DM Sans, sans-serif', fontSize: 16,
              color: 'var(--text-secondary)', marginBottom: 40, lineHeight: 1.6,
            }}>
              Free to download. Free to pair. Upgrade when you're ready to go deeper.
            </p>

            {/* Store buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 40 }}>
              {/* App Store */}
              <a href="#" style={{
                display: 'flex', alignItems: 'center', gap: 12,
                width: 180, height: 56, padding: '0 20px',
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 12, textDecoration: 'none', flexShrink: 0,
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--text-primary)" style={{ flexShrink: 0 }}>
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1 }}>Download on the</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.3 }}>App Store</div>
                </div>
              </a>

              {/* Google Play */}
              <a href="#" style={{
                display: 'flex', alignItems: 'center', gap: 12,
                width: 180, height: 56, padding: '0 20px',
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 12, textDecoration: 'none', flexShrink: 0,
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                  <path d="M3.18 23.76c.37.21.8.2 1.18-.01l11.34-6.54-2.58-2.58-9.94 9.13z" fill="#EA4335"/>
                  <path d="M21.54 10.09l-2.86-1.65-2.9 2.9 2.9 2.9 2.88-1.66c.82-.47.82-1.62-.02-2.49z" fill="#FBBC04"/>
                  <path d="M3.18.24C2.8.03 2.37.02 2 .24L13.58 11.82l2.58-2.58L3.18.24z" fill="#4285F4"/>
                  <path d="M2 .24C1.62.46 1.38.9 1.38 1.5v21c0 .6.24 1.04.62 1.26l12.32-11.32L2 .24z" fill="#34A853"/>
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1 }}>Get it on</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-primary)', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.3 }}>Google Play</div>
                </div>
              </a>
            </div>

            {/* QR code — desktop only */}
            <div className="hidden md:flex" style={{ flexDirection: 'column', alignItems: 'center', gap: 12, marginBottom: 40 }}>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}>Or scan to download</p>
              <QRCode />
            </div>

            <p style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'DM Sans, sans-serif' }}>
              Available on iOS and Android · Built in Nigeria · Free forever for basic use
            </p>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
