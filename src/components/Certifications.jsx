import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const core = [
  ['eJPT', '/certifications/ejpt-clean.png'],
  ['PT1', '/certifications/pt1-clean.png'],
  ['Fortinet FCA', '/certifications/fortinet-fca-clean.png']
]

const tech = [
  ['SentinelOne', '/certifications/sentinelone-dark.png'],
  ['Trend Micro', '/certifications/trendmicro-dark.png'],
  ['Red Hat', '/certifications/redhat-dark.png'],
  ['Microsoft', null],
  ['Wazuh', null],
  ['Kaspersky', null]
]

export default function Certifications() {
  const reduced = useReducedMotion()

  return (
    <section id="certs" className="section-rule py-16 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[.38fr_1fr]">
        <div>
          <p className="eyebrow">05 / Credentials</p>
          <h2 className="section-title mt-4 text-white">Trusted<br />foundations.</h2>
          <p className="mt-5 max-w-xs text-sm leading-6 text-muted">
            Validated learning and the technology ecosystem behind my daily practice.
          </p>
        </div>

        <div className="space-y-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">Core certifications</p>
            <div className="mt-4 grid grid-cols-3 gap-4">
              {core.map(([name, img], index) => (
                <motion.div
                  key={name}
                  initial={reduced ? {} : { opacity: 0, y: 12 }}
                  whileInView={reduced ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex h-48 flex-col items-center justify-between rounded-card-xl border border-white/10 bg-white/[.035] p-5 text-center shadow-card-sm"
                >
                  <div className="flex h-32 w-full items-center justify-center rounded-3xl bg-card p-4">
                    <img src={img} alt={name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <p className="mt-4 text-sm font-semibold text-white">{name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">Technology stack</p>
            <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-6">
              {tech.map(([name, img]) => (
                <div
                  key={name}
                  className="flex h-28 items-center justify-center rounded-card border border-white/10 bg-white/[.02] p-4 transition hover:border-accent/50"
                >
                  {img ? (
                    <img src={img} alt={name} className="max-h-16 max-w-full object-contain" />
                  ) : (
                    <span className="font-heading text-sm font-semibold text-text-secondary">{name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
