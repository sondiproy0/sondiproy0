import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export default function PageHero({ eyebrow, title, description }) {
  const reduced = useReducedMotion()

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[.03] [background-image:linear-gradient(var(--color-accent)_1px,transparent_1px),linear-gradient(90deg,var(--color-accent)_1px,transparent_1px)] [background-size:60px_60px]" />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[30%] h-48 w-48 rounded-full bg-accent/[.04] blur-3xl" />
        <div className="absolute right-[10%] bottom-[20%] h-36 w-36 rounded-full bg-accent2/[.04] blur-3xl" />
      </div>

      <div className="relative z-10">
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: EASE }}
          className="eyebrow"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={reduced ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.04, ease: EASE }}
          className="mt-5 max-w-3xl font-heading text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.96] tracking-tighter text-white"
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.08, ease: EASE }}
            className="mt-6 max-w-xl text-lg leading-prose text-muted"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
