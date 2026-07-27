import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const projects = [
  {
    title: 'Kaspersky EDR Expert rollout',
    year: '2026',
    category: 'Endpoint Security',
    impact: '815 endpoints secured across 16 business units with enterprise-wide detection and response coverage.',
    tech: ['Kaspersky EDR', 'Wazuh', 'MITRE ATT&CK'],
    featured: true
  },
  {
    title: 'SSO & infrastructure assessment',
    year: '2026',
    category: 'Assessment',
    impact: 'Full-stack security assessment covering Exchange, GitLab SSO, ERP, AI apps, and mail infrastructure.',
    tech: ['Nessus', 'OWASP', 'CVSS'],
  },
  {
    title: 'ERP Odoo vulnerability assessment',
    year: '2026',
    category: 'Assessment',
    impact: 'Database integrity review, secure configuration audit, and remediation guidance for enterprise ERP.',
    tech: ['Nessus', 'OWASP', 'Manual Validation'],
  },
  {
    title: 'SAST & DAST application testing',
    year: '2025',
    category: 'AppSec',
    impact: 'Integrated SonarQube and Burp Suite to surface hard-coded secrets and OWASP Top 10 vulnerabilities.',
    tech: ['SonarQube', 'Burp Suite', 'OWASP Top 10'],
  },
  {
    title: 'Cloud posture POC',
    year: '2026',
    category: 'Cloud',
    impact: 'CTEM/CSPM evaluation with attack surface discovery and adoption recommendations for security leaders.',
    tech: ['AppAcuity', 'CSPM'],
  },
  {
    title: 'WordPress malware remediation',
    year: '2025–Present',
    category: 'Incident Response',
    impact: 'File-system forensics, backdoor removal, and root-cause analysis across multiple client sites.',
    tech: ['Malware Analysis', 'Forensics', 'IR'],
  },
  {
    title: 'Active Directory & IAM',
    year: '2024',
    category: 'Identity',
    impact: 'Managed 250+ AD accounts, configured GPO policies, and strengthened enterprise identity hygiene.',
    tech: ['Active Directory', 'GPO', 'IAM'],
  }
]

export default function Projects() {
  const r = useReducedMotion()
  const featured = projects.find(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="section-rule py-16 lg:py-20">
      {/* ── header ─────────────────────────────────────── */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">03 / Selected work</p>
          <h2 className="section-title mt-4 text-white">
            Security outcomes,<br />not just activity.
          </h2>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
          2024 — 2026
        </span>
      </div>

      {/* ── featured project ───────────────────────────── */}
      {featured && (
        <motion.article
          initial={r ? {} : { opacity: 0, y: 20 }}
          whileInView={r ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="group relative mt-10 overflow-hidden rounded-card-lg border-l-[3px] border border-white/10 border-l-accent bg-card-featured transition-all duration-300 hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-card-sm"
        >
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[9px] uppercase tracking-badge-wider text-accent">
                {featured.category}
              </span>
              <span className="font-mono text-[10px] text-muted">{featured.year}</span>
            </div>

            <h3 className="mt-4 font-heading text-2xl font-bold tracking-snug text-white sm:text-3xl">
              {featured.title}
            </h3>

            <p className="mt-3 max-w-lg text-sm font-medium leading-6 text-accent2/80">
              {featured.impact}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {featured.tech.map(t => (
                <span
                  key={t}
                  className="rounded-full border border-accent/[.12] bg-accent/[.06] px-2.5 py-0.5 font-mono text-[10px] text-accent/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <span className="absolute bottom-5 right-6 text-xl text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent2" aria-hidden="true">
            ↗
          </span>
    </motion.article>
      )}

      {/* ── masonry grid ───────────────────────────────── */}
      <ul className="mt-5 columns-1 gap-4 md:columns-2">
        {rest.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} reduced={r} primary={i === 0} />
        ))}
      </ul>
    </section>
  )
}

function ProjectCard({ project: p, index, reduced, primary }) {
  return (
    <motion.li
      initial={reduced ? {} : { opacity: 0, y: 18 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.05, duration: 0.25, ease: EASE }}
      className={`group mb-4 break-inside-avoid overflow-hidden rounded-card-lg border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-sm ${
        primary
          ? 'border-white/10 bg-white/[.045] p-5 hover:border-accent/40 hover:bg-white/[.06]'
          : 'border-white/10 bg-white/[.035] p-4 hover:border-accent/40 hover:bg-white/[.05]'
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-badge-wider text-accent">
            {p.category}
          </span>
          <span className="font-mono text-[10px] text-muted">{p.year}</span>
        </div>

        <h3 className={`mt-3 font-heading font-bold tracking-snug text-white ${
          primary ? 'text-lg' : 'text-[15px]'
        }`}>
          {p.title}
        </h3>

        <p className={`mt-1.5 leading-4.5 text-accent2/70 line-clamp-2 ${
          primary ? 'text-sm' : 'text-xs'
        }`}>
          {p.impact}
        </p>

        <div className="mt-3 flex flex-wrap gap-1">
          {p.tech.map(t => (
            <span
              key={t}
              className="rounded-full border border-white/[.08] bg-white/[.04] px-2 py-0.5 text-[10px] text-text-secondary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <span className="absolute bottom-3 right-4 text-lg text-accent transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent2" aria-hidden="true">
        ↗
      </span>
    </motion.li>
  )
}
