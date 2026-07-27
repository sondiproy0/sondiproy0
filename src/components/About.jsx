import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const metrics = [
  ['2+', 'Years securing systems'],
  ['15+', 'Assessments delivered'],
  ['800+', 'Students mentored'],
  ['eJPT', 'Offensive security'],
  ['PT1', 'Practical testing']
]

export default function About() {
  const reduced = useReducedMotion()

  return (
    <section id="about" className="section-rule grid gap-10 py-16 lg:grid-cols-[.7fr_1.3fr] lg:py-20">
      <motion.div
        initial={reduced ? {} : { opacity: 0, x: -16 }}
        whileInView={reduced ? {} : { opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <p className="eyebrow">01 / About</p>
        <h2 className="section-title mt-5 text-white">Security that makes a difference.</h2>
        <p className="mt-6 max-w-md leading-prose text-muted">
          Cybersecurity Engineer focused on practical defense: discovering risk, creating meaningful visibility, and helping teams act on the findings that matter.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {metrics.map(([value, label], i) => (
          <motion.div
            key={label}
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            whileInView={reduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={`rounded-card-lg border border-white/10 bg-white/[.035] p-5 ${
              i === 0 ? 'bg-accent/10 border-accent/30' : ''
            }`}
          >
            <p className="font-heading text-3xl font-bold tracking-tight text-accent">{value}</p>
            <p className="mt-2 text-xs leading-5 text-muted">{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
