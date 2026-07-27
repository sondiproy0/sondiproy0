import React from 'react'
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export default function Hero() {
  const reduced = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 150, damping: 18 })
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 150, damping: 18 })

  const move = React.useCallback(e => {
    if (reduced) return
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }, [reduced, x, y])

  return (
    <section
      onMouseMove={move}
      className="relative grid min-h-[78vh] items-center gap-10 overflow-hidden py-16 lg:grid-cols-[1.15fr_.85fr] lg:gap-20 lg:py-24"
    >
      {/* ── animated background grid ─────────────────── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[.03] [background-image:linear-gradient(var(--color-accent)_1px,transparent_1px),linear-gradient(90deg,var(--color-accent)_1px,transparent_1px)] [background-size:60px_60px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 animate-pulse"
        style={{ animationDuration: '6s' }}
      >
        <div className="absolute left-[15%] top-[20%] h-56 w-56 rounded-full bg-accent/[.04] blur-3xl" />
        <div className="absolute right-[10%] bottom-[15%] h-40 w-40 rounded-full bg-accent2/[.04] blur-3xl" />
      </div>

      {/* ── text column ─────────────────────────────── */}
      <div className="relative z-10">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: EASE }}
        >
          <p className="eyebrow">Cybersecurity Engineer · Penetration Tester</p>
        </motion.div>

        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.04, ease: EASE }}
          className="mt-7 max-w-4xl font-heading text-[clamp(3.75rem,8.5vw,8.25rem)] font-bold leading-hero tracking-tighter text-white"
        >
          Secure the<br />
          <span className="gradient-text">signal.</span>
        </motion.h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.08, ease: EASE }}
          className="mt-8 max-w-xl text-lg leading-prose text-muted"
        >
          I help teams find exploitable risk, improve detection coverage, and respond with confidence.
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.12, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-page transition-colors duration-200 hover:-translate-y-0.5 hover:bg-accent2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page"
          >
            View selected work
          </button>
          <a
            href="/resume.pdf"
            className="rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page"
          >
            Download résumé
          </a>
        </motion.div>

        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.18, ease: EASE }}
          className="mt-12 font-mono text-xs text-accent/80"
          aria-hidden="true"
        >
          $ threat_model --scope production<span className="ml-0.5 animate-pulse">▍</span>
        </motion.p>
      </div>

      {/* ── profile card column ──────────────────────── */}
      <motion.div
        style={reduced ? {} : { rotateX: rx, rotateY: ry, transformPerspective: 900 }}
        initial={reduced ? false : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, delay: 0.08, ease: EASE }}
        className="relative mx-auto w-full max-w-sm lg:ml-auto"
      >
        {/* glow */}
        <div className="absolute -inset-6 rounded-section-lg border border-accent/20 bg-accent/[.04] blur-2xl" />

        {/* card */}
        <div className="relative overflow-hidden rounded-section-lg border border-white/10 bg-surface p-1.5 shadow-card-lg transition-shadow duration-500 hover:shadow-[0_0_0_1px_rgba(56,189,248,0.25),0_40px_120px_-72px_rgba(56,189,248,0.45)]">
          <div className="relative overflow-hidden rounded-[20px]">
            <img
              src="/sondip-roy-headshot.png"
              alt="Sondip Roy"
              width="384"
              height="480"
              className="aspect-[4/5] w-full object-cover"
            />
            {/* subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-page/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
          </div>
        </div>

        {/* ── quote ──────────────────────── */}
        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.2, ease: EASE }}
          className="mt-5 text-center font-mono text-xs tracking-wide text-muted/50"
          aria-hidden="true"
        >
          "Assume breach."
        </motion.p>
      </motion.div>
    </section>
  )
}
