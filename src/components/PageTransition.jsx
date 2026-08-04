import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const variants = {
  initial: { opacity: 0, y: 12 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 }
}

export default function PageTransition({ children }) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial={reduced ? {} : variants.initial}
      animate={reduced ? {} : variants.enter}
      exit={reduced ? {} : variants.exit}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
