import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

export default function AnimatedCounter({ target, label, suffix = '' }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => Math.round(latest))
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true)
          animate(count, target, { duration: 2.5 })
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [count, target, inView])

  return (
    <div ref={ref} className="text-center">
      <motion.div className="font-display text-5xl md:text-6xl font-bold text-accent-gold mb-2">
        {rounded.get()}
        <span className="text-2xl">{suffix}</span>
      </motion.div>
      <p className="text-text-muted">{label}</p>
    </div>
  )
}
