import React from 'react'
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function Hero() {
  const reduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), { stiffness: 150, damping: 18 })
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-3, 3]), { stiffness: 150, damping: 18 })

  const move = e => {
    if (reduced) return
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <section onMouseMove={move} className="relative grid min-h-[72vh] items-center gap-12 py-16 lg:grid-cols-[1.18fr_.82fr] lg:py-20">
      <motion.div
        initial={reduced ? {} : { opacity: 0, y: 18 }}
        animate={reduced ? {} : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="eyebrow">Cybersecurity Engineer · Penetration Tester</p>
        <h1 className="mt-6 max-w-4xl font-heading text-[clamp(3.5rem,8vw,7.6rem)] font-bold leading-hero tracking-tighter text-white">
          Secure the<br />
          <span className="gradient-text">signal.</span>
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-prose text-muted">
          I help teams find exploitable risk, improve detection coverage, and respond with confidence.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-xl bg-accent px-5 py-3 text-sm font-bold text-page transition hover:-translate-y-1 hover:bg-accent2"
          >
            View selected work
          </button>
          <a
            href="/resume.pdf"
            className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"
          >
            Download résumé
          </a>
        </div>
        <p className="mt-10 font-mono text-xs text-accent">
          $ threat_model --scope production<span className="ml-1 animate-pulse">▍</span>
        </p>
      </motion.div>

      <motion.div
        style={reduced ? {} : { rotateX: rx, rotateY: ry, transformPerspective: 900 }}
        initial={reduced ? {} : { opacity: 0, scale: 0.96 }}
        animate={reduced ? {} : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto w-full max-w-sm lg:ml-auto"
      >
        <div className="absolute -inset-5 rounded-section-lg border border-accent/30 bg-accent/5 blur-2xl" />
        <div className="relative overflow-hidden rounded-section-lg border border-white/10 bg-surface p-1">
          <img
            src="/sondip-roy-headshot.png"
            alt="Sondip Roy"
            className="w-full rounded-[20px] object-cover"
          />
        </div>
      </motion.div>
    </section>
  )
}
