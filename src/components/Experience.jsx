import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const roles = [
  {
    period: '2025 — Present',
    company: 'Betopia Limited',
    title: 'Cybersecurity Engineer',
    label: 'Security Operations',
    location: 'Dhaka',
    logo: 'BL',
    impact: 'Leading a practical, enterprise-wide detection and response program.',
    tech: ['Kaspersky EDR', 'Wazuh', 'MITRE ATT&CK', 'Nessus', 'OWASP'],
    achievements: [
      'Rolled out Kaspersky EDR Expert across 815 endpoints in 16 SBUs — authoring security policies, exclusions, and response playbooks for each risk profile.',
      'Operate and tune Wazuh SIEM detections; investigate alerts, reduce false positives, and maintain actionable detection logic and response runbooks.',
      'Triaged 100+ phishing and malware IOCs each month using sandbox analysis, then mapped detection coverage to MITRE ATT&CK.',
      'Conduct web, network, Active Directory, and code-security assessments using OWASP Top 10, PTES, Nessus, and manual validation.'
    ],
    current: true
  },
  {
    period: '2024',
    company: 'Neuratech Ltd',
    title: 'Jr. Executive — IT & Cybersecurity',
    label: 'Identity & Infrastructure',
    location: 'Dhaka',
    logo: 'NL',
    impact: 'Strengthening the foundations that make secure access possible.',
    tech: ['Active Directory', 'Group Policy', 'Windows Server', 'Nessus'],
    achievements: [
      'Managed 250+ Active Directory user accounts, group structures, OUs, provisioning/de-provisioning, and delegated administration.',
      'Implemented password, account lockout, GPO, access control, and firewall policies to improve enterprise identity hygiene.',
      'Assessed Windows Server and endpoint environments, applied hardening baselines, and validated remediation through follow-up reviews.'
    ],
    current: false
  }
]

export default function Experience() {
  const reduced = useReducedMotion()

  return (
    <section id="experience" className="section-rule py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[.42fr_1fr] lg:gap-16">
        {/* ── sticky header ────────────────────────────── */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <motion.div
            initial={reduced ? {} : { opacity: 0, y: 16 }}
            whileInView={reduced ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <p className="eyebrow">02 / Experience</p>
            <h2 className="section-title mt-4 text-white">Work that holds up under pressure.</h2>
            <p className="mt-5 max-w-xs text-sm leading-6 text-muted">
              Security work is strongest when the operating model is as considered as the tooling.
            </p>
          </motion.div>
        </div>

        {/* ── timeline ─────────────────────────────────── */}
        <div className="relative">
          {/* vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-[15px] top-0 bottom-0 w-px bg-line-light"
          />

          <div className="space-y-10">
            {roles.map((role, index) => (
              <TimelineCard
                key={role.company}
                role={role}
                index={index}
                reduced={reduced}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineCard({ role, index, reduced }) {
  const [hovered, setHovered] = React.useState(false)

  return (
    <motion.article
      initial={reduced ? {} : { opacity: 0, y: 20 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08, duration: 0.25, ease: EASE }}
      className="relative pl-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* timeline indicator */}
      <div
        aria-hidden="true"
        className={`absolute left-0 top-1 z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full border transition-all duration-300 ${
          role.current
            ? 'border-accent/50 bg-accent/15 shadow-[0_0_12px_rgba(56,189,248,0.25)]'
            : hovered
              ? 'border-white/20 bg-white/5'
              : 'border-line bg-surface'
        }`}
      >
        <span
          className={`h-2 w-2 rounded-full transition-colors duration-300 ${
            role.current ? 'bg-accent' : hovered ? 'bg-white/40' : 'bg-white/15'
          }`}
        />
      </div>

      {/* card */}
      <div
        className={`rounded-card-lg border bg-card p-5 transition-all duration-300 sm:p-6 ${
          hovered
            ? 'border-accent/30 -translate-y-0.5 shadow-card-sm'
            : 'border-line'
        }`}
      >
        {/* top row: logo + meta */}
        <div className="flex items-start gap-4">
          {/* logo placeholder */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-950/80 font-heading text-sm font-bold tracking-tight text-accent shadow-glow">
            {role.logo}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <p className="font-mono text-xs text-accent">{role.period}</p>
              <span className="font-mono text-[10px] text-muted">{role.location}</span>
            </div>
            <h3 className="mt-1.5 font-heading text-xl font-bold tracking-snug text-white">
              {role.title}
            </h3>
            <p className="mt-0.5 text-sm font-medium text-text-secondary">
              {role.company}
            </p>
          </div>

          {/* label badge */}
          <span className="hidden shrink-0 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-[9px] uppercase tracking-badge-sm text-accent sm:inline-block">
            {role.label}
          </span>
        </div>

        {/* mobile label badge */}
        <span className="mt-3 inline-block rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-[9px] uppercase tracking-badge-sm text-accent sm:hidden">
          {role.label}
        </span>

        {/* impact */}
        <p className="mt-4 text-sm leading-prose text-ink">{role.impact}</p>

        {/* tech badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {role.tech.map(t => (
            <span
              key={t}
              className="rounded-full border border-accent/[.12] bg-accent/[.06] px-2.5 py-0.5 font-mono text-[10px] text-accent/80"
            >
              {t}
            </span>
          ))}
        </div>

        {/* achievements */}
        <ul className="mt-5 space-y-3">
          {role.achievements.map(a => (
            <li key={a} className="flex gap-3 text-sm leading-6 text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  )
}
