import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const core = [
  { name: 'eJPT', img: '/certifications/ejpt-clean.png' },
  { name: 'PT1', img: '/certifications/pt1-clean.png' },
  { name: 'FCA', img: '/certifications/fortinet-fca-clean.png' }
]

const tech = [
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
            Validated learning and the technology ecosystem behind my daily practice.
          </p>
        </div>

        <div className="space-y-8">
          {/* core certifications */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-accent">Core certifications</p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              {core.map((c, i) => (
                <motion.div
                  key={c.name}
                  initial={r ? {} : { opacity: 0, y: 14 }}
                  whileInView={r ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.25, ease: EASE }}
                  className="group flex h-44 flex-col items-center justify-center gap-3 rounded-card-xl border border-white/10 bg-white/[.035] p-4 text-center transition-all duration-300 hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-card-sm sm:h-52 sm:gap-4 sm:p-6"
                >
                  {c.img ? (
                    <div className="flex h-24 w-full items-center justify-center rounded-3xl bg-card p-3 transition-colors duration-300 group-hover:bg-[#151f2e] sm:h-32 sm:p-4">
                      <img src={c.img} alt={c.name} loading="lazy" className="max-h-full max-w-full object-contain" />
                    </div>
                  ) : (
                    <div className="flex h-24 w-full items-center justify-center rounded-3xl bg-card p-3 transition-colors duration-300 group-hover:bg-[#151f2e] sm:h-32 sm:p-4">
                      <span className="font-heading text-2xl font-bold text-white/80 sm:text-3xl">{c.name}</span>
                    </div>
                  )}
                  <p className="font-mono text-xs font-semibold tracking-wide text-white">{c.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* technology experience */}
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">Technology experience</p>
            <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-5">
              {tech.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={r ? {} : { opacity: 0, y: 10 }}
                  whileInView={r ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.2, ease: EASE }}
                  className="group flex h-24 items-center justify-center rounded-xl border border-white/[.06] bg-white/[.02] px-3 py-3 transition-all duration-300 hover:border-accent/30 hover:bg-white/[.04] sm:h-28"
                >
                  {t.img ? (
                    <img src={t.img} alt={t.name} loading="lazy" className="h-16 w-full object-contain opacity-60 transition-opacity duration-300 group-hover:opacity-100 sm:h-20" />
                  ) : (
                    <span className="text-xs font-semibold text-text-secondary/60 transition-colors duration-300 group-hover:text-text-secondary sm:text-sm">
                      {t.name}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
