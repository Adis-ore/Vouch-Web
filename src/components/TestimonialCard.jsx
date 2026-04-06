import { motion } from 'framer-motion'

export default function TestimonialCard({ quote, name, category }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="p-8 bg-bg-surface rounded-lg border border-accent-gold/10 flex flex-col"
    >
      <div className="mb-6 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="text-accent-gold">⭐</div>
        ))}
      </div>
      <p className="text-lg text-text-primary mb-6 flex-grow italic">"{quote}"</p>
      <div>
        <p className="font-bold text-text-primary">{name}</p>
        <p className="text-sm text-text-muted">{category} journey</p>
      </div>
    </motion.div>
  )
}
