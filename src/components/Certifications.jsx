import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const certs = [
  { name: 'eJPT', img: '/certifications/ejpt-clean.png' },
  { name: 'PT1', img: '/certifications/pt1-clean.png' },
  { name: 'CNSP', img: '/certifications/cnsp.png' },
  { name: 'ICCA', img: '/certifications/icca.png' },
  { name: 'Fortinet NSE', img: '/certifications/fortinet-fca-clean.png' },
]

const vendors = [
  { name: 'Kaspersky', img: '/certifications/kaspersky.png' },
  { name: 'SentinelOne', img: '/certifications/sentinelone-dark.png' },
  { name: 'Trend Micro', img: '/certifications/trendmicro-dark.png' },
  { name: 'Wazuh', img: '/certifications/wazuh.png' },
  { name: 'Red Hat', img: '/certifications/redhat-dark.png' },
  { name: 'Microsoft', img: '/certifications/microsoft.png' },
  { name: 'Zecurion', img: '/certifications/zecurion.png' },
]

function Badge({ b }) {
  return (
    <div className="slider-item flex shrink-0 items-center justify-center rounded-xl border border-white/[.06] bg-card px-5 py-4 transition-all duration-300 hover:border-accent/30 hover:bg-[#151f2e]">
      <img
        src={b.img}
        alt={b.name}
        loading="lazy"
        className="h-12 w-auto object-contain opacity-70 grayscale-[.2] transition-all duration-300 hover:opacity-100 hover:grayscale-0 sm:h-14"
      />
    </div>
  )
}

export default function Certifications() {
  const r = useReducedMotion()

  const certTrack = [...certs, ...certs, ...certs]
  const vendorTrack = [...vendors, ...vendors, ...vendors]

  return (
    <section id="certs" className="section-rule py-16 lg:py-20 overflow-hidden">
      {/* ── header ─────────────────────────────────────── */}
      <div className="text-center">
        <p className="eyebrow">05 / Credentials</p>
        <h2 className="section-title mt-4 text-white">Trusted foundations.</h2>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-muted">
          Industry certifications and vendor partnerships shaping my practice.
        </p>
      </div>

      {/* ── certifications slider ──────────────────────── */}
      <div className="mt-10">
        <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-widest text-accent">Certifications</p>
        <div className="relative">
          <div className={`slider-track flex gap-4 ${r ? '' : 'animate-scroll'}`}>
            {certTrack.map((b, i) => (
              <Badge key={`cert-${i}`} b={b} />
            ))}
          </div>
        </div>
      </div>

      {/* ── technology partners slider ─────────────────── */}
      <div className="mt-6">
        <p className="mb-3 text-center font-mono text-[10px] uppercase tracking-widest text-muted">Technology Partners</p>
        <div className="relative">
          <div className={`slider-track flex gap-4 ${r ? '' : 'animate-scroll-reverse'}`}>
            {vendorTrack.map((b, i) => (
              <Badge key={`vendor-${i}`} b={b} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
