import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeInSection from './shared/FadeInSection'

const faqs = [
  {
    question: 'What happens if someone in my group disappears?',
    answer: 'We detect when someone misses 3 days in a row and auto-remove them. You keep your streak and progress. Their deposit is forfeited to Vouch — you do not receive it.',
  },
  {
    question: 'Is the security deposit mandatory?',
    answer: 'No. Deposits are optional and set by the journey creator. You can run any journey with zero deposit — commitment only.',
  },
  {
    question: 'What if our whole group fails?',
    answer: 'All deposits are forfeited to the platform. Nobody gets anyone else\'s money. This removes any incentive to hope others fail.',
  },
  {
    question: 'What proof do I need to check in?',
    answer: 'Anything that shows you actually did something — a code screenshot, a gym photo, a page of notes, a voice note. The bar is honesty, not perfection.',
  },
  {
    question: 'When does my deposit get returned?',
    answer: 'Automatically within 24 hours of your journey\'s end date, back to your original payment method.',
  },
  {
    question: 'Is this available outside Nigeria?',
    answer: 'Yes. You can join or create journeys from anywhere. Location is used to match you with nearby partners first, but you can search and join globally.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section
      id="faq"
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
            Questions we get a lot.
          </h2>
        </FadeInSection>

        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <FadeInSection key={i} delay={i * 40}>
              <div style={{ borderBottom: '1px solid var(--border)' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    width: '100%', padding: '20px 0',
                    background: 'none', border: 'none', cursor: 'pointer',
                    textAlign: 'left', gap: 16,
                  }}
                >
                  <span style={{
                    fontFamily: 'DM Sans, sans-serif', fontWeight: 500, fontSize: 16,
                    color: 'var(--text-primary)',
                  }}>
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: open === i ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      flexShrink: 0, color: 'var(--accent)',
                      fontFamily: 'DM Sans, sans-serif', fontSize: 18, lineHeight: 1,
                    }}
                  >
                    ›
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{
                        fontFamily: 'DM Sans, sans-serif', fontSize: 15,
                        color: 'var(--text-secondary)', lineHeight: 1.7,
                        paddingBottom: 20,
                      }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  )
}
