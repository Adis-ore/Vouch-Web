import { motion } from 'framer-motion'
import { FileText, RotateCw, DollarSign } from 'lucide-react'

export default function ProblemSection() {
  const problems = [
    {
      icon: FileText,
      title: 'Plans without partners',
      description: 'You start strong, then life happens and nobody\'s watching.'
    },
    {
      icon: RotateCw,
      title: 'Habit trackers don\'t care',
      description: 'An app can\'t be disappointed in you. A person can.'
    },
    {
      icon: DollarSign,
      title: 'Accountability costs money',
      description: 'Coaches are expensive. Most people can\'t afford accountability support.'
    }
  ]

  return (
    <section className="py-20 px-4 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Most goals die alone.
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-block mb-4 p-3 bg-bg-surface rounded-lg">
                  <Icon size={32} className="text-accent-gold" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{problem.title}</h3>
                <p className="text-text-muted">{problem.description}</p>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-lg text-text-muted max-w-2xl mx-auto"
        >
          That's why we built a platform where the accountability is free, and the partnership is real.
        </motion.p>
      </div>
    </section>
  )
}
