import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 64,
        zIndex: 50,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        background: scrolled ? 'var(--bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src="/favicon.svg" alt="Vouch" width={28} height={28} style={{ flexShrink: 0 }} />
          <span style={{ fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 22, color: 'var(--text-primary)' }}>Vouch</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ gap: 32 }}>
          {[['How it works', 'how-it-works'], ['Features', 'features'], ['FAQ', 'faq']].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 14,
                color: 'var(--text-secondary)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
              onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          className="hidden md:block"
          onClick={() => scrollTo('download')}
          style={{
            background: 'var(--accent)',
            color: 'var(--bg)',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 500,
            fontSize: 14,
            padding: '10px 20px',
            borderRadius: 8,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Download App
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(v => !v)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', padding: 4 }}
          aria-label="Menu"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: 'var(--surface)',
              borderBottom: '1px solid var(--border)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '12px 24px 20px' }}>
              {[['How it works', 'how-it-works'], ['Features', 'features'], ['FAQ', 'faq']].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  style={{
                    display: 'block',
                    width: '100%',
                    textAlign: 'left',
                    padding: '10px 0',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 15,
                    color: 'var(--text-secondary)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('download')}
                style={{
                  marginTop: 8,
                  width: '100%',
                  padding: '12px',
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 500,
                  fontSize: 14,
                  borderRadius: 8,
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Download App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
