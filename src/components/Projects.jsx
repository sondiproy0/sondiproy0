import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const projects = [
  {
    title: 'Kaspersky EDR Expert rollout',
    year: '2026',
    tag: 'Featured deployment',
    copy: 'Enterprise endpoint security rollout across 815 endpoints and 16 business units—designed for durable policy coverage and faster response.',
    tech: ['Kaspersky EDR', 'Wazuh', 'MITRE ATT&CK'],
    featured: true
  },
  {
    title: 'SSO & infrastructure assessment',
    year: '2026',
    tag: 'Assessment',
    copy: 'Web, network, Active Directory, and code-security assessment across critical services.',
    tech: ['Nessus', 'OWASP', 'CVSS']
  },
  {
    title: 'Application assurance pipeline',
    year: '2025–26',
    tag: 'AppSec',
    copy: 'SAST and DAST workflow for actionable findings before release.',
    tech: ['SonarQube', 'Burp Suite', 'DAST']
  },
  {
    title: 'Cloud posture POC',
    year: '2026',
    tag: 'Cloud',
    copy: 'CTEM/CSPM evaluation with adoption recommendations for security leaders.',
    tech: ['AppAcuity', 'CSPM']
  },
  {
    title: 'WordPress incident response',
    year: '2025–Present',
    tag: 'Incident response',
    copy: 'Forensics, containment, root cause analysis, and hardening for compromised sites.',
    tech: ['Malware analysis', 'IR']
  }
]

export default function Projects() {
  const r = useReducedMotion()

  return (
    <section id="projects" className="section-rule py-16 lg:py-20">
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

      <div className="mt-9 grid gap-3 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={r ? {} : { opacity: 0, y: 18 }}
            whileInView={r ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={r ? {} : { y: -5 }}
            className={`group relative overflow-hidden rounded-card-lg border border-white/10 p-6 transition ${
              p.featured
                ? 'md:col-span-2 bg-card-featured md:p-8'
                : 'bg-white/[.035]'
            } hover:border-accent/70`}
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[9px] uppercase tracking-badge-wider text-accent">
                {p.tag}
              </span>
              <span className="font-mono text-[10px] text-muted">{p.year}</span>
            </div>
            <h3 className={`mt-8 font-heading font-bold tracking-snug text-white ${p.featured ? 'text-3xl' : 'text-xl'}`}>
              {p.title}
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">{p.copy}</p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tech.map(t => (
                <span key={t} className="rounded-md bg-white/5 px-2 py-1 font-mono text-[10px] text-text-secondary">
                  {t}
                </span>
              ))}
            </div>
            <span className="absolute bottom-5 right-6 text-xl text-accent transition group-hover:translate-x-1">
              ↗
            </span>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
