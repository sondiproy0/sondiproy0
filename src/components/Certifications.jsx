import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const badges = [
  { name: 'eJPT', img: '/certifications/ejpt-clean.png' },
  { name: 'PT1', img: '/certifications/pt1-clean.png' },
  { name: 'FCA', img: '/certifications/fortinet-fca-clean.png' },
  { name: 'SentinelOne', img: '/certifications/sentinelone-dark.png' },
  { name: 'Trend Micro', img: '/certifications/trendmicro-dark.png' },
  { name: 'Kaspersky', img: null },
  { name: 'Wazuh', img: '/certifications/wazuh.png' },
  { name: 'Red Hat', img: '/certifications/redhat-dark.png' },
  { name: 'Microsoft', img: null },
  { name: 'Metasploit', img: '/certifications/metasploit.webp' },
  { name: 'Tenable', img: '/certifications/tenable.png' },
  { name: 'Zecurion', img: '/certifications/zecurion.png' }
]

export default function Certifications() {
  const r = useReducedMotion()

  return (
    <section id="certs" className="section-rule py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[.38fr_1fr]">
        <div>
          <p className="eyebrow">05 / Credentials</p>
          <h2 className="section-title mt-4 text-white">Trusted<br />foundations.</h2>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            Industry certifications and vendor partnerships shaping my practice.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-4">
          {badges.map((b, i) => (
            <motion.div
              key={b.name}
              initial={r ? {} : { opacity: 0, y: 12 }}
              whileInView={r ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.2, ease: EASE }}
              className="group flex aspect-square items-center justify-center rounded-xl border border-white/[.06] bg-card px-4 py-5 transition-all duration-300 hover:border-accent/30 hover:bg-[#151f2e]"
            >
              {b.img ? (
                <img
                  src={b.img}
                  alt={b.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain opacity-70 grayscale-[.2] transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              ) : (
                <span className="font-heading text-lg font-bold text-white/60 transition-colors duration-300 group-hover:text-white/90 sm:text-xl">
                  {b.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
