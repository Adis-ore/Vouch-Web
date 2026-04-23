import { useState, useEffect } from 'react'

const SUPABASE_URL = 'https://afcngcmbqjzlzurauomb.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmY25nY21icWp6bHp1cmF1b21iIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2OTQxMTQsImV4cCI6MjA5MTI3MDExNH0.z8o67MLd0R3Cg4_iFY00DPitGXQAkKSdCH7TWzqta6w'

function getRecoveryToken() {
  const hash = window.location.hash.substring(1)
  const params = new URLSearchParams(hash)
  if (params.get('type') === 'recovery') return params.get('access_token')
  return null
}

export default function ResetPassword() {
  const [token] = useState(getRecoveryToken)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState(null)

  const requestReset = async (e) => {
    e.preventDefault()
    setLoading(true); setError(null)
    try {
      const res = await fetch(`${SUPABASE_URL}/auth/v1/recover`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'apikey': SUPABASE_ANON_KEY },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('Could not send reset email. Check your address.')
      setDone(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const updatePassword = async (e) => {
    e.preventDefault()
    if (password !== confirm) return setError('Passwords do not match.')
    if (password.length < 6) return setError('Password must be at least 6 characters.')
    setLoading(true); setError(null)
    try {
      const res = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ password }),
      })
      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.msg || 'Failed to update password.')
      }
      setDone(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%', padding: '11px 14px', borderRadius: 8, fontSize: 14,
    background: 'var(--surface-alt)', border: '1px solid var(--border)',
    color: 'var(--text-primary)', outline: 'none', boxSizing: 'border-box',
  }

  const btnStyle = {
    width: '100%', padding: '12px', borderRadius: 8, fontSize: 14,
    fontWeight: 600, border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
    background: 'var(--accent)', color: '#0D1117',
    opacity: loading ? 0.7 : 1, marginTop: 4,
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--bg)', padding: '24px 16px',
    }}>
      <div style={{
        width: '100%', maxWidth: 400,
        background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: 16, padding: 32,
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 28, gap: 10 }}>
          <img src="/favicon.svg" alt="Vouch" width={48} height={48} />
          <span style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 20, color: 'var(--text-primary)' }}>Vouch</span>
        </div>

        {done ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{
              width: 52, height: 52, borderRadius: '50%', background: 'rgba(62,207,170,0.12)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px',
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20,6 9,17 4,12" />
              </svg>
            </div>
            <p style={{ fontWeight: 600, fontSize: 16, color: 'var(--text-primary)', marginBottom: 8 }}>
              {token ? 'Password updated!' : 'Check your email'}
            </p>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 24 }}>
              {token ? 'You can now log in with your new password.' : 'We sent a reset link to your email address.'}
            </p>
            {token && (
              <a href="/" style={{ fontSize: 13, color: 'var(--accent)', textDecoration: 'none' }}>Back to home</a>
            )}
          </div>
        ) : token ? (
          <>
            <h1 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 6px' }}>Set new password</h1>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 0, marginBottom: 24 }}>Enter a new password for your account.</p>
            <form onSubmit={updatePassword} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="New password"
                  required
                  style={{ ...inputStyle, paddingRight: 40 }}
                />
                <button type="button" onClick={() => setShowPassword(s => !s)} style={{
                  position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', padding: 0,
                }}>
                  {showPassword
                    ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                    : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  }
                </button>
              </div>
              <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="Confirm password" required style={inputStyle} />
              {error && <p style={{ fontSize: 13, color: 'var(--danger)', margin: 0 }}>{error}</p>}
              <button type="submit" disabled={loading} style={btnStyle}>
                {loading ? 'Updating...' : 'Update password'}
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-primary)', margin: '0 0 6px' }}>Reset password</h1>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 0, marginBottom: 24 }}>Enter your email and we'll send you a reset link.</p>
            <form onSubmit={requestReset} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" required style={inputStyle} />
              {error && <p style={{ fontSize: 13, color: 'var(--danger)', margin: 0 }}>{error}</p>}
              <button type="submit" disabled={loading} style={btnStyle}>
                {loading ? 'Sending...' : 'Send reset link'}
              </button>
            </form>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', textAlign: 'center', marginTop: 20 }}>
              <a href="/" style={{ color: 'var(--accent)', textDecoration: 'none' }}>Back to home</a>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
