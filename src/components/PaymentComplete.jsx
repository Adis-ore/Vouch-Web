import { useEffect, useState } from 'react'

export default function PaymentComplete() {
  const [status, setStatus] = useState('redirecting')

  useEffect(() => {
    // Grab any query params Paystack appends (reference, trxref)
    const params = window.location.search
    const deepLink = `vouch://payment-complete${params}`

    // Try to open the deep link
    window.location.href = deepLink

    // Fallback: if still here after 2s, show download prompt
    const timer = setTimeout(() => setStatus('fallback'), 2000)
    return () => clearTimeout(timer)
  }, [])

  const styles = {
    page: {
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--bg)', padding: '24px 16px', flexDirection: 'column', gap: 0,
    },
    card: {
      width: '100%', maxWidth: 400,
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: 16, padding: 36, textAlign: 'center',
    },
    icon: {
      width: 56, height: 56, borderRadius: '50%',
      background: 'rgba(62,207,170,0.12)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      margin: '0 auto 20px',
    },
    title: {
      fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 22,
      color: 'var(--text-primary)', margin: '0 0 10px',
    },
    body: {
      fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 24px',
    },
    btn: {
      display: 'inline-block', background: 'var(--accent)', color: '#0D1117',
      fontWeight: 700, fontSize: 15, padding: '13px 28px', borderRadius: 10,
      textDecoration: 'none', border: 'none', cursor: 'pointer',
    },
    muted: { fontSize: 12, color: 'var(--text-muted)', marginTop: 16 },
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.icon}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20,6 9,17 4,12" />
          </svg>
        </div>

        {status === 'redirecting' ? (
          <>
            <p style={styles.title}>Payment successful!</p>
            <p style={styles.body}>Taking you back to the app…</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 6 }}>
              {[0,1,2].map(i => (
                <div key={i} style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: 'var(--accent)',
                  animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                }} />
              ))}
            </div>
            <style>{`@keyframes pulse{0%,100%{opacity:0.3}50%{opacity:1}}`}</style>
          </>
        ) : (
          <>
            <p style={styles.title}>Payment successful!</p>
            <p style={styles.body}>
              Your payment went through. Open the Vouch app to continue your journey.
            </p>
            <a href="vouch://payment-complete" style={styles.btn}>Open Vouch</a>
            <p style={styles.muted}>If the app doesn't open, make sure Vouch is installed.</p>
          </>
        )}
      </div>
    </div>
  )
}
