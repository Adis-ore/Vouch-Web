const cardStyle = {
  background: 'var(--surface)', border: '1px solid var(--border)',
  borderRadius: 12, padding: '20px 24px', marginBottom: 12,
}

export default function LegalPage({ title, updated, intro, sections }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)', padding: '0 16px 60px' }}>
      {/* Nav */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '20px 0 0', display: 'flex', alignItems: 'center', gap: 12 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', color: 'var(--text-secondary)', fontSize: 14, fontFamily: 'DM Sans, sans-serif' }}>
          ← Back to home
        </a>
      </div>

      <div style={{ maxWidth: 720, margin: '0 auto', paddingTop: 40 }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 32 }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 13, color: '#0A0F1E' }}>V</span>
          </div>
          <span style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 20, color: 'var(--text-primary)' }}>ouch</span>
        </div>

        <h1 style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 'clamp(26px, 4vw, 36px)', color: 'var(--text-primary)', marginBottom: 8, lineHeight: 1.2 }}>
          {title}
        </h1>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'var(--text-muted)', marginBottom: 8 }}>
          Last updated: {updated}
        </p>
        {intro && (
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic', marginBottom: 32 }}>
            {intro}
          </p>
        )}

        {sections.map((s, i) => (
          <div key={i} style={cardStyle}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: 14, color: 'var(--text-primary)', marginBottom: 8 }}>{s.title}</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, whiteSpace: 'pre-line', margin: 0 }}>{s.body}</p>
          </div>
        ))}

        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 13, color: 'var(--text-muted)', marginTop: 32, textAlign: 'center' }}>
          Questions? Email <a href="mailto:vouchapp0@gmail.com" style={{ color: 'var(--accent)', textDecoration: 'none' }}>vouchapp0@gmail.com</a>
        </p>
      </div>
    </div>
  )
}
